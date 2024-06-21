import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.flybudu.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Log the request body and headers
    console.log('Request Body:', config.data);
    console.log('Request Headers:', config.headers);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Log the response body
    console.log('Response Body:', response.data);

    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;