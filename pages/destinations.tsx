import { useState, useEffect} from "react";
import styles from "../styles/destinations.module.css";
import Navbar from "../components/NavbarSecond/navbar";
import threeImg from "@/public/assets/images/threepictures.png";
import Lagos from "@/public/assets/images/lagosIsland.png";
import Akure from "@/public/assets/images/akure.png";
import Ibadan from "@/public/assets/images/ibadan.png";
import portHarcout from "@/public/assets/images/portharcourtBoys.png";
import Subscribe from "@/public/assets/images/Paper Plane.png"
import cloud from "@/public/assets/svg/ffDown.svg";
import Prev from "@/public/assets/images/prev.png"
import Next from "@/public/assets/images/Next.png"
import final1 from "@/public/assets/images/uptodate1.png";
import final2 from "@/public/assets/images/uptodate2.png";
import final3 from "@/public/assets/images/uptodate3.png";
import Footer from "../components/Footer/index"
import MobileNav from "../components/MobileNavBar";
import Image from "next/image";

function Destinations() {
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
          <span>DESTINATIONS</span>
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
        <div className={styles.HomeSectionFour}>
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

          {/* State */}
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
              <p className={styles.overflow} style={{ color: "#fff" }}>
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
              </p>
            </div>
          </div>
          {/* state */}
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

          {/* State */}
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

          {/* state */}
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
          {/* State  */}
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




          <div className={`${styles.card} ${styles.cardEight}`}>
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

          {/* State */}
          <div className={` ${styles.cardSeven}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(156, 54, 7, 1)" }}
              >
                Akure
              </p>
              <Image src={portHarcout} alt="lagos" className={styles.PHImage} />
              <p className={styles.overflow}>
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
              </p>
            </div>
          </div>


        
          <div className={`${styles.card} ${styles.cardNine}`}>
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

          {/* State */}
          <div className={`${styles.card} ${styles.cardTen}`}>
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
              <p className={styles.overflow} style={{ color: "#fff" }}>
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus
              </p>
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
            <span>
              Page <span className={styles.special}>1</span> Of2
            </span>
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
              <button className={styles.subscribeButton}> { isMobile ?  <Image src={Subscribe} alt=""/> : <span >Subscribe</span> }</button>
            </div>
          </div>
        </div>
        <MobileNav/>
        <Footer/>
      </div>
    </div>
  );
}

export default Destinations;
