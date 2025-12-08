from browser_use import Agent
from browser_use.llm import ChatOpenAI
import asyncio

async def main():
    agent = Agent(
    #   task="How can we use browser to find best credit cards and apply using browser automation - we can ask users for gmail automation - to apply and get verified",
      task="Compare prices of Claude Sonnet latest version, Gemini 2.5 pro, OpenAI GPT-4o and DeepSeek‑V3",
      llm=ChatOpenAI(model="gpt-4o"),
    )
    await agent.run()

asyncio.run(main())
