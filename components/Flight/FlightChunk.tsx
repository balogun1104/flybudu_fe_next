import React, { useEffect, useState } from "react";
import styles from "./flight.module.css";
import GreenAfrica from "@/public/assets/images/greenAfrica.png";
import Star from "@/public/assets/images/star.png";
import Customer from "@/public/assets/images/Customers.png";
import Seat from "@/public/assets/images/seats.png";
import Line from "@/public/assets/images/Line.png";
import Circle from "@/public/assets/images/circle.png";
import Plane from "@/public/assets/images/plane.png";
import date from "@/public/assets/svg/date.svg";
import time from "@/public/assets/svg/time.svg";
import Smallseat from "@/public/assets/svg/seat.svg";
import Bagage from "@/public/assets/svg/luggage.svg";
import smallPlane from "@/public/assets/images/smallPlane.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

interface Airline {
  id: number;
  company: string;
  code: string;
  logo: string;
  region: string;
  // Add other properties as needed
}

interface FlightData {
  arrival: null;
  departure: {
    additional_info: null;
    airline: Airline;
    airline_id: string;
    arrival: string;
    available_seats: null;
    created_at: string;
    date: string;
    dates: string;
    days: string;
    departure: string;
    exempted_dates: string;
    id: number;
    peak_periods: string;
    price: string;
    repeats: string;
    route_id: string;
    setting_id: string;
    status: string;
    updated_at: string;
  };
}

interface FlightChunkProps {
  flightData: { [key: string]: FlightData[] };
}

const DetailsModal: React.FC<{ isOpen: boolean; onClose: () => void; flightData: FlightData }> = ({ isOpen, onClose, flightData }) => {
  if (!isOpen) return null;

  useEffect(() => {
    console.log("DetailsModal data updated:", flightData);
  }, [flightData]);

  const departureData = flightData.departure;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <span className={styles.smallPlane}>
          <Image src={smallPlane} alt="" /> Departure Flight
        </span>
        <div className={styles.df}>
          <div className={styles.dfOne}>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {/* Replace with actual departure city and airport */}
              Departure City (Airport Code)
            </span>
            <span>{departureData.airline.company}</span>
            <span className={styles.ip}>
              <Image src={date} alt="" />
              Date: {departureData.date}
            </span>
            <span className={styles.ip}>
              <Image src={time} alt="" /> Time: {departureData.departure} - {departureData.arrival}
            </span>
            <span className={styles.ip}>
              <Image src={Smallseat} alt="" /> Class: Economy
            </span>
            <span className={styles.ip}>
              <Image src={Bagage} alt="" /> Baggage: Standard
            </span>
          </div>
          <div>
            <Image src={Plane} alt="" />
          </div>
          <div style={{ lineHeight: "35px" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {/* Replace with actual arrival city and airport */}
              Arrival City (Airport Code)
            </span>
            <span>{departureData.airline.company}</span>
            <span>
              <Image src="" alt="" /> PASSENGER 1
            </span>
            <span>{/* Add duration if available */}</span>
            <span>{departureData.repeats}</span>
            <span style={{ fontWeight: "bold" }}>{departureData.available_seats || 'N/A'} Seats Left</span>
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #ccc" }}></div>
      <div className={styles.totalDiv}>
        <div className={styles.total}>
          <span>Total</span> <span>&#8358;{departureData.price}</span>
        </div>
        {/* Add more details as needed */}
        <span style={{ fontWeight: "bold", color: "red" }}>PLEASE NOTE</span>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontWeight: "bold" }}> *Non Refundable.</span>
            <span style={{ fontWeight: "bold" }}>
              *Total fare displayed has been rounded off and may thus show a
              slight difference.
            </span>
          </div>
          <Link href="/selectflight" style={{ textDecoration: "none" }}>
            <span className={styles.save}>Book Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const FlightChunk: React.FC<FlightChunkProps> = ({ flightData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const buttonText = isModalOpen ? "Show Less" : "More Details";
  const ButtonIcon = isModalOpen ? IoIosArrowBack : IoIosArrowForward;

  useEffect(() => {
    console.log("FlightChunk data updated:", flightData);
  }, [flightData]);

  // Assuming we're dealing with the first airline and its first flight
  const airlineName = Object.keys(flightData)[0];
  const firstFlight = flightData[airlineName][0];

  if (!firstFlight) {
    return <div>No flight data available</div>;
  }

  const departureData = firstFlight.departure;

  return (
    <div className={styles.container}>
      <div className={styles.FlightChunkWrapper}>
        <div className={styles.FlightChunkOne}>
          <div className={styles.chunkOne}>
            <Image src={departureData.airline.logo} alt="" width={50} height={50} className={styles.greenIMG} />
            <div className={styles.Customer}>
              <span>
                <Image src={Star} alt="" />
                <span style={{ fontWeight: "bold" }}>N/A</span>
              </span>
              <span>
                <Image src={Customer} alt="" /> <span>N/A</span>
              </span>
            </div>
          </div>
          <span className={styles.money}>₦{departureData.price}</span>
        </div>

        <div className={styles.FlightChunkTwo}>
          <div className={styles.green} style={{ paddingBottom: "25px" }}>
            <div className={styles.imgText}>
              <Image alt="" src={departureData.airline.logo} width={30} height={30} className={styles.greenSmall} />
              <span style={{ fontFamily: "sans-serif" }}>{departureData.airline.company}</span>
            </div>

            <div className={styles.client}>
              <span>
                <Image src={Star} alt="" />
                <span style={{ fontWeight: "bold" }}>N/A</span>
              </span>
              <span>
                <Image src={Customer} alt="" /> <span>N/A</span>
              </span>
            </div>

            <button className={styles.seatLeft}>
              <Image src={Seat} alt="seat" /> {departureData.available_seats || 'N/A'}{" "}
              <span className={styles.seat}>Seats left</span>
            </button>
            {/* Add recommended button if needed */}
          </div>

          <div className={styles.seven} style={{ paddingBottom: "25px" }}>
            <b className={styles.lagosText}>
              {departureData.departure}({departureData.airline.code}){" "}
              <span className={`${styles.little} ${styles.lagos}`}>
                {/* Add departure city if available */}
              </span>
            </b>
            <div>
              <span className={styles.onehr}>{/* Add duration if available */}</span>
              <div className={styles.imgWrap}>
                <Image className={styles.imgOne} src={Circle} alt="" />
                <Image className={styles.imgTwo} src={Line} alt="" />
                <Image className={styles.imgThree} src={Circle} alt="" />
              </div>
              <span className={styles.onehrStrop}>0 Stop</span>
            </div>
            <b className={styles.abujaText}>
              {departureData.arrival}({departureData.airline.code}) <span className={styles.little}>{/* Add arrival city if available */}</span>
            </b>
          </div>

          <div className={styles.bkmr}>
            <span className={styles.price}>₦{departureData.price}</span>
            <Link href="/selectflight">
              <button className={styles.book}>Book Now</button>
            </Link>
            <button className={styles.more} onClick={toggleModal}>
              {buttonText}{" "}
              <span>
                <ButtonIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
      <DetailsModal isOpen={isModalOpen} onClose={toggleModal} flightData={firstFlight} />
    </div>
  );
};

export default FlightChunk;