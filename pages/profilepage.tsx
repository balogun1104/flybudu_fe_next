import React from 'react'
import styles from "../styles/profilepage.module.css"
import MobileNav from "../components/MobileNavBar/index"
import hero from "@/public/assets/images/Hero Illustration.png";
import About from '../components/About/About';
import Profile from "../components/Profile/Profile"
import Footer from '../components/Footer/index';
import Navbar from "../components/NavbarSecond/navbar"
import Image from 'next/image'
function ProfilePage() {
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
      <span className={styles.ilule}>Profile</span>
          <div className={styles.secondDiv}>
            <div className={styles.about}  >
                <About/>
            </div>
            <div className={styles.second}>
            <span className={styles.saved}>Profile</span>
        <Profile/>
            </div>
          </div>
          <MobileNav/>
          <Footer/>
    </div>

  )
}

export default ProfilePage
