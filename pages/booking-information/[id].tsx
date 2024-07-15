import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { RootState } from "@/redux/store";
import styles from "../../styles/mybooking.module.css";
import flyBudu from "@/public/assets/images/flybuduLogo.png";
import Quote from "@/public/assets/svg/Payment.svg";
import Menu from "@/public/assets/svg/menu.svg";
import Avatar from "@/public/assets/images/whatsaap.jpg";
import hero from "@/public/assets/images/Hero Illustration.png";
import GreenImg from "@/public/assets/images/Frame 661.png";
import star from "@/public/assets/images/star.png";
import customers from "@/public/assets/images/Customers.png";

import About from "../../components/About/About";
import Information from "../../components/FlightInformation/information";
import Footer from "../../components/Footer/index";

const BookingInformation: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { bookingData } = useSelector((state: RootState) => state.booking);

  const booking = useMemo(
    () => bookingData?.regular.find((b) => b.id === Number(id)),
    [bookingData, id]
  );

  if (!booking) {
    return <div>Loading...</div>;
  }

  const renderHeader = () => (
    <header className={styles.header}>
      <div className={styles.navbarWrap}>
        <Link href="/">
          <Image className={styles.logo} src={flyBudu} alt="FlyBudu Logo" />
        </Link>
        <nav className={styles.navbar}>
          <Link className={styles.active} href="/">
            Home
          </Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/featuredflights">Featured Flights</Link>
          <Link href="/contacts">Contact</Link>
        </nav>
        <div className={styles.quoteWrap}>
          <div className={styles.quote}>
            <span>Get a Quote</span>
            <Image src={Quote} alt="Quote Icon" />
          </div>
          <Image src={Avatar} className={styles.avatar} alt="User Avatar" />
          <Image src={Menu} alt="Menu Icon" className={styles.quoteImg} />
        </div>
      </div>
    </header>
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

  const renderMainContent = () => (
    <main className={styles.secondDiv}>
      <aside className={styles.about}>
        <About />
      </aside>
      <div className={styles.family}>
        <div className={styles.spanDiv}>
          <Link href="/managebooking">
            <span>Back</span>
          </Link>
          <div className={styles.twin}>
            <span className={styles.taye}>Get my Ticket</span>
            <span className={styles.taye}>Request Refund</span>
            <span className={styles.kehinde}>Make Changes on Ticket</span>
          </div>
        </div>
        <div className={styles.together}>
          <div className={styles.booking}>
            <Information booking={booking} />
          </div>
          <div className={styles.greenDiv}>
            <Image
              src={
                typeof booking.schedule?.airline?.logo === "string"
                  ? booking.schedule.airline.logo
                  : GreenImg
              }
              className={styles.greenImg}
              width={90}
              height={90}
              alt="Airline Logo"
            />
            <div className={styles.whiteDiv}>
              <span>{booking.schedule?.airline?.company || "Airline"}</span>
              <div className={styles.finalDiv}>
                <Image alt="Star Rating" src={star} />
                <span style={{ fontWeight: "bold" }}>5.0</span>
                <Image alt="Customer Count" src={customers} />
                <span>123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <div className={styles.general}>
      {renderHeader()}
      {renderHeroSection()}
      {renderMainContent()}
      <Footer />
    </div>
  );
};

export default BookingInformation;
