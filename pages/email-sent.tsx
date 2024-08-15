/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import styles from "../styles/emailSent.module.css";
import flyBudu from "@/public/assets/images/flybuduLogo.png";
import Quote from "@/public/assets/svg/Payment.svg";
import EmailComponent from "../components/EmailSent/email";
import Menu from "@/public/assets/svg/menu.svg";
import flyBudu2 from "@/public/assets/images/flybuduLogo2.png";

import Avatar from "@/public/assets/images/whatsaap.jpg";
import Link from "next/link";
import { MobileNavScreen } from "../components/MobileNavScreen";
import WhiteImg from "@/public/assets/images/whiteFlybudu.png";
import MobileNav from "../components/MobileNavBar";
import Image from "next/image";
import NavbarMobileView from "@/components/NavbarMobileView/NavbarMobileView";
import NavbarWebView from "@/components/NavbarWebView/NavbarWebView";
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import Navbar from "@/components/NavbarSecond/navbar";

function EmailSent() {
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
        <div className={styles.createDiv}>
          {" "}
          <LoginHeader 
          title="Login"
          description="Let Fly Budu be your gateway to seamless travel. We don't just plan trips; we craft experiences that linger in your heart and soul."
        />
        </div>
        <div className={styles.tabDiv}>
          <EmailComponent />
        </div>
      </div>

      <MobileNav />
    </div>
  );
}

export default EmailSent;
