import React from "react";
import styles from "../styles/savedpassenger.module.css";
import MobileNav from "../components/MobileNavBar/index";
import hero from "@/public/assets/images/Hero Illustration.png";
import About from "../components/About/About";
import { Link } from "@nextui-org/react";
import Footer from "../components/Footer/index";
import Navbar from "../components/NavbarSecond/navbar";
import PassengerList from "@/components/PassengerList/PassengerList";

import avatar from "@/public/assets/images/whatsaap.jpg";
import booking from "@/public/assets/images/managebookingblack.png";
import notification from "@/public/assets/images/Group 2.png";
import profileImg from "@/public/assets/images/Layer 2.png";
import savedImg from "@/public/assets/images/savedpassengerwhite.png";
import logoutImg from "@/public/assets/images/Wallet.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { BookingData } from "@/redux/flight/bookingTypes.type";
function SavedPassenger() {
  const { bookingData, loading, error } = useSelector((state: RootState) => state.booking) as {
    bookingData: BookingData;
    loading: boolean;
    error: string;
  };
  
  const user = bookingData.regular[0];

  return (
    <div className={styles.general}>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.firstDiv}>
        <Image className={styles.hero} src={hero} alt="" />
        <div className={styles.textDiv}>
          <span className={styles.bigText}> MANAGE BOOKINGS</span>
          <p className={styles.small}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.about}>
          <div className={styles.genera}>
            <div className={styles.avatarImg}>
              {" "}
              <Image src={avatar} className={styles.avatar} alt="" />
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="/profile"
              >
                {" "}
                <span className={styles.edit}>Edit Profile</span>
              </Link>
            </div>

            <div className={styles.relax}>
              <span style={{ fontWeight: "bold" }}> Mr. Unknown Viktim</span>
              <span>
                Phone: <b>081xxxxxxx</b>
              </span>
              <span>
                Email: <b>unknown@viktim.com</b>
              </span>
              <span>
                Nationality: <b>Nigerian</b>
              </span>
              <span>
            Gender: <b>{user.gender}</b>
              </span>
              <span>
                Date of Birth <b>Mar. 23, 2024</b>
              </span>
            </div>

            <div className={styles.nameDiv}>
              <span> {user.title} {user.first_name} {user.surname}</span>
              <p>{user.phone}</p>
              <p>{user.email}</p>
            </div>
            <div className={styles.listDiv}>
              <div className={styles.fourDiv}>
                <Link
                  href="/managebooking"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {" "}
                  <div className={styles.profile}>
                    <Image alt="" src={booking} />
                    <span>My Bookings</span>
                  </div>
                </Link>

                <Link
                  href="/notification"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {" "}
                  <div className={styles.notification}>
                    <div className={styles.inner}>
                      <Image alt="" src={notification} />
                      <span>Notifications</span>
                    </div>
                    <p className={styles.red}>7</p>
                  </div>
                </Link>

                <Link
                  href="/profilepage"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <div className={styles.profile}>
                    <Image alt="" src={profileImg} />
                    <span>Profile</span>
                  </div>
                </Link>

                <Link
                  href="/savedpassenger"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <div className={styles.mybookingDiv}>
                    <Image alt="" src={savedImg} />
                    <span>Saved Passengers</span>
                  </div>
                </Link>
              </div>
              <div className={styles.logoutDiv}>
                <div className={styles.profile}>
                  <Image alt="" src={logoutImg} />
                  <Link
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    href="/login"
                  >
                    {" "}
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <span className={styles.saved}>Saved Passengers</span>

          <div className={styles.pass}>
            <Link
              href="/managebooking"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <span>My Bookings</span>{" "}
            </Link>
            <Link
              href="/savedpassenger"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <span className={styles.passenger} style={{ fontWeight: "bold" }}>
                Passengers
              </span>
            </Link>
          </div>

          <PassengerList />
          {/* <div className={styles.tooMuch}>
            <div>
              <div style={{ visibility: "hidden" }}>
                <span>6</span>{" "}
                <span style={{ color: "rgba(141, 142, 141, 1)" }}> 10</span>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              {" "}
              <button className={styles.prev}>Prev</button>{" "}
              <Link href="/mybookings">
                <button className={styles.next}>Next</button>{" "}
              </Link>
            </div>
            <div>
              <span>
                Page <span className={styles.special}>1</span> Of2
              </span>
            </div>
          </div> */}
        </div>
      </div>
      <MobileNav />
      <Footer />
    </div>
  );
}

export default SavedPassenger;
