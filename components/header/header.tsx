import React from "react";
import styles from "./header.module.css";
import flybudu from "@/public/assets/images/flybuduLogo.png";
import selectFlight from "@/public/assets/images/selectflight.png";
import user from "@/public/assets/images/customerinfo.png";
import luggage from "@/public/assets/images/secondtravelinfo.png";
import payment from "@/public/assets/images/payment 1.png";
import Link from "next/link";
import Image from "next/image";
function header() {
  return (
    <div className={styles.body}>
      <div className={styles.father}>
        <div className={styles.flybudu}>
          <Link href="/">
            <button style={{ border: "none", background: "none" }}>
              {" "}
              <Image style={{ cursor: "pointer" }} src={flybudu} alt="" />{" "}
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
  );
}

export default header;
