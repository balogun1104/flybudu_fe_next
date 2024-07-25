/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import axiosInstance from "@/redux/api";
import styles from "../styles/managebooking.module.css";
import {
  setBookingData,
  setLoading,
  setError,
} from "@/redux/flight/bookingSlice";
import { RootState } from "@/redux/store";
import { useAuth } from "@/hooks/useAuth";

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
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const { bookingData, loading, error } = useSelector(
    (state: RootState) => state.booking
  );

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      const fetchBookings = async () => {
        dispatch(setLoading(true));
        try {
          const response = await axiosInstance.get("/manage/booking");
          dispatch(setBookingData(response.data.data));
        } catch (error) {
          console.error("Error fetching bookings:", error);
          dispatch(setError("Failed to fetch bookings"));
        } finally {
          dispatch(setLoading(false));
        }
      };

      fetchBookings();
    }
  }, [dispatch, isAuthenticated]);

  const handleProceedToLogin = () => {
    router.push("/login");
  };

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
          Take control of your travel plans. View, modify, or cancel your
          bookings with ease. Fly Budu puts you in the pilot's seat of your
          journey.
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

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Login Required</h2>
          <p className={styles.modalText}>
            Please login to manage your bookings and access your travel
            information.
          </p>
          <div className={styles.modalButtons}>
            <button
              className={styles.modalButtonPrimary}
              onClick={handleProceedToLogin}
            >
              Proceed to Login
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderLoading = () => (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}></div>
    </div>
  );

  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.general}>
      {renderHeader()}
      {renderHeroSection()}
      <div className={styles.secondDiv}>
        {isAuthenticated ? (
          <>
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
          </>
        ) : (
          <div className={styles.unauthenticatedMessage}>
            Please login to view and manage your bookings. Access your travel
            itineraries, make changes to your flights, and get up-to-date
            information about your upcoming trips.
          </div>
        )}
      </div>
      {renderMobileNavigation()}
      <Footer />
      {renderModal()}
      {loading && renderLoading()}
    </div>
  );
};

export default ManageBooking;
