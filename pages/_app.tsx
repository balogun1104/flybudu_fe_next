// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ReduxProvider } from "@/redux/ReduxProvider"; 

export default function App({ Component, pageProps }: AppProps) {
  if (!process.env.API_KEY || !process.env.SECRET_KEY) {
    throw new Error("Missing or invalid environment variables. Please check your configuration.");
  }

  return (
    <ReduxProvider>
      <NextUIProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </NextUIProvider>
    </ReduxProvider>
  );
}