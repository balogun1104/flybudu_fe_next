import styles from "./index.module.css";
import payment from "@/public/assets/svg/Paymentplain.svg";
import jet from "@/public/assets/svg/jet.svg";
import reader from "@/public/assets/svg/reader.svg";
import fly from "@/public/assets/svg/buttonFly.svg";
import fone from "@/public/assets/svg/fone.svg";
import board from "@/public/assets/svg/board.svg";
import { RxCross1 } from "react-icons/rx";
import openmail from "@/public/assets/svg/openmail.svg";
import instagram from "@/public/assets/svg/instagram.svg";
import linkedin from "@/public/assets/svg/linkedin.svg";
import facebook from "@/public/assets/svg/facebookmobile.svg";
import twitter from "@/public/assets/svg/twittermobile.svg";

import Unknown from "@/public/assets/images/ProfilePic.png";
import Link from "next/link";
import Image from "next/image";

interface MobileNavScreenProps {
  onClick: () => void;
}

export const MobileNavScreen: React.FC<MobileNavScreenProps> = ({
  onClick,
}) => {
  const socialMediaLinks = [
    {
      id: 1,
      icon: instagram,
      path: "",
    },
    {
      id: 2,
      icon: linkedin,
      path: "",
    },
    {
      id: 3,
      icon: facebook,
      path: "",
    },
    {
      id: 4,
      icon: twitter,
      path: "",
    },
  ];
  const dataForMobile = [
    {
      id: 1,
      title: "Profile",
      icon: Unknown,
      navigate: "/profile-page",
    },
    {
      id: 2,
      title: "Manage Booking",
      icon: fly,
      navigate: "/managebooking",
    },
    {
      id: 3,
      title: "Saved passenger",
      icon: payment,
      navigate: "/saved-passenger",
    },
    {
      id: 4,
      title: "Notification",
      icon: fly,
      navigate: "/notification",
    },
    {
      id: 5,
      title: "Logout",
      icon: reader,
      navigate: "/login",
    },
  ];

  const innerCardForMobile = [
    {
      id: 1,
      title: "08160178711",
      icon: fone,
    },
    {
      id: 2,
      title: "17 Bakare Jafojo Street, Lagos Island",
      icon: board,
    },
    {
      id: 3,
      title: "support@flybudu.com",
      icon: openmail,
    },
  ];

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.top}>
          <RxCross1 onClick={onClick} />
        </div>
        <div className={styles.dataContainer}>
          {dataForMobile.map((item) => (
            <div key={item.id} className={styles.innerContainer}>
              <Image src={item.icon} alt="icons" />
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={item.navigate}
              >
                {" "}
                <p>{item.title}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.contactUs}>
          <p>Contact Us</p>

          <div className={styles.contactUsCard}>
            <Image src={jet} alt="jet-img" className={styles.img} />

            <div className={styles.innercard}>
              {innerCardForMobile.map((item) => (
                <div className={styles.cardContents} key={item.id}>
                  <Image src={item.icon} alt="icon" />
                  <p className={styles.title}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.listOfIcon}>
          {socialMediaLinks.map((item) => (
            <div key={item.id}>
              <Image src={item.icon} alt="icons" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
