import React from "react";
import overload from "@/public/assets/images/overload.png";
import styles from "./flightadvert.module.css";
import Image from "next/image";
function FlightAdvert() {
  return (
    <div className={styles.general}>
      <div className={styles.from}>
        <p>Fly From </p> 
        <Image src={overload} alt="" />
      </div>
      <span className={styles.lag}> Lagos <br/> <span className={styles.abj}> Abuja</span></span>
      <div className={styles.crazy}>
        <div className={styles.size}>
          <span>From</span>
           <span style={{fontWeight:"bold"}}>&#8358;172K</span>
        </div>
        <div className={styles.triplet}>
          <span>Lagos to Abuja</span>
           <span>Mon - Fri</span>
          <span style={{border:"none"}}>7:00hrs</span>
        </div>
      </div>
    </div>
  );
}

export default FlightAdvert;
