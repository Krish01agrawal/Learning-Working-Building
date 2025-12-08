from browser_use import Agent
from browser_use.llm import ChatOpenAI
import asyncio

async def main():
    agent = Agent(
        task="""
        TARGETED CREDIT CARD AUTOMATION FOR TECH-SAVVY TRAVELER
        ========================================================
        
        USER PROFILE:
        - Age: 25 years old
        - Profession: Software Engineer (stable, tech income)
        - Lifestyle: Travels frequently for work/leisure
        - Personality: Tech enthusiast, committed, detail-oriented
        - Primary Need: Travel rewards + tech-friendly features

        PHASE 1: PERSONALIZED RESEARCH & COMPARISON
        ==========================================
        1.1 Priority Focus - Travel Rewards Cards:
            - Chase Sapphire Preferred/Reserve (transfer partners, travel insurance)
            - Capital One Venture X (10x miles on hotels, no foreign transaction fees)
            - American Express Gold/Platinum (airport lounges, travel credits)
            - Citi Premier (transfer partners, travel protection)
            - Discover it Miles (double cashback first year)

        1.2 Software Engineer Specific Benefits:
            - Cards with app-based management (mobile-first experience)
            - Real-time fraud monitoring and notifications
            - Virtual card numbers for online security
            - Expense tracking and categorization features
            - Integration with financial apps (Mint, YNAB, etc.)

        1.3 Travel-Focused Data Collection:
            - Signup Bonuses: Target 50K+ points/miles
            - Travel Multipliers: 2x+ on travel purchases
            - Foreign Transaction Fees: Must be $0
            - Airport Lounge Access: Priority Pass or proprietary
            - Travel Insurance: Trip cancellation, baggage, rental car
            - Transfer Partners: Airlines and hotels for max value
            - Annual Travel Credits: Uber, airline, hotel credits

        1.4 Tech Professional Optimization:
            - Online shopping bonuses (Amazon, tech gear purchases)
            - Dining rewards (frequent work meals, client entertainment)
            - Mobile payment compatibility (Apple Pay, Google Pay)
            - Contactless payment features
            - Real-time spending alerts and budgeting tools

        PHASE 2: AGE-APPROPRIATE APPLICATION STRATEGY
        ============================================
        2.1 Credit Building Approach (25-year-old):
            - Start with 1-2 strong cards to build credit history
            - Focus on cards with upgrade paths (Sapphire Preferred → Reserve)
            - Consider authorized user strategies for additional history
            - Target cards that grow with income progression

        2.2 Income-Based Recommendations:
            - Software engineer salary range: $70K-$150K+
            - Cards requiring good-excellent credit (700+ score)
            - Premium cards with higher income requirements
            - Business card options for freelance/contract work

        2.3 Application Automation Testing:
            - Chase: Test Sapphire Preferred application flow
            - Capital One: Test Venture X application process
            - Amex: Test Gold card application (known for quick approval)
            - Document required fields for young professional
            - Note any additional verification for tech workers

        PHASE 3: TRAVEL-OPTIMIZED GMAIL AUTOMATION
        =========================================
        3.1 Travel-Specific Email Monitoring:
            - Flight delay/cancellation notifications
            - Hotel booking confirmations
            - Rental car coverage activations
            - Travel insurance claim processes
            - Points/miles expiration alerts

        3.2 Tech Integration Opportunities:
            - API integration with travel booking platforms
            - Automated expense categorization for business travel
            - Integration with calendar for automatic travel insurance
            - Real-time foreign transaction monitoring
            - Automatic receipt organization and storage

        PHASE 4: CUSTOMIZED DELIVERABLES
        ===============================
        4.1 Personalized Recommendations:
            - Top 3 cards ranked for 25-year-old software engineer traveler
            - Optimal application order and timing strategy
            - Expected approval odds and credit requirements
            - Year 1 optimization plan (spending to hit bonuses)

        4.2 Travel Automation Workflows:
            - Pre-travel checklist automation
            - During-travel monitoring setup
            - Post-travel expense reconciliation
            - Annual benefit maximization calendar

        4.3 Tech Professional Benefits Guide:
            - Software/hardware purchase optimization
            - Work expense management automation
            - Business travel vs personal travel separation
            - Tax preparation integration for business expenses

        EXECUTION FOCUS:
        - Prioritize travel rewards over pure cashback
        - Target cards with strong mobile apps and tech features
        - Focus on long-term credit building strategy
        - Emphasize automated travel benefit utilization
        - Create sustainable system for frequent traveler

        SAFETY & COMPLIANCE:
        - Use demo data for 25-year-old software engineer profile
        - Document automation without real submissions
        - Respect all financial institution terms of service
        - Provide clear user consent protocols
        """,
        llm=ChatOpenAI(model="gpt-4o")
    )
    await agent.run()

asyncio.run(main())
