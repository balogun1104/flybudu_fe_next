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
      <div className={styles.NavtwoContainer}>
        <div className={styles.navcon}>
          <div className={styles.navbarWrapBlack}>
          <div
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={handleLogoClick}
            >
              {isMobile ? (
                <Image
                  className={styles.flybudu}
                  src={flyBudu2}
                  alt=""
                />
              ) : (
                <Image
                  className={styles.flybudu}
                  src={Logo}
                  alt=""
                />
              )}
            </div>

            <div>
              <div className={styles.navbar}>
                <Link className={styles.active} href="/flight">
                  flight
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
              <div
                onClick={() => {
                  setIsOpen(true);
                }}
                style={{ cursor: "pointer" }}
                className={styles.quote}
              >
                <span>Corporate Booking</span>
                <span>
                  <Image src={Quote} alt="" />
                </span>
              </div>
              <Image alt="" className={styles.avatar} src={avatar} />
              {isMobile ? (
                <Image
                  src={WhiteLogo}
                  alt=""
                  className={styles.quoteImg}
                  onClick={() => setOpenMenu(!openMenu)}
                />
              ) : (
                <Image
                  src={Menu}
                  alt=""
                 
                  onClick={() => setOpenMenu(!openMenu)}
                />
              )}
            </div>
          </div>

          {/* <div className={styles.NavTwo}>
          <div className={styles.nvTwo}>
            <span style={{fontWeight:"bold"}}>Lagos(LOS)</span>
            <Image src={Arrow} alt="" />
            <span style={{fontWeight:"bold"}}>Abuja(ABJ)</span>
          </div>
          <div className={styles.border}>
            <p>Mar. 15, 2023 - Mar. 24, 2023</p>
          </div>
          <div className={styles.nvTwo}>
            <p>1 Passenger, Economy</p>
            <button className={styles.edit}>Edit Search</button>
          </div>
        </div> */}
        </div>

        {openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />}
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Navbar;
