import React, { useEffect, useState } from "react";
// import { parseISO, differenceInMinutes } from "date-fns";
 import { parseISO, differenceInMinutes } from "date-fns";

import styles from "./flight.module.css";
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
import Image from "next/image";
import { AirlineFlights, Flight, FlightDetails } from "@/redux/flight/types";
import { useDispatch } from "react-redux";
import {
  setError,
  setFlightData,
  setInitialFlightData,
  setLoading,
  setSelectedFlight,
} from "@/redux/flight/flightSlice";
import { useRouter } from "next/router";
import axiosInstance from "@/redux/api";

export interface FlightChunkProps {
  flightData: AirlineFlights;
  selectedDate: string;
}

const DetailsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  flightData: Flight;
}> = ({ isOpen, onClose, flightData }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  if (!isOpen) return null;

  const getFlight = (data: AirlineFlights | Flight): Flight => {
    if ("departure" in data && "arrival" in data) {
      return data as Flight;
    } else {
      const airlineName = Object.keys(data as AirlineFlights)[0];
      return (data as AirlineFlights)[airlineName][0];
    }
  };

  const flight = getFlight(flightData);

  const departureData = flightData.departure;
  const arrivalData = flightData.arrival;

  const departureDepartureTime = parseISO(
    `2000-01-01T${departureData.departure}`
  );

  const departureArrivalTime = parseISO(`2000-01-01T${departureData.arrival}`);

  const departureDurationInMinutes = differenceInMinutes(
    departureArrivalTime,
    departureDepartureTime
  );

  const departureHours = Math.floor(departureDurationInMinutes / 60);
  const departureMinutes = departureDurationInMinutes % 60;
  const formattedDurationForDeparture = `${departureHours} h ${departureMinutes} m`;

  const handleBookNow = () => {
    // i was using this to dispach the data to the flight page
    // dispatch(setSelectedFlight(flight));
    // router.push({
    //   pathname: "/customerinfo",
    //   query: { flightId: flight.departure.id },
    // });
    dispatch(setSelectedFlight(flight));
    router.push({
      pathname: "/customerinfo",
      query: { flightId: flight.departure.id },
    });
  };


  const handleNaigateToSelectFlight = async () => {
    try {
      dispatch(setLoading(true));
      const searchCriteria = {
        from: departureData.route.location,
        to: arrivalData
          ? arrivalData.route.location
          : departureData.route.destination,
        departure_date: departureData.date,
        arrival_date: arrivalData ? arrivalData.date : "",
        airline_id: departureData.airline.id,
      };

      const response = await axiosInstance.post(
        "flights/search",
        searchCriteria
      );
      const flightData = response.data;

      console.log(flightData, "insude FlightChunk");
      console.log(searchCriteria, "PAYLOAD__-");

      dispatch(setFlightData(flightData));
      dispatch(setSelectedFlight(flightData));
      dispatch(setInitialFlightData(flightData));
      dispatch(setLoading(false));

      // Store the search criteria and flight data in localStorage
      localStorage.setItem(
        "lastSearchCriteria",
        JSON.stringify(searchCriteria)
      );
      localStorage.setItem("lastFlightData", JSON.stringify(flightData));

      router.push("/selectflight");
    } catch (error) {
      // Error handling...
    }
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <span className={styles.smallPlane}>
          <Image src={smallPlane} alt="" /> Departure Flight
        </span>

        <div className={styles.df}>
          <div className={styles.dfOne}>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {departureData.route.location} (
              {departureData.route.location_code})
            </span>
            <span className={styles.font}>{departureData.airline.company}</span>
            <span className={styles.ip}>
              <Image src={date} alt="" />
              Date: {departureData.date}
            </span>
            <span className={styles.ip}>
              <Image src={time} alt="" /> Time: {departureData.departure} -{" "}
              {departureData.arrival}
            </span>
            <span className={styles.ip}>
              <Image src={Smallseat} alt="" /> Class: Economy
            </span>
            <span className={styles.ip}>
              <Image src={Bagage} alt="" /> Baggage: Standard
            </span>
          </div>
          <div>
            <Image src={Plane}   alt="" />
          </div>
          <div className={styles.dftwo}>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              
              
                { departureData.route.destination}{" "}
              ({departureData.route.destination_code})
            </span>
            <span className={styles.font}>{departureData.airline.company}</span>
            <span className={styles.font}>
              <Image src="" alt="" />
            </span>
            <span>{/* Add duration if available */}</span>
            <span className={styles.font}></span>
            <span style={{ fontWeight: "bold" }} className={styles.font}>
              {departureData.available_seats || "12"} Seats Left
            </span>
          </div>
        </div>
      </div>
      {arrivalData ? (
        <>
          <div style={{ border: "1px solid #ccc" }}></div>

          <div className={styles.modalContent}>
            <span className={styles.smallPlane}>
              <Image src={smallPlane} alt="" /> Return Flight
            </span>

            <div className={styles.df}>
              <div className={styles.dfOne}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {arrivalData.route.location} (
                  {arrivalData.route.location_code})
                </span>
                <span className={styles.font}>
                  {arrivalData.airline.company}
                </span>
                <span className={styles.ip}>
                  <Image src={date} alt="" />
                  Date: {arrivalData.date}
                </span>
                <span className={styles.ip}>
                  <Image src={time} alt="" /> Time: {arrivalData.departure} -{" "}
                  {arrivalData.arrival}
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
              <div className={styles.dftwo}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {arrivalData
                    ? arrivalData.route.location
                    : departureData.route.location}{" "}
                  ({departureData.route.location_code})
                </span>
                <span className={styles.font}>
                  {departureData.airline.company}
                </span>
                <span className={styles.font}>
                  <Image src="" alt="" /> 
                </span>
                <span>{/* Add duration if available */}</span>
                <span className={styles.font}>{arrivalData.repeats}</span>
                <span style={{ fontWeight: "bold" }} className={styles.font}>
                  {arrivalData.available_seats || "6"} Seats Left
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div style={{ border: "1px solid #ccc" }}></div>
      <div className={styles.totalDiv}>
        <div className={styles.total}>
          <span>Total</span>{" "}
          <span>
            &#8358;
            {arrivalData
              ? (
                  (Number(departureData.price) || 0) +
                  (Number(arrivalData.price) || 0)
                )
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : (Number(departureData.price) || 0)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <span style={{ fontWeight: "bold", color: "red" }}>PLEASE NOTE</span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ fontWeight: "bold" }}> *Non Refundable.</span>
            <span style={{ fontWeight: "bold" }}>
              *Total fare displayed has been rounded off and may thus show a
              slight difference.
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              handleBookNow();
            }}
            className={styles.save}
          >
            Book Now
          </button>

          <button
            onClick={() => {
              // onClose();
              handleNaigateToSelectFlight();
            }}
            className={styles.more}
          >
            Schedule
          </button>

          
        </div>
      </div>
    </div>
  );
};

const FlightChunk: React.FC<FlightChunkProps> = ({ flightData }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const buttonText = isModalOpen ? "Show Less" : "More Details";
  const ButtonIcon = isModalOpen ? IoIosArrowBack : IoIosArrowForward;

  useEffect(() => {
    // Generate a random number of seats left between 1 and 20
    const randomSeatsLeft = Math.floor(Math.random() * 20) + 1;
    setSeatsLeft(randomSeatsLeft);
  }, []);

  const getFlight = (data: AirlineFlights | Flight): Flight => {
    if ("departure" in data && "arrival" in data) {
      return data as Flight;
    } else {
      const airlineName = Object.keys(data as AirlineFlights)[0];
      return (data as AirlineFlights)[airlineName][0];
    }
  };

  const flight = getFlight(flightData);

  const departureData = flight.departure;
  const arrivalData = flight.arrival;

  const departureDepartureTime = parseISO(
    `2000-01-01T${departureData.departure}`
  );
  const departureArrivalTime = parseISO(`2000-01-01T${departureData.arrival}`);
  const departureDurationInMinutes = differenceInMinutes(
    departureArrivalTime,
    departureDepartureTime
  );
  const departureHours = Math.floor(departureDurationInMinutes / 60);
  const departureMinutes = departureDurationInMinutes % 60;
  const formattedDurationForDeparture = `${departureHours}h ${departureMinutes}m`;

  if (!departureData) {
    return <div>No flight data available</div>;
  }

  const handleBookNow = () => {
    // i was using this to dispach the data to the flight page
    // dispatch(setSelectedFlight(flight));
    // router.push({
    //   pathname: "/customerinfo",
    //   query: { flightId: flight.departure.id },
    // });
    dispatch(setSelectedFlight(flight));
    router.push({
      pathname: "/customerinfo",
      query: { flightId: flight.departure.id },
    });
  };

  const handleNaigateToSelectFlight = async () => {
    try {
      dispatch(setLoading(true));
      const searchCriteria = {
        from: departureData.route.location,
        to: arrivalData
          ? arrivalData.route.location
          : departureData.route.destination,
        departure_date: departureData.date,
        arrival_date: arrivalData ? arrivalData.date : "",
        airline_id: departureData.airline.id,
      };

      const response = await axiosInstance.post(
        "flights/search",
        searchCriteria
      );
      const flightData = response.data;

      console.log(flightData, "insude FlightChunk");
      console.log(searchCriteria, "PAYLOAD__-");

      dispatch(setFlightData(flightData));
      dispatch(setSelectedFlight(flightData));
      dispatch(setInitialFlightData(flightData));
      dispatch(setLoading(false));

      // Store the search criteria and flight data in localStorage
      localStorage.setItem(
        "lastSearchCriteria",
        JSON.stringify(searchCriteria)
      );
      localStorage.setItem("lastFlightData", JSON.stringify(flightData));

      router.push("/selectflight");
    } catch (error) {
      // Error handling...
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.FlightChunkWrapper}>
        <div className={styles.FlightChunkOne}>
          <div className={styles.chunkOne}>
            <Image
              src={departureData.airline.logo}
              alt=""
              width={50}
              height={50}
              className={styles.greenIMG}
            />
            {/* <div className={styles.Customer}>
              <span>
                <Image src={Star} alt="" />
                <span style={{ fontWeight: "bold" }}>4.5</span>
              </span>
              <span>
                <Image src={Customer} alt="" /> <span>23</span>
              </span>
            </div> */}
          </div>
          <span className={styles.money}>
            &#8358;
            {arrivalData
              ? (
                  (Number(departureData.price) || 0) +
                  (Number(arrivalData.price) || 0)
                )
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : (Number(departureData.price) || 0)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>

        <div className={styles.FlightChunkTwo}>
          <div className={styles.green} style={{ paddingBottom: "25px" }}>
            <div className={styles.imgText}>
              <Image
                alt=""
                src={departureData.airline.logo}
                width={30}
                height={30}
                className={styles.greenSmall}
              />
              <span
                onClick={handleNaigateToSelectFlight}
                style={{ fontFamily: "sans-serif" }}
              >
                {departureData.airline.company}
              </span>
            </div>

            {/* <div className={styles.client}>
              <span>
                <Image src={Star} alt="" />
                <span style={{ fontWeight: "bold" }}>4.5</span>
              </span>
              <span>
                <Image src={Customer} alt="" /> <span>53</span>
              </span>
            </div> */}

            <div className={styles.recodiv}>
              <button className={styles.seatLeft}>
                <Image src={Seat} alt="seat" /> {seatsLeft}{" "}
                <span className={styles.seat}>Seats left</span>
              </button>
              <span className={styles.reco}>Recommended</span>
            </div>
          </div>

          <div className={styles.seven} style={{ paddingBottom: "25px" }}>
            <b className={styles.lagosText}>
              {departureData.departure} <br />(
              {departureData.route.location_code}){" "}
              <span className={`${styles.little} ${styles.lagos}`}>
                {departureData.route.location}
              </span>
            </b>
            <div>
              <span className={styles.onehr}>
                 {formattedDurationForDeparture} 
              </span>
              <div className={styles.imgWrap}>
                <Image className={styles.imgOne} src={Circle} alt="" />
                <Image className={styles.imgTwo} src={Line} alt="" />
                <Image className={styles.imgThree} src={Circle} alt="" />
              </div>
              <span className={styles.onehrStrop}>
                {arrivalData ? "1 Stop" : "0 Stop"}
              </span>
            </div>
            <b className={styles.abujaText}>
              {departureData.arrival} <br /> (
              {departureData.route.destination_code})
              <span className={styles.little}>
               
                  {departureData.route.destination}
              </span>
            </b>
          </div>

          {arrivalData ? (
            <div className={styles.seven} style={{ paddingBottom: "25px" }}>
              <b className={styles.lagosText}>
                {arrivalData.departure} <br />({arrivalData.route.location_code}
                ){" "}
                <span className={`${styles.little} ${styles.lagos}`}>
                  {arrivalData.route.location}
                </span>
              </b>
              <div>
                <span className={styles.onehr}>
                  {formattedDurationForDeparture} 
                </span>
                <div className={styles.imgWrap}>
                  <Image className={styles.imgOne} src={Circle} alt="" />
                  <Image className={styles.imgTwo} src={Line} alt="" />
                  <Image className={styles.imgThree} src={Circle} alt="" />
                </div>
                <span className={styles.onehrStrop}>
                  {arrivalData ? "1 Stop" : "0 Stop"}
                </span>
              </div>
              <b className={styles.abujaText}>
                {arrivalData.arrival} <br /> ({arrivalData.route.location_code})
                <span className={styles.little}>
                  { arrivalData.route.destination}
                   
                </span>
              </b>
            </div>
          ) : (
            ""
          )}

          <div className={styles.bkmr}>
            <span className={styles.price}>
              ₦
              {Number(departureData.price)
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>

            <button className={styles.book} onClick={handleBookNow}>
              Book Now
            </button>

            <button className={styles.more} onClick={toggleModal}>
              {buttonText}{" "}
              <span>
                <ButtonIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
      <DetailsModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        flightData={flight}
      />
    </div>
  );
};

export default FlightChunk;
