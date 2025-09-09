===============================================================================
                    MCMN - Myanmar Christian Music Network
===============================================================================

Project Overview:
A full-stack web application for Myanmar Christian music distribution, 
licensing, and education services.

Services Provided:
- Music Distribution: Global distribution to digital platforms
- Licensing Services: Cover song and church licensing solutions  
- Tunes Academy: Music education and training
- Song Creation: Collaborative songwriting and production
- Contact & Consultation: Expert advice on music ministry

===============================================================================
                              ARCHITECTURE
===============================================================================

Frontend (React + Vite):
- Framework: React 19.1.0 with Vite 6.3.5
- Styling: Tailwind CSS with custom animations
- Routing: React Router DOM
- UI: Framer Motion, Lucide React, React Icons
- Language: Bilingual support (English/Myanmar)

Backend (Node.js + Express):
- Runtime: Node.js with Express 4.18.2
- Database: MongoDB with Mongoose ODM
- Process Management: PM2 for production
- Logging: Morgan for HTTP requests
- CORS: Enabled for cross-origin requests

===============================================================================
                            PROJECT STRUCTURE
===============================================================================

MCMN 2/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Main page components
│   │   ├── services/        # API service layer
│   │   ├── hooks/           # Custom React hooks
│   │   ├── router/          # Route configuration
│   │   ├── data/            # Static data (songs, etc.)
│   │   └── assets/          # Images and static assets
│   ├── public/              # Public assets
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── .env.production      # Production environment variables
│
├── backend/                  # Node.js backend API
│   ├── controllers/         # Route controllers
│   ├── routes/              # API route definitions
│   ├── models/              # MongoDB data models
│   ├── middleware/          # Custom middleware
│   ├── main.js              # Server entry point
│   ├── ecosystem.config.js  # PM2 configuration
│   ├── package.json         # Backend dependencies
│   ├── .env                 # Development environment
│   └── .env.production      # Production environment
│
└── Documentation/
    ├── API_DOCUMENTATION.md
    ├── API_INTEGRATION_GUIDE.md
    └── AUTHENTICATION_REMOVAL_SUMMARY.md

===============================================================================
                              GETTING STARTED
===============================================================================

Prerequisites:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- PM2 (for production deployment)
- Nginx (for reverse proxy)

Local Development Setup:

1. Clone the repository:
   git clone <repository-url>
   cd "MCMN 2"

2. Backend Setup:
   cd backend
   npm install
   
   # Create environment file
   cp .env.example .env
   # Edit .env with your MongoDB URI and configurations
   
   # Start development server
   npm run dev

3. Frontend Setup:
   cd frontend
   npm install
   
   # Start development server
   npm run dev

4. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4000
   - Health Check: http://localhost:4000/health

===============================================================================
                              CONFIGURATION
===============================================================================

Backend Environment Variables (.env):
NODE_ENV=development
PORT=4000
MONGODB_URI=mongodb://localhost:27017/mcmn_db
FRONTEND_URL=http://localhost:5173

Frontend Environment Variables (.env.production):
VITE_API_URL=http://your-domain.com:4000/api

PM2 Production Commands:
npm run pm2:start    # Start with PM2
npm run pm2:status   # Check status
npm run pm2:logs     # View logs
npm run pm2:restart  # Restart

===============================================================================
                               API ENDPOINTS
===============================================================================

Pages API:
GET /api/pages/home              # Home page data
GET /api/pages/about             # About page data
GET /api/pages/what-we-provide   # Services data
GET /api/pages/music-distribution # Distribution info
GET /api/pages/tunes-academy     # Academy data
GET /api/pages/contact           # Contact information

Songs API:
GET /api/songs                   # Get all songs
POST /api/songs                  # Create new song
PUT /api/songs/:id               # Update song
DELETE /api/songs/:id            # Delete song
GET /api/songs/search            # Search songs

Contacts API:
POST /api/contacts               # Submit contact form
GET /api/contacts                # Get all contacts
PUT /api/contacts/:id            # Update contact
DELETE /api/contacts/:id         # Delete contact

Health Check:
GET /health                      # Server health status

===============================================================================
                            PRODUCTION DEPLOYMENT
===============================================================================

1. Build Frontend:
   cd frontend
   npm run build

2. Configure Nginx:
   server {
       listen 80;
       server_name your-domain.com;
   
       # Backend API
       location /api/ {
           proxy_pass http://localhost:4000/;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   
       # Frontend
       location / {
           root /var/www/mcmn/frontend/dist;
           try_files $uri $uri/ /index.html;
       }
   }

3. Start Backend with PM2:
   cd backend
   npm run pm2:start

===============================================================================
                            DEVELOPMENT SCRIPTS
===============================================================================

Frontend Scripts:
npm run dev          # Start development server
npm run build        # Build for production
npm run build:prod   # Build with production environment
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run serve        # Serve built files

Backend Scripts:
npm start            # Start production server
npm run dev          # Start development server with nodemon
npm run pm2:start    # Start with PM2
npm run pm2:stop     # Stop PM2 process
npm run pm2:restart  # Restart PM2 process
npm run pm2:logs     # View PM2 logs
npm run pm2:status   # Check PM2 status

===============================================================================
                                FEATURES
===============================================================================

Frontend Features:
- Responsive Design: Mobile-first approach with Tailwind CSS
- Smooth Animations: Framer Motion for enhanced UX
- Multi-language Support: English and Myanmar language content
- Interactive Components: Swiper carousels, smooth scrolling
- Modern UI: Clean, professional design with custom styling

Backend Features:
- RESTful API: Well-structured API endpoints
- MongoDB Integration: Flexible document-based data storage
- Error Handling: Comprehensive error handling and logging
- CORS Support: Cross-origin resource sharing enabled
- Health Monitoring: Built-in health check endpoints
- Production Ready: PM2 process management and logging

===============================================================================
                              DOCUMENTATION
===============================================================================

- API Documentation: backend/API_DOCUMENTATION.md
- Integration Guide: backend/API_INTEGRATION_GUIDE.md
- Authentication Info: AUTHENTICATION_REMOVAL_SUMMARY.md

===============================================================================
                                SUPPORT
===============================================================================

For support and questions:
1. Check the API documentation
2. Review the integration guide
3. Test endpoints with the health check
4. Check application logs for debugging

===============================================================================
                                LICENSE
===============================================================================

This project is licensed under the ISC License.

===============================================================================

MCMN - Empowering Myanmar Christian Music Ministry

===============================================================================