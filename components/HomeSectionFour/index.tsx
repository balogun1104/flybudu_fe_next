/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./homeSectionFour.module.css";
import Lagos from "@/public/assets/images/lagosIsland.png";
import Akure from "@/public/assets/images/akure.png";
import Ibadan from "@/public/assets/images/ibadan.png";
import Image from "next/image";

const HomeSectionFour = () => {
  return (
    <div className={styles.HomeSectionFourWrapper}>
      <div className={styles.HomeSectionFour}>
        <div className={styles.mobile} >
          <div className={`${styles.card} ${styles.cardOne}`}>
            <div className={styles.jos}>
              <p className={styles.state} style={{ color: "#fff" }}>
                JOS
              </p>
              <p className={styles.overflow}>
                Discover the cool climate and stunning rock formations of Jos, 
                a city on the Jos Plateau in central Nigeria. Known for its tin 
                mining history, beautiful landscapes, and the famous Shere Hills. 
                Experience the unique blend of nature and culture in this highland city.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardTwo}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(156, 54, 7, 1)" }}
              >
                Akure
              </p>
              <Image src={Akure} alt="Akure" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Experience the rich culture and hospitality of Akure, the capital 
                city of Ondo State. Explore its ancient palace, vibrant markets, 
                and the nearby Idanre Hills. Akure offers a perfect blend of 
                tradition and modernity, making it a must-visit destination.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.bouncingDiv}`}>
          <div className={`${styles.card} ${styles.cardThree}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(6, 188, 225, 1)" }}
              >
                LAGOS
              </p>
              <Image src={Lagos} alt="Lagos" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Immerse yourself in the energy of Lagos, Nigeria's largest city. 
                From its bustling markets to pristine beaches, Lagos offers a unique 
                blend of tradition and modernity. Experience the vibrant nightlife, 
                diverse cuisines, and the famous Lagos hustle. A city that never sleeps!
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardFour}`}>
            <div className={styles.jos}>
              <p className={styles.state}>CALABAR</p>
              <p className={styles.overflow}>
                Enjoy the serenity and rich history of Calabar, often called 
                Nigeria's tourism capital. Known for its cleanliness, beautiful 
                beaches, and the famous Calabar Carnival. Explore the Slave History 
                Museum and indulge in the city's renowned cuisine. A perfect blend 
                of history, culture, and natural beauty.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={`${styles.card} ${styles.cardFive}`}>
            <div className={styles.jos}>
              <p
                className={styles.state}
                style={{ color: "rgba(172, 130, 0, 1)" }}
              >
                ABUJA
              </p>
              <p className={styles.overflow}>
                Explore Abuja, Nigeria's purpose-built capital city. Marvel at 
                its modern architecture, visit the iconic Aso Rock, and enjoy 
                the city's well-planned layout and greenery. With its numerous 
                parks, museums, and government buildings, Abuja offers a unique 
                glimpse into Nigeria's political and cultural heart.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardSix}`}>
            <div className={styles.eko}>
              <p className={styles.state}>IBADAN</p>
             
              <Image src={Ibadan} alt="Ibadan" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Discover Ibadan, one of Nigeria's largest cities. Known for its 
                rich Yoruba culture, historical sites like Mapo Hall, and the 
                first university in Nigeria. Experience the bustling Oje Market, 
                climb the mysterious Bower's Tower, and indulge in the city's 
                famous amala delicacy. A city where tradition meets progress.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.explore}>
        <button className={styles.exploreButton}>
          Explore All Destinations
        </button>
      </div>
    </div>
  );
};

export default HomeSectionFour;