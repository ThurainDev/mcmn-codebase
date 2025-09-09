# MCMN Backend API Documentation

## Base URL
```
Development: http://localhost:4000/api
Production: https://yourdomain.com/api
```

## Authentication
Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## API Endpoints

### Authentication (`/api/auth`)

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "jwt_token_here"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "jwt_token_here"
  }
}
```

#### Get User Profile
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

#### Update User Profile
```http
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "phone": "+1234567890",
  "avatar": "avatar_url"
}
```

#### Change Password
```http
PUT /api/auth/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

### Songs (`/api/songs`)

#### Get All Songs
```http
GET /api/songs?page=1&limit=10&genre=Pop&vibe=Happy&status=completed
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `genre`: Filter by genre
- `vibe`: Filter by vibe
- `status`: Filter by status
- `search`: Search in title, artist, lyrics
- `sortBy`: Sort field (default: createdAt)
- `sortOrder`: asc or desc (default: desc)

#### Get Song by ID
```http
GET /api/songs/:id
```

#### Create New Song
```http
POST /api/songs
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My Custom Song",
  "artist": "John Doe",
  "genre": "Pop",
  "lyrics": "Song lyrics here...",
  "tempo": "Medium",
  "vocalStyle": "Male",
  "vibe": "Happy",
  "isCustom": true,
  "recipientName": "Jane",
  "whoThisFor": "Wife",
  "occasion": "Anniversary",
  "prompt1": "Love story",
  "prompt1Text": "Our love story details...",
  "prompt2": "Special moments",
  "prompt2Text": "Special moments we shared...",
  "mustHaves": ["Include her name", "Mention our first date"],
  "price": 299.99
}
```

#### Update Song
```http
PUT /api/songs/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Song Title",
  "lyrics": "Updated lyrics..."
}
```

#### Delete Song
```http
DELETE /api/songs/:id
Authorization: Bearer <token>
```

#### Get User's Songs
```http
GET /api/songs/user/songs?page=1&limit=10&status=in_progress
Authorization: Bearer <token>
```

#### Update Song Status (Admin/Artist)
```http
PUT /api/songs/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "in_progress",
  "progress": 50,
  "estimatedDelivery": "2024-02-01T00:00:00.000Z"
}
```

#### Search Songs
```http
GET /api/songs/search?q=love&genre=Pop&vibe=Romantic&limit=20
```

### Contact Forms (`/api/contacts`)

#### Submit Contact Form
```http
POST /api/contacts
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "General Inquiry",
  "message": "I have a question about your services...",
  "contactType": "general",
  "phone": "+1234567890",
  "platforms": ["Facebook", "Youtube"]
}
```

#### Get All Contacts (Admin Only)
```http
GET /api/contacts?page=1&limit=10&status=new&contactType=general&search=john
Authorization: Bearer <token>
```

#### Get Contact by ID (Admin Only)
```http
GET /api/contacts/:id
Authorization: Bearer <token>
```

#### Update Contact Status (Admin Only)
```http
PUT /api/contacts/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "responded",
  "responseMessage": "Thank you for your inquiry. We'll get back to you soon."
}
```

#### Delete Contact (Admin Only)
```http
DELETE /api/contacts/:id
Authorization: Bearer <token>
```

#### Get Contact Statistics (Admin Only)
```http
GET /api/contacts/stats
Authorization: Bearer <token>
```

### Recipient Data (`/api/recipientDatas`)

#### Get All Recipient Data
```http
GET /api/recipientDatas
```

#### Get Recipient Data by ID
```http
GET /api/recipientDatas/:id
```

## Data Models

### User Model
```json
{
  "_id": "ObjectId",
  "name": "String (required)",
  "email": "String (required, unique)",
  "password": "String (required, hashed)",
  "phone": "String",
  "role": "String (enum: user, admin, artist)",
  "avatar": "String",
  "isActive": "Boolean (default: true)",
  "emailVerified": "Boolean (default: false)",
  "lastLogin": "Date",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Song Model
```json
{
  "_id": "ObjectId",
  "title": "String (required)",
  "artist": "String (required)",
  "genre": "String (enum: Pop, Rock, Jazz, Classical, Country, Hip-Hop, R&B, Electronic, Folk, Other)",
  "lyrics": "String (required)",
  "duration": "Number",
  "tempo": "String (enum: Slow, Medium, Up-Tempo)",
  "vocalStyle": "String (enum: Male, Female, Duet, Choir, Instrumental)",
  "vibe": "String (enum: Happy, Lighthearted, Comical, Heartfelt, Uplifting, Romantic, Reflective, Somber)",
  "isCustom": "Boolean (default: false)",
  "recipientName": "String",
  "whoThisFor": "String (enum: Wife, Husband, Partner, etc.)",
  "occasion": "String (enum: Proposal, Anniversary, Birthday, etc.)",
  "prompt1": "String",
  "prompt1Text": "String",
  "prompt2": "String",
  "prompt2Text": "String",
  "mustHaves": ["String"],
  "audioFile": "String (URL)",
  "demoFile": "String (URL)",
  "status": "String (enum: draft, in_progress, review, completed, delivered)",
  "progress": "Number (0-100)",
  "price": "Number",
  "currency": "String (default: USD)",
  "tags": ["String"],
  "description": "String",
  "createdBy": "ObjectId (ref: User)",
  "assignedArtist": "ObjectId (ref: User)",
  "estimatedDelivery": "Date",
  "deliveredAt": "Date",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Contact Model
```json
{
  "_id": "ObjectId",
  "firstName": "String (required)",
  "lastName": "String (required)",
  "email": "String (required)",
  "phone": "String",
  "subject": "String (required)",
  "message": "String (required)",
  "contactType": "String (enum: general, song_request, academy, licensing, distribution, support)",
  "instrument": "String",
  "platforms": ["String (enum: Facebook, Youtube, Others)"],
  "status": "String (enum: new, in_progress, responded, closed)",
  "respondedAt": "Date",
  "responseMessage": "String",
  "user": "ObjectId (ref: User)",
  "ipAddress": "String",
  "userAgent": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Error Responses

### Validation Error
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Please enter a valid email",
    "password": "Password must be at least 6 characters"
  }
}
```

### Authentication Error
```json
{
  "success": false,
  "message": "Access token required"
}
```

### Authorization Error
```json
{
  "success": false,
  "message": "Insufficient permissions"
}
```

### Not Found Error
```json
{
  "success": false,
  "message": "Song not found"
}
```

### Server Error
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error details (development only)"
}
```

## Rate Limiting

- **Limit**: 100 requests per 15 minutes per IP
- **Headers**: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

## CORS

The API supports CORS for the following origins:
- Development: `http://localhost:3000`, `http://localhost:5173`
- Production: Your configured domain

## Health Check

```http
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "environment": "production"
}
```

## Environment Variables

```env
NODE_ENV=production
PORT=4000
MONGODB_URI=mongodb://localhost:27017/mcmn_db
JWT_SECRET=your-super-secret-jwt-key
FRONTEND_URL=https://yourdomain.com
```

## Frontend Integration

### Using the API Service

```javascript
import { authAPI, songsAPI, contactAPI } from '../services/api';

// Register user
const registerUser = async (userData) => {
  try {
    const response = await authAPI.register(userData);
    if (response.success) {
      // Handle successful registration
      console.log('User registered:', response.data.user);
    }
  } catch (error) {
    console.error('Registration failed:', error.message);
  }
};

// Create song
const createSong = async (songData) => {
  try {
    const response = await songsAPI.createSong(songData);
    if (response.success) {
      console.log('Song created:', response.data.song);
    }
  } catch (error) {
    console.error('Song creation failed:', error.message);
  }
};

// Submit contact form
const submitContact = async (contactData) => {
  try {
    const response = await contactAPI.submitContact(contactData);
    if (response.success) {
      console.log('Contact submitted:', response.data.contact);
    }
  } catch (error) {
    console.error('Contact submission failed:', error.message);
  }
};
```

## Testing the API

### Using curl

```bash
# Test health endpoint
curl http://localhost:4000/health

# Register user
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Get songs (with token)
curl -X GET http://localhost:4000/api/songs \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman

1. Import the API endpoints into Postman
2. Set the base URL to `http://localhost:4000/api`
3. For protected routes, add the Authorization header with your JWT token
4. Test the endpoints with sample data

## Deployment

The API is production-ready with:
- Security middleware (Helmet, rate limiting)
- CORS configuration
- Error handling
- Logging
- Health checks
- PM2 process management
- Nginx reverse proxy support
- Docker support
- Comprehensive monitoring and notifications
