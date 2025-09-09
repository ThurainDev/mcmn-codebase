const mongoose = require('mongoose');

const academyEnrollmentSchema = new mongoose.Schema({
  // Student information
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
    maxlength: [100, 'Student name cannot exceed 100 characters']
  },
  studentEmail: {
    type: String,
    required: [true, 'Student email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  studentPhone: {
    type: String,
    required: [true, 'Student phone is required'],
    trim: true
  },
  studentAge: {
    type: Number,
    min: [3, 'Student must be at least 3 years old'],
    max: [100, 'Invalid age']
  },
  
  // Course information
  courseType: {
    type: String,
    enum: ['private_lessons', 'group_classes', 'online_classes', 'summer_camps'],
    required: [true, 'Course type is required']
  },
  instrument: {
    type: String,
    required: [true, 'Instrument is required'],
    enum: ['Piano', 'Guitar', 'Violin', 'Drums', 'Vocal', 'Bass', 'Saxophone', 'Flute', 'Other']
  },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  
  // Schedule preferences
  preferredDays: [{
    type: String,
    enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  }],
  preferredTime: {
    type: String,
    enum: ['morning', 'afternoon', 'evening'],
    default: 'afternoon'
  },
  
  // Additional information
  experience: {
    type: String,
    trim: true,
    maxlength: [500, 'Experience description cannot exceed 500 characters']
  },
  goals: {
    type: String,
    trim: true,
    maxlength: [500, 'Goals description cannot exceed 500 characters']
  },
  
  // Pricing and payment
  coursePrice: {
    type: Number,
    required: [true, 'Course price is required']
  },
  currency: {
    type: String,
    default: 'USD'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'partial', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'bank_transfer', 'paypal', 'cash'],
    default: 'credit_card'
  },
  
  // Enrollment status
  status: {
    type: String,
    enum: ['pending', 'approved', 'active', 'completed', 'cancelled'],
    default: 'pending'
  },
  
  // Assignment
  assignedInstructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  // Schedule
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  
  // Notes
  adminNotes: {
    type: String,
    trim: true
  },
  studentNotes: {
    type: String,
    trim: true
  },
  
  // User relationship
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Index for better query performance
academyEnrollmentSchema.index({ status: 1, createdAt: -1 });
academyEnrollmentSchema.index({ courseType: 1, instrument: 1 });
academyEnrollmentSchema.index({ studentEmail: 1 });
academyEnrollmentSchema.index({ assignedInstructor: 1 });

module.exports = mongoose.model('AcademyEnrollment', academyEnrollmentSchema);
