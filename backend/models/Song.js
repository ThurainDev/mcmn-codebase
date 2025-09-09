const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  // Basic song information
  title: {
    type: String,
    required: [true, 'Song title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  artist: {
    type: String,
    required: [true, 'Artist name is required'],
    trim: true
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    enum: ['Pop', 'Rock', 'Jazz', 'Classical', 'Country', 'Hip-Hop', 'R&B', 'Electronic', 'Folk', 'Other']
  },
  
  // Song details
  lyrics: {
    type: String,
    required: [true, 'Lyrics are required']
  },
  duration: {
    type: Number, // in seconds
    default: 0
  },
  tempo: {
    type: String,
    enum: ['Slow', 'Medium', 'Up-Tempo'],
    required: true
  },
  vocalStyle: {
    type: String,
    enum: ['Male', 'Female', 'Duet', 'Choir', 'Instrumental'],
    required: true
  },
  vibe: {
    type: String,
    enum: ['Happy', 'Lighthearted', 'Comical', 'Heartfelt', 'Uplifting', 'Romantic', 'Reflective', 'Somber'],
    required: true
  },
  
  // Custom song details
  isCustom: {
    type: Boolean,
    default: false
  },
  recipientName: {
    type: String,
    trim: true
  },
  whoThisFor: {
    type: String,
    enum: ['Wife', 'Husband', 'Partner', 'Boyfriend', 'Girlfriend', 'Mom', 'Dad', 'Parents', 'Daughter', 'Son', 'Children', 'Grandmother', 'Grandfather', 'Grandparents', 'Family', 'Friend', 'Other']
  },
  occasion: {
    type: String,
    enum: ['Proposal', 'Anniversary', 'Birthday', 'Christmas', 'Engagement', 'Father\'s Day', 'Mother\'s Day', 'Just Because', 'Memorial', 'Graduation', 'New Baby', 'Valentine\'s Day', 'Wedding', 'Other']
  },
  
  // Prompts and details
  prompt1: {
    type: String,
    trim: true
  },
  prompt1Text: {
    type: String,
    trim: true
  },
  prompt2: {
    type: String,
    trim: true
  },
  prompt2Text: {
    type: String,
    trim: true
  },
  mustHaves: [{
    type: String,
    trim: true
  }],
  
  // Audio files
  audioFile: {
    type: String, // URL to audio file
    default: ''
  },
  demoFile: {
    type: String, // URL to demo file
    default: ''
  },
  
  // Status and workflow
  status: {
    type: String,
    enum: ['draft', 'in_progress', 'review', 'completed', 'delivered'],
    default: 'draft'
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  
  // Pricing
  price: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: 'USD'
  },
  
  // Metadata
  tags: [{
    type: String,
    trim: true
  }],
  description: {
    type: String,
    trim: true
  },
  
  // Assigned Artist
  assignedArtist: {
    type: String,
    trim: true
  },
  
  // Timestamps
  estimatedDelivery: {
    type: Date
  },
  deliveredAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for better query performance
songSchema.index({ title: 'text', artist: 'text', lyrics: 'text' });
songSchema.index({ status: 1 });
songSchema.index({ genre: 1, vibe: 1 });

module.exports = mongoose.model('Song', songSchema);
