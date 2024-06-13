import { FC } from "react";
import styles from "./mobilenavscreen.module.css";
import paymentIcon from "@/public/assets/svg/Paymentplain.svg";
import jetIcon from "@/public/assets/svg/jet.svg";
import readerIcon from "@/public/assets/svg/reader.svg";
import flyIcon from "@/public/assets/svg/buttonFly.svg";
import foneIcon from "@/public/assets/svg/fone.svg";
import React, { useState } from "react";
import loginIcon from "@/public/assets/svg/Login.svg";
import boardIcon from "@/public/assets/svg/board.svg";
import { RxCross1 } from "react-icons/rx";
import openmailIcon from "@/public/assets/svg/openmail.svg";
import instagramIcon from "@/public/assets/svg/instagram.svg";
import linkedinIcon from "@/public/assets/svg/linkedin.svg";
import facebookIcon from "@/public/assets/svg/facebookmobile.svg";
import twitterIcon from "@/public/assets/svg/twittermobile.svg";
import QuoteBar from "../Qoute/quote";
import Image from "next/image";
import Link from "next/link";

interface MobileNavScreenProps {
    onClick: () => void;
}

export const MobileNavScreen: React.FC<MobileNavScreenProps> = ({
  onClick,
}) => {
  const socialMediaLinks = [
    {
      id: 1,
      icon: instagramIcon,
      path: "",
    },
    {
      id: 2,
      icon: linkedinIcon,
      path: "",
    },
    {
      id: 3,
      icon: facebookIcon,
      path: "",
    },
    {
      id: 4,
      icon: twitterIcon,
      path: "",
    },
  ];
  const dataForMobile = [
    {
      id: 1,
      title: "Login",
      icon: loginIcon,
      navigate: "/login",
    },
    {
      id: 2,
      title: "Corporate Booking",
      icon: paymentIcon,
      onClick: () => setIsOpen(true),
    },
    {
      id: 3,
      title: "Manage Booking",
      icon: flyIcon,
      navigate: "/managebooking",
    },
    {
      id: 4,
      title: "About",
      icon: readerIcon,
      navigate: "/aboutus",
    },
  ];

  const innerCardForMobile = [
    {
      id: 1,
      title: "08160178711",
      icon: foneIcon,
    },
    {
      id: 2,
      title: "17 Bakare Jafojo Street, Lagos Island",
      icon: boardIcon,
    },
    {
      id: 3,
      title: "support@flybudu.com",
      icon: openmailIcon,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = (onClick: any) => {
    if (onClick) onClick();
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <RxCross1 onClick={onClick} />
      </div>
      <div className={styles.dataContainer}>
        {dataForMobile.map((item) => (
          <div key={item.id} className={styles.innerContainer}>
            <Image src={item.icon} alt="icons" width={24} height={24} />
            {item.navigate ? ( // Check if navigate is defined
              <Link style={{ textDecoration: "none" }} href={item.navigate}>
                <p onClick={() => handleItemClick(item.onClick)}>
                  {item.title}
                </p>
              </Link>
            ) : (
              <p onClick={() => handleItemClick(item.onClick)}>{item.title}</p>
            )}
          </div>
        ))}
      </div>

      <div className={styles.contactUs}>
        <p>Contact Us</p>

        <div className={styles.contactUsCard}>
          <Image
            src={jetIcon}
            alt="jet-img"
            className={styles.img}
            width={24}
            height={24}
          />{" "}
          {/* Add width and height props */}
          <div className={styles.innercard}>
            {innerCardForMobile.map((item) => (
              <div key={item.id} className={styles.cardContents}>
                <Image src={item.icon} alt="icon" width={24} height={24} />{" "}
                {/* Add width and height props */}
                <p className={styles.title}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.listOfIcon}>
        {socialMediaLinks.map((item) => (
          <div key={item.id}>
            <Image src={item.icon} alt="icons" width={24} height={24} />{" "}
            {/* Add width and height props */}
          </div>
        ))}
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
    </div>
  );
};
