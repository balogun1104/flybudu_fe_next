/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./paystack.module.css";
import paystack from "@/public/assets/images/Frame 48097430.png";
import visa from "@/public/assets/images/Frame 48097430 (1).png";
import masterCard from "@/public/assets/images/Frame 48097434.png";
import verve from "@/public/assets/images/Frame 48097433.png";
import Image from "next/image";
// import flutterwave from "@/public/assets/images/Frame 48097430 (2).png"
  
function Paystack() {
  return (
    <div className={styles.generall}>
      <div className={styles.firstDiv}>
        <div className={styles.paystackDiv}>
          {" "}
          <span>Paystack</span> <Image src={paystack} alt="dsa" />
        </div>
        <div className={styles.images}>
          {" "}
          <Image src={visa} alt="dsa" /> <Image src={verve} alt="dsa" />{" "}
          <Image src={masterCard} alt="dsa" />
        </div>
        <div className={styles.textDiv}>
          <span>
            By selecting 'Pay Now', you confirm reservation of selected service
            and agree with the condition of carriage and the fare application
            rules of FlyBudu. You will be redirected to our secure payment
            checkout page.{" "}
          </span>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.payment}>
          <p>Your full payment is</p>
          <span>&#8358;172,000.00</span>
        </div>
      </div>
    </div>
  );
}

export default Paystack;
