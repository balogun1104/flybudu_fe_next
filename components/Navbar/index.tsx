import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import Menu from "@/public/assets/svg/menu.svg";
import Quote from "@/public/assets/svg/Payment.svg";
import flyBudu from "@/public/assets/images/flybuduLogo.png"

import WhiteImg from "@/public/assets/images/whiteFlybudu.png"
import QuoteBar from "../Qoute/quote"
import Link from "next/link"
import Image from "next/image";
import { MobileNavScreen } from "../MobileNavScreen";



// function isMobileDiv(){
//   return ((window) .width() > 768)
// }



const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.navbarWrap}>
      <Link href="/">
        <button style={{ background: "none", border: "none" }}>   <Image className={styles.logo} style={{ cursor: "pointer" }} src={flyBudu} alt="dfs" /></button>
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
      <input type="text" placeholder="Search Flights" className={styles.searchInput} />
      <div className={styles.quoteWrap}>
        <div className={styles.quote}>
          <span onClick={()=>{setIsOpen(true)}} style={{cursor:"pointer"}}>Corporate Booking</span>
          <span>
            <Image src={Quote} alt="" />
          </span>
        </div>
        {isMobile ? (<Image src={WhiteImg} alt="" className={styles.quoteImg} onClick={() => setOpenMenu(!openMenu)} />
        ) : (<Image src={Menu} alt="" className={styles.quoteImg} onClick={() => setOpenMenu(!openMenu)} />
        )}

        {
          openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />
        }
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default Navbar;
