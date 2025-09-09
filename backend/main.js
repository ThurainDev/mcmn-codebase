// express
const express = require("express");
const app = express();

// cors
const cors = require("cors");
app.use(cors());

// dotenv
require("dotenv").config();
// PORT is already declared later in the file, removing duplicate declaration

// morgan
const morgan = require("morgan");
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? "combined" : "dev"));

// Production hardening
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(helmet());
app.use(compression());

// Stricter CORS: allow configured frontend and local dev
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000'
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body size limits
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Basic API rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api', apiLimiter);

// dotenv
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// routes
const recipientDatasRoutes = require("./routes/recipientDatas");
const pagesRoutes = require("./routes/pages");
const contactsRoutes = require("./routes/contacts");
const songsRoutes = require("./routes/songs");

// mongodb - make it optional for development
const mongodbURI = process.env.MONGODB_URI;
const mongoose = require("mongoose");

// Connect to MongoDB if URI is provided
if (mongodbURI) {
  mongoose.connect(mongodbURI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.log("MongoDB connection failed:", error.message);
    });
} else {
  console.log("No MongoDB URI provided");
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});

// Simple test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use("/api/recipientDatas", recipientDatasRoutes);
app.use("/api/pages", pagesRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/songs", songsRoutes);

// 404 for unmatched API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Internal Server Error' });
});
