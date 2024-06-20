import axios from 'axios';

/**
 * Create an Axios instance with a base URL and common headers.
 * This instance will be used throughout the application for making API requests.
 */
const axiosInstance = axios.create({
  baseURL: 'https://api.flybudu.com/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor for adding the user token to the headers.
 * This interceptor will be called before each request is sent.
 * It retrieves the user token from local storage (or your preferred storage method)
 * and adds it to the headers of the request.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken'); // Retrieve the user token from local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add the user token to the headers
    }
    return config;
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for handling common error responses.
 * This interceptor will be called after each response is received.
 * It checks for specific error status codes and performs appropriate actions.
 * For example, if an unauthorized error (status code 401) is received,
 * it can redirect the user to the login page.
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      // Redirect the user to the login page
      window.location.href = '/login';
    }
    // Handle any other error responses
    return Promise.reject(error);
  }
);

// Export the Axios instance for use in other parts of the application
export default axiosInstance;