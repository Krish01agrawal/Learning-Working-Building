from browser_use import Agent
from browser_use.llm import ChatOpenAI
import asyncio
import time

async def main():
    print("🎯 CAPITAL ONE CREDIT CARD APPLICATION (IMPROVED VERSION)")
    print("🛡️ Enhanced with loop prevention and better error handling")
    print("📊 Using dummy data for demonstration purposes")
    input("\nPress Enter to start the improved automation...")
    
    start_time = time.time()
    
    agent = Agent(
        task="""
        ENHANCED CAPITAL ONE CREDIT CARD APPLICATION AUTOMATION
        ======================================================
        
        🎯 OBJECTIVE: Complete Capital One credit card application with improved error handling
        
        ⚠️ CRITICAL IMPROVEMENTS:
        =========================
        1. **LOOP PREVENTION**: Never repeat the same action more than 3 times
        2. **STATE TRACKING**: Keep track of completed sections to avoid backtracking
        3. **SMART CHECKBOX HANDLING**: Check if checkbox is already selected before clicking
        4. **SUBMISSION FOCUS**: Actively search for and click the final submit button
        5. **TIME LIMITS**: Complete within 10 minutes to avoid session timeout
        
        📋 DUMMY DATA TO USE:
        ====================
        - Name: Michael Thompson
        - DOB: 07/22/1995
        - SSN: 123-45-6789 (DUMMY - NOT REAL)
        - Phone: (555) 123-4567
        - Email: test@example.com
        - Address: 123 Main Street, Austin, TX 78701
        - Employment: Software Engineer at Tech Corp
        - Income: $75,000 annually
        
        🔥 ENHANCED EXECUTION STEPS:
        ===========================
        
        STEP 1: Navigate to Capital One credit card application
        - Go to capitalone.com credit card section
        - Click "Apply Now" for any available card
        - Handle any popups or new tabs
        
        STEP 2: Fill Personal Information (with validation)
        - Enter name, DOB, SSN, phone, email
        - Wait 2 seconds after each field entry
        - Check for validation errors after each field
        - If error occurs, try alternative format once
        
        STEP 3: Fill Address Information (with validation)
        - Enter street address, city, state, ZIP
        - Use simple address format: "123 Main Street"
        - Avoid complex street names that might fail validation
        - Handle housing status and monthly payment fields
        
        STEP 4: Fill Employment Information (with validation)
        - Enter employer name, job title, work phone
        - Select employment status from dropdown
        - Enter annual income and other income sources
        - Handle any employer address fields
        
        STEP 5: Fill Financial Information (with validation)
        - Enter total annual income
        - Fill banking information (checking/savings)
        - Handle any existing credit accounts
        - Complete all financial detail fields
        
        STEP 6: Handle Terms and Agreements (IMPROVED)
        - **CRITICAL**: Before clicking any checkbox, check its current state
        - Only click checkboxes that are NOT already checked
        - Wait 3 seconds between checkbox clicks
        - Look for these common checkboxes:
          * Terms and Conditions
          * Privacy Policy Agreement
          * Credit Check Authorization
          * Electronic Communications
          * SSN Verification Authorization
        
        STEP 7: LOCATE AND CLICK SUBMIT BUTTON (ENHANCED)
        - **SCROLL TO BOTTOM** of agreements section
        - **ACTIVELY SEARCH** for submit button with these texts:
          * "Submit Application"
          * "Continue"
          * "Apply Now"
          * "Review and Submit"
          * "Next"
        - **BUTTON DETECTION**: Look for primary/colored buttons
        - **FORCE SUBMISSION**: If no button found, try pressing Enter key
        
        STEP 8: Handle Submission Response
        - Wait for processing page
        - Capture confirmation or error messages
        - Document final result (approval/pending/rejection)
        
        🚨 INFINITE LOOP PREVENTION RULES:
        =================================
        - **RULE 1**: Never click the same element index more than 3 times
        - **RULE 2**: If stuck in agreements section for more than 15 actions, force proceed
        - **RULE 3**: If no progress for 5 consecutive actions, try different approach
        - **RULE 4**: After 10 minutes total runtime, force complete with current progress
        - **RULE 5**: If checkbox already appears checked, skip clicking it
        
        🔍 SUCCESS INDICATORS:
        ======================
        - Application form submitted successfully
        - Confirmation page displayed
        - Application reference number received
        - OR reasonable error message (e.g., "Application rejected due to fake SSN")
        
        BEGIN ENHANCED CAPITAL ONE APPLICATION AUTOMATION
        """,
        llm=ChatOpenAI(model="gpt-4o")
    )
    
    try:
        await agent.run()
        elapsed_time = time.time() - start_time
        print(f"✅ AUTOMATION COMPLETED in {elapsed_time:.2f} seconds")
    except Exception as e:
        elapsed_time = time.time() - start_time
        print(f"❌ AUTOMATION ERROR after {elapsed_time:.2f} seconds: {e}")
        print("📊 Check logs above for partial progress details")

if __name__ == "__main__":
    asyncio.run(main())
