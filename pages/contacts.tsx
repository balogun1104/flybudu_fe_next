import React, { useState, useEffect } from "react";
import Navbar from "../components/NavbarSecond/navbar";
import styles from "../styles/contact.module.css";
import hero from "@/public/assets/images/Hero Illustration 2.png";
import image1 from "@/public/assets/images/Ellipse 29.png";
import image2 from "@/public/assets/images/Ellipse 30.png";
import image3 from "@/public/assets/images/Ellipse 31.png";
import image4 from "@/public/assets/images/Ellipse 32.png";
import mailImg from "@/public/assets/images/mail.png";
import copyImg from "@/public/assets/images/copy.png";
import phoneImg from "@/public/assets/images/phone.png";
import instaImg from "@/public/assets/images/insta.png";
import linkedinImg from "@/public/assets/images/linkedIn.png";
import twitterImg from "@/public/assets/images/twitter.png";
import whatsappImg from "@/public/assets/images/whatsapp.png";
import plane from "@/public/assets/images/AIRCRAFT 1.png";
import sun from "@/public/assets/images/sun.png";
import Footer from "../components/Footer/index";
import final1 from "@/public/assets/images/uptodate1.png";
import final2 from "@/public/assets/images/uptodate2.png";
import final3 from "@/public/assets/images/uptodate3.png";
import Blueplane from "@/public/assets/images/curvedPlane.png";
import ContactApproved from "../components/ContactApproved/ContactApproved";
import MobileNav from "../components/MobileNavBar";
import Subscribe from "@/public/assets/images/Paper Plane.png"
import Image from "next/image";


function Contacts() {
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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.general}>
      <Navbar />
      <div className={styles.firstDiv}>
        <Image className={styles.hero} src={hero} alt="" />
        <div className={styles.taye}>
          {" "}
          <div className={styles.textDiv}>
            <span className={styles.bigText}> CONTACT <p>  US</p></span>
            <p className={styles.small}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        <div className={styles.kehinde}>
          <Image className={styles.image1} alt="" src={image1} />
          <Image className={styles.image2} alt="" src={image2} />
          <Image className={styles.image3} alt="" src={image3} />
          <Image className={styles.image4} alt="" src={image4} />
        </div>
      </div>
      <div className={styles.secondDiv}>
        <Image alt="dsfs" className={styles.plane} src={plane} />
        <Image alt="dfs" className={styles.curved} src={Blueplane}/>
        <div className={styles.talkDiv}>
          <span className={styles.talk}>Talk to us</span>
          <span className={styles.FAQ}>Frequently Asked Questions</span>
        </div>
        <div className={styles.inputNla}>
          <span className={styles.us}>Talk to Us</span>
          <div className={styles.inputDiv}>
            <div className={styles.messageInput}>
              {" "}
              <p>
                Message Title{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </p>
              <input
                className={styles.toor}
                type="text"
                placeholder="Enter the title of your message"
              />
            </div>
            <div className={styles.messageInput}>
              {" "}
              <p>
                Full name{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </p>
              <input
                className={styles.toor}
                type="text"
                placeholder="Enter your full name here"
              />
            </div>
            <div className={styles.twin}>
              <div className={styles.emailInput}>
                {" "}
                <p>
                  Email <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </p>
                <input
                  className={styles.email}
                  type="text"
                  placeholder="Enter email address"
                />
              </div>
              <div className={styles.phoneInput}>
                {" "}
                <p>
                  Phone Number{" "}
                  <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </p>
                <div className={styles.phoneSaga}>
                  <label className={styles.label}>
                    <select className={styles.select1}>
                      <option>+234 </option>
                      <option>+235</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+419</option>
                    </select>
                  </label>{" "}
                  <input
                    className={styles.number}
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>{" "}
            </div>
            <textarea
              id="text"
              name="text"
              rows="4"
              cols="50"
              placeholder="Enter your message here"
              className={styles.textArea}
            />
            <span onClick={() => setIsOpen(true)} className={styles.send}>Send Message</span>
          </div>
          <div className={styles.mailDiv}>
            <Image src={mailImg} alt="slap" />
            <span style={{ fontWeight: "bold" }}>support@flygmail.com</span>
            <Image src={copyImg} alt="slap" />
          </div>
          <div className={styles.phoneDiv}>
            <Image src={phoneImg} alt="slap" />
            <span>081xxxxxxxx, 090xxxxxxxx, 080xxxxxxxx</span>
            <Image src={copyImg} alt="slap" />
          </div>
          <div className={styles.socialDiv}>
            <Image src={linkedinImg} alt="slap" />
            <Image src={instaImg} alt="slap" />
            <Image src={twitterImg} alt="slap" />
            <Image src={whatsappImg} alt="slap" />
          </div>
        </div>
        <Image alt="dfd" src={sun} className={styles.sun} />
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
            <button  className={styles.subscribeButton}>{ isMobile ?  <Image src={Subscribe} alt=""/> : <span >Subscribe</span> }</button>
          </div>
        </div>
      </div>
      <MobileNav/>
      <Footer />
      {isOpen && <ContactApproved   setIsOpen={setIsOpen}/>}

    </div>
  );
}

export default Contacts;
