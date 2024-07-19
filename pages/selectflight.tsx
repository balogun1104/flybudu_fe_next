import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/selectflight.module.css";

import {
  setFlightData,
  setInitialFlightData,
  setLoading,
  setError,
  setSearchCriteria,
  setSelectedFlight,
} from "@/redux/flight/flightSlice";
import { RootState } from "@/redux/store";
import { useFlightData, formatDate } from "@/utils/helper";
import axiosInstance from "@/redux/api";

import flybudu from "@/public/assets/images/flybuduLogo.png";
import selectFlight from "@/public/assets/images/selectflight.png";
import user from "@/public/assets/images/customer 1.png";
import luggage from "@/public/assets/images/secondtravelinfo.png";
import payment from "@/public/assets/images/payment 1.png";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Plane from "@/public/assets/images/BlueSmallPlane.png";
import SelectFlightComponent from "@/components/selectFlight";
import Footer from "@/components/Footer";

function SelectFlightPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchCriteria, loading, error } = useFlightData();
  const flightData = useSelector((state: RootState) => state.flight.flightData);
  const selectedFlight = useSelector(
    (state: RootState) => state.flight.selectedFlight
  );

  const [currentPage, setCurrentPage] = useState(0);
  const datesPerPage = 7;
  const [selectedDate, setSelectedDate] = useState(
    formatDate(new Date(searchCriteria.departure_date || ""))
  );

  const handleSelectFlight = (
    flight: DepartureInfo,
    type: "departure" | "arrival"
  ) => {
    const newSelectedFlight = {
      ...selectedFlight,
      [type]:
        selectedFlight && selectedFlight[type]?.id === flight.id
          ? null
          : flight,
    };
    dispatch(setSelectedFlight(newSelectedFlight));
  };

  const generateDateOptions = () => {
    const departureDates = [];
    const departureDate = new Date(searchCriteria.departure_date || "");
    let date = new Date(departureDate);
    date.setMonth(date.getMonth() - 2);
    while (date <= departureDate) {
      departureDates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    date = new Date(departureDate);
    date.setDate(date.getDate() + 1);
    const futureDate = new Date(departureDate);
    futureDate.setMonth(futureDate.getMonth() + 2);
    while (date <= futureDate) {
      departureDates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return departureDates;
  };

  const visibleDates = generateDateOptions().slice(
    currentPage * datesPerPage,
    (currentPage + 1) * datesPerPage
  );

  useEffect(() => {
    const departureDateIndex = generateDateOptions().findIndex(
      (date) =>
        formatDate(date) ===
        formatDate(new Date(searchCriteria.departure_date || ""))
    );
    if (departureDateIndex !== -1) {
      setCurrentPage(Math.floor(departureDateIndex / datesPerPage));
    }
  }, [searchCriteria.departure_date]);

  const formatDateToYYYYMMDD = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  

  const handleDateSelection = async (formattedDate: string) => {
    setSelectedDate(formattedDate);

    const formattedDateYYYYMMDD = formatDateToYYYYMMDD(formattedDate);

    const updatedSearchCriteria = {
      ...searchCriteria,
      departure_date: formattedDateYYYYMMDD,
    };

    dispatch(setSearchCriteria(updatedSearchCriteria));

    try {
      dispatch(setLoading(true));
      const response = await axiosInstance.post(
        "flights/search",
        updatedSearchCriteria
      );
      const flightData = response.data;

      dispatch(setFlightData(flightData));
      dispatch(setInitialFlightData(flightData));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      if (error instanceof Error) {
        dispatch(setError(error.message));
      } else {
        dispatch(
          setError("An unknown error occurred while fetching flight data")
        );
      }
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <div className={styles.father}>
          <div className={styles.flybudu}>
            <Link href="/">
              <button style={{ border: "none", background: "none" }}>
                <Image
                  style={{ cursor: "pointer" }}
                  src={flybudu}
                  alt="Flybudu Logo"
                />
              </button>
            </Link>
          </div>
          <div className={styles.others}>
            <Link
              href="/selectflight"
              style={{ textDecoration: "none" }}
              className={styles.all1}
            >
              <Image src={selectFlight} alt="Select Flight" />
              <span className={styles.p}>Select Flight</span>
            </Link>
            <Link
              href="/customerinfo"
              style={{ textDecoration: "none", color: "black" }}
              className={styles.all2}
            >
              <Image src={user} alt="Customer Info" />
              <span className={styles.p}>Customer Info</span>
            </Link>
            <Link
              href="/travelinformation"
              style={{ textDecoration: "none", color: "black" }}
              className={styles.all}
            >
              <Image src={luggage} alt="Travel Info" />
              <span className={styles.p}>Travel Info</span>
            </Link>
            <Link
              href="/payment"
              style={{ textDecoration: "none", color: "black" }}
              className={styles.all}
            >
              <Image src={payment} alt="Payment" />
              <span className={styles.p}>Payment</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondHeader}>
        <Link href="/flight">
          <Image alt="Back" src={BackButton} className={styles.back} />
        </Link>
        <span style={{ fontWeight: "500" }}>
          Select Flight <span className={styles.specialText}> 1/4</span>
        </span>
        <Image src={support} className={styles.support} alt="Support" />
      </div>

      <div className={styles.flight}>
        <span style={{ fontSize: "20px" }}>Departure</span>
        <div className={styles.Plane}>
          <Image src={Plane} alt="Plane" />
          <span className={styles.state}>
            {`${searchCriteria.from} to ${searchCriteria.to}`}
          </span>
        </div>
      </div>

      <div className={styles.margin}>
        <div className={styles.dateDiv}>
          <IoIosArrowBack className={styles.arrow} onClick={handlePrevPage} />
          <div className={styles.dateOptions}>
            {visibleDates.map((date, index) => (
              <div
                key={index}
                className={`${styles.dateOption} ${
                  formatDate(date) ===
                  formatDate(new Date(searchCriteria.departure_date || ""))
                    ? styles.departureDate
                    : ""
                } ${selectedDate === formatDate(date) ? styles.selected : ""}`}
                onClick={() => handleDateSelection(formatDate(date))}
              >
                <p className={styles.date}>{formatDate(date)}</p>
              </div>
            ))}
          </div>
          <IoIosArrowForward
            className={styles.arrow}
            onClick={handleNextPage}
          />
        </div>
      </div>

      <div className={styles.margin}>
        <SelectFlightComponent
          flightData={{
            departure: flightData.departure || [],
            arrival: flightData.arrival || [],
          }}
          onSelectFlight={handleSelectFlight}
          selectedDeparture={selectedFlight?.departure}
          selectedArrival={selectedFlight?.arrival}
        />
      </div>

      <div className={styles.finalDiv}>
        <div className={styles.checkBox}>
          <input type="checkbox" />
          <span>
            By submitting your flight request, you agree to our{" "}
            <span style={{ fontWeight: "bold", color: "#06BCE1" }}>
              Terms & Conditions
            </span>{" "}
            &{" "}
            <span style={{ fontWeight: "bold", color: "#06BCE1" }}>
              Privacy Policy
            </span>{" "}
            and to receive further communications regarding your flight.
          </span>
        </div>
        <Link
          href="/customerinfo"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span className={styles.continue}>Continue</span>
        </Link>
      </div>

      <div className={styles.sigh}>
        <span className={styles.money}>
          #
          {(selectedFlight?.departure?.price || 0) +
            (selectedFlight?.arrival?.price || 0)}
        </span>
        <Link
          className={styles.link}
          style={{ textDecoration: "none", color: "white" }}
          href="/customerinfo"
        >
          <span className={styles.booking}>Continue to Booking</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default SelectFlightPage;
