import React from "react";
import styles from "./mobilenavbar.module.css";
import locationIcon from "@/public/assets/svg/locationpin.svg";
import flyIcon from "@/public/assets/svg/buttonFly.svg";
import calendarIcon from "@/public/assets/svg/date.svg";

import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  const MobileNavButtons = [
    {
      id: 1,
      title: "Featured Flights",
      icon: flyIcon, // Use the imported SVG file directly
      Route: "featuredflights",
    },
    {
      id: 2,
      title: "Destinations",
      icon: locationIcon, // Use the imported SVG file directly
      Route: "destinations",
    },
    {
      id: 3,
      title: "Manage Booking",
      icon: calendarIcon, // Use the imported SVG file directly
      Route: "managebooking",
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.buttondiv}>
        {MobileNavButtons.map((item) => (
          <Link key={item.id} href={`/${item.Route}`}>
            <button className={styles.buttons}>
              <div className={styles.img}>
                <Image src={item.icon} alt={item.title} width={24} height={24} /> {/* Render SVG using next/image */}
              </div>
              <p style={{ color: "black" }}>{item.title}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;