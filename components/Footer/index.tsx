import React from "react";
import styles from "./Footer.module.css";
import facebook from "@/public/assets/svg/facebook.svg";
import insta from "@/public/assets/svg/insta.svg";
import twitter from "@/public/assets/svg/twitter.svg";
import linkdin from "@/public/assets/svg/linkdin.svg";
import youtube from "@/public/assets/svg/youtube.svg";
import flybudu from "@/public/assets/images/Frame 48097507.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.FooterWrap}>
      <div className={styles.Footer}>
        <div className={styles.sec1}>
          <div className={styles.about}>
            <h3 className={styles.bold}>About</h3>
            <p className={styles.para}>
              Fly budu is a reliable brand who provides the best of flying
              experience to our customers. It is said to be the “Comforting
              wings”.
              <span style={{ paddingBottom: "50px" }}></span>
              Fly budu focuses on helping customers who want to travel privately
              have easy access to private jets, furthermore, help customer plan
              their trips at ease.
            </p>
          </div>
          <div className={styles.service}>
            <h3 className={styles.bold}>Service</h3>
            <p className={styles.para}>
              We give you access to a safety & service credited aircraft fleet
              for Jet Card and on-demand flights. 
              As an Argus Certified Broker, we work to the highest industry
              standards of safety and best practice
            </p>
          </div>
          <div className={styles.destination}>
            <h3 className={styles.bold}>Destination</h3>
          <div className={styles.destinationDiv}>
          <span>
              {" "}
              <p className={styles.para}>Lagos</p>{" "}
              <p className={styles.para}>Ibadan</p>{" "}
              <p className={styles.para}>Akure</p>{" "}
            </span>
            <span>
            <p className={styles.para}>Abuja</p>{" "}
            <p className={styles.para}>Kano</p>{" "}
            <p className={styles.para}>Sokoto</p>{" "}
            </span>
          <span>  <p className={styles.para}>Calabar</p>{" "}
            <p className={styles.para}>Port Harcourt</p>{" "}
            <p className={styles.para}>Enugu</p></span>
          </div>
          </div>
          <div className={styles.contantDiv}>
            <p className={styles.contant}>Contact Us</p>
            <p className={styles.we}>
              We would love to hear from you. Leave us a message or call us.
            </p>
            <div>
              <p className={styles.ade}>
                17, Adekunle Ajosin Way, Ikeja, Lagos.
                <br /> PMB 0112346
              </p>
              <p className={styles.support}>Support@flybudu.com</p>
              <p className={styles.phone}>
                +234xxxxxxx <br />
                +234xxxxxxx
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sec2}>
          <Image style={{ display: "flex" }} alt="dance" src={flybudu} />
          <div className={styles.social}>
            <p className={styles.bold}>Social Media</p>
            <div className={styles.iconWrap}>
              <Image src={facebook} alt="" className={styles.icon} />
              <Image src={insta} alt="" className={styles.icon} />
              <Image src={twitter} alt="" className={styles.icon} />
              <Image src={linkdin} alt="" className={styles.icon} />
              <Image src={youtube} alt="" className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.loremDiv}>
          {" "}
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
