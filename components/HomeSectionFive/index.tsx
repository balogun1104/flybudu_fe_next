import { useState, useEffect } from "react";
import styles from "./HomeSectionFive.module.css";
import bookFlight from "@/public/assets/svg/bookFlight.svg";
import featImageOne from "@/public/assets/images/freqImage1.png";
import featImageTwo from "@/public/assets/images/freqImage2.png";
import final1 from "@/public/assets/images/uptodate1.png";
import final2 from "@/public/assets/images/uptodate2.png";
import final3 from "@/public/assets/images/uptodate3.png";
import subscribe from "@/public/assets/images/Paper Plane.png";
import Faq from "../FAQ/faq";
import Image from "next/image";
import BeUptoDate from "../BeUpToDate";

const HomeSectionFive = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.HomeSectionFiveWrapper}>
      <div className={styles.HomeSectionFive}>
        <div className={styles.fiveContent}>
          <p className={styles.freq}>Frequently Asked Questions</p>

          <div className={styles.howBook}>
            <Faq />
            <Faq />
            <Faq />
            <Faq />
            <Image
              src={bookFlight}
              alt="bookFLig"
              className={styles.bookfImg}
            />
          </div>
          <div className={styles.featImgaeWrap}>
            <Image src={featImageOne} alt="" className={styles.featImgaeOne} />
            <Image src={featImageTwo} alt="" className={styles.featImgaeTwo} />
          </div>
        </div>

        
          <BeUptoDate />
       
      </div>
    </div>
  );
};

export default HomeSectionFive;
