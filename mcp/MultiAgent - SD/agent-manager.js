import 'dotenv/config';
import { Agent, tool, run } from '@openai/agents';
import { z } from 'zod';

import fs from 'node:fs/promises';


const processRefund = tool({
    name: 'process_refund',
    description: 'Process a refund',
    parameters: z.object({
        customer_id: z.string().describe('The ID of the customer to refund'),
        plan_id: z.string().describe('The ID of the plan to refund'),
    }),
    execute: async ({ customer_id, plan_id }) => {
        await fs.appendFile('refunds.txt', `Customer ID: ${customer_id}, Plan ID: ${plan_id}\n`, 'utf-8');
        console.log(`Processing refund for customer ${customer_id} and plan ${plan_id}`);
        return {
            success: true,
            message: `Refund processed successfully for customer ${customer_id} and plan ${plan_id}`,
        }
    }
});


const refundAgent = new Agent({
    name: 'Refund Agent',
    description: 'A refund agent that can refund products',
    instructions: 'You are a refund agent that can refund products',
    tools: [
        processRefund
    ],
    model: 'gpt-4o-mini',
    temperature: 0.5,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
    stream: false,
    response_format: null,
});

const fetchAvailablePlans = tool({
    name: 'fetch_available_plans',
    description: 'Fetch available plans',
    parameters: z.object({}),
    execute: async () => {
        return {
            plans: [
                { id: '1', name: 'Plan 1', price: 100 },
                { id: '2', name: 'Plan 2', price: 200 },
            ]
        }
    }
});

const SalesAgent = new Agent({
    name: 'Sales Agent',
    description: 'A sales agent that can sell products',
    instructions: 'You are a sales agent that can sell products',
    tools: [
        fetchAvailablePlans,
        processRefund
    ],
    model: 'gpt-4o-mini',
    temperature: 0.5,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
    stream: false,
    response_format: null,
});

async function runSalesAgent(query) {
    const result = await run(SalesAgent, query);
    return result;
}

const result = await runSalesAgent('I want refund for my Plan 2, my customer Id is cust12345');
console.log(result.finalOutput);



// async function runRefundAgent(query) {
//     const result = await run(refundAgent, { input: query });
//     return result;
// }

// const refundResult = await runRefundAgent('Process a refund for customer 1 and plan 1');
// console.log(refundResult.finalOutput);





// const MarketingAgent = new Agent({
//     name: 'Marketing Agent',
//     description: 'A marketing agent that can market products',
//     instructions: 'You are a marketing agent that can market products',
//     tools: [
//         {
//             name: 'market_product',
//             description: 'Market a product',
//         }
//     ],
//     model: 'gpt-4o-mini',
//     temperature: 0.5,
//     max_tokens: 1000,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//     stop: null,
//     stream: false,
//     response_format: null,
// });

// const AgentManager = new Agent({
//     name: 'Agent Manager',
//     description: 'A agent manager that can manage agents',
//     instructions: 'You are a agent manager that can manage agents',
//     tools: [
//         {
//             name: 'manage_agent',
//             description: 'Manage an agent',
//         }
//      ],
//     model: 'gpt-4o-mini',
//     temperature: 0.5,
//     max_tokens: 1000,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//     stop: null,
//     stream: false,
//     response_format: null,
// });