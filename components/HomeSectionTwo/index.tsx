
import React from "react";
import styles from "./homeSectionTwo.module.css";
import Light from "@/public/assets/svg/light.svg";
import Image1 from "@/public/assets/images/secThree1.png";
import Image2 from "@/public/assets/images/secThree2.png";
import Image3 from "@/public/assets/images/secThree3.png";
import green from "@/public/assets/svg/green.svg";
import star from "@/public/assets/svg/Star.svg";
import ffDown from "@/public/assets/svg/ffDown.svg";
import plane from "@/public/assets/images/Aeroplane.png"
import Slider from "react-slick"
import Image from "next/image";

function HomeSectionTwo() {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    // arrows: false,
    // vertical: false,
    // verticalSwiping: false,
    // swipeToSlide: false,
    // touchMove: false,
    // draggable: false,
    // focusOnSelect: false,
    // pauseOnHover: false,
  }
  return (
    <div className={styles.HomeSectionTwo}>
      <Image
        src={Light}
        alt=""
        className={styles.sun}
      />
      <div className={styles.secTwo}>
        <div>
          <p className={styles.feat}>Featured Flights</p>
          <p className={styles.corem}>
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit .
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.outlined}`}>
            <span className={styles.arrow}>&larr;</span>
          </button>
          <button className={`${styles.button} ${styles.filled}`}>
            <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>

      <div className={styles.secThreeImgs}>
        <Slider {...settings} >
        <div className={styles.card}>
          <Image
            src={Image1}
            alt=""
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              width: "100%"
            }}
          />
          <div className={styles.secThreeMid}>
            <p className={styles.textTwin}>Lagos</p>
            <Image src={plane} alt="aror" />
            <p className={styles.textTwin}>Abuja</p>
          </div>
          <span className={styles.newBorn}>April 25 to August 15,2025</span>
          <p className={styles.Yorem}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum
            dolor sit cons ectetur adipiscing elit.{" "}
          </p>
          <div className={styles.cardBottom}>
            <div className={styles.cardBottomOne}>
              <Image style={{width:"33px"}} src={green} alt="green" />
              <div className={styles.cardBottomTwo}>
                <p style={{ margin: "0",fontFamily:'NeueHaasDisplayBold', fontWeight:"bold" }}>Green Africa</p>
                <span style={{ display: "flex", gap: "10px" }}>
                  <Image src={star} alt="star" />{" "}
                  <p style={{ margin: "0",fontFamily:'NeueHaasDisplayBold' }}>5.0</p>
                </span>
              </div>
            </div>
            <div>
              <p className={styles.number}>N167K</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src={Image2}
            alt=""
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              width: "100%"
            }}
          />
          <div className={styles.secThreeMid}>
            <p className={styles.textTwin}>Lagos</p>
            <Image src={plane} alt="aror" />
            <p className={styles.textTwin}>Abuja</p>
          </div>
          <span className={styles.newBorn}>April 25 to August 15,2025</span>
          <p className={styles.Yorem}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum
            dolor sit cons ectetur adipiscing elit.{" "}
          </p>
          <div className={styles.cardBottom}>
            <div className={styles.cardBottomOne}>
              <Image style={{width:"33px"}} src={green} alt="green" />
              <div className={styles.cardBottomTwo}>
                <p style={{ margin: "0", fontFamily:'NeueHaasDisplayBold', fontWeight:"bold" }}>Green Africa</p>
                <span style={{ display: "flex", gap: "10px" }}>
                  <Image src={star} alt="star" />{" "}
                  <p style={{ margin: "0",fontFamily:'NeueHaasDisplayBold' }}>5.0</p>
                </span>
              </div>
            </div>
            <div>
              <p  className={styles.number}>N167K</p>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{marginRight:"30px"}}>
          <Image
            src={Image3}
            alt=""
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              width: "100%"
            }}
          />
          <div className={styles.secThreeMid}>
            <p className={styles.textTwin}>Lagos</p>
            <Image src={plane} alt="aror" />
            <p className={styles.textTwin}>Abuja</p>
          </div>
          <span className={styles.newBorn}>April 25 to August 15,2025</span>
          <p className={styles.Yorem}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum
            dolor sit cons ectetur adipiscing elit.{" "}
          </p>
          <div className={styles.cardBottom}>
            <div className={styles.cardBottomOne}>
              <Image style={{width:"33px"}} src={green} alt="green" />
              <div className={styles.cardBottomTwo}>
                <p style={{ margin: "0", fontFamily:'NeueHaasDisplayBold', fontWeight:"bold" }}>Green Africa</p>
                <span style={{ display: "flex", gap: "10px" }}>
                  <Image src={star} alt="star" />{" "}
                  <p style={{ margin: "0", fontFamily:'NeueHaasDisplayBold' }}>5.0</p>
                </span>
              </div>
            </div>
            <div>
              <p  className={styles.number}>N167K</p>
            </div>
          </div>
          </div>
          </Slider>
      </div>



      <div className={styles.secThreeImg}>
          <div className={styles.card}>
            <Image
              src={Image1}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%"
              }}
            />
            <div className={styles.secThreeMid}>
              <p className={styles.textTwin}>Lagos</p>
              <Image src={plane} alt="aror" />
              <p className={styles.textTwin}>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum
              dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0",fontFamily:'NeueHaasDisplayBold', fontWeight:"bold" }}>Green Africa</p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p style={{ margin: "0" }}>5.0</p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src={Image2}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%"
              }}
            />
            <div className={styles.secThreeMid}>
              <p className={styles.textTwin}>Lagos</p>
              <Image src={plane} alt="aror" />
              <p className={styles.textTwin}>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum
              dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0",fontFamily:'NeueHaasDisplayBold', fontWeight:"bold" }}>Green Africa</p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p style={{ margin: "0" }}>5.0</p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src={Image3}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%"
              }}
            />
            <div className={styles.secThreeMid}>
              <p className={styles.textTwin}>Lagos</p>
              <Image src={plane} alt="aror" />
              <p className={styles.textTwin}>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum
              dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0",fontFamily:'NeueHaasDisplayBold', fontWeight:"bold" }}>Green Africa</p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p style={{ margin: "0" }}>5.0</p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>
      </div>
      <Image src={ffDown} alt="ffDown" className={styles.ffDown} />
    </div>
  );
}

export default HomeSectionTwo;
