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
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
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
              <Image src={Akure} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
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
              {/* <p className={styles.lowState} style={{ color: "#fff" }}>
                Civic Tower Victoria Island
              </p> */}
              <Image src={Lagos} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardFour}`}>
            <div className={styles.jos}>
              <p className={styles.state}>CALABAR</p>
              <p className={styles.overflow}>
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
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
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardSix}`}>
            <div className={styles.eko}>
              <p className={styles.state}>IBADAN</p>
             
              <Image src={Ibadan} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
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
