import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/savedpassenger.module.css";
import MobileNav from "../components/MobileNavBar/index";
import hero from "@/public/assets/images/Hero Illustration.png";
import About from "../components/About/About";
import { Link } from "@nextui-org/react";
import Footer from "../components/Footer/index";
import Navbar from "../components/NavbarSecond/navbar";
import PassengerList from "@/components/PassengerList/PassengerList";
import PassengerDetails from "@/components/PassengerDetails/PassengerDetails";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { BookingData } from "@/redux/flight/bookingTypes.type";

function SavedPassenger() {
  const router = useRouter();
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { bookingData, loading, error } = useSelector(
    (state: RootState) => state.booking
  ) as {
    bookingData: BookingData;
    loading: boolean;
    error: string;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (router.query.passenger) {
      try {
        const parsedPassenger = JSON.parse(router.query.passenger as string);
        setSelectedPassenger(parsedPassenger);
      } catch (error) {
        console.error("Failed to parse passenger data:", error);
      }
    }
  }, [router.query.passenger]);

  const handlePassengerSelect = (passenger) => {
    setSelectedPassenger(passenger);
    if (isMobile) {
      router.push({
        pathname: "/passengerdetails",
        query: { passenger: JSON.stringify(passenger) },
      });
    }
  };

  const handleBackFromDetails = () => {
    setSelectedPassenger(null);
    router.push("/savedpassenger", undefined, { shallow: true });
  };

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
            Take control of your travel plans. View, modify, or cancel your
            bookings with ease. Fly Budu puts you in the pilot's seat of your
            journey.
          </p>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.about}>
          <About />
        </div>
        <div className={styles.second}>
          <span className={styles.saved}>Saved Passengers</span>

          <div className={styles.pass}>
            <div className={styles.passOne}>
              <Link href="/managebooking" className={styles.passengerLink}>
                <p className={styles.passenger}>My Bookings</p>
              </Link>
            </div>
            <div className={styles.passTwo}>
              <Link href="/savedpassenger" className={styles.passengerLink}>
                <p className={styles.passengerPass}>Passengers</p>
              </Link>
            </div>
          </div>

          {isMobile ? (
            <PassengerList onPassengerSelect={handlePassengerSelect} />
          ) : selectedPassenger ? (
            <PassengerDetails
              passenger={selectedPassenger}
              onBack={handleBackFromDetails}
            />
          ) : (
            <PassengerList onPassengerSelect={handlePassengerSelect} />
          )}
        </div>
      </div>
      <MobileNav />
      <Footer />
    </div>
  );
}

export default SavedPassenger;