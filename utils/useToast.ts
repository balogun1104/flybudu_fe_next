// src/utils/useToast.ts

import { toast, ToastOptions } from 'react-toastify';

// Define default options
const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info', options: ToastOptions = {}) => {
  const toastOptions = { ...defaultOptions, ...options };

  switch (type) {
    case 'success':
      toast.success(message, toastOptions);
      break;
    case 'warning':
      toast.warning(message, toastOptions);
      break;
    case 'error':
      toast.error(message, toastOptions);
      break;
    default:
      toast.info(message, toastOptions);
  }
};