import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import axiosInstance from "@/redux/api";
import styles from "../styles/managebooking.module.css";
import {
  setBookingData,
  setLoading,
  setError,
} from "@/redux/flight/bookingSlice";
import { RootState } from "@/redux/store";

import Navbar from "../components/NavbarSecond/navbar";
import About from "../components/About/About";
import Airline from "../components/Airline/Airline";
import Footer from "../components/Footer/index";

import graph from "@/public/assets/images/graph.png";
import hero from "@/public/assets/images/Hero Illustration.png";
import locationIcon from "@/public/assets/svg/locationpin.svg";
import flyIcon from "@/public/assets/svg/buttonFly.svg";
import calendarIcon from "@/public/assets/images/managebookingbluehouse.png";

interface NavButton {
  id: number;
  title: string;
  icon: string;
  Route: string;
  class: string;
}

const ManageBooking: React.FC = () => {
  const dispatch = useDispatch();
  const { bookingData, loading, error } = useSelector(
    (state: RootState) => state.booking
  );

  useEffect(() => {
    const fetchBookings = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axiosInstance.get("/manage/booking");
        dispatch(setBookingData(response.data.data));
      } catch (error) {
        console.error("Error fetching bookings:", error);
        dispatch(setError("Failed to fetch bookings"));
      }
    };

    fetchBookings();
  }, [dispatch]);

  const MobileNavButtons: NavButton[] = useMemo(
    () => [
      {
        id: 1,
        title: "Featured Flights",
        icon: flyIcon,
        Route: "featuredflights",
        class: "black",
      },
      {
        id: 2,
        title: "Destinations",
        icon: locationIcon,
        Route: "destinations",
        class: "black",
      },
      {
        id: 3,
        title: "Manage Booking",
        icon: calendarIcon,
        Route: "managebooking",
        class: "rgba(6, 188, 225, 1)",
      },
    ],
    []
  );

  const renderHeader = () => (
    <div className={styles.header}>
      <Navbar />
    </div>
  );

  const renderHeroSection = () => (
    <div className={styles.firstDiv}>
      <Image className={styles.hero} src={hero} alt="Hero Image" />
      <div className={styles.textDiv}>
        <h1 className={styles.bigText}>MANAGE BOOKINGS</h1>
        <p className={styles.small}>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </div>
  );

  const renderBookingStats = () => (
    <div className={styles.graphDiv}>
      {[
        { title: "Total Booking", value: bookingData?.totalBooking },
        { title: "Pending Booking", value: bookingData?.pendingBooking },
        { title: "Canceled Booking", value: bookingData?.cancelledBooking },
      ].map((stat, index) => (
        <div key={index} className={styles.graph}>
          <Image alt={stat.title} src={graph} />
          <div className={styles.graphText}>
            <p>{stat.title}</p>
            <span>{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderMobileNavigation = () => (
    <div className={styles.navba}>
      <div className={styles.buttondiv}>
        {MobileNavButtons.map((item) => (
          <Link key={item.id} href={`/${item.Route}`}>
            <button className={styles.buttons}>
              <div className={styles.img}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </div>
              <p style={{ color: item.class }}>{item.title}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.general}>
      {renderHeader()}
      {renderHeroSection()}
      <div className={styles.secondDiv}>
        <div className={styles.about}>
          <About />
        </div>
        <div className={styles.bookingDiv}>
          <div className={styles.pass}>
            <span className={styles.passenger}>My Bookings</span>
            <Link href="/savedpassenger" className={styles.passengerLink}>
              <span>Passengers</span>
            </Link>
          </div>
          <div className={styles.book}>
            <span className={styles.none}>Bookings</span>
            <div className={styles.blueDiv}>
              <span className={styles.blue}>Get My Ticket</span>
              <span className={styles.blue}>Request Refund</span>
              <span className={styles.white}>Make Changes on Ticket</span>
            </div>
          </div>
          {renderBookingStats()}
          <Airline />
        </div>
      </div>
      {renderMobileNavigation()}
      <Footer />
    </div>
  );
};

export default ManageBooking;
