import React, { useState } from 'react';
import axios from 'axios';
import './CompanyForm.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const CompanyForm = () => {
  // Initial form state
  const initialFormData = {
    // Basic Information
    companyName: '',
    companyDescription: '',
    industry: '',
    sector: '',
    foundedYear: '',
    
    // Size & Revenue
    numberOfEmployees: '',
    revenue: '',
    revenueAmount: '',
    revenueCurrency: 'USD',
    companySize: '',
    
    // Location
    headquarters: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    
    // Contact Information
    phone: '',
    email: '',
    website: '',
    
    // Leadership
    ceo: '',
    founder: '',
    
    // Business Details
    businessModel: '',
    targetMarket: '',
    
    // Additional
    marketPresence: ''
  };

  const [textInput, setTextInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  // Reset form function
  const resetForm = () => {
    setFormData(initialFormData);
    setTextInput('');
    setExtractedData(null);
    setSubmitStatus(null);
    setRecipientEmail('');
    setEmailStatus(null);
  };

  // Handle modal close with form reset
  const handleModalClose = () => {
    setShowSuccessModal(false);
    resetForm();
  };

  // Handle text extraction
  const handleExtract = async () => {
    if (!textInput.trim()) {
      alert('Please enter some text to extract information from');
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/extract`, {
        text: textInput
      });

      if (response.data.success) {
        const data = response.data.data;
        setExtractedData(data);
        
        // Auto-fill form with extracted data
        const filledForm = { ...formData };
        
        // Helper function to safely get nested values
        const getValue = (obj, ...paths) => {
          for (const path of paths) {
            const keys = path.split('.');
            let value = obj;
            for (const key of keys) {
              if (value && typeof value === 'object' && key in value) {
                value = value[key];
              } else {
                value = null;
                break;
              }
            }
            if (value !== null && value !== undefined) return value;
          }
          return null;
        };
        
        // Helper to convert arrays/objects to strings
        const toString = (val) => {
          if (val === null || val === undefined) return '';
          if (typeof val === 'string') return val;
          if (Array.isArray(val)) return val.join(', ');
          if (typeof val === 'object') {
            // For objects, try to extract meaningful string
            if (val.type) return val.type;
            if (val.details && Array.isArray(val.details)) return val.details.join(', ');
            return JSON.stringify(val);
          }
          return String(val);
        };
        
        // Basic Information
        filledForm.companyName = data.company_name || data.companyName || data.name || '';
        filledForm.companyDescription = data.company_description || data.companyDescription || data.description || data.overview || '';
        
        // Industry/Sector - handle array or string
        if (data.industry_sector) {
          if (Array.isArray(data.industry_sector)) {
            filledForm.industry = data.industry_sector[0] || '';
            filledForm.sector = data.industry_sector[1] || data.industry_sector[0] || '';
          } else {
            filledForm.industry = data.industry_sector;
          }
        } else {
          filledForm.industry = data.industry || '';
          filledForm.sector = data.sector || '';
        }
        
        filledForm.foundedYear = data.founded_year || data.foundedYear || data.founded || '';
        
        // Size & Revenue
        filledForm.numberOfEmployees = data.number_of_employees || data.numberOfEmployees || data.employees || data.numberOfPeople || '';
        filledForm.companySize = data.company_size || data.companySize || '';
        
        // Revenue - handle nested structure
        if (data.revenue) {
          if (typeof data.revenue === 'object') {
            // Handle nested revenue structure: revenue.annual.amount
            const revenueAmount = getValue(data.revenue, 'annual.amount', 'amount', 'annual');
            const revenueCurrency = getValue(data.revenue, 'annual.currency', 'currency');
            
            if (revenueAmount) {
              filledForm.revenueAmount = revenueAmount;
              filledForm.revenue = `$${(revenueAmount / 1000000).toFixed(1)}M`; // Format as $120M
            }
            if (revenueCurrency) {
              filledForm.revenueCurrency = revenueCurrency;
            }
          } else {
            filledForm.revenue = String(data.revenue);
          }
        }
        
        // Location - handle nested structure
        if (data.location) {
          const hq = data.location.headquarters || data.location;
          if (hq && typeof hq === 'object') {
            filledForm.headquarters = hq.address || hq.city || toString(hq) || '';
            filledForm.address = hq.address || '';
            filledForm.city = hq.city || '';
            filledForm.state = hq.state || '';
            filledForm.country = hq.country || '';
            filledForm.zipCode = hq.zip_code || hq.zipCode || hq.zip || '';
          } else {
            filledForm.headquarters = toString(hq);
          }
        } else {
          filledForm.headquarters = data.headquarters || '';
          filledForm.address = data.address || '';
          filledForm.city = data.city || '';
          filledForm.state = data.state || '';
          filledForm.country = data.country || '';
          filledForm.zipCode = data.zipCode || data.zip || '';
        }
        
        // Contact Information - handle nested structure
        if (data.contact_information) {
          filledForm.phone = data.contact_information.phone || data.contact_information.contactNumber || '';
          filledForm.email = data.contact_information.email || data.contact_information.contactEmail || '';
          filledForm.website = data.contact_information.website || '';
        } else {
          filledForm.phone = data.phone || data.contactNumber || '';
          filledForm.email = data.email || data.contactEmail || '';
          filledForm.website = data.website || '';
        }
        
        // Leadership - handle nested structure
        if (data.ceo_founder_names) {
          filledForm.ceo = data.ceo_founder_names.current_ceo || data.ceo_founder_names.ceo || '';
          filledForm.founder = data.ceo_founder_names.founder || '';
        } else {
          filledForm.ceo = data.ceo || data.chiefExecutiveOfficer || '';
          if (data.key_personnel && Array.isArray(data.key_personnel)) {
            const ceo = data.key_personnel.find(p => p.title && p.title.toLowerCase().includes('ceo'));
            const founder = data.key_personnel.find(p => p.title && p.title.toLowerCase().includes('founder'));
            if (ceo) filledForm.ceo = ceo.name || filledForm.ceo;
            if (founder) filledForm.founder = founder.name || filledForm.founder;
          }
          if (!filledForm.founder) {
            filledForm.founder = data.founder || (data.founders && Array.isArray(data.founders) ? data.founders.join(', ') : '');
          }
        }
        
        // Business Details - handle nested structure
        if (data.business_model) {
          if (typeof data.business_model === 'object') {
            filledForm.businessModel = data.business_model.type || 
                                     (data.business_model.details && Array.isArray(data.business_model.details) 
                                       ? data.business_model.details.join(', ') 
                                       : toString(data.business_model));
          } else {
            filledForm.businessModel = String(data.business_model);
          }
        } else {
          filledForm.businessModel = data.businessModel || '';
        }
        
        if (data.target_market) {
          if (typeof data.target_market === 'object') {
            const segments = data.target_market.segments || [];
            const industries = data.target_market.industries || [];
            filledForm.targetMarket = [...segments, ...industries].join(', ');
          } else {
            filledForm.targetMarket = String(data.target_market);
          }
        } else {
          filledForm.targetMarket = data.targetMarket || '';
        }
        
        filledForm.marketPresence = data.market_presence 
          ? (typeof data.market_presence === 'object' 
              ? toString(data.market_presence) 
              : String(data.market_presence))
          : (data.marketPresence || '');
        
        setFormData(filledForm);
        setSubmitStatus({ type: 'success', message: 'Data extracted and form auto-filled successfully!' });
      }
    } catch (error) {
      console.error('Extraction error:', error);
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message || 
                          'Failed to extract data. Please try again.';
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate recipient email if provided
    if (recipientEmail && !isValidEmail(recipientEmail)) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address' 
      });
      return;
    }

    setLoading(true);
    setSubmitStatus(null);
    setEmailStatus(null);

    try {
      // Send form data and recipient email
      const response = await axios.post(`${API_BASE_URL}/submit`, {
        formData: formData,
        recipientEmail: recipientEmail || null
      });
      
      if (response.data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Company data saved successfully to database!' 
        });
        
        // Handle email status
        if (response.data.email) {
          if (response.data.email.success) {
            setEmailStatus({ 
              type: 'success', 
              message: `Email sent successfully to ${recipientEmail}` 
            });
          } else {
            setEmailStatus({ 
              type: 'warning', 
              message: `Data saved but email failed: ${response.data.email.error}` 
            });
          }
        }
        
        // Show success modal
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.message || 
                          'Failed to save data. Please try again.';
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  // Email validation helper
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="company-form-container">
      {/* Text Input Section */}
      <div className="text-input-section">
        <h2>Step 1: Paste Company Information Text</h2>
        <textarea
          className="text-input"
          placeholder="Paste your long text paragraph containing company information here (up to 1500 lines)..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          rows={15}
        />
        <button 
          className="extract-btn" 
          onClick={handleExtract}
          disabled={loading}
        >
          {loading ? 'Extracting...' : 'Extract & Auto-Fill Form'}
        </button>
      </div>

      {/* Status Message */}
      {submitStatus && (
        <div className={`status-message ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}

      {/* Form Section */}
      <div className="form-section">
        <h2>Step 2: Review & Complete Form</h2>
        <form onSubmit={handleSubmit} className="company-form">
          {/* Basic Information */}
          <fieldset>
            <legend>Basic Information</legend>
            <div className="form-row">
              <div className="form-group">
                <label>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Industry</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Sector</label>
                <input
                  type="text"
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Founded Year</label>
                <input
                  type="number"
                  name="foundedYear"
                  value={formData.foundedYear}
                  onChange={handleInputChange}
                  min="1800"
                  max={new Date().getFullYear()}
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Company Description</label>
              <textarea
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
          </fieldset>

          {/* Size & Revenue */}
          <fieldset>
            <legend>Size & Revenue</legend>
            <div className="form-row">
              <div className="form-group">
                <label>Number of Employees</label>
                <input
                  type="number"
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Company Size</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                >
                  <option value="">Select Size</option>
                  <option value="Startup">Startup (1-10)</option>
                  <option value="Small">Small (11-50)</option>
                  <option value="Medium">Medium (51-200)</option>
                  <option value="Large">Large (201-1000)</option>
                  <option value="Enterprise">Enterprise (1000+)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Revenue</label>
                <input
                  type="text"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleInputChange}
                  placeholder="e.g., $10M, $500K"
                />
              </div>
              <div className="form-group">
                <label>Revenue Amount</label>
                <input
                  type="number"
                  name="revenueAmount"
                  value={formData.revenueAmount}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Currency</label>
                <select
                  name="revenueCurrency"
                  value={formData.revenueCurrency}
                  onChange={handleInputChange}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Location */}
          <fieldset>
            <legend>Location</legend>
            <div className="form-group full-width">
              <label>Headquarters</label>
              <input
                type="text"
                name="headquarters"
                value={formData.headquarters}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </fieldset>

          {/* Contact Information */}
          <fieldset>
            <legend>Contact Information</legend>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </fieldset>

          {/* Leadership */}
          <fieldset>
            <legend>Leadership</legend>
            <div className="form-row">
              <div className="form-group">
                <label>CEO</label>
                <input
                  type="text"
                  name="ceo"
                  value={formData.ceo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Founder</label>
                <input
                  type="text"
                  name="founder"
                  value={formData.founder}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </fieldset>

          {/* Business Details */}
          <fieldset>
            <legend>Business Details</legend>
            <div className="form-group full-width">
              <label>Business Model</label>
              <input
                type="text"
                name="businessModel"
                value={formData.businessModel}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Target Market</label>
              <input
                type="text"
                name="targetMarket"
                value={formData.targetMarket}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Market Presence</label>
              <input
                type="text"
                name="marketPresence"
                value={formData.marketPresence}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          {/* Email Input Section */}
          <fieldset>
            <legend>Email Notification (Optional)</legend>
            <div className="form-group full-width">
              <label>Send company information to email address</label>
              <input
                type="email"
                name="recipientEmail"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder="Enter email address to receive company information"
                className="email-input"
              />
              <small className="email-hint">
                Leave empty if you don't want to receive an email. The email will be sent from {process.env.REACT_APP_SYSTEM_EMAIL || 'system email'}.
              </small>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Submit & Save to Database'}
            </button>
          </div>
        </form>
      </div>

      {/* Extracted Data Preview (Optional) */}
      {extractedData && (
        <div className="extracted-data-preview">
          <h3>Extracted Data Preview (JSON)</h3>
          <pre>{JSON.stringify(extractedData, null, 2)}</pre>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="success-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Form Submitted Successfully!</h2>
            </div>
            <div className="modal-body">
              <p>Your company information has been successfully saved to the database.</p>
              
              {/* Email Status */}
              {emailStatus && (
                <div className={`email-status ${emailStatus.type}`}>
                  {emailStatus.type === 'success' && (
                    <span className="email-status-icon">✓</span>
                  )}
                  {emailStatus.type === 'warning' && (
                    <span className="email-status-icon">⚠</span>
                  )}
                  <span>{emailStatus.message}</span>
                </div>
              )}
              
              <div className="submitted-details">
                <div className="detail-item">
                  <span className="detail-label">Company:</span>
                  <span className="detail-value">{formData.companyName || 'N/A'}</span>
                </div>
                {formData.industry && (
                  <div className="detail-item">
                    <span className="detail-label">Industry:</span>
                    <span className="detail-value">{formData.industry}</span>
                  </div>
                )}
                {formData.numberOfEmployees && (
                  <div className="detail-item">
                    <span className="detail-label">Employees:</span>
                    <span className="detail-value">{formData.numberOfEmployees}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="modal-close-btn" 
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyForm;

