import React from 'react'
import styles from "../styles/notification.module.css"
import Navbar from "../components/NavbarSecond/navbar"
import hero from "@/public/assets/images/Hero Illustration.png";
import About from '../components/About/About';
import NotificationMessge from '../components/NotificationMessage/NotificationMessge';
import Footer from "../components/Footer/index"
import MobileNav from "../components/MobileNavBar/index"
import Image from 'next/image';

function Notification() {
  return (
    <div className={styles.general}>
       <div className={styles.header}>
        <Navbar/>
      </div>
      <div className={styles.firstDiv}>
        <Image className={styles.hero} src={hero} alt="" />
        <div className={styles.textDiv}>
          <span className={styles.bigText}> MANAGE BOOKINGS</span>
          <p className={styles.small}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.about}>
        <About/>
        </div>
        <div className={styles.second}>
            <span className={styles.notification}>Notifications</span>
            <span className={styles.today}>TODAY</span>
            <div className={styles.message}>
            <NotificationMessge/>
            </div>
            <div className={styles.yesterdayDiv}>
            <span className={styles.yesterday}>YESTERDAY</span>
            </div>
            <div className={styles.messageBook}>
            <NotificationMessge/>
            </div>
        </div>
      </div>
      <MobileNav/>
      <Footer/>
    </div>
  )
}

export default Notification
