import 'dotenv/config';
import { Agent, run, tool } from '@openai/agents';
import { z } from 'zod';
import axios from 'axios';

const GetWeatherResultSchema = z.object({
    city: z.string().describe('The name of the city'),
    degree_c: z.number().describe('the degree celcius of the temp'),
    condition: z.string().optional().describe('condition of the weather'),
});

const GetWeatherDataByCityNameTool = tool({
    name: 'getWeatherDataByCityName',
    description: 'Get weather data for a city by its name',
    parameters: z.object({
        cityName: z.string().describe('The name of the city to get the weather data for'),
    }),
    execute: async ({ cityName }) => {
        // const url = `https://wttr.in/${cityName.toLowerCase()}?format=%C+%t`;
        // const response = await axios.get(url, { responseType: 'text' });
        const response = {
            data: {
                city: cityName,
                degree_c: 25,
                condition: 'Sunny',
            }
        };
        return response.data;
    },
});

const SendEmailTool = tool({
    name: 'sendEmail',
    description: 'Send an email',
    parameters: z.object({
        to: z.string().describe('The email address of the recipient'),
        subject: z.string().describe('The subject of the email'),
        body: z.string().describe('The body of the email'),
    }),
    execute: async ({ to, subject, body }) => {
        const response = await axios.post('https://api.email.com/send', { to, subject, body });
        return response.data;
    }
});

const WeatherAgent = new Agent({
    name: 'Weather Agent',
    description: 'A weather agent that can get weather data for a city by its name',
    instructions: 'You are a weather agent that can get weather data for a city by its name',
    tools: [GetWeatherDataByCityNameTool, SendEmailTool],
    response_format: GetWeatherResultSchema,
    model: 'gpt-4o-mini',
});

async function runWeatherAgent(query = '') {
    const result = await run(WeatherAgent, query);
    
    // Get tool output data
    const toolOutput = result.state?.generatedItems?.find(
        item => item.type === 'tool_call_output_item'
    );
    
    if (toolOutput?.output) {
        const weatherData = JSON.parse(toolOutput.output);
        console.log(`Result:`, weatherData.city, weatherData.degree_c, weatherData.condition);
    } else {
        console.log(`Result:`, result.finalOutput);
    }
}

runWeatherAgent('What is the weather in Bengaluru?');