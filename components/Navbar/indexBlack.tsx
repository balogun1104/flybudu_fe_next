import React, { useState } from "react";
import styles from "./nav.module.css";
import Menu from "../../assets/svg/menu.svg";
import Quote from "../../assets/svg/Payment.svg";
import Logo from "../../assets/images/flybuduLogo.png";
import Arrow from "../../assets/images/arrowlr.png";
import { Link } from "react-router-dom";
import QuoteBar from "../Qoute/quote"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.NavtwoContainer}>
      <div className={styles.navcon}>
        <div className={styles.navbarWrapBlack}>
       <Link to="/">
       <button style={{background:"none", border:"none"}}><img src={Logo} alt="" />  </button>
       </Link>
          
          <div>
            <div className={styles.navbar}>
              <a className={styles.active} href="/flight">
                flight
              </a>
              <a href="/destinations">Destinations</a>
              <a href="/featuredflights">Featured Flights</a>
              <a href="/contacts">Contact</a>
            </div>
          </div>
          <div className={styles.quoteWrap}>
            <div className={styles.quote}>
              <span onClick={()=>{setIsOpen(true)}} style={{cursor:"pointer"}}>Corporate Booking</span>
              <span>
                <img src={Quote} alt="" />
              </span>
            </div>

            <img src={Menu} alt="" className={styles.quoteImg} />
          </div>
        </div>

        <div className={styles.NavTwo}>
          <div className={styles.nvTwo}>
            <span style={{fontWeight:"bold"}}>Lagos(LOS)</span>
            <img src={Arrow} alt="" />
            <span style={{fontWeight:"bold"}}>Abuja(ABJ)</span>
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
      {isOpen && <QuoteBar setIsOpen={setIsOpen}/>}

    </div>
  );
};

export default Navbar;
