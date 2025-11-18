import 'dotenv/config';
import {Agent, run, tool} from '@openai/agents';
import {z} from 'zod';

const executeSQL = tool({
    name: 'execute_sql',
    description: 'Execute a SQL query',
    parameters: z.object({
        query: z.string().describe('The SQL query to execute'),
    }),
    execute: async ({query}) => {
        console.log('query', query);
        // return await executeQuery(query);
        return {
            result: 'Query executed successfully',
        };
    }
});

const SQLAgent = new Agent({
    name: 'SQL Expert Agent',
    instructions: `
            You are an expert SQL Agent that is specialized in generating SQL queries as per user request.

            Postgres Schema:
        -- users table
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
        );

        -- comments table
        CREATE TABLE comments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        comment_text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
        );
    `,
    description: 'A SQL Agent that can answer questions about the database',
    tools: [
        executeSQL
    ],
    model: 'gpt-4o-mini',
});

async function runSQLAgent(query = '') {
    const result = await run(SQLAgent, query);
    return result;
}

runSQLAgent('Get all users').then((result) => {
    // console.log('result', result.history);
    console.log('result', result.finalOutput);
});