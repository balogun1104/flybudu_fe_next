import React, {useState, useEffect} from 'react'
import styles from "../styles/login.module.css"
import Profile from "../components/LoginTab/Tab"
import flyBudu from "@/public//assets/images/flybuduLogo.png";
import flyBudu2 from "@/public//assets/images/flybuduLogo2.png"

import Quote from "@/public//assets/svg/Payment.svg";
import Menu from "@/public//assets/svg/menu.svg";
import Avatar from "@/public//assets/images/whatsaap.jpg";
import Link from 'next/link'
import WhiteImg from "@/public/assets/images/whiteFlybudu.png"
import { MobileNavScreen } from '../components/MobileNavScreen';
import MobileNav from '../components/MobileNavBar';
import Image from 'next/image';
function Login() {
  
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

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className={styles.general}>
    <div className={styles.header}>
      <div className={styles.navbarWrap}>
        <Link href="/">
          <button style={{ border: "none", background: "none" }}>
      
          {isMobile ? ( <Image className={styles.flybudu} style={{cursor:"pointer"}} src={flyBudu2} alt="" />) : ( <Image className={styles.flybudu} style={{cursor:"pointer"}} src={flyBudu} alt="" />)}
          </button>
        </Link>
        <input type="text" placeholder="Search Flights" className={styles.searchInput} />
        <div>
          <div className={styles.navbar}>
            <Link className={styles.active} href="/">
              Home
            </Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/featuredflights">Featured Flights</Link>
            <Link href="/contacts">Contact</Link>
          </div>
        </div>
        <div className={styles.quoteWrap}>
          <div className={styles.quote}>
            <span>Get a Qoute</span>
            <span>
              <Image src={Quote} alt="" />
            </span>
          </div>
          <Image src={Avatar} className={styles.avatar} alt="" />
          {isMobile ? (<Image src={WhiteImg} alt="" className={styles.quoteImg} onClick={() => setOpenMenu(!openMenu)} />
        ) : (<Image src={Menu} alt="" className={styles.quoteImg} onClick={() => setOpenMenu(!openMenu)} />
        )}

{
          openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />
        }
        </div>
      </div>
    </div>
    <div className={styles.secondDiv}>
      <div className={styles.createDiv}> <span className={styles.create}>Login</span>
       <span>Let Fly Budu be your gateway to seemless travel. We don't just plan trips; we craft experiences that linger in your heart and soul.</span></div>
       <div className={styles.tabDiv}>
    <Profile/>
    </div>
    </div>
 
<MobileNav/>
  </div>
  )
}

export default Login
