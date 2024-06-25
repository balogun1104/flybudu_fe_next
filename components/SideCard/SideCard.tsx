import React from "react";
import styles from "./sidecard.module.css";
import greenImg from "@/public/assets/images/greenAfrica.png";
import star from "@/public/assets/svg/Star.svg";
import user from "@/public/assets/images/Customers.png";
import Link from "next/link";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import plane from "@/public/assets/images/plane.png";
import Increase from "@/public/assets/images/increase 1.png";
import Image from "next/image";
import { useFlightData } from "@/utils/helper";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
// import clock from "../../assets/svg/time.svg";

function SideCard() {
  const { searchCriteria, flightData, loading, totalFlight, totalPassengers } =
  useFlightData();
const selectedAirline = useSelector(
  (state: RootState) => state.flight.selectedFlight
);
console.log(selectedAirline, flightData, totalFlight, totalPassengers)
const arrivalPrice = selectedAirline?.arrival?.price ? Number(selectedAirline.arrival.price) : 0;
const departurePrice = selectedAirline?.departure?.price ? Number(selectedAirline.departure.price) : 0;

const Addition = arrivalPrice + departurePrice;
const passenger = searchCriteria.passengers.adults + searchCriteria.passengers.children + searchCriteria.passengers.infants;
const finalPrice = Addition * passenger;
  return (
    <div className={styles.body}>
      <div className={styles.general}>
        <div className={styles.secondHeader}>
          <Link href="/travelinformation">
            <Image alt="s" src={BackButton} className={styles.back} />
          </Link>
          <span>
            {" "}
            Summary <span className={styles.specialText}> 3/4</span>
          </span>
          <Image src={support} className={styles.support} alt="" />
        </div>
        <div className={styles.img}>
          <Image  className={styles.img} src={selectedAirline?.departure.airline.logo} width={360} height={120} alt="erjok" />
        </div>
        <div className={styles.seconddiv}>
          <div className={styles.greenAfrica}>
            {" "}
            <p className={styles.greenText}> {selectedAirline?.departure.airline.company}</p>{" "}
            <Image src={star} alt="otilor" />{" "}
            <span className={styles.bold}>5.0</span>
            <Image src={user} alt="asappu" /> <span>123</span>
          </div>
          <div className={styles.init}>
            {" "}
            <p className={styles.book}>Booking Summary</p>{" "}
          <Link href="/flight">  <span className={styles.change}>Change</span></Link>
          </div>
        </div>
        <div className={styles.thirdDiv}>
          <div className={styles.departDiv}>
            <p className={styles.depart}>Depart</p>{" "}
            <span className={styles.date}>{selectedAirline?.departure.date}</span>
            <span className={styles.stop}>
            {selectedAirline?.arrival ? "1 Stop" : "0 Stop"}
            </span>
          </div>
          <div className={styles.triplet}>
            <div className={styles.lagos}>
              <span className={styles.abujaText}>{searchCriteria.from}</span>
            <p> {selectedAirline?.departure.airline.code}</p>
              <p className={styles.time}>{selectedAirline?.departure.departure}</p>
            </div>
            <div className={styles.plane}>
              <Image src={plane} alt="dayuuum" />
            </div>
            <div className={styles.abuja}>
              <span className={styles.abujaText}>{searchCriteria.to}</span>
              <p> {selectedAirline?.departure.airline.code}</p>
              <p className={styles.time}>{selectedAirline?.departure.departure}</p>
            </div>
          </div>
        </div>
        {selectedAirline?.arrival ? <div className={styles.fourthDiv}>
          <div className={styles.departDiv}>
            <p className={styles.depart}>Return</p>{" "}
            <span className={styles.date}>{selectedAirline?.arrival?.date}</span>
            {/* <span className={styles.stop}>0 Stop</span> */}
          </div>
          <div className={styles.triplet}>
            <div>
              <span className={styles.abujaText}>{searchCriteria.to}</span>
              <p>{selectedAirline?.arrival?.airline.code}</p>
              <p className={styles.time}>{selectedAirline?.arrival?.departure}</p>
            </div>
            <div className={styles.plane}>
              <Image src={plane} alt="dayuuum" />
            </div>
            <div className={styles.abuja}>
              <span className={styles.abujaText}>{searchCriteria.from}</span>
              <p>{selectedAirline?.arrival?.airline.code}</p>
              <p className={styles.time}>{selectedAirline?.arrival?.arrival}</p>
            </div>
          </div>
        </div> : ""}
        <div className={styles.fifthDiv}>
          <span className={styles.base}> Flight Base Fare</span>
          <p>Adult x{searchCriteria.passengers.adults}</p>
          <div className={styles.twins}>
            <p> Class</p> <span>Economy</span>
          </div>
          <div className={styles.twins}>
            <p>Base Fare </p> <span> &#8358; {finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </div>
          <div className={styles.twins}>
            <p> Discount</p> <span>&#8358; 00.00</span>
          </div>
          <div className={styles.twins}>
            <p>
              Taxes and fee <span></span>{" "}
            </p>{" "}
            <span>&#8358; 00.00</span>
          </div>
          <div className={styles.twins}>
            <p> Total</p> <span className={styles.blue}>&#8358; {finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          </div>

          <div className={styles.priceDiv}>
            {" "}
            <Image src={Increase} alt="dd" />{" "}
            <span className={styles.price}>
              This price may change if you come back later
            </span>
          </div>
        </div>

        <div className={styles.skipDiv}>
          <span className={styles.money}> #160,000</span>
          <Link
            href="/payment"
            className={styles.link}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <span className={styles.save}>Proceed To Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideCard;
