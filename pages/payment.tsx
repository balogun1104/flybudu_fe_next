import React, { useState } from "react";
import styles from "@/styles/payment.module.css";
import SideCard from "../components/SideCard/SideCard";
import Paystack from "../components/Paystack/Paystack";
import flutterwave from "@/public/assets/images/Frame 48097430 (2).png";
import visa from "@/public/assets/images/Frame 48097430 (1).png";
import masterCard from "@/public/assets/images/Frame 48097434.png";
import flybudu from "@/public/assets/images/flybuduLogo.png";
import selectFlight from "@/public/assets/images/selectflight.png";
import user from "@/public/assets/images/customerinfo.png";
import luggage from "@/public/assets/images/travel white.png";
import payment from "@/public/assets/images/payment white.png";
import verve from "@/public/assets/images/Frame 48097433.png";
import Link from "next/link";
import customerSupport from "@/public/assets/images/customer-support (1) 1.png";
import PaymentApproved from "../components/PaymentApproved/PaymentApproved";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Image from "next/image";

function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <div className={styles.fath}>
          <div className={styles.flybudu}>
            <Link href="/">
              <button style={{ border: "none", background: "none" }}>
                {" "}
                <Image
                  style={{ cursor: "pointer" }}
                  src={flybudu}
                  alt=""
                />{" "}
              </button>
            </Link>
          </div>
          <div className={styles.others}>
            <Link
              href="/selectflight"
              style={{ textDecoration: "none" }}
              className={styles.all1}
            >
              <Image src={selectFlight} alt="dtrt" />
              <span className={styles.p}>Select Flight</span>
            </Link>
            <Link
              href="/customerinfo"
              style={{ textDecoration: "none" }}
              className={styles.all2}
            >
              <Image src={user} alt="jdf" />
              <span className={styles.p}>Customer Info</span>
            </Link>
            <Link
              href="/travelinformation"
              style={{ textDecoration: "none" }}
              className={styles.all}
            >
              <Image src={luggage} alt="jhf" />
              <span className={styles.p}>Travel Info</span>
            </Link>
            <Link
              href="/payment"
              style={{ textDecoration: "none" }}
              className={styles.all}
            >
              <Image src={payment} alt="sdj" />
              <span className={styles.p}>Payment</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondHeader}>
        <Link href="/travelinformation">
          <Image alt="s" src={BackButton} className={styles.back} />
        </Link>
        <span>
          {" "}
          Payment <span className={styles.specialText}> 4/4</span>
        </span>
        <Image src={support} className={styles.support} alt="" />
      </div>
      <div className={styles.father}>
        <div className={styles.firstDiv}>
          <div className={styles.first}>
            <span>Payment</span>
            <p>Choose your preferred method</p>
          </div>
          <Paystack />
          <div className={styles.flutt}>
            <span>Flutterwave</span>
            <Image src={flutterwave} alt="dsf" />
          </div>
          <div className={styles.flutter}>
            <span>Bank Card</span>
            <div>
              <Image src={verve} alt="dsf" />
              <Image src={visa} alt="dsf" />
              <Image src={masterCard} alt="dsf" />
            </div>
          </div>
          <div className={styles.skipDiv}>
            <Link
              href="/travelinformation"
              className={styles.link}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <button
                style={{ fontWeight: "bold", cursor: "pointer" }}
                className={styles.skip}
              >
                Go Back
              </button>
            </Link>{" "}
            <span className={styles.money}> #172,000</span>
            <button
              style={{
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(true)}
              className={styles.save}
            >
              Pay Now
            </button>
          </div>
        </div>
        <div className={styles.secondDiv}>
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
      {isOpen && <PaymentApproved setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Payment;
