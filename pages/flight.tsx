import React, { useState } from "react";
import Navbar from "../components/Navbar/indexBlack";
import styles from "../styles/flight.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import FlightChunk from "../components/Flight/FlightChunk";
import arrow from "@/public/assets/images/double chevron.png"
import Footer from "../components/Footer/index"
import FilterImg from "@/public/assets/images/filter (2).png"
import Edit from "@/public/assets/images/Edit.png"
import MobileNav from "../components/MobileNavBar";
import FlightFilter from "../components/FlightFilter/index"
import Image from "next/image";

// import SliderControl from "../components/SliderControl/SliderControl";
import  Link  from 'next/link';


const Flight = () => {
  const [openEdit, setOpenEdit] = useState(false)

  return (
    <div className={styles.flightContainer}>
      
      <div className={styles.fixed}>
      <Navbar />
      
      </div>
      <div className={styles.Navbar}>
         <Link href="/"><IoIosArrowBack style={{color:"white" , marginLeft:"30px", fontSize:"25px"}}/></Link>
         <div className={styles.navbarText}>
            <span className={styles.location}>Lagos - Abuja</span>
            <span>Feb. 29, 2024 - Mar. 14, 2024, 1 Pass, Economy</span>
         </div>
         <div className={styles.imgDiv}> 
        <Link href="/mobileflight"> <Image src={Edit} alt=""/></Link>
        <Link href="/filter"> <Image src={FilterImg}   alt=""/></Link>
         </div>
        
      </div>
    
      {
           openEdit && <FlightFilter onClick={() => setOpenEdit(false)} />
        }
    
      
      <div className={styles.flightWrapper}>
        <div style={{ margin: "30px" }}>
          {" "}
          <span className={styles.found}>
            We Found 56 Flights From Lagos To Abuja
          </span>
        </div>
        
        <div className={styles.flightContent}>
          <div className={styles.flightContentOne}>
          <FlightFilter onClick={() => setOpenEdit(false)} />
          </div>
          <div className={styles.flightContentTwo}>
            <div className={styles.dateDiv}>
              <IoIosArrowBack />
             <div className={styles.opor}>
             <div className={styles.flexDiv}>
                <span>Tue, May 14</span>
                <span className={styles.blueText}>#160,000</span>
              </div>
              <div className={styles.flexDiv}>
                <span>Tue, May 14</span>
                <span className={styles.blueText}>#160,000</span>
              </div><div className={`${styles.flexDiv} ${styles.display}`}>
                <span>Tue, May 14</span>
                <span className={`${styles.blueText} ${styles.blue}`}>#160,000</span>
              </div><div className={styles.flexDiv} style={{borderLeft:"none"}}>
                <span>Tue, May 14</span>
                <span className={styles.blueText}>#160,000</span>
              </div><div className={styles.flexDiv}>
                <span>Tue, May 14</span>
                <span className={styles.blueText}>#160,000</span>
              </div><div className={`${styles.flexDiv} ${styles.flex}`}>
                <span>Tue, May 14</span>
                <span className={styles.blueText}>#160,000</span>
              </div>
             </div>
              <IoIosArrowForward />
            </div>
            <FlightChunk />

            <h4 className={styles.other}> Other Flights Options</h4>
            <FlightChunk />

            <FlightChunk />
            <div className={styles.loadDiv}>
              {" "}
              <p>Load More Result</p> <Image alt="" src={arrow} />
            </div>
          </div>
        </div>

      </div>
      
      <MobileNav/>
      
      <Footer />
      
    </div>
    
  );
};

export default Flight;