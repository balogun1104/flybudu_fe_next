import React, { useState, useEffect } from "react";
import styles from "../styles/forgotpassword.module.css";
import Profile from "../components/forgetpassword/password";
import Navbar from "../components/NavbarSecond/navbar";


import MobileNav from "../components/MobileNavBar";


function ForgotPassword() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.general}>
       <Navbar />
      <div className={styles.secondDiv}>
        <div className={styles.createDiv}>
          <span className={styles.create}>Login</span>
          <span className={styles.letFly}>
            Let Fly Budu be your gateway to seamless travel. We don't just plan
            trips; we craft experiences that linger in your heart and soul.
          </span>
        </div>
        <div className={styles.tabDiv}>
          <Profile />
        </div>
      </div>

      <MobileNav />
    </div>
  );
}

export default ForgotPassword;