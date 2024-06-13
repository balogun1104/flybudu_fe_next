import React, {useState, useEffect} from "react";
import styles from "../styles/featuredflight.module.css";
import Navbar from "../components/NavbarSecond/navbar";
import threeImg from "@/public/assets/images/threepictures.png";
import Image1 from "@/public/assets/images/secThree1.png";
import Image2 from "@/public/assets/images/secThree2.png";
import Image3 from "@/public/assets/images/secThree3.png";
import green from "@/public/assets/svg/green.svg";
import star from "@/public/assets/svg/Star.svg";
import plane from "@/public/assets/images/Aeroplane.png";
import Advert from "../components/FlightAdvert/FlightAdvert";
import Subscribe from "@/public/assets/images/Paper Plane.png"
import Prev from "@/public/assets/images/prev.png"
import Next from "@/public/assets/images/Next.png"
import leftLine from "@/public/assets/images/leftline.png"
import leftPlane from "@/public/assets/images/leftplane.png"
import rightLine from "@/public/assets/images/rightline.png"
import cloud from "@/public/assets/svg/ffDown.svg";
import rightPlane from "@/public/assets/images/rightplane.png"
import final1 from "@/public/assets/images/uptodate1.png";
import final2 from "@/public/assets/images/uptodate2.png";
import final3 from "@/public/assets/images/uptodate3.png";
import Footer from "../components/Footer/index"
import MobileNav from "../components/MobileNavBar";
import Image from "next/image";

function FeaturedFlights() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() =>{
   const handleResize = () => {
     setIsMobile(window.innerWidth <= 768);
   };

   handleResize(); // Check initial size
   window.addEventListener('resize', handleResize);

   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);
  return (
    <div className={styles.general}>
      <Navbar />
      <div className={styles.backgroundDiv}>
        <div className={styles.firstPart}>
          <span>FEATURED FLIGHTS </span>
          <p>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className={styles.secondPart}>
          <div className={styles.blurDiv}>
            <p
              style={{ fontFamily: "NeueHaasDisplayBold" }}
              className={styles.from}
            >
              From
            </p>
            <span className={styles.amount}>&#8358;172K</span>
            <p
              style={{ fontFamily: "NeueHaasDisplayBold" }}
              className={styles.japa}
            >
              Fly to Akure From Lagos
            </p>
            <div className={styles.pictureText}>
              {" "}
              <Image alt="" src={threeImg} />{" "}
              <div>
                <p style={{ fontFamily: "NeueHaasDisplayBold" }}>300+</p>{" "}
                <p>Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <Image className={styles.leftPlane} src={leftPlane} alt=""/>
          <Image className={styles.line} src={leftLine} alt=""/>
        </div>
   <div className="MiddleDiv">
   <div className={styles.secThreeImg}>
          <div  className={styles.card}>
            <Image
              src={Image1}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
            <div className={styles.secThreeMid}>
              <p>Lagos</p>
              <Image src={plane} alt="arrow" />
              <p>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
              ipsum dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image style={{ width: "33px" }} src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
                    Green Africa
                  </p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p
                      style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}
                    >
                      5.0
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>
          <Advert />
          <div className={styles.card}>
            <Image
              src={Image2}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
            <div className={styles.secThreeMid}>
              <p>Lagos</p>
              <Image src={plane} alt="aror" />
              <p>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
              ipsum dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image style={{ width: "33px" }} src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
                    Green Africa
                  </p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p
                      style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}
                    >
                      5.0
                    </p>
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
                width: "100%",
              }}
            />
            <div className={styles.secThreeMid}>
              <p>Lagos</p>
              <Image src={plane} alt="aror" />
              <p>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
              ipsum dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image style={{ width: "33px" }} src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
                    Green Africa
                  </p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p
                      style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}
                    >
                      5.0
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>
          <Advert />{" "}
          <div className={styles.card} >
            <Image
              src={Image3}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
            <div className={styles.secThreeMid}>
              <p>Lagos</p>
              <Image src={plane} alt="aror" />
              <p>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
              ipsum dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image style={{ width: "33px" }} src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
                    Green Africa
                  </p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p
                      style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}
                    >
                      5.0
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>
          <div className={styles.card} >
            <Image
              src={Image3}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
            <div className={styles.secThreeMid}>
              <p>Lagos</p>
              <Image src={plane} alt="aror" />
              <p>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
              ipsum dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image style={{ width: "33px" }} src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
                    Green Africa
                  </p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p
                      style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}
                    >
                      5.0
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>
          <Advert/>
          <div className={styles.card} >
            <Image
              src={Image3}
              alt=""
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
              }}
            />
            <div className={styles.secThreeMid}>
              <p>Lagos</p>
              <Image src={plane} alt="aror" />
              <p>Abuja</p>
            </div>
            <span className={styles.newBorn}>April 25 to August 15,2025</span>
            <p className={styles.Yorem}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
              ipsum dolor sit cons ectetur adipiscing elit.{" "}
            </p>
            <div className={styles.cardBottom}>
              <div className={styles.cardBottomOne}>
                <Image style={{ width: "33px" }} src={green} alt="green" />
                <div className={styles.cardBottomTwo}>
                  <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
                    Green Africa
                  </p>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <Image src={star} alt="star" />{" "}
                    <p
                      style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}
                    >
                      5.0
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <p className={styles.number}>N167K</p>
              </div>
            </div>
          </div>
 </div>
          <div className={styles.tooMuch}>
          <Image className={styles.cloud} src={cloud} alt="" />
          <div className={styles.buttonDiv}>
            {" "}
            <button className={styles.prev}> <Image src={Prev} alt=""/> Prev </button>{" "}
            <button className={styles.next}>Next <Image src={Next} alt=""/></button>{" "}
          </div>
          <div>
            <span className={styles.span}>
              Page <span className={styles.special}>1</span> Of2
            </span>
          </div>
        </div>
   </div>
       
        <div className={styles.right}>
          <Image className={styles.rightPlane} src={rightPlane} alt=""/>
          <Image  src={rightLine} alt=""/>
        </div>
      </div>
      <div className={styles.final}>
          <div className={styles.imageWrapFinal}>
            <Image src={final1} alt="" className={styles.image1} />
            <Image src={final2} alt="" className={styles.image2} />
            <Image src={final3} alt="" className={styles.image3} />
          </div>
          <div className={styles.uptoDate}>
            <p className={styles.be}>Be Up To Date</p>
            <p className={styles.sub}>
            Subscribe to our newsletter and never miss our latest news and
              promotions. Our newsletter is sent once a week, every Tuesday
            </p>
            <div className={styles.subscribe}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Email Address"
                className={styles.subscribeInput}
              />
              <button className={styles.subscribeButton}>  
              { isMobile ?  <Image src={Subscribe} alt=""/> : <span >Subscribe</span> }
              </button>
            </div>
          </div>
        </div>
        <MobileNav/>
        <Footer/>
    </div>
  );
}

export default FeaturedFlights;
