# Project Structure

```
textToJSon/
├── backend/                 # Backend API (Express.js)
│   ├── config/             # Configuration files
│   │   ├── database.js     # MongoDB connection
│   │   └── env.js          # Environment variables
│   ├── controllers/        # Business logic
│   │   ├── extractController.js
│   │   └── submitController.js
│   ├── middleware/         # Express middleware
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   ├── models/             # MongoDB models
│   │   └── Company.js
│   ├── routes/             # API routes
│   │   ├── extract.js
│   │   ├── submit.js
│   │   └── index.js
│   ├── services/           # External services
│   │   └── emailService.js
│   ├── app.js              # Express app setup
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies
│
├── frontend/               # Frontend (React.js)
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── CompanyForm.js
│   │   │   └── CompanyForm.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json        # Frontend dependencies
│
├── .env                    # Environment variables (not in git)
├── .env.example            # Example environment variables
├── .gitignore
├── package.json            # Workspace root
└── README.md
```

## Directory Structure Explained

### Backend (`/backend`)
- **config/**: Configuration files (database, environment)
- **controllers/**: Business logic separated from routes
- **middleware/**: Express middleware (error handling, validation)
- **models/**: MongoDB schemas and models
- **routes/**: API route definitions
- **services/**: External service integrations (email, AI)
- **app.js**: Express application setup
- **server.js**: Server entry point

### Frontend (`/frontend`)
- **public/**: Static assets
- **src/**: React source code
  - **components/**: Reusable React components

## Key Principles

1. **Separation of Concerns**: Backend and frontend are completely separate
2. **MVC Pattern**: Controllers handle business logic, routes handle routing
3. **Service Layer**: External services abstracted into service files
4. **Configuration**: All config in dedicated config folder
5. **Middleware**: Reusable middleware for common tasks

## Running the Project

### Development (both servers)
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

