import React from "react";
import styles from "./email.module.css";
import Approve from "@/public/assets/images/Approve(Tick).png";
import Link from "next/link";
import Image from "next/image";
function email() {
  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <Image src={Approve} alt="otile" className={styles.img} />
        <span className={styles.welcome}>Email Sent</span>
        <span>please check your email and follow the prompt</span>
        <Link href="/login">
          {" "}
          <button className={styles.sign}>Back to Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default email;
