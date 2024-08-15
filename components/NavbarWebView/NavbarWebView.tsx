import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/forgotpassword.module.css';
import flyBudu from '@/public/assets/images/flybuduLogo.png';
import Quote from '@/public/assets/svg/Payment.svg';
import Menu from '@/public/assets/svg/menu.svg';
import Avatar from '@/public/assets/images/whatsaap.jpg';
import { MobileNavScreen } from '../MobileNavScreen';


interface NavbarWebViewProps {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const NavbarWebView: React.FC<NavbarWebViewProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={styles.navbarWrap}>
      <Link href="/">
        <button style={{ border: "none", background: "none" }}>
          <Image
            className={styles.flybudu}
            style={{ cursor: "pointer" }}
            src={flyBudu}
            alt="Fly Budu Logo"
          />
        </button>
      </Link>
      <input
        type="text"
        placeholder="Search Flights"
        className={styles.searchInput}
      />
      <div>
        <div className={styles.navbar}>
          <Link className={styles.active} href="/">Home</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/featuredflights">Featured Flights</Link>
          <Link href="/contacts">Contact</Link>
        </div>
      </div>
      <div className={styles.quoteWrap}>
        <div className={styles.quote}>
          <span>Get a Quote</span>
          <span>
            <Image src={Quote} alt="Quote" />
          </span>
        </div>
        <Image src={Avatar} className={styles.avatar} alt="Avatar" />
        <Image
          src={Menu}
          alt="Menu"
          className={styles.quoteImg}
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />}
      </div>
    </div>
  );
};

export default NavbarWebView;