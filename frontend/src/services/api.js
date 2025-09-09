// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : (typeof window !== 'undefined' && window.location?.origin
        ? `${window.location.origin.replace(/\/$/, '')}/api`
        : 'http://localhost:4000/api');

// API Service Class
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get headers
  getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const contentType = response.headers.get('content-type') || '';
      let data;

      if (contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Expected JSON but received: ${text.slice(0, 120)}...`);
      }

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // GET request
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url, { method: 'GET' });
  }

  // POST request
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

// Create API instance
const api = new ApiService();



// Songs API
export const songsAPI = {
  // Get all songs
  getAllSongs: (params = {}) => api.get('/songs', params),

  // Get song by ID
  getSongById: (id) => api.get(`/songs/${id}`),

  // Create new song
  createSong: (songData) => api.post('/songs', songData),

  // Update song
  updateSong: (id, songData) => api.put(`/songs/${id}`, songData),

  // Delete song
  deleteSong: (id) => api.delete(`/songs/${id}`),

  // Update song status (admin/artist)
  updateSongStatus: (id, statusData) => api.put(`/songs/${id}/status`, statusData),

  // Search songs
  searchSongs: (params = {}) => api.get('/songs/search', params),
};

// Contact API
export const contactAPI = {
  // Submit contact form
  submitContact: (contactData) => api.post('/contacts', contactData),

  // Get all contacts (admin only)
  getAllContacts: (params = {}) => api.get('/contacts', params),

  // Get contact by ID (admin only)
  getContactById: (id) => api.get(`/contacts/${id}`),

  // Update contact status (admin only)
  updateContactStatus: (id, statusData) => api.put(`/contacts/${id}/status`, statusData),

  // Delete contact (admin only)
  deleteContact: (id) => api.delete(`/contacts/${id}`),

  // Get contact statistics (admin only)
  getContactStats: () => api.get('/contacts/stats'),
};

// Recipient Data API (existing)
export const recipientDataAPI = {
  // Get all recipient data
  getAll: () => api.get('/recipientDatas'),

  // Get recipient data by ID
  getById: (id) => api.get(`/recipientDatas/${id}`),
};

// Pages API
export const pagesAPI = {
  // Get home page data
  getHomeData: () => api.get('/pages/home'),

  // Get about page data
  getAboutData: () => api.get('/pages/about'),

  // Get what-we-provide page data
  getWhatWeProvideData: () => api.get('/pages/what-we-provide'),

  // Get music-distribution page data
  getMusicDistributionData: () => api.get('/pages/music-distribution'),

  // Get tunes-academy page data
  getTunesAcademyData: () => api.get('/pages/tunes-academy'),

  // Get contact page data
  getContactData: () => api.get('/pages/contact'),
};

// Utility functions
export const apiUtils = {
  // API base URL
  getBaseURL: () => api.baseURL,
};

// Export API instance for direct use
export default api;
