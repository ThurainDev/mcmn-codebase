# Frontend-Backend API Integration Guide

## Overview
This guide explains how to connect your React frontend with the Node.js backend API to fetch dynamic data for your pages.

## Backend API Endpoints

### Pages API
All page data is available through the `/api/pages` endpoints:

- `GET /api/pages/home` - Home page data
- `GET /api/pages/about` - About page data  
- `GET /api/pages/what-we-provide` - What We Provide page data
- `GET /api/pages/music-distribution` - Music Distribution page data
- `GET /api/pages/tunes-academy` - Tunes Academy page data
- `GET /api/pages/contact` - Contact page data

### Response Format
All endpoints return data in this format:
```json
{
  "success": true,
  "data": {
    // Page-specific data structure
  }
}
```

## Frontend Integration

### 1. API Service
The frontend already has an API service configured in `src/services/api.js`:

```javascript
import { pagesAPI } from '../services/api';

// Example usage:
const homeData = await pagesAPI.getHomeData();
const aboutData = await pagesAPI.getAboutData();
```

### 2. Custom Hook
Use the `usePageData` hook for easy data fetching:

```javascript
import { usePageData } from '../hooks/usePageData';

function MyComponent() {
  const { data, loading, error } = usePageData('home');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>{data?.hero?.title}</h1>
      <p>{data?.hero?.subtitle}</p>
    </div>
  );
}
```

### 3. Data Structure Examples

#### Home Page
```javascript
{
  hero: {
    title: "Myanmar Christian Music Network",
    subtitle: "Connecting Christian musicians...",
    ctaText: "Learn More",
    ctaLink: "/about"
  },
  sections: {
    whatWeProvide: { /* ... */ },
    featuredArtists: { /* ... */ },
    latestReleases: { /* ... */ },
    upcomingEvents: { /* ... */ }
  }
}
```

#### About Page
```javascript
{
  hero: { /* ... */ },
  tabs: ["our story", "who we are", "what to expect", "mission and vision", "join us"],
  sections: {
    ourStory: { /* ... */ },
    whoWeAre: { /* ... */ },
    whatToExpect: { /* ... */ },
    missionAndVision: { /* ... */ }
  }
}
```

#### Music Distribution Page
```javascript
{
  hero: { /* ... */ },
  tabs: ["about", "services", "platforms", "process", "benefits", "faq"],
  sections: {
    about: { /* ... */ },
    services: { /* ... */ },
    platforms: { /* ... */ },
    process: { /* ... */ },
    benefits: { /* ... */ }
  }
}
```

## Implementation Steps

### Step 1: Update Your Component
Replace hardcoded content with API data:

```javascript
// Before (hardcoded)
<h1>Myanmar Christian Music Network</h1>

// After (API-driven)
<h1>{data?.hero?.title || "Myanmar Christian Music Network"}</h1>
```

### Step 2: Add Loading States
```javascript
if (loading) {
  return <LoadingSpinner />;
}
```

### Step 3: Handle Errors
```javascript
if (error) {
  return <ErrorMessage error={error} />;
}
```

### Step 4: Use Optional Chaining
```javascript
// Safe access to nested properties
const title = data?.hero?.title;
const services = data?.sections?.whatWeProvide?.services || [];
```

## Demo Page
Visit `/demo` to see all API data in action and understand the data structure.

## Benefits

1. **Dynamic Content**: Content can be updated without redeploying frontend
2. **Centralized Management**: All page data managed in one place
3. **Easy Updates**: Modify content through backend API
4. **Scalable**: Easy to add new pages and data
5. **Consistent**: Standardized data structure across all pages

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend is running on correct port
2. **API Not Found**: Check if backend server is running
3. **Data Undefined**: Use optional chaining (`?.`) and fallback values
4. **Loading Forever**: Check network tab for failed requests

### Debug Tips

1. Check browser console for errors
2. Use Network tab to see API requests
3. Test API endpoints directly with curl or Postman
4. Verify backend server is running on port 4000

## Next Steps

1. Update all your page components to use the API data
2. Add loading and error states for better UX
3. Consider adding caching for better performance
4. Add more dynamic content sections as needed
