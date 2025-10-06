from browser_use import Agent
from browser_use.llm import ChatOpenAI
import asyncio

async def main():
    print("🎯 CAPITAL ONE PLATINUM - COMPLETE APPLICATION SUBMISSION")
    print("🛡️ Using DUMMY DATA for safe demonstration")
    print("📊 You will see full terminal output + website submission confirmation")
    print("⚠️ NOTE: This creates a real application with fake data for demo purposes")
    print("🔍 Purpose: Prove automation can handle complete end-to-end process")
    input("\nPress Enter to proceed with DEMO SUBMISSION or Ctrl+C to cancel...")
    
    # Add session timeout protection and error handling
    try:
        agent = Agent(
            task="""
            CAPITAL ONE PLATINUM CREDIT CARD APPLICATION - COMPLETE SUBMISSION DEMONSTRATION
            ===============================================================================
            
            🎯 MISSION: DEMONSTRATE FULL END-TO-END CAPITAL ONE PLATINUM APPLICATION SUBMISSION
            📊 STATUS: DEMO MODE - Using dummy data to show complete process
            🔍 GOAL: Prove automation can successfully submit Capital One applications
            
            ⚠️ **CRITICAL ERROR PREVENTION RULES**:
            =====================================
            1. **TIMEOUT PROTECTION**: Complete entire form within 15 minutes to avoid session expiry
            2. **INFINITE LOOP PREVENTION**: If same action repeated 3+ times, move to next step
            3. **CHECKBOX STATE VERIFICATION**: Check if checkbox is already selected before clicking
            4. **SUBMISSION DETECTION**: Actively search for submit buttons after agreements
            5. **GRACEFUL DEGRADATION**: If errors occur, document progress and continue
            
            🚨 **EMERGENCY LOOP BREAK PROTOCOL**:
            =====================================
            If you detect you are in an infinite loop (same actions repeating):
            1. **STOP** all repetitive clicking immediately
            2. **IDENTIFY** which checkboxes have RED OUTLINE (unchecked)
            3. **CLICK** only the unchecked (red outline) checkboxes ONCE each
            4. **VERIFY** all required checkboxes now have BLUE CHECKMARKS
            5. **THEN** click Continue button to proceed
            
            🔥 **CONTINUE BUTTON TROUBLESHOOTING**:
            =====================================
            If Continue button doesn't work (page stays same after clicking):
            - **CAUSE**: Required checkboxes are still unchecked
            - **SOLUTION**: Find checkboxes with red outline and click them first
            - **THEN**: Try Continue button again
            - **DO NOT**: Keep clicking Continue if checkboxes aren't handled
            
            👤 DUMMY PROFILE FOR DEMONSTRATION:
            ==================================
            📋 Personal Information (FAKE - FOR DEMO ONLY):
            - First Name: Michael
            - Last Name: Thompson
            - Date of Birth: 07/22/1995
            - SSN: 893-74-8979 (DUMMY)
            - Phone: (91) 9471009754
            - Email: michael.thompson.dev@gmail.com
            
            🏠 Address Information (FAKE - FOR DEMO ONLY):
            - Street: 1234 Main Street
            - Apartment: 4A
            - City: Austin
            - State: Texas
            - ZIP: 78701
            - Housing Status: Rent
            - Monthly Housing Payment: $1,800
            - Time at Address: 2 years 6 months
            
            💼 Employment Information (FAKE - FOR DEMO ONLY):
            - Employer: DataTech Innovations
            - Job Title: Senior Software Developer
            - Work Phone: (555) 456-7890
            - Years Employed: 4 years 1 month
            - Employment Status: Full-time
            - Annual Gross Income: $85,000
            - Other Income: $8,000 (Side Projects)
            
            💰 Financial Information (FAKE - FOR DEMO ONLY):
            - Total Annual Income: $93,000
            - Monthly Housing Payment: $1,800
            - Existing Credit Cards: 2 cards
            - Total Credit Limit: $8,000
            - Monthly Credit Card Payment: $150
            - Checking Account: Yes
            - Savings Account: Yes
            
            🚀 COMPLETE CAPITAL ONE PLATINUM SUBMISSION EXECUTION PLAN:
            ==========================================================
            
            📍 PHASE 1: NAVIGATION AND FORM ACCESS (Steps 1-5)
            ------------------------------------------------
            ✅ Navigate to Capital One Platinum credit card page
            ✅ Click "Apply Now" button
            ✅ Handle any initial pop-ups or pre-qualification screens
            ✅ Access the main application form
            ✅ Begin form filling process
            
            📍 PHASE 2: PERSONAL INFORMATION SECTION (Steps 6-15)
            ---------------------------------------------------
            ✅ Fill First Name: Michael
            ✅ Fill Last Name: Thompson  
            ✅ Enter Date of Birth: 07/22/1995
            ✅ Input SSN: 987-65-4321 (DUMMY)
            ✅ Enter Phone Number: (555) 789-0123
            ✅ Input Email: michael.thompson.dev@gmail.com
            ✅ Select citizenship status
            ✅ Handle any identity verification fields
            ✅ Complete personal details section
            ✅ Proceed to next section
            
            📍 PHASE 3: ADDRESS INFORMATION SECTION (Steps 16-25)
            ---------------------------------------------------
            ✅ Enter Street Address: 5678 Innovation Boulevard
            ✅ Fill Apartment/Unit: 4A
            ✅ Input City: Austin
            ✅ Select State: Texas
            ✅ Enter ZIP Code: 78701
            ✅ Select Housing Status: Rent
            ✅ Enter Monthly Housing Payment: $1,800
            ✅ Input Time at Address: 2 years 6 months
            ✅ Handle previous address if required
            ✅ Complete address section
            
            📍 PHASE 4: EMPLOYMENT INFORMATION SECTION (Steps 26-35)
            -------------------------------------------------------
            ✅ Enter Employer Name: DataTech Innovations
            ✅ Input Job Title: Senior Software Developer
            ✅ Fill Work Phone: (555) 456-7890
            ✅ Select Employment Status: Full-time
            ✅ Enter Years Employed: 4 years 1 month
            ✅ Input Annual Gross Income: $85,000
            ✅ Add Other Income: $8,000 (Side Projects)
            ✅ Select income frequency (Annual/Monthly)
            ✅ Handle employer address if required
            ✅ Complete employment section
            
            📍 PHASE 5: FINANCIAL INFORMATION SECTION (Steps 36-45)
            ------------------------------------------------------
            ✅ Enter Total Annual Income: $93,000
            ✅ Input Monthly Housing Payment: $1,800
            ✅ Enter Number of Credit Cards: 2
            ✅ Input Total Credit Limit: $8,000
            ✅ Enter Monthly Credit Card Payment: $150
            ✅ Select Banking Accounts: Checking & Savings
            ✅ Handle any asset questions
            ✅ Complete financial details
            ✅ Review financial information accuracy
            ✅ Proceed to final sections
            
            📍 PHASE 6: AGREEMENTS SECTION (Steps 46-50) - STRICT SEQUENCE
            =============================================================
            ✅ STEP 46: Find the "Paperless Communications and Statements" checkbox.
            ✅ STEP 47: If it is NOT checked (red outline), click it ONCE. If it is already checked (blue checkmark), DO NOT click it.
            ✅ STEP 48: Find the "SSN Verification Authorization" checkbox. If it is already checked (blue checkmark), DO NOT click it.
            ✅ STEP 49: Confirm "English" language is selected.
            ✅ STEP 50: Only after all required checkboxes are checked, click the blue "Continue" button ONCE.
            ⚠️ If the Continue button is disabled, re-check the checkboxes and ensure they are checked.
            ⚠️ Never click a checkbox that is already checked.
            ⚠️ Never toggle a checkbox on/off.
            ⚠️ If stuck, print/log the state of all checkboxes and the Continue button, then stop.
            
            📍 PHASE 7: PRE-SUBMISSION VERIFICATION (Steps 51-55)
            -------------------------------------------------------------------------------------
            ✅ Review all entered information for accuracy
            ✅ Verify all required fields are completed
            ✅ Check terms and conditions acceptance
            ✅ Document pre-submission application state
            ✅ Take final application screenshot (if possible)
            
            📍 PHASE 8: ACTUAL SUBMISSION PROCESS (Steps 56-60)
            -------------------------------------------------
            🔥 STEP 56: LOCATE SUBMIT BUTTON
            📝 Action: Find and identify the "Submit Application" or "Apply Now" button
            📊 Terminal Log: "🎯 CAPITAL ONE SUBMIT BUTTON LOCATED - Ready for submission"
            
            🔥 STEP 57: CLICK SUBMIT BUTTON  
            📝 Action: Click the submit button to initiate Capital One application submission
            📊 Terminal Log: "🚀 SUBMITTING CAPITAL ONE PLATINUM APPLICATION - Click executed"
            ⚠️ Status Update: "CAPITAL ONE APPLICATION SUBMISSION IN PROGRESS..."
            
            🔥 STEP 58: HANDLE SUBMISSION PROCESSING
            📝 Action: Wait for and handle Capital One submission processing page
            📊 Terminal Log: "⏳ PROCESSING CAPITAL ONE SUBMISSION - Waiting for response"
            🎯 Watch for: Loading screens, processing messages, security checks, redirects
            
            🔥 STEP 59: CAPTURE SUBMISSION CONFIRMATION
            📝 Action: Identify and document Capital One submission confirmation page
            📊 Terminal Log: "✅ CAPITAL ONE SUBMISSION COMPLETED - Capturing confirmation"
            🎯 Look for: Application reference number, instant approval/pending status, next steps
            
            🔥 STEP 60: DOCUMENT FINAL RESULTS
            📝 Action: Extract and save all Capital One submission details
            📊 Terminal Log: "📄 CAPITAL ONE SUBMISSION RESULTS DOCUMENTED"
            
            📊 TERMINAL OUTPUT REQUIREMENTS:
            ===============================
            Throughout the process, provide clear terminal logging:
            
            🔄 Form filling: "🛠️ FILLING CAPITAL ONE PLATINUM APPLICATION..."
            📝 Section completion: "✅ [SECTION NAME] COMPLETED"
            🎯 Ready to submit: "🎯 CAPITAL ONE APPLICATION READY FOR SUBMISSION"
            🚀 Clicking submit: "🚀 SUBMITTING CAPITAL ONE PLATINUM APPLICATION NOW..."
            ⏳ Processing: "⏳ CAPITAL ONE SUBMISSION PROCESSING..."
            ✅ Success: "✅ CAPITAL ONE APPLICATION SUBMITTED SUCCESSFULLY"
            📄 Results: "📄 CAPITAL ONE SUBMISSION CONFIRMATION RECEIVED"
            
            🔥 **AGREEMENTS SECTION SPECIFIC LOGGING**:
            ==========================================
            📋 Checkbox scan: "🔍 SCANNING FOR RED OUTLINE CHECKBOXES"
            📋 Paperless Communications: "🔍 PAPERLESS COMMUNICATIONS - [RED OUTLINE/BLUE CHECKMARK]"
            📋 SSN Verification: "🔍 SSN VERIFICATION - [RED OUTLINE/BLUE CHECKMARK] - [ACTION TAKEN/SKIPPED]"
            📋 Language selection: "🔍 ENGLISH LANGUAGE SELECTED"
            📋 Pre-Continue check: "🔍 ALL REQUIRED CHECKBOXES VERIFIED AS CHECKED"
            📋 Continue button: "🎯 CONTINUE BUTTON CLICKING - CHECKBOXES READY"
            📋 Page transition: "✅ AGREEMENTS COMPLETED - NEW PAGE LOADING"
            📋 Loop detection: "⚠️ SAME PAGE DETECTED - CHECKBOXES NOT PROPERLY HANDLED"
            
            🔍 EXPECTED SUBMISSION OUTCOMES:
            ===============================
            
            ✅ SUCCESSFUL SUBMISSION:
            - Terminal: "✅ CAPITAL ONE APPLICATION SUBMITTED SUCCESSFULLY"
            - Website: Confirmation page with application reference number
            - Result: Instant approval, pending review, or further verification required
            
            ⚠️ REJECTION/ERROR:
            - Terminal: "⚠️ CAPITAL ONE APPLICATION REJECTED" or "❌ SUBMISSION ERROR"
            - Website: Error message, rejection notice, or security challenge
            - Result: Still proves submission capability (rejection likely due to fake SSN)
            
            📊 REQUIRED DOCUMENTATION:
            =========================
            Create comprehensive Capital One submission report:
            
            - capital_one_submission_confirmation.md: Full submission results
            - capital_one_terminal_log.md: All terminal output captured  
            - capital_one_application_screenshots.md: Key submission moments
            - capital_one_automation_proof.md: Evidence automation works for Capital One
            
            🎯 SUCCESS CRITERIA:
            ===================
            ✅ Primary Goal: DEMONSTRATE COMPLETE CAPITAL ONE SUBMISSION CAPABILITY
            ✅ Terminal Evidence: Clear Capital One submission status messages
            ✅ Website Evidence: Capital One submission confirmation or decision page
            ✅ Documentation: Comprehensive proof Capital One automation works
            ✅ Process Proof: Show automation can handle Capital One's specific form flow
            
            🔥 CRITICAL INSTRUCTIONS:
            ========================
            1. DO NOT STOP AT SUBMISSION BUTTON - COMPLETE THE FULL SUBMISSION
            2. HANDLE CAPITAL ONE SPECIFIC ELEMENTS (security checks, pre-qualification)
            3. CAPTURE ALL TERMINAL LOGS FOR SUBMISSION PROOF
            4. DOCUMENT FINAL CAPITAL ONE RESPONSE (approval/pending/rejection)
            5. GOAL: PROVE BROWSER AUTOMATION WORKS WITH CAPITAL ONE'S SYSTEM
            
            🔥 POPUP/TAB HANDLING INSTRUCTIONS (ESSENTIAL) 🔥
            =================================================
            ✅ The Capital One website opens the actual application form in a **new tab / popup** on domain `applynow.capitalone.com` when you press "Apply Now".
            ✅ Immediately **detect and switch to that new tab** after clicking. Use `switch_tab()` to jump to the most-recent tab (highest index).
            ✅ Continue all subsequent steps on that application tab. Do **not** keep interacting with the original marketing page.
            ✅ If no new tab appears within 5 s, extract the `href` value of the "Apply Now" link and `go_to_url()` it directly.
            ✅ Avoid manually typing `productId=EnterprisePlatF` links (they are deprecated and return an "Offer expired" page).
            
            🔥 DYNAMIC FIELD HANDLING INSTRUCTIONS (CRITICAL) 🔥
            ===================================================
            ✅ **MISSING REQUIRED FIELDS**: If any required field is encountered that's not in the dummy data above, generate appropriate dummy values:
                 - Names: Use variations of "Michael Thompson" (e.g., middle initial "J", maiden name "Smith")
                 - Addresses: Use simple street names like "123 Main Street", "456 Oak Avenue", "789 Elm Street"
                 - Phone Numbers: Use format (555) XXX-XXXX with random digits
                 - Employment: Use variations of "DataTech Innovations" or "Software Engineer"
                 - Financial: Use reasonable values consistent with $93,000 income profile
                 - Dates: Use reasonable dates consistent with 1995 birth year
                 - IDs: Generate format-appropriate dummy numbers (avoid real SSNs/IDs)
             
             ✅ **DROPDOWN SELECTIONS**: For any dropdown menus encountered:
                 - **State/Province**: Select "Texas" or "TX" 
                 - **Country**: Select "United States" or "USA"
                 - **Employment Status**: Select "Full-time" or "Employed Full-time"
                 - **Housing Status**: Select "Rent" or "Renting"
                 - **Income Frequency**: Select "Annual" or "Annually"
                 - **Citizenship**: Select "U.S. Citizen" or "Yes"
                 - **Marital Status**: Select "Single" if required
                 - **Education**: Select "Bachelor's Degree" or "College Graduate" if required
                 - **Bank Account Type**: Select "Checking" if required
                 - **Preferred Contact**: Select "Email" if required
                 - **Other dropdowns**: Select the first reasonable option that matches the profile
             
             ✅ **CHECKBOX/RADIO SELECTIONS**: 
                 - **Terms & Conditions**: Always accept/check required legal agreements
                 - **Privacy Policy**: Accept if required for application submission
                 - **Credit Check Authorization**: Accept (required for credit applications)
                 - **Electronic Communications**: Accept if required
                 - **Marketing Preferences**: Decline optional marketing unless required
             
             ✅ **VALIDATION ERRORS**: If form validation fails:
                 - Check for red error messages and adjust input format
                 - **ADDRESS VALIDATION**: If "Please enter your Street Address" appears:
                     * Try: "1234 Main Street" or "123 Oak Avenue" or "456 Elm Street"
                     * Avoid: "Boulevard", "Drive", "Innovation" - use simple street names
                     * Must be actual street address, not P.O. Box
                 - Try alternative formats (e.g., phone: (555) 123-4567 vs 5551234567)
                 - For date fields, try MM/DD/YYYY format
                 - For SSN, ensure XXX-XX-XXXX format with dummy numbers
                 - **RETRY RULE**: If validation fails, try 2-3 different values before proceeding
                 - Continue with corrected values, don't stop the process
             
             ✅ **PROCEED RULE**: Never stop for missing information - always generate appropriate dummy values and continue to submission
             
            🔥 CAPITAL ONE SPECIFIC FORM HANDLING 🔥
            =======================================
            ✅ **STEP-BY-STEP FORM COMPLETION**:
                 1. **FILL STREET ADDRESS**: Enter "1234 Main Street" in the red-outlined field
                 2. **WAIT FOR VALIDATION**: Wait 2-3 seconds after each field entry
                 3. **CHECK FOR ERRORS**: Look for red error messages after each field
                 4. **FIX ERRORS IMMEDIATELY**: If validation fails, try alternative values
                 5. **CONTINUE TO NEXT FIELD**: Only proceed when current field is accepted
                 6. **COMPLETE ALL FIELDS**: Fill every visible field before clicking Continue/Next
             
             ✅ **ERROR RECOVERY**: If stuck in a loop:
                 - Clear the field completely first
                 - Try a different address format: "123 Oak Avenue", "456 Elm Street"
                 - Wait 3 seconds between attempts
                 - If still failing, try without apartment number
                 - Document the issue but continue with working values
             
             ✅ **CHECKBOX HANDLING (CRITICAL) - STRICT RULES**:
                 ==============================================
                 
                 **VISUAL STATE DETECTION (MANDATORY)**:
                 - RED OUTLINE around checkbox = UNCHECKED (needs to be clicked)
                 - BLUE CHECKMARK in checkbox = CHECKED (leave alone, do NOT click)
                 
                 **CHECKBOX ACTION RULES**:
                 - **IF RED OUTLINE**: Click checkbox ONCE to check it
                 - **IF BLUE CHECKMARK**: Do NOT click, skip to next element
                 - **NEVER TOGGLE**: Don't click checked checkboxes to uncheck them
                 - **ONE CLICK ONLY**: Never click same checkbox more than once
                 
                 **FORBIDDEN ACTIONS**:
                 - Do NOT click checkboxes that are already checked
                 - Do NOT toggle checkboxes on/off repeatedly
                 - Do NOT click Continue before handling required checkboxes
                 
                 **SEQUENCE ENFORCEMENT**:
                 1. Handle all unchecked (red outline) checkboxes first
                 2. Verify all required checkboxes are checked (blue checkmark)
                 3. Only then click Continue button
             
             ✅ **SUBMISSION BUTTON DETECTION (ENHANCED)**:
                 - **PRIMARY TARGET**: Look for BLUE BUTTON with "Continue" text
                 - **BUTTON LOCATION**: Usually below the agreements checkboxes
                 - **VISUAL CUES**: Blue/primary colored button, larger than other buttons
                 - **IMMEDIATE ACTION**: Click Continue button as soon as checkboxes are properly handled
                 - **FALLBACK**: If no Continue button found, look for "Submit Application", "Apply", or "Next"
                 - **FORCE PROGRESSION**: If stuck, scroll down and click any primary button to proceed
                 
             🔥 **AGREEMENTS SECTION - EXACT SEQUENCE (MANDATORY)**:
                 ===================================================
                 
                 **STEP 1: CHECK PAPERLESS COMMUNICATIONS FIRST**
                 - Look for "Paperless Communications" checkbox with RED OUTLINE
                 - If it has red outline (unchecked), click it ONCE to check it
                 - Wait 2 seconds after clicking
                 - Verify it now has blue checkmark (checked state)
                 
                 **STEP 2: VERIFY SSN VERIFICATION (DO NOT TOUCH)**
                 - Look for "SSN Verification" checkbox with BLUE CHECKMARK
                 - If already checked (blue checkmark), DO NOT click it
                 - Leave this checkbox in its current checked state
                 
                 **STEP 3: CONFIRM ENGLISH LANGUAGE**
                 - Verify "English" radio button is selected
                 - If not selected, click it once
                 
                 **STEP 4: CLICK CONTINUE ONLY AFTER CHECKBOXES HANDLED**
                 - ONLY click Continue button AFTER all checkboxes are properly checked
                 - Look for blue "Continue" button
                 - Click it ONCE to proceed
                 
                 **CRITICAL RULE**: Continue button will NOT work if checkboxes are unchecked
                 **SEQUENCE MATTERS**: Checkboxes FIRST, then Continue button
             
            🔧 **TECHNICAL CLICK INSTRUCTIONS (USE THESE APIs)** 🔧
            - Use `find_element_by_text("Paperless Communications and Statements")` to locate the label.
            - From that element, go to its parent and then locate descendant `[role="checkbox"], input[type="checkbox"], div[aria-checked]`.
            - Perform `click_element(element)` on that descendant – **not** the label.
            - **NEVER** call `click_element_by_index()` for these check-boxes. Index numbers are unstable and cause loops.
            - If you cannot find the element by text, scroll the page a little and try again with the same text-based selector.
            - **Verification**: After the click, wait until `element.getAttribute('aria-checked') == 'true'` **OR** the element's `classList` contains `checked`.
            - **JS Fallback** (if aria-checked never flips):
                `execute_js("arguments[0].click()", element)`
            - Repeat the same logic for the "SSN Verification Authorization" checkbox.
            - Only proceed to the Continue button after **both** checkboxes report `aria-checked="true"`.
            - Use `find_element_by_text("Continue")` to get the button and ensure `is_enabled()==true` before clicking.
            - If button is disabled after verification, log DOM state and **abort** (do NOT start another loop).
            
                    BEGIN COMPLETE CAPITAL ONE PLATINUM APPLICATION SUBMISSION DEMONSTRATION
        """,
        llm=ChatOpenAI(model="gpt-4o")
        )
        await agent.run()
    except Exception as e:
        print(f"❌ SUBMISSION ERROR: {e}")
        print("📊 AUTOMATION COMPLETED WITH ERRORS - Check logs for details")

asyncio.run(main())
