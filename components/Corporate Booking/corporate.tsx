/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CorporateImg from "@/public/assets/images/Coporate Booking.png";
import styles from "./corporate.module.css";
import QuoteBar from "../Qoute/quote";
import Image from "next/image";

function Corporate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <Image src={CorporateImg} alt="" />
        <div className={styles.secondDiv}>
          <span className={styles.corporateText}> Corporate Booking</span>
          <span className={styles.text}>
            Streamline your business travel with our comprehensive corporate
            booking service. We understand that time is money, which is why we
            offer tailored solutions to meet your company's unique travel needs.
            From negotiated rates to detailed reporting, we've got you covered.
          </span>
          <span className={styles.text}>
            Our dedicated team of travel experts is available 24/7 to assist
            with bookings, changes, and any travel-related queries. We
            prioritize cost-effectiveness without compromising on quality,
            ensuring your employees travel comfortably and arrive ready for
            business.
          </span>
          <span
            className={styles.started}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Get Started
          </span>
        </div>
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Corporate;
