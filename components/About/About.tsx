import React from "react";
import styles from "./about.module.css";
import avatar from "@/public/assets/images/whatsaap.jpg";
import booking from "@/public/assets/images/Vector.png";
import notification from "@/public/assets/images/Group 2.png";
import profileImg from "@/public/assets/images/Layer 2.png";
import savedImg from "@/public/assets/images/Currency Exchange.png";
import logoutImg from "@/public/assets/images/Wallet.png";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div className={styles.general}>
      <div className={styles.avatarImg}>
        {" "}
        <Image src={avatar} className={styles.avatar} alt="" />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          href="/profile"
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
            <div className={styles.mybookingDiv}>
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
            <div className={styles.profile}>
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
  );
}

export default About;
