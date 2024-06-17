import axios from "axios";
import { StatusCodes } from "@/utils/StatusCode";
import { showToast } from "@/utils/useToast";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STAGING_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Log the request body and headers
    console.log("Request Body:", config.data);
    console.log("Request Headers:", config.headers);

    return config;
  },
  (error) => {
    showToast("Error setting up the request", "error");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Log the response body
    console.log("Response Body:", response.data);

    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case StatusCodes.UNAUTHORIZED:
          showToast("Your session has expired. Please log in again.", "error");
          window.location.href = "/login";
          break;
        case StatusCodes.FORBIDDEN:
          showToast("You don't have permission to access this resource.", "error");
          break;
        case StatusCodes.NOT_FOUND:
          showToast("The requested resource was not found.", "error");
          break;
        case StatusCodes.INTERNAL_SERVER_ERROR:
          showToast("An internal server error occurred. Please try again later.", "error");
          break;
        default:
          showToast(`An error occurred: ${error.response.data.message || "Unknown error"}`, "error");
      }
    } else if (error.request) {
      showToast("No response received from the server. Please check your internet connection.", "error");
    } else {
      showToast(`Error: ${error.message}`, "error");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;