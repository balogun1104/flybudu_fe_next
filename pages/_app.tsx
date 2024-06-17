import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { OverlayContainer } from "@react-aria/overlays";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  if (!process.env.API_KEY || !process.env.SECRET_KEY) {
    throw new Error("Missing or invalid environment variables. Please check your configuration.");
  }

  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </NextUIProvider>
  );
}