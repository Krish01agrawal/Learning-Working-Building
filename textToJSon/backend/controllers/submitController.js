const Company = require('../models/Company');
const emailService = require('../services/emailService');

/**
 * Submit Controller
 * Handles company form submission and email sending
 */
class SubmitController {
  /**
   * Submit company data
   */
  submitCompanyData = async (req, res, next) => {
    try {
      const { formData, recipientEmail } = req.body;

      // Validation
      if (!formData || Object.keys(formData).length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Form data is required'
        });
      }

      // Save to database
      const company = new Company(formData);
      const savedCompany = await company.save();

      // Send email if recipient email is provided
      let emailResult = null;
      if (recipientEmail) {
        try {
          emailResult = await emailService.sendCompanySubmissionEmail({
            to: recipientEmail,
            companyData: formData
          });
          console.log('Email sent successfully:', emailResult.messageId);
        } catch (emailError) {
          // Log email error but don't fail the request
          console.error('Email sending failed:', emailError.message);
          emailResult = {
            success: false,
            error: emailError.message
          };
        }
      }

      res.json({
        success: true,
        message: 'Company data saved successfully',
        data: savedCompany,
        email: emailResult
      });

    } catch (error) {
      next(error);
    }
  };

  /**
   * Get all companies
   */
  getAllCompanies = async (req, res, next) => {
    try {
      const companies = await Company.find().sort({ createdAt: -1 });
      
      res.json({
        success: true,
        data: companies
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new SubmitController();

