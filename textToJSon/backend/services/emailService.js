const { Resend } = require('resend');
const config = require('../config/env');

/**
 * Email Service - Abstraction layer for sending emails via Resend
 * Resend is developer-friendly and easier to set up than Mailgun
 */
class EmailService {
  constructor() {
    // Initialize Resend client
    this.resend = null;
    this.fromEmail = null;
    
    // Initialize if API key is available
    if (config.RESEND_API_KEY) {
      this.resend = new Resend(config.RESEND_API_KEY);
      // Resend requires verified domain, but for testing you can use their default
      // For production, use your verified domain
      this.fromEmail = config.SYSTEM_EMAIL || 'onboarding@resend.dev';
    }
  }

  /**
   * Check if email service is properly configured
   */
  isConfigured() {
    return !!(this.resend && this.fromEmail);
  }

  /**
   * Send company information email after form submission
   * @param {Object} params - Email parameters
   * @param {string} params.to - Recipient email address
   * @param {Object} params.companyData - Company data to include in email
   * @returns {Promise<Object>} - Resend response
   */
  async sendCompanySubmissionEmail({ to, companyData }) {
    if (!this.isConfigured()) {
      throw new Error('Email service is not configured. Please check RESEND_API_KEY and SYSTEM_EMAIL in .env');
    }

    // Validate email
    if (!to || !this.isValidEmail(to)) {
      throw new Error('Invalid recipient email address');
    }

    // Render email content
    const { subject, html, text } = this.renderCompanyEmail(companyData);

    // Send email via Resend
    try {
      const { data, error } = await this.resend.emails.send({
        from: this.fromEmail,
        to: [to],
        subject: subject,
        html: html,
        text: text
      });

      if (error) {
        throw new Error(`Resend API error: ${error.message}`);
      }

      return {
        success: true,
        messageId: data.id,
        message: 'Email sent successfully'
      };
    } catch (error) {
      console.error('Resend API error:', error);
      
      // Provide helpful error messages
      let errorMessage = error.message;
      if (error.message && error.message.includes('API key')) {
        errorMessage = `Invalid API key. Check your RESEND_API_KEY in .env file. Get your key from: https://resend.com/api-keys`;
      } else if (error.message && error.message.includes('domain')) {
        errorMessage = `Domain not verified. For testing, use 'onboarding@resend.dev'. For production, verify your domain in Resend dashboard: https://resend.com/domains`;
      }
      
      throw new Error(`Failed to send email: ${errorMessage}`);
    }
  }

  /**
   * Render email HTML and text content from company data
   * @param {Object} companyData - Company information
   * @returns {Object} - { subject, html, text }
   */
  renderCompanyEmail(companyData) {
    const companyName = companyData.companyName || 'Company';
    const subject = `Company Information: ${companyName}`;

    // Build HTML email
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      margin: -30px -30px 30px -30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .section {
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 1px solid #e0e0e0;
    }
    .section:last-child {
      border-bottom: none;
    }
    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #667eea;
      margin-bottom: 10px;
    }
    .field {
      margin-bottom: 10px;
    }
    .field-label {
      font-weight: 600;
      color: #666;
      font-size: 14px;
    }
    .field-value {
      color: #333;
      font-size: 15px;
      margin-top: 4px;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      text-align: center;
      color: #999;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Company Information Submitted</h1>
    </div>
    
    <div class="section">
      <div class="section-title">Basic Information</div>
      ${this.renderField('Company Name', companyData.companyName)}
      ${this.renderField('Industry', companyData.industry)}
      ${this.renderField('Sector', companyData.sector)}
      ${this.renderField('Founded Year', companyData.foundedYear)}
      ${this.renderField('Company Description', companyData.companyDescription, true)}
    </div>

    ${companyData.numberOfEmployees || companyData.revenue ? `
    <div class="section">
      <div class="section-title">Size & Revenue</div>
      ${this.renderField('Number of Employees', companyData.numberOfEmployees)}
      ${this.renderField('Company Size', companyData.companySize)}
      ${this.renderField('Revenue', companyData.revenue)}
      ${this.renderField('Revenue Amount', companyData.revenueAmount ? `$${companyData.revenueAmount.toLocaleString()}` : '')}
    </div>
    ` : ''}

    ${companyData.headquarters || companyData.address ? `
    <div class="section">
      <div class="section-title">Location</div>
      ${this.renderField('Headquarters', companyData.headquarters)}
      ${this.renderField('Address', companyData.address)}
      ${this.renderField('City', companyData.city)}
      ${this.renderField('State', companyData.state)}
      ${this.renderField('Country', companyData.country)}
      ${this.renderField('Zip Code', companyData.zipCode)}
    </div>
    ` : ''}

    ${companyData.phone || companyData.email || companyData.website ? `
    <div class="section">
      <div class="section-title">Contact Information</div>
      ${this.renderField('Phone', companyData.phone)}
      ${this.renderField('Email', companyData.email)}
      ${this.renderField('Website', companyData.website ? `<a href="${companyData.website}">${companyData.website}</a>` : '')}
    </div>
    ` : ''}

    ${companyData.ceo || companyData.founder ? `
    <div class="section">
      <div class="section-title">Leadership</div>
      ${this.renderField('CEO', companyData.ceo)}
      ${this.renderField('Founder', companyData.founder)}
    </div>
    ` : ''}

    ${companyData.businessModel || companyData.targetMarket ? `
    <div class="section">
      <div class="section-title">Business Details</div>
      ${this.renderField('Business Model', companyData.businessModel)}
      ${this.renderField('Target Market', companyData.targetMarket)}
      ${this.renderField('Market Presence', companyData.marketPresence)}
    </div>
    ` : ''}

    <div class="footer">
      <p>This email was automatically generated after form submission.</p>
      <p>Submitted on ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version
    const text = `
Company Information: ${companyName}

Basic Information:
${this.renderTextField('Company Name', companyData.companyName)}
${this.renderTextField('Industry', companyData.industry)}
${this.renderTextField('Sector', companyData.sector)}
${this.renderTextField('Founded Year', companyData.foundedYear)}
${this.renderTextField('Company Description', companyData.companyDescription)}

Size & Revenue:
${this.renderTextField('Number of Employees', companyData.numberOfEmployees)}
${this.renderTextField('Company Size', companyData.companySize)}
${this.renderTextField('Revenue', companyData.revenue)}

Location:
${this.renderTextField('Headquarters', companyData.headquarters)}
${this.renderTextField('Address', companyData.address)}
${this.renderTextField('City', companyData.city)}
${this.renderTextField('State', companyData.state)}
${this.renderTextField('Country', companyData.country)}

Contact Information:
${this.renderTextField('Phone', companyData.phone)}
${this.renderTextField('Email', companyData.email)}
${this.renderTextField('Website', companyData.website)}

Leadership:
${this.renderTextField('CEO', companyData.ceo)}
${this.renderTextField('Founder', companyData.founder)}

Business Details:
${this.renderTextField('Business Model', companyData.businessModel)}
${this.renderTextField('Target Market', companyData.targetMarket)}

Submitted on: ${new Date().toLocaleString()}
    `.trim();

    return { subject, html, text };
  }

  /**
   * Render a field for HTML email
   */
  renderField(label, value, isMultiline = false) {
    if (!value) return '';
    const displayValue = isMultiline ? `<div style="white-space: pre-wrap;">${value}</div>` : value;
    return `
      <div class="field">
        <div class="field-label">${label}:</div>
        <div class="field-value">${displayValue}</div>
      </div>
    `;
  }

  /**
   * Render a field for text email
   */
  renderTextField(label, value) {
    if (!value) return '';
    return `${label}: ${value}\n`;
  }

  /**
   * Simple email validation
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Export singleton instance
module.exports = new EmailService();
