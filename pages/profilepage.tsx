import React from 'react'
import { useSelector } from 'react-redux';
import styles from "../styles/profilepage.module.css"
import MobileNav from "../components/MobileNavBar/index"
import hero from "@/public/assets/images/Hero Illustration.png";
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
import { RootState } from '@/redux/store'; // Adjust the import path as needed

function ProfilePage() {
  const { bookingData, loading, error } = useSelector((state: RootState) => state.booking);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!bookingData || bookingData.regular.length === 0) return <div>No booking data available</div>;

  // Assuming we're using the first regular booking for user info
  const user = bookingData.regular[0];

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
        <div className={styles.about}>
          <div className={styles.genera}>
            <div className={styles.avatarImg}>
              <Image src={avatar} className={styles.avatar} alt="" />
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="/profiledetails"
              >
                <span className={styles.edit}>Edit Profile</span>
              </Link>
            </div>

            <div className={styles.relax}>
              <span style={{ fontWeight: "bold" }}>{user.title} {user.first_name} {user.surname}</span>
              <span>
                Phone: <b>{user.phone}</b>
              </span>
              <span>
                Email: <b>{user.email}</b>
              </span>
              <span>
                Nationality: <b>{user.nationality}</b>
              </span>
              <span>
                Gender: <b>{user.gender}</b>
              </span>
              <span>
                Date of Birth: <b>{new Date(user.DOB).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</b>
              </span>
            </div>

            <div className={styles.nameDiv}>
              <span>{user.first_name} {user.surname}</span>
              <p>{user.phone}</p>
              <p>{user.email}</p>
            </div>
            <div className={styles.listDiv}>
              <div className={styles.fourDiv}>
                <Link
                  href="/managebooking"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <div className={styles.profile}>
                    <Image alt="" src={booking} />
                    <span>My Bookings</span>
                  </div>
                </Link>

                <Link
                  href="/notification"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
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
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <span className={styles.saved}>Profile</span>
          <Profile userData={user} />
        </div>
      </div>
      <MobileNav/>
      <Footer/>
    </div>
  )
}

export default ProfilePage