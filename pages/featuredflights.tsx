import React, { useState, useEffect } from "react";
import styles from "../styles/featuredflight.module.css";
import axiosInstance from "@/redux/api";
import threeImg from "@/public/assets/images/threepictures.png";
import locationIcon from "@/public/assets/svg/locationpin.svg";
import flyIcon from "@/public/assets/images/featuredflightbluehouse.png";
import calendarIcon from "@/public/assets/svg/date.svg";
import green from "@/public/assets/svg/green.svg";
import star from "@/public/assets/svg/Star.svg";
import plane from "@/public/assets/images/Aeroplane.png";
import Advert from "../components/FlightAdvert/FlightAdvert";

import Prev from "@/public/assets/images/prev.png";
import Next from "@/public/assets/images/Next.png";
import leftLine from "@/public/assets/images/leftline.png";
import leftPlane from "@/public/assets/images/leftplane.png";
import rightLine from "@/public/assets/images/rightline.png";
import cloud from "@/public/assets/svg/ffDown.svg";
import rightPlane from "@/public/assets/images/rightplane.png";

import Footer from "../components/Footer/index";
import Menu from "@/public/assets/images/menu 1.png";
import Quote from "@/public/assets/svg/Payment.svg";
import flyBudu2 from "@/public/assets/images/flybuduLogo2.png";
import { MobileNavScreen } from "@/components/ManageBookingNavBar";
import QuoteBar from "@/components/Qoute/quote";
import Logo from "@/public/assets/images/flybuduLogo.png";
import avatar from "@/public/assets/images/Avatar.png";
import WhiteLogo from "@/public/assets/images/whiteFlybudu.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import BeUptoDate from "@/components/BeUpToDate";

interface FlightData {
  id: number;
  image: string;
  route: {
    location: string;
    destination: string;
  };
  departure: string;
  additional_info: string | null;
  airline: {
    logo: string;
    company: string;
  };
  price: string;
}

const FlightCard = ({ flightData }: { flightData: FlightData }) => {
  return (
    <div className={styles.card}>
      <Image
        src={flightData.image}
        alt=""
        width={300}
        height={300}
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          width: "100%",
        }}
      />
      <div className={styles.secThreeMid}>
        <p>{flightData.route.location}</p>
        <Image src={plane} alt="arrow" />
        <p>{flightData.route.destination}</p>
      </div>
      <span className={styles.newBorn}>
        {new Date(flightData.departure).toLocaleDateString()}
      </span>
      <p className={styles.Yorem}>
        {flightData.additional_info || "No additional information available."}
      </p>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomOne}>
          <Image
            style={{ width: "33px" }}
            src={flightData.airline.logo}
            alt={flightData.airline.company}
            width={30}
            height={30}
          />
          <div className={styles.cardBottomTwo}>
            <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
              {flightData.airline.company}
            </p>
            <span style={{ display: "flex", gap: "10px" }}>
              <Image src={star} alt="star" />
              <p style={{ margin: "0", fontFamily: "NeueHaasDisplayBold" }}>
                5.0
              </p>
            </span>
          </div>
        </div>
        <div>
          <p className={styles.number}>{`₦${parseFloat(
            flightData.price
          ).toLocaleString()}`}</p>
        </div>
      </div>
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className={`${styles.card} ${styles.skeletonCard}`}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.secThreeMid}>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonPlane}></div>
        <div className={styles.skeletonText}></div>
      </div>
      <div className={`${styles.skeletonText} ${styles.skeletonNewBorn}`}></div>
      <div className={`${styles.skeletonText} ${styles.skeletonYorem}`}></div>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomOne}>
          <div className={styles.skeletonLogo}></div>
          <div className={styles.cardBottomTwo}>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonRating}>
              <div className={styles.skeletonStar}></div>
              <div className={styles.skeletonText}></div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.skeletonPrice}></div>
        </div>
      </div>
    </div>
  );
};

function FeaturedFlights() {
  const MobileNavButtons = [
    {
      id: 1,
      title: "Featured Flights",
      icon: flyIcon,
      Route: "featuredflights",
      class: "rgba(6, 188, 225, 1)",
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
      class: "black",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [flightData, setFlightData] = useState<FlightData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/featureds/list");
        if (response.data.status && response.data.data) {
          setFlightData(response.data.data);
        } else {
          throw new Error(
            response.data.message || "Failed to fetch flight data"
          );
        }
        setIsLoading(false);
      } catch (err: unknown) {
        console.error("Error fetching flight data:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setIsLoading(false);
      }
    };

    fetchFlightData();
  }, []);

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.general}>
      <div>
        <div className={styles.NavtwoContainer}>
          <div className={styles.navcon}>
            <div className={styles.navbarWrapBlack}>
              <div
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={handleLogoClick}
              >
                {isMobile ? (
                  <Image className={styles.flybudu} src={flyBudu2} alt="" />
                ) : (
                  <Image className={styles.flybudu} src={Logo} alt="" />
                )}
              </div>

              <div>
                <div className={styles.navbar}>
                  <Link href="/flight">flight</Link>
                  <Link href="/destinations">Destinations</Link>
                  <Link className={styles.active} href="/featuredflights">
                    Featured Flights
                  </Link>
                  <Link href="/contacts">Contact</Link>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search Flights"
                className={styles.searchInput}
              />
              <div className={styles.quoteWrap}>
                <div
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                  className={styles.quote}
                >
                  <span>Corporate Booking</span>
                  <span>
                    <Image src={Quote} alt="" />
                  </span>
                </div>
                <Image alt="" className={styles.avatar} src={avatar} />
                {isMobile ? (
                  <Image
                    src={WhiteLogo}
                    alt=""
                    className={styles.quoteImg}
                    onClick={() => setOpenMenu(!openMenu)}
                  />
                ) : (
                  <Image
                    src={Menu}
                    alt=""
                    onClick={() => setOpenMenu(!openMenu)}
                  />
                )}
              </div>
            </div>
          </div>

          {openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />}
        </div>
        {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
      </div>

      <div className={styles.backgroundDiv}>
        <div className={styles.firstPart}>
          <span>FEATURED FLIGHTS</span>
          <p>
            Discover our handpicked selection of exceptional flight deals. From
            bustling cities to serene getaways, find your perfect journey at
            unbeatable prices. Book now and embark on your next adventure!
          </p>
        </div>
        <div className={styles.secondPart}>
          <div className={styles.blurDiv}>
            <p
              className={styles.from}
              style={{ fontFamily: "NeueHaasDisplayBold" }}
            >
              Starting at
            </p>
            <span className={styles.amount}>&#8358;58,900</span>
            <p
              className={styles.japa}
              style={{ fontFamily: "NeueHaasDisplayBold" }}
            >
              Lagos to Abuja: Your Capital Connection
            </p>
            <div className={styles.pictureText}>
              <Image alt="Happy travelers" src={threeImg} />
              <div>
                <p style={{ fontFamily: "NeueHaasDisplayBold" }}>5,000+</p>
                <p>Satisfied Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.secplanth}>
          <div className={styles.left}>
            <Image className={styles.leftPlane} src={leftPlane} alt="" />
            <Image className={styles.line} src={leftLine} alt="" />
          </div>

          <div className={styles.right}>
            <Image className={styles.rightPlane} src={rightPlane} alt="" />
            <Image src={rightLine} alt="" />
          </div>
        </div>
        <div className="MiddleDiv">
          <div className={styles.secThreeImg}>
            {isLoading ? (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : error ? (
              <p>{error}</p>
            ) : (
              flightData.map((flight, index) => (
                <React.Fragment key={flight.id}>
                  <FlightCard flightData={flight} />
                  {index % 2 === 1 && <Advert />}
                </React.Fragment>
              ))
            )}
          </div>
          <div className={styles.tooMuch}>
            <Image className={styles.cloud} src={cloud} alt="" />
            <div className={styles.buttonDiv}>
              <button className={styles.prev}>
                <Image src={Prev} alt="" /> Prev
              </button>
              <button className={styles.next}>
                Next <Image src={Next} alt="" />
              </button>
            </div>
            <div>
              <span className={styles.span}>
                Page <span className={styles.special}>1</span> Of 2
              </span>
            </div>
          </div>
        </div>
      </div>

      <BeUptoDate />

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
                <p style={{ color: "black" }}>{item.title}</p>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FeaturedFlights;
