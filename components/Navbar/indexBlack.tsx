import React, { useState } from "react";
import styles from "./nav.module.css";
import Menu from "@/public/assets/svg/menu.svg";
import Quote from "@/public/assets/svg/Payment.svg";
import Logo from "@/public/assets/images/flybuduLogo.png";
import Arrow from "@/public/assets/images/arrowlr.png";
import Link from "next/link";
import QuoteBar from "../Qoute/quote";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.NavtwoContainer}>
      <div className={styles.navcon}>
        <div className={styles.navbarWrapBlack}>
          <button
            style={{ background: "none", border: "none" }}
            onClick={handleLogoClick}
          >
            <Image src={Logo} alt="" />
          </button>

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
          <div className={styles.quoteWrap}>
            <div className={styles.quote}>
              <span
                onClick={() => setIsOpen(true)}
                style={{ cursor: "pointer" }}
              >
                Corporate Booking
              </span>
              <span>
                <Image src={Quote} alt="" />
              </span>
            </div>

            <Image src={Menu} alt="" className={styles.quoteImg} />
          </div>
        </div>

        <div className={styles.NavTwo}>
          <div className={styles.nvTwo}>
            <span style={{ fontWeight: "bold" }}>Lagos(LOS)</span>
            <Image src={Arrow} alt="" />
            <span style={{ fontWeight: "bold" }}>Abuja(ABJ)</span>
          </div>
          <div className={styles.border}>
            <p>Mar. 15, 2023 - Mar. 24, 2023</p>
          </div>
          <div className={styles.nvTwo}>
            <p>1 Passenger, Economy</p>
            <button className={styles.edit}>Edit Search</button>
          </div>
        </div>
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
