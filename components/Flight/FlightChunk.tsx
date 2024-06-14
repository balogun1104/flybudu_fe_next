import React, { useState } from "react";
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
import { useRouter } from "next/router";

interface DetailsModalProps {
  isOpen: boolean;
  onClose: any;
}
const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose }) => {
  const navigate = useRouter()
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <span className={styles.smallPlane}>
          <Image src={smallPlane} alt="" /> Depature Flight
        </span>
        <div className={styles.df}>
          <div className={styles.dfOne}>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Lagos (LOS)
            </span>
            <span>Murtala Muhammed International Airport</span>
            <span className={styles.ip}>
              <Image src={date} alt="" />
              Date: Mar. 19, 2024
            </span>
            <span className={styles.ip}>
              <Image src={time} alt="" /> Time: 7:00 - 8:40{" "}
            </span>
            <span className={styles.ip}>
              <Image src={Smallseat} alt="" /> Class: Economy
            </span>
            <span className={styles.ip}>
              <Image src={Bagage} alt="" /> Baggage:{" "}
              <span style={{ fontWeight: "700" }}>7KG Hand Baggage</span>
            </span>
          </div>
          <div>
            <Image src={Plane} alt="" />
          </div>
          <div style={{ lineHeight: "35px" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Abuja (ABJ)
            </span>
            <span>Nnamdi Azikiwe International Airport</span>
            <span>
              <Image src="" alt="" /> PASSANGER 1
            </span>
            <span>1h 40m</span>
            <span>Round Trip</span>
            <span style={{ fontWeight: "bold" }}>2 Seats Left</span>
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #ccc" }}></div>
      <div className={styles.modalContent}>
        <span className={styles.smallPlane}>
          <Image src="" alt="" /> Return Flight
        </span>
        <div className={styles.df}>
          <div className={styles.dfOne}>
            <span style={{ fontWeight: "bold" }}>Lagos (LOS)</span>
            <span>Murtala Muhammed International Airport</span>
            <span className={styles.ip}>
              <Image src={date} alt="" />
              Date: Mar. 19, 2024
            </span>
            <span className={styles.ip}>
              <Image src={time} alt="" /> Time: 7:00 - 8:40{" "}
            </span>
            <span className={styles.ip}>
              <Image src={Smallseat} alt="" /> Class: Economy
            </span>
            <span className={styles.ip}>
              <Image src={Bagage} alt="" /> Baggage:{" "}
              <span style={{ fontWeight: "700" }}>7KG Hand Baggage</span>
            </span>
          </div>
          <div>
            <Image src={Plane} alt="" />
          </div>
          <div style={{ lineHeight: "35px" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Abuja (ABJ)
            </span>
            <span>Nnamdi Azikiwe International Airport</span>
            <span>
              <Image src="" alt="" /> PASSANGER 1
            </span>
            <span>1h 40m</span>
            <span>Round Trip</span>
            <span style={{ fontWeight: "bold" }}>2 Seats Left</span>
          </div>
        </div>
      </div>
      <div className={styles.totalDiv}>
        <div className={styles.total}>
          {" "}
          <span>Total</span> <span>&#8358;160,000</span>
        </div>
        <div className={styles.display}>
          {" "}
          <span>Depature: Mar, 19, 2024 07:00-08:40</span> <span>1h40m</span>{" "}
        </div>
        <div className={styles.display}>
          {" "}
          <span>
            {" "}
            Passenger: <b>1</b>
          </span>{" "}
          <span>One Way</span>{" "}
        </div>
        <div className={styles.display}>
          {" "}
          <span>
            Baggage: <b>7KGS Hand baggage</b>
          </span>{" "}
          <span style={{ fontWeight: "bold" }}>2 Seats Left</span>{" "}
        </div>
        <span style={{ fontWeight: "bold", color: "red" }}>PLEASE NOTE</span>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontWeight: "bold" }}> *Non Refundable.</span>
            <span style={{ fontWeight: "bold" }}>
              *Total fare displayed has been rounded off and may thus show a
              slight difference.{" "}
            </span>
          </div>
          <Link href="/selectflight" style={{ textDecoration: "none" }}>
            <span className={styles.save}>Book Now</span>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

const FlightChunk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const buttonText = isModalOpen ? "Show Less" : "More Details";
  const ButtonIcon = isModalOpen ? IoIosArrowBack : IoIosArrowForward;
  return (
    <div className={styles.container}>
      <Link
        href="/selectflight"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={styles.FlightChunkWrapper}>
          <div className={styles.FlightChunkOne}>
            <div className={styles.chunkOne}>
              <Image src={GreenAfrica} alt="" className={styles.greenIMG} />
              <div className={styles.Customer}>
                <span>
                  {" "}
                  <Image src={Star} alt="" />{" "}
                  <span style={{ fontWeight: "bold" }}>5.0</span>
                </span>
                <span>
                  {" "}
                  <Image src={Customer} alt="" /> <span>123</span>
                </span>
              </div>
            </div>
            <span className={styles.money}>₦160,000</span>
          </div>

          <div className={styles.FlightChunkTwo}>
            <div className={styles.green} style={{ paddingBottom: "25px" }}>
              <div className={styles.imgText}>
                <Image alt="" src={GreenAfrica} className={styles.greenSmall} />
                <span style={{ fontFamily: "sans-serif" }}>Green Africa</span>
              </div>

              <div className={styles.client}>
                <span>
                  {" "}
                  <Image src={Star} alt="" />{" "}
                  <span style={{ fontWeight: "bold" }}>5.0</span>
                </span>
                <span>
                  {" "}
                  <Image src={Customer} alt="" /> <span>123</span>
                </span>
              </div>

              <button className={styles.seatLeft}>
                <Image src={Seat} alt="seat" /> 2{" "}
                <span className={styles.seat}>Seats left</span>
              </button>
              <button className={styles.reco}>Recommended</button>
            </div>

            <div className={styles.seven} style={{ paddingBottom: "25px" }}>
              <b className={styles.lagosText}>
                07:00(LOS){" "}
                <span className={`${styles.little} ${styles.lagos}`}>
                  {" "}
                  Lagos{" "}
                </span>
              </b>
              <div>
                <span className={styles.onehr}>1h 40m</span>
                <div className={styles.imgWrap}>
                  <Image className={styles.imgOne} src={Circle} alt="" />
                  <Image className={styles.imgTwo} src={Line} alt="" />
                  <Image className={styles.imgThree} src={Circle} alt="" />
                </div>
                <span className={styles.onehrStrop}>0 Stop</span>
              </div>
              <b className={styles.abujaText}>
                8:40(ABV) <span className={styles.little}>Abuja</span>
              </b>
            </div>

            <div className={styles.seven} style={{ paddingBottom: "25px" }}>
              <b className={styles.lagosText}>
                07:00(LOS){" "}
                <span className={`${styles.little} ${styles.lagos}`}>
                  {" "}
                  Lagos{" "}
                </span>
              </b>
              <div>
                <span className={styles.onehr}>1h 40m</span>
                <div className={styles.imgWrap}>
                  <Image className={styles.imgOne} src={Circle} alt="" />
                  <Image className={styles.imgTwo} src={Line} alt="" />
                  <Image className={styles.imgThree} src={Circle} alt="" />
                </div>
                <span className={styles.onehrStrop}>0 Stop</span>
              </div>
              <b className={styles.abujaText}>
                8:40(ABV) <span className={styles.little}>Abuja</span>
              </b>
            </div>

            <div className={styles.bkmr}>
              <span className={styles.price}> #160,000</span>
              <Link href="/selectflight">
                {" "}
                <button className={styles.book}>
                  Book Now
                </button>
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
        <DetailsModal isOpen={isModalOpen} onClose={toggleModal} />
      </Link>
    </div>
  );
};

export default FlightChunk;
