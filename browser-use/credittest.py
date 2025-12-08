from browser_use import Agent
from browser_use.llm import ChatOpenAI
import asyncio

async def main():
    agent = Agent(
    #   task="How can we use browser to find best credit cards and apply using browser automation - we can ask users for gmail automation - to apply and get verified",
      task="Best credit cards for launge acess at BLR Airport",
      llm=ChatOpenAI(model="gpt-4o"),
    )
    await agent.run()

asyncio.run(main())
