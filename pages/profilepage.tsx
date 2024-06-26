import React from 'react'
import styles from "../styles/profilepage.module.css"
import MobileNav from "../components/MobileNavBar/index"
import hero from "@/public/assets/images/Hero Illustration.png";
import About from '../components/About/About';
import Profile from "@/components/Profile/Profile"
import Footer from '../components/Footer/index';
import Navbar from "../components/NavbarSecond/navbar"
import Image from 'next/image'




import avatar from "@/public/assets/images/whatsaap.jpg";
import booking from "@/public/assets/images/managebookingblack.png";
import notification from "@/public/assets/images/Group 2.png";
import profileImg from "@/public/assets/images/profilewhite.png";
import savedImg from "@/public/assets/images/Currency Exchange.png";
import logoutImg from "@/public/assets/images/Wallet.png";
import Link from "next/link";
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
            
            



            <div className={styles.genera}>
      <div className={styles.avatarImg}>
        {" "}
        <Image src={avatar} className={styles.avatar} alt="" />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          href="/profiledetails"
        >
          {" "}
          <span className={styles.edit}>Edit Profile</span>
        </Link>
      </div>

      <div className={styles.relax}>
        <span style={{ fontWeight: "bold" }}> Mr. Unknown Viktim</span>
        <span>
          Phone: <b>081xxxxxxx</b>
        </span>
        <span>
          Email: <b>unknown@viktim.com</b>
        </span>
        <span>
          Nationality: <b>Nigerian</b>
        </span>
        <span>
          Gender:<b>Male</b>
        </span>
        <span>
          Date of Birth <b>Mar. 23, 2024</b>
        </span>
      </div>

      <div className={styles.nameDiv}>
        <span>Unknown user</span>
        <p>090xxxxxxxx</p>
        <p>Unknown@gmail.com</p>
      </div>
      <div className={styles.listDiv}>
        <div className={styles.fourDiv}>
          <Link
            href="/managebooking"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            {" "}
            <div className={styles.profile}>
              <Image alt="" src={booking} />
              <span>My Bookings</span>
            </div>
          </Link>

          <Link
            href="/notification"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            {" "}
            <div className={styles.notification}>
              <div className={styles.inner}>
                <Image alt="" src={notification} />
                <span>Notifications</span>
              </div>
              <p className={styles.red}>7</p>
            </div>
          </Link>

          <Link
            href="/profilepage"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className={styles.mybookingDiv}>
              <Image alt="" src={profileImg} />
              <span>Profile</span>
            </div>
          </Link>

          <Link
            href="/savedpassenger"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className={styles.profile}>
              <Image alt="" src={savedImg} />
              <span>Saved Passengers</span>
            </div>
          </Link>
        </div>
        <div className={styles.logoutDiv}>
          <div className={styles.profile}>
            <Image alt="" src={logoutImg} />
            <Link
              style={{ textDecoration: "none", cursor: "pointer" }}
              href="/login"
            >
              {" "}
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>





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
