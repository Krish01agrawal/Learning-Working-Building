# Create a simple Excel template with a single column `URL` and a few sample rows.
import pandas as pd

df = pd.DataFrame({
    "URL": [
        "https://robert-mcdermott.medium.com/performance-vs-practicality-a-comparison-of-vllm-and-ollama-104acad250fd",
        "https://javascript.plainenglish.io/6-react-useeffect-secrets-that-professional-teams-use-but-never-document-432609f2ea2a",
        "https://www.flipkart.com/big-billion-days-store",
        "https://www.etmoney.com/mutual-funds/featured/best-mutual-funds/29",
        "https://blog.superhuman.com/ai-agents-for-workflow-automation/?utm_creative=&utm_source=google&utm_campaign=%5BNB%5D+%5BSearch%5D+DSA+International&utm_term=&utm_medium=ppc&hsa_acc=3060134131&hsa_cam=22883751328&hsa_grp=182370812614&hsa_ad=768488592636&hsa_src=g&hsa_tgt=dsa-19959388920&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22883751328&gbraid=0AAAAACNrZQKOacdRXWftWZ3LIx1TstYQC&gclid=CjwKCAjw89jGBhB0EiwA2o1OnzB7vIHWmtUtaPmxnAMILBU6z4XFYCNpZv2QmyOqrrX4mgJbCFCeQBoCelYQAvD_BwE"
    ]
})
path = "input_links.xlsx"
df.to_excel(path, index=False)
path
