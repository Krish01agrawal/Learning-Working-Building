const { GoogleGenerativeAI } = require('@google/generative-ai');
const config = require('../config/env');

/**
 * Extract Controller
 * Handles company data extraction from text using Gemini AI
 */
class ExtractController {
  constructor() {
    this.genAI = config.GEMINI_API_KEY 
      ? new GoogleGenerativeAI(config.GEMINI_API_KEY)
      : null;
    
    this.modelNames = [
      'models/gemini-2.5-flash',
      'models/gemini-2.5-pro',
      'models/gemini-2.0-flash',
      'models/gemini-2.0-flash-001',
      'models/gemini-2.5-flash-lite'
    ];
  }

  /**
   * Extract company data from text
   */
  extractCompanyData = async (req, res, next) => {
    try {
      const { text } = req.body;

      // Validation
      if (!text || typeof text !== 'string') {
        return res.status(400).json({
          success: false,
          error: 'Text is required and must be a string'
        });
      }

      if (!this.genAI) {
        return res.status(500).json({
          success: false,
          error: 'Gemini API key is not configured'
        });
      }

      // Create extraction prompt
      const prompt = this.createExtractionPrompt(text);

      // Try models with fallback
      const extractedText = await this.tryModels(prompt);

      // Parse JSON from response
      const extractedData = this.parseJsonResponse(extractedText);

      res.json({
        success: true,
        data: extractedData,
        message: 'Company data extracted successfully'
      });

    } catch (error) {
      next(error);
    }
  };

  /**
   * Create extraction prompt
   */
  createExtractionPrompt(text) {
    return `You are an expert data extraction assistant. Extract all possible information from the following text about a company and return it as a comprehensive JSON object. 

Extract the following information if available:
- Company name
- Company description/overview
- Industry/sector
- Founded year
- Number of employees
- Revenue (annual, monthly, or any financial data)
- Location/address (headquarters, offices)
- Contact information (phone, email, website)
- CEO/Founder names
- Products/services
- Technologies used
- Market presence
- Key personnel
- Company size
- Business model
- Target market
- Competitors
- Partnerships
- Awards/achievements
- Social media links
- Any other relevant company information

Return ONLY a valid JSON object with all extracted information. Use null for missing information. Structure the JSON with clear, descriptive keys. Make sure the JSON is properly formatted and can be parsed.

Text to extract from:
${text}

Return the JSON object now:`;
  }

  /**
   * Try multiple models until one works
   */
  async tryModels(prompt) {
    let lastError = null;

    for (const modelName of this.modelNames) {
      try {
        console.log(`Attempting to use model: ${modelName}`);
        const model = this.genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const extractedText = response.text();
        
        console.log(`✓ Successfully used model: ${modelName}`);
        return extractedText;
      } catch (modelError) {
        lastError = modelError;
        console.log(`✗ Model ${modelName} failed: ${modelError.message}`);
        continue;
      }
    }

    // All models failed
    const errorDetails = lastError?.message || 'Unknown error';
    throw new Error(
      `All models failed. Last error: ${errorDetails}. ` +
      `Tried models: ${this.modelNames.join(', ')}. ` +
      `Please verify your GEMINI_API_KEY is valid and has access to Gemini models.`
    );
  }

  /**
   * Parse JSON from Gemini response
   */
  parseJsonResponse(extractedText) {
    let jsonString = extractedText.trim();

    // Remove markdown code blocks if present
    if (jsonString.startsWith('```json')) {
      jsonString = jsonString.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (jsonString.startsWith('```')) {
      jsonString = jsonString.replace(/```\n?/g, '');
    }

    try {
      return JSON.parse(jsonString);
    } catch (parseError) {
      // Try to extract JSON from the response
      const jsonMatch = jsonString.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error('Failed to parse JSON from Gemini response');
    }
  }
}

module.exports = new ExtractController();

