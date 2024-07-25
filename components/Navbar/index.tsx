import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import Menu from "@/public/assets/svg/menu.svg";
import Quote from "@/public/assets/svg/Payment.svg";
import flyBudu from "@/public/assets/images/flybuduLogo.png";
import WhiteImg from "@/public/assets/images/whiteFlybudu.png";
import QuoteBar from "../Qoute/quote";
import Link from "next/link";
import Image from "next/image";
import { MobileNavScreen } from "../MobileNavScreen";
import { useAuth } from "@/hooks/useAuth"; // Make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getInitials = (
    firstName: string | undefined,
    lastName: string | undefined
  ) => {
    if (firstName && lastName) {
      return `${firstName.charAt(0).toUpperCase()}${lastName
        .charAt(0)
        .toUpperCase()}`;
    } else if (firstName) {
      return firstName.charAt(0).toUpperCase();
    } else if (lastName) {
      return lastName.charAt(0).toUpperCase();
    }
    return "";
  };

  const renderUserAvatar = () => {
    if (isAuthenticated && (user?.name || user?.last_name)) {
      const initials = getInitials(user?.name, user?.last_name);
      return (
        <div
          className={styles.userInitials}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {initials}
        </div>
      );
    }
    return isMobile ? (
      <Image
        src={WhiteImg}
        alt=""
        className={styles.quoteImg}
        onClick={() => setOpenMenu(!openMenu)}
      />
    ) : (
      <Image
        src={Menu}
        alt=""
        className={styles.quoteImg}
        onClick={() => setOpenMenu(!openMenu)}
      />
    );
  };

  return (
    <div className={styles.navbarWrap}>
      <Link href="/">
        <button style={{ background: "none", border: "none" }}>
          <Image
            className={styles.logo}
            style={{ cursor: "pointer" }}
            src={flyBudu}
            alt="FlyBudu Logo"
          />
        </button>
      </Link>
      <div>
        <div className={styles.navbar}>
          <Link className={styles.active} href="#home">
            Home
          </Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/featuredflights">Featured Flights</Link>
          <Link href="/contacts">Contact</Link>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Flights"
        className={styles.searchInput}
      />
      <div className={styles.quoteWrap}>
        <div className={styles.quote}>
          <span
            onClick={() => {
              setIsOpen(true);
            }}
            style={{ cursor: "pointer" }}
          >
            Corporate Booking
          </span>
          <span>
            <Image src={Quote} alt="" />
          </span>
        </div>
        {renderUserAvatar()}
        {openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />}
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
