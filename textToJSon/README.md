# Text to JSON - Company Information Extractor

A full-stack application that extracts structured company information from long text paragraphs using Google's Gemini AI and auto-fills a form for easy data submission.

## Features

- 🤖 **AI-Powered Extraction**: Uses Google Gemini API to extract structured JSON from long text paragraphs
- 📝 **Auto-Fill Form**: Automatically populates form fields with extracted data
- 💾 **Database Storage**: Saves form data to MongoDB
- 📧 **Email Notifications**: Send company information via email using Resend (optional, easy setup)
- 🎨 **Modern UI**: Beautiful, responsive React frontend
- ⚡ **Fast & Efficient**: Handles large text inputs (1500+ lines)

## Project Structure

```
textToJSon/
├── backend/          # Express.js API server
├── frontend/          # React.js frontend
└── .env              # Environment variables
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed structure.

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- Google Gemini AI API
- Resend for email delivery

### Frontend
- React.js
- Axios for API calls
- Modern CSS with responsive design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Google Gemini API Key
- Resend account (for email feature - optional, free tier available)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd textToJSon
   ```

2. **Install all dependencies**
   ```bash
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   cd ..
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/companyData
   GEMINI_API_KEY=your_gemini_api_key_here
   RESEND_API_KEY=your_resend_api_key_here
   SYSTEM_EMAIL=onboarding@resend.dev
   ```

   For the frontend, create `frontend/.env`:
   ```env
   REACT_APP_API_URL=http://localhost:5001/api
   ```

   See [RESEND_SETUP.md](./RESEND_SETUP.md) for email setup instructions.

## Running the Application

### Development (Both servers)
```bash
npm run dev
```

### Backend only
```bash
npm run dev:backend
```

### Frontend only
```bash
npm run dev:frontend
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

## Usage

1. **Paste Company Text**: In the text area, paste your long paragraph containing company information (up to 1500 lines)

2. **Extract Data**: Click "Extract & Auto-Fill Form" button. The AI will analyze the text and extract all available information

3. **Review & Edit**: The form will be automatically filled with extracted data. Review and edit any fields as needed

4. **Add Email (Optional)**: Enter an email address in the "Email Notification" section if you want to receive the company information via email

5. **Submit**: Click "Submit & Save to Database" to save the information to MongoDB and optionally send email

## API Endpoints

### POST `/api/extract`
Extracts company information from text using Gemini AI.

**Request:**
```json
{
  "text": "Your long company information text here..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "companyName": "...",
    "industry": "...",
    "numberOfEmployees": 100,
    ...
  }
}
```

### POST `/api/submit`
Saves company form data to database and optionally sends email.

**Request:**
```json
{
  "formData": {
    "companyName": "...",
    "industry": "...",
    ...
  },
  "recipientEmail": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Company data saved successfully",
  "data": { ... },
  "email": {
    "success": true,
    "messageId": "resend-message-id"
  }
}
```

### GET `/api/submit`
Retrieves all saved companies.

### GET `/api/health`
Health check endpoint.

## Database Schema

The Company model includes fields for:
- Basic Information (name, description, industry, sector, founded year)
- Size & Revenue (employees, revenue, company size)
- Location (headquarters, address, city, state, country)
- Contact Information (phone, email, website)
- Leadership (CEO, founder, key personnel)
- Business Details (products, services, business model, target market)
- Additional Information (competitors, partnerships, awards, social media)

## Troubleshooting

1. **MongoDB Connection Error**: Make sure MongoDB is running locally or update `MONGODB_URI` in `.env`

2. **Gemini API Error**: Verify your `GEMINI_API_KEY` is correct in `.env`

3. **Email Not Sending**: 
   - Verify `RESEND_API_KEY` is set in `.env`
   - For testing: Use `SYSTEM_EMAIL=onboarding@resend.dev` (no setup needed)
   - Get API key from: https://resend.com/api-keys
   - Check Resend dashboard for delivery logs
   - For production: Verify your domain at https://resend.com/domains

4. **CORS Issues**: Ensure the backend is running on port 5001 and frontend on port 3000

5. **Port Already in Use**: Change the `PORT` in `.env` or kill the process using the port

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!
