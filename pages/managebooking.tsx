import React from "react";
import styles from "../styles/managebooking.module.css";
import MobileNavBar from "../components/MobileNavBar/index"
import graph from "@/public/assets/images/graph.png";
import hero from "@/public/assets/images/Hero Illustration.png";
import About from "../components/About/About";
import locationIcon from "@/public/assets/svg/locationpin.svg";
import flyIcon from "@/public/assets/svg/buttonFly.svg";
import calendarIcon from "@/public/assets/images/managebookingbluehouse.png";
import Link from "next/link";
import Airline from "../components/Airline/Airline";
import Footer from "../components/Footer/index"
import Navbar from "../components/NavbarSecond/navbar"
import Image from "next/image";
function ManageBooking() {



  const MobileNavButtons = [
    {
      id: 1,
      title: "Featured Flights",
      icon: flyIcon, // Use the imported SVG file directly
      Route: "featuredflights",
      class:"black",
    },
    {
      id: 2,
      title: "Destinations",  
      class:"black",
      icon: locationIcon, // Use the imported SVG file directly
      Route: "destinations",
    },
    {
      id: 3,
      title: "Manage Booking",
      class:"rgba(6, 188, 225, 1)",
      icon: calendarIcon, // Use the imported SVG file directly
      Route: "managebooking",
    },
  ];




  
  return (
    <div className={styles.general}>
      <div className={styles.header}>
      <Navbar/>        

      </div>
      <div className={styles.firstDiv}>
        <Image className={styles.hero} src={hero} alt="" />
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
          <About />
        </div>
        <div className={styles.bookingDiv}>
          <div className={styles.pass}> 
            <span className={styles.passenger} style={{fontWeight:"bold"}}>My Bookings</span> 
        <Link href="/savedpassenger" style={{textDecoration:"none", color:"black"}}>    <span>Passengers</span></Link>
          </div>
          <div className={styles.book}>
            <span className={styles.none}>Bookings</span>
            <div className={styles.blueDiv}>
              <span className={styles.blue}>Get My Ticket</span>
              <span className={styles.blue}>Request Refund</span>
              <span className={styles.white}>Make Changes on Ticket</span>
            </div>
          </div>
          <div className={styles.graphDiv}>
            <div className={styles.graph}>
              <Image alt="" src={graph} />
              <div>
                <p>Total Booking</p>
                <span>10</span>
              </div>
            </div>
            <div className={styles.graph}>
              <Image alt="" src={graph} />
              <div>
                <p>Pending Booking</p>
                <span>2</span>
              </div>
            </div>
            <div className={styles.graph}>
              <Image alt="" src={graph} />
              <div>
                <p>Canceled Booking</p>
                <span>2</span>
              </div>
            </div>
          </div>
          <Airline/>
          <div className={styles.tooMuch}>
          <div>
            <div><span>6</span> <span style={{color:"rgba(141, 142, 141, 1)"}}>Showing 1-6 of 10</span></div>
          </div>
          <div className={styles.buttonDiv}>
            {" "}
            <button className={styles.prev}>Prev</button>{" "}
            <Link href="/mybookings"><button  className={styles.next}>Next</button>{" "}</Link>
          </div>
          <div>
            <span>
              Page <span className={styles.special}>1</span> Of2
            </span>
          </div>
        </div>
        </div>
      </div>
     
     




      <div className={styles.navba}>
      <div className={styles.buttondiv}>
        {MobileNavButtons.map((item) => (
          <Link key={item.id} href={`/${item.Route}`}>
            <button className={styles.buttons}>
              <div className={styles.img}>
                <Image src={item.icon} alt={item.title} width={24} height={24} /> {/* Render SVG using next/image */}
              </div>
              <p style={{ color: `${item.class}` }} >{item.title}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>







      <Footer/>
    </div>
  );
}

export default ManageBooking;
