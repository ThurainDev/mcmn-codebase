const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  // Contact information
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true
  },
  
  // Message details
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  
  // Contact type
  contactType: {
    type: String,
    enum: ['general', 'song_request', 'academy', 'licensing', 'distribution', 'support'],
    default: 'general'
  },
  
  // Additional fields for specific contact types
  instrument: {
    type: String,
    trim: true
  },
  platforms: [{
    type: String,
    enum: ['Facebook', 'Youtube', 'Others']
  }],
  
  // Status
  status: {
    type: String,
    enum: ['new', 'in_progress', 'responded', 'closed'],
    default: 'new'
  },
  
  // Response tracking
  respondedAt: {
    type: Date
  },
  responseMessage: {
    type: String,
    trim: true
  },
  

  
  // IP and user agent for spam protection
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ contactType: 1 });

module.exports = mongoose.model('Contact', contactSchema);
