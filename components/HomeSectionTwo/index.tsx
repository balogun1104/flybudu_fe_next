/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFeaturedFlights } from "@/redux/flight/featuredFlightSclice";
import axiosInstance from "@/redux/api";
import styles from "./homeSectionTwo.module.css";
import Light from "@/public/assets/svg/light.svg";
import green from "@/public/assets/svg/green.svg";
import star from "@/public/assets/svg/Star.svg";
import ffDown from "@/public/assets/svg/ffDown.svg";
import plane from "@/public/assets/images/Aeroplane.png";
import Slider from "react-slick";
import Image from "next/image";

interface Airline {
  id: number;
  company: string;
  code: string;
  logo: string;
  region: string;
  active: string;
  created_at: string;
  updated_at: string;
  luggage10: string;
  luggage15: string;
  luggage20: string;
}

interface Route {
  id: number;
  location: string;
  location_code: string;
  destination: string;
  destination_code: string;
  active: string;
  created_at: string;
  updated_at: string;
}

interface FeaturedFlight {
  id: number;
  route_id: string;
  airline_id: string;
  departure: string;
  price: string;
  available_seats: string;
  image: string;
  additional_info: string | null;
  status: string | null;
  active: string;
  created_at: string;
  updated_at: string;
  airline: Airline;
  route: Route;
}

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

function HomeSectionTwo() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredFlights, setLocalFeaturedFlights] = useState<FeaturedFlight[]>(
    []
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchFeaturedFlights = async () => {
      try {
        setIsLoading(true);
        console.log("Fetching featured flights...");
        const response = await axiosInstance.get("/featureds/list");
        console.log("API response:", response);
        if (response.data.status && response.data.data) {
          setLocalFeaturedFlights(response.data.data);
          dispatch(setFeaturedFlights(response.data.data));
          console.log("Flights data set:", response.data.data);
        } else {
          throw new Error(
            response.data.message || "Failed to fetch flight data"
          );
        }
      } catch (err) {
        console.error("Error fetching flight data:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };
    console.log("HomeSectionTwo useEffect running");
    fetchFeaturedFlights();
  }, [dispatch]);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  const renderFlightCards = () => {
    if (isLoading) {
      return (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      );
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return featuredFlights.map((flight) => (
      <div key={flight.id} className={styles.card}>
        <Image
          src={flight.image}
          width={300}
          height={300}
          alt=""
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            width: "100%",
            height: "auto",
          }}
        />
        <div className={styles.secThreeMid}>
          <p className={styles.textTwin}>{flight.route.location}</p>
          <Image src={plane} alt="arrow" width={24} height={24} />
          <p className={styles.textTwin}>{flight.route.destination}</p>
        </div>
        <span className={styles.newBorn}>
          {new Date(flight.departure).toLocaleDateString()}
        </span>
        <p className={styles.Yorem}>
          {flight.additional_info || "No additional information available."}
        </p>
        <div className={styles.cardBottom}>
          <div className={styles.cardBottomOne}>
            <Image
              style={{ width: "33px" }}
              src={flight.airline.logo}
              alt={flight.airline.company}
              width={33}
              height={33}
            />
            <div className={styles.cardBottomTwo}>
              <p
                style={{
                  margin: "0",
                  fontFamily: "NeueHaasDisplayBold",
                  fontWeight: "bold",
                }}
              >
                {flight.airline.company}
              </p>
              <span style={{ display: "flex", gap: "10px" }}>
                <Image src={star} alt="star" width={16} height={16} />
                <p
                  style={{
                    margin: "0",
                    fontFamily: "NeueHaasDisplayBold",
                  }}
                >
                  5.0
                </p>
              </span>
            </div>
          </div>
          <div>
            <p className={styles.number}>
              ₦{parseFloat(flight.price).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.HomeSectionTwo}>
      <Image src={Light} alt="" className={styles.sun} />
      <div className={styles.secTwo}>
        <div>
          <p className={styles.feat}>Featured Flights</p>
          <p className={styles.corem}>
            Discover our handpicked selection of exceptional flight deals. From
            bustling cities to serene getaways, we've curated the best offers to
            suit every traveler. Whether you're planning a business trip or a
            dream vacation, our featured flights combine comfort, convenience,
            and unbeatable value. Start your journey with us and experience air
            travel at its finest.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.outlined}`}>
            <span className={styles.arrow}>&larr;</span>
          </button>
          <button className={`${styles.button} ${styles.filled}`}>
            <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>

      {isMobile ? (
        <div className={styles.secThreeImgs}>
          <Slider {...settings}>{renderFlightCards()}</Slider>
        </div>
      ) : (
        <div className={styles.secThreeImg}>{renderFlightCards()}</div>
      )}

      <Image src={ffDown} alt="ffDown" className={styles.ffDown} />
    </div>
  );
}

export default HomeSectionTwo;
