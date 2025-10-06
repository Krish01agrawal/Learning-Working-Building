from browser_use import Agent
from browser_use.llm import ChatOpenAI
import asyncio

async def main():
    print("🚀 CITI PREMIER® CARD – AUTOMATED APPLICATION")
    input("\n▶️ Press Enter to begin...")

    agent = Agent(
        task="""
        GOAL: Complete the Citi Premier® credit card application fully.

        STEP 1: Go to official URL:
        https://creditcards.citi.com/credit-cards/citi-strata-premier-card/
        If fails → Google "Citi Strata Premier site:creditcards.citi.com" and click first result.

        STEP 2: Click "Apply Now" → opens in new tab → switch_tab(+1)

        STEP 3: Fill in form:

        👤 PERSONAL DETAILS
        -------------------
        First Name: Jonathan
        Middle Initial: B
        Last Name: Miller
        DOB: 11/30/1994 (format MM-DD-YYYY)
        SSN: 675-84-7367 → fill split fields if present
        U.S. Citizen: Yes
        Email: jondemo@gmail.com
        Mobile Phone: 555-222-3344

        🏠 ADDRESS DETAILS
        -------------------
        Address Line 1: 456 Oak Avenue
        City: Denver
        State: Colorado
        ZIP: 80203
        Residence Type: Rent
        Monthly Rent: 1600
        Time at Address: 3 years

        💼 EMPLOYMENT / INCOME
        -----------------------
        Employer: Skyline Analytics
        Title: Data Engineer
        Work Phone: 555-444-7788
        Status: Full-time
        Tenure: 2 years, 8 months
        Annual Income: 93500
        Other Income: 4500

        🔐 SECURITY
        ------------
        Language: English
        Security Word Hint: Mother's Maiden Name
        Security Word: JunoBetaX

        📜 FINAL STEP
        ---------------
        - Accept all required checkboxes (e.g. E-Communications, Credit Report Authorization)
        - Click “Agree and Submit”
        - If errors appear → scroll to top → locate fields → correct and retry submission
        - On success, capture confirmation screen

        ✅ RULES:
        ---------
        - Use scroll_into_view before any field input
        - Use select_dropdown_option for dropdowns
        - Use trigger_event where dropdown fails visually
        - Ignore optional fields like suffix, PO box, home phone, etc.
        - Do NOT use click_element_by_index or input_text_by_index
        - Retry any failed action
        - Wait 1–2 sec after dropdowns

        ✅ SUCCESS:
        ------------
        - Confirmation page is reached or submission successful
        """,
        llm=ChatOpenAI(model="gpt-4o"),
        max_steps=150,
        max_action_retries=3,
        action_timeout=12000,
        allowed_actions=[
            "go_to_url",
            "click_element",
            "click_button",
            "type_into_field",
            "scroll_into_view",
            "switch_tab",
            "select_dropdown_option",
            "trigger_event",
            "scroll",
            "switch_frame",
            "extract_structured_data"
        ],
        disallowed_actions=[
            "click_element_by_index",
            "input_text_by_index"
        ]
    )

    history = await agent.run()
    print("\n==== ✅ EXECUTION COMPLETE ====")
    print("Visited URLs:", history.urls() if hasattr(history, "urls") else "n/a")
    print("Actions Taken:", history.action_names()[:30] if hasattr(history, "action_names") else "n/a")
    if hasattr(history, "has_errors") and history.has_errors():
        print("❌ Errors Detected:", history.errors())
    else:
        print("✅ Application completed successfully!")

if __name__ == "__main__":
    asyncio.run(main())
