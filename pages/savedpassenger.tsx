
import React from "react";
import styles from "../styles/savedpassenger.module.css";
import MobileNav from "../components/MobileNavBar/index";
import hero from "@/public/assets/images/Hero Illustration.png";
import About from "../components/About/About";
import { Link } from "@nextui-org/react";
import Footer from "../components/Footer/index";
import Navbar from "../components/NavbarSecond/navbar";
import PassengerList from "@/components/PassengerList/PassengerList";
function SavedPassenger() {
  return (
    <div className={styles.general}>
    <div className={styles.header}>
      <Navbar/>
     
   </div>
   <div className={styles.firstDiv}>
     <img className={styles.hero} src={hero} alt="" />
     <div className={styles.textDiv}>
       <span className={styles.bigText}> MANAGE BOOKINGS</span>
       <p className={styles.small}>
         Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
         vulputate libero et velit interdum, ac aliquet odio mattis.
       </p>
     </div>
   </div>
   <div className={styles.secondDiv}>
     <div className={styles.about}>
         <About/>
     </div>
     <div className={styles.second}>
         <span className={styles.saved}>Saved Passengers</span>
         <PassengerList/>
         <div className={styles.tooMuch}>
       <div>
         <div style={{visibility:"hidden"}}><span>6</span> <span style={{color:"rgba(141, 142, 141, 1)"}}> 10</span></div>
       </div>
       <div className={styles.buttonDiv}>
         {" "}
         <button className={styles.prev}>Prev</button>{" "}
         <Link to="/mybookings"><button  className={styles.next}>Next</button>{" "}</Link>
       </div>
       <div>
         <span>
           Page <span className={styles.special}>1</span> Of2
         </span>
       </div>
     </div>
     </div>
   </div>
   <MobileNav/>
   <Footer/>
 </div>
  );
}

export default SavedPassenger;
