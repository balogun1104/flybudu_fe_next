import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Menu from "@/public/assets/images/menu 1.png";
import Quote from "@/public/assets/svg/Payment.svg";
import flyBudu2 from "@/public/assets/images/flybuduLogo2.png";
import { MobileNavScreen } from "../ManageBookingNavBar";
import QuoteBar from "../Qoute/quote";
import Logo from "@/public/assets/images/flybuduLogo.png";

import avatar from "@/public/assets/images/Avatar.png";
import WhiteLogo from "@/public/assets/images/whiteFlybudu.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import NavbarMobileView from "../NavbarMobileView/NavbarMobileView";
import NavbarWebView from "../NavbarWebView/NavbarWebView";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div>
        <div className={styles.header}>
      {isMobile ? (
          <NavbarMobileView openMenu={openMenu} setOpenMenu={setOpenMenu} />
        ) : (
          <NavbarWebView openMenu={openMenu} setOpenMenu={setOpenMenu} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
