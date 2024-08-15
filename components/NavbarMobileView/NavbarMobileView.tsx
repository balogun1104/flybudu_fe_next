import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/forgotpassword.module.css';
import flyBudu2 from '@/public/assets/images/flybuduLogo2.png';
import WhiteImg from '@/public/assets/images/whiteFlybudu.png';
import { MobileNavScreen } from '../MobileNavScreen';

interface NavbarMobileViewProps {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const NavbarMobileView: React.FC<NavbarMobileViewProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={styles.navbarWrap}>
      <Link href="/">
        <button style={{ border: "none", background: "none" }}>
          <Image
            className={styles.flybudu}
            style={{ cursor: "pointer" }}
            src={flyBudu2}
            alt="Fly Budu Logo"
          />
        </button>
      </Link>
      <input
        type="text"
        placeholder="Search Flights"
        className={styles.searchInput}
      />
      <div className={styles.quoteWrap}>
        <Image
          src={WhiteImg}
          alt="Menu"
          className={styles.quoteImg}
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />}
      </div>
    </div>
  );
};

export default NavbarMobileView;