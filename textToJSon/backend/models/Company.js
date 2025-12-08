const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  // Basic Information
  companyName: { type: String, default: '' },
  companyDescription: { type: String, default: '' },
  industry: { type: String, default: '' },
  sector: { type: String, default: '' },
  foundedYear: { type: Number, default: null },
  
  // Size & Revenue
  numberOfEmployees: { type: Number, default: null },
  revenue: { type: String, default: '' },
  revenueAmount: { type: Number, default: null },
  revenueCurrency: { type: String, default: 'USD' },
  companySize: { type: String, default: '' },
  
  // Location
  headquarters: { type: String, default: '' },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  country: { type: String, default: '' },
  zipCode: { type: String, default: '' },
  offices: [{ type: String }],
  
  // Contact Information
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
  website: { type: String, default: '' },
  
  // Leadership
  ceo: { type: String, default: '' },
  founder: { type: String, default: '' },
  founders: [{ type: String }],
  keyPersonnel: [{ 
    name: { type: String },
    position: { type: String }
  }],
  
  // Business Details
  products: [{ type: String }],
  services: [{ type: String }],
  technologies: [{ type: String }],
  businessModel: { type: String, default: '' },
  targetMarket: { type: String, default: '' },
  
  // Market Information
  competitors: [{ type: String }],
  partnerships: [{ type: String }],
  marketPresence: { type: String, default: '' },
  
  // Additional Information
  awards: [{ type: String }],
  achievements: [{ type: String }],
  socialMedia: {
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' }
  },
  
  // Additional fields for any other extracted data
  additionalInfo: { type: mongoose.Schema.Types.Mixed, default: {} },
  
  // Metadata
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field before saving
CompanySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Company', CompanySchema);
