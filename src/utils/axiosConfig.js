import axios from 'axios';

// Create axios interceptor to automatically add token to all requests
axios.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access-token');
      if (token && token !== 'null') {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 403 errors globally
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access-token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axios;