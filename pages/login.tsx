/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import Profile from "../components/LoginTab/Tab";
import flyBudu from "@/public//assets/images/flybuduLogo.png";
import flyBudu2 from "@/public//assets/images/flybuduLogo2.png";

import Quote from "@/public//assets/svg/Payment.svg";
import Menu from "@/public//assets/svg/menu.svg";
import Avatar from "@/public//assets/images/whatsaap.jpg";
import Link from "next/link";
import WhiteImg from "@/public/assets/images/whiteFlybudu.png";
import { MobileNavScreen } from "../components/MobileNavScreen";
import MobileNav from "../components/MobileNavBar";
import Image from "next/image";
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import NavbarMobileView from "@/components/NavbarMobileView/NavbarMobileView";
import NavbarWebView from "@/components/NavbarWebView/NavbarWebView";
import Navbar from "@/components/NavbarSecond/navbar";
function Login() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.general}>
       <Navbar />
      <div className={styles.secondDiv}>
      <LoginHeader 
          title="Create Account"
          description="Let Fly Budu be your gateway to seamless travel. We don't just plan trips; we craft experiences that linger in your heart and soul."
        />
        <div className={styles.tabDiv}>
          <Profile />
        </div>
      </div>

      <MobileNav />
    </div>
  );
}

export default Login;
