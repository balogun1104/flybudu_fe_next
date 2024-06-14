import React, { useState } from "react";
import styles from "./seat.module.css";
import { IoIosArrowForward } from "react-icons/io";
import seat from "@/public/assets/images/Seat.png";
import seat1 from "@/public/assets/images/Seat (1).png";
import seat2 from "@/public/assets/images/Seat (2).png";
import seat3 from "@/public/assets/images/Seat (3).png";
import seat4 from "@/public/assets/images/Seat (4).png";
import seat5 from "@/public/assets/images/Seat (5).png";
import Image from 'next/image'

function Seat() {
  const [isActive, setIsActive] = useState(false)

  const toggleText = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={styles.general}>
      <div className={styles.firstDiv}  onClick={toggleText}>
        
        <span style={{fontFamily:"myFont"}}>Select Seat</span> <IoIosArrowForward />
      </div>
      <div className={styles.spanDiv}>
        
        <span className={styles.choose}>
          Choose a preferred seat for your travel
        </span>
      </div>
     
      {isActive ?  ( <div className={styles.secondDiv}>
        <div className={styles.first}>
          <span>Your Selected Seat</span>
          <div className={styles.spans}>
            <span>15E</span>
            <span>15E</span>
            <span>15E</span>
            <span>15E</span>
            <span>15E</span>
          </div>
        </div>
        <div className={styles.second}>
          <span className={styles.economy}>Economy Class </span>
          <div className={styles.flight}>
            <div className={styles.flight1}>
              <Image src={seat} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat5} alt="df" />
              <Image src={seat5} alt="df" />
              <Image src={seat5} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat1} alt="df" />
            </div>
            <div className={styles.flight2}>
              <Image src={seat} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat5} alt="df" />
              <Image src={seat5} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat1} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat3} alt="df" />
            </div>
            <div className={styles.flight1}>
              <Image src={seat} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat3} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat4} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat2} alt="df" />
              <Image src={seat1} alt="df" />
            </div>
          </div>
          <div className={styles.reserved}>
            <div className={styles.booked}>
              <Image src={seat3} alt="df" /> <span>Booked(6)</span>
            </div>
            <div className={styles.booked}>
              <Image src={seat2} alt="df" /> <span>Reserved(13)</span>
            </div>
            <div className={styles.booked}>
              <Image src={seat4} alt="df" /> <span>Available(77)</span>
            </div>
          </div>
        </div>
      </div>) : (<></>)}

    </div>
  );
}

export default Seat;
