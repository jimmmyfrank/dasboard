import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app-f57c4746-3838-4314-8c7e-de2713c61ef2.cleverapps.io/api', // Changed from 5000 to 5002
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('umucuruzi_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;