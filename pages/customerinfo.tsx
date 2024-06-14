/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styles from "../styles/customerinfo.module.css";
import Header from "@/components/header/header";
import Verified from "../components/Verified/Verified";
import SideCard from "../components/SideCard/SideCard";
import customerSupport from "@/public/assets/images/customer-support (1) 1.png";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Approved from "@/public/assets/images/Layer 3.png";
import Image from "next/image";
function CustomerInfo() {
  const [isActive, setIsActive] = useState(false);
  const [openCode, setOpenCode] = useState(false);

  const toggle = () => {
    setOpenCode(!openCode);
  };
  const toggleText = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.general}>
      <Header />
      <div className={styles.secondHeader}>
        <Link href="/selectflight">
          <Image alt="s" src={BackButton} className={styles.back} />
        </Link>
        <span style={{ fontWeight: "bold" }}>
          {" "}
          Customer Info <span className={styles.specialText}> 2/4</span>
        </span>
        <Image src={support} className={styles.support} alt="" />
      </div>
      <div className={styles.father}>
        <div className={styles.first}>
          <div className={styles.niceDiv}>
            <Image src={Approved} alt="" />
            <div style={{ textAlign: "start" }}>
              <p>Nice job! You picked one of the best option. </p>
              <span>Book Now so you don't miss out on this price.</span>
            </div>
          </div>
          <span className={styles.who}>Who is travelling to Abuja?</span>
          <Verified />
          <div className={styles.codeDiv}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
              onClick={toggleText}
            >
              {" "}
              <span>Do you have a discount code or voucher?</span>{" "}
              <IoIosArrowForward />
            </div>

            {isActive ? (
              <input
                type="text"
                placeholder="Enter Code"
                className={styles.code}
              />
            ) : (
              ""
            )}
          </div>

          <div className={styles.codeDiv}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
              onClick={toggle}
            >
              {" "}
              <span>Do you have a corporate code?</span>{" "}
              <IoIosArrowForward onClick={toggle} />
            </div>
            {openCode ? (
              <input
                type="text"
                placeholder="Enter Code"
                className={styles.code}
              />
            ) : (
              ""
            )}
          </div>

          <div className={styles.saveDiv}>
            <div className={styles.textDiv}>
              <input type="checkbox" />{" "}
              <p>
                By submitting your flight request you have agree to our
                <span>Terms & Conditions & Privacy policy </span>
                and to receive further communication regarding your flight.
              </p>
            </div>
            <span className={styles.money}> #160,000</span>
            <Link
              href="/travelinformation"
              style={{ textDecoration: "none" }}
              className={styles.link}
            >
              <span className={styles.save}>Save Continue</span>
            </Link>
          </div>
        </div>
        <div className={styles.second}>
          <SideCard />
          <div className={styles.customerDiv}>
            <Image src={customerSupport} alt="dr" />
            <div>
              <span>Customer Support</span>
              <p>For support, please call us on</p>
              <span>08160178711, 08160178711,</span>
              <p>24/7 (Monday to Sunday)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
