import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: 'weather-mcp',
  version: '1.0.0',
  description: 'A weather MCP server',
});

async function getWeatherDataByCityName(cityName) {
    console.log('cityName', cityName);
    if(cityName.toLowerCase() === 'bengaluru') {
        return {
            city: 'Bengaluru',
            weather: 'Sunny',
            temperature: '30°C',
        };
    }
    else if(cityName.toLowerCase() === 'jaipur') {
        return {
            city: 'Jaipur',
            weather: 'Rainy',
            temperature: '25°C',
        };
    }
    else {
        console.log('City not found');
        return null;
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHER_API_KEY}`);
        // const data = await response.json();
        // return data;
    }
    
}

server.registerTool(
    'getWeatherDataByCityName',
    {
        title: 'Get Weather Data by City Name',
        description: 'Get weather data for a city by its name',
        inputSchema: {
            cityName: z.string().describe('The name of the city to get the weather data for')
        }
    },
    async ({ cityName }) => {
        const result = await getWeatherDataByCityName(cityName);
        return { 
            content: [{ 
                type: 'text', 
                text: JSON.stringify(result, null, 2)
            }]
        };
    }
);

async function startServer() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

startServer();