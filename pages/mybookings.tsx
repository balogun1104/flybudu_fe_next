/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "../styles/mybooking.module.css";
import flyBudu from "@/public/assets/images/flybuduLogo.png";
import Quote from "@/public/assets/svg/Payment.svg";
import Menu from "@/public/assets/svg/menu.svg";
import Avatar from "@/public/assets/images/whatsaap.jpg";
import Link from "next/link";
import hero from "@/public/assets/images/Hero Illustration.png";
import About from "../components/About/About";
import Information from "../components/FlightInformation/information";
import GreenImg from "@/public/assets/images/Frame 661.png";
import star from "@/public/assets/images/star.png";
import customers from "@/public/assets/images/Customers.png";
import Footer from "../components/Footer/index";
import Image from "next/image";
function Mybookings() {
  return (
    <div className={styles.general}>
      <div className={styles.header}>
        <div className={styles.navbarWrap}>
          <Link href="/">
            <button style={{ border: "none", background: "none" }}>
              {" "}
              <Image className={styles.logo} src={flyBudu} alt="dfs" />
            </button>
          </Link>
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
            <Image src={Menu} alt="" className={styles.quoteImg} />
          </div>
        </div>
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
          <About />
        </div>
        <div className={styles.family}>
          <div className={styles.spanDiv}>
            <Link href="/manage-booking" style={{ textDecoration: "none" }}>
              <span>Back</span>
            </Link>{" "}
            <div className={styles.twin}>
              <span className={styles.taye}>Get my Ticket</span>{" "}
              <span className={styles.taye}>Request Refund</span>{" "}
              <span className={styles.kehinde}>Make Changes on Ticket</span>{" "}
            </div>
          </div>
          <div className={styles.together}>
            <div className={styles.booking}>
              <Information />
            </div>
            <div className={styles.greenDiv}>
              <Image src={GreenImg} className={styles.greenImg} alt="dfs" />
              <div className={styles.whiteDiv}>
                <span> Green Africa</span>
                <div className={styles.finalDiv}>
                  {" "}
                  <Image alt="" src={star} />{" "}
                  <span style={{ fontWeight: "bold" }}>5.0</span>{" "}
                  <Image alt="sdf" src={customers} /> <span>123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mybookings;
