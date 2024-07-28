import React from "react";
import styles from "@/styles/homeStyles.module.css";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "@/components/HomeSectionTwo";
import Corporate from "@/components/Corporate Booking/corporate";
import HomeSectionThree from "@/components/HomeSectionThree";
import HomeSectionFour from "@/components/HomeSectionFour";
import HomeSectionFive from "@/components/HomeSectionFive";
import MobileNav from "@/components/MobileNavBar";
import Footer from "@/components/Footer";

const HomeLanding = () => {
 
  return (
    <div className={styles.HomePage}>
      <HomeSectionOne />
      <HomeSectionTwo />
      <Corporate />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <MobileNav />
      <Footer />
   
    </div>
  );
};

export default HomeLanding;
