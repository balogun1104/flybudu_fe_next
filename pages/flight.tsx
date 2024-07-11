/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Navbar from "../components/Navbar/indexBlack";
import Footer from "../components/Footer/index";
import MobileNav from "../components/MobileNavBar";
import FlightFilter from "../components/FlightFilter/index";
import FlightChunk from "../components/Flight/FlightChunk";
import styles from "../styles/flight.module.css";
import arrow from "@/public/assets/images/double chevron.png";
import FilterImg from "@/public/assets/images/filter (2).png";
import Edit from "@/public/assets/images/Edit.png";
import { RootState } from "@/redux/store";
import {
  setFlightData,
  setInitialFlightData,
  setLoading,
  setError,
  setSearchCriteria,
} from "@/redux/flight/flightSlice";
import { useFlightData, formatDate } from "@/utils/helper";
import { AirlineFlights } from "@/redux/flight/types";
import axiosInstance from "@/redux/api";

const Flight = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    searchCriteria,
    flightData,
    loading,
    error,
    totalFlight,
    totalPassengers,
  } = useFlightData();
  const { filter, initialFlightData } = useSelector(
    (state: RootState) => state.flight
  );
  const [selectedDate, setSelectedDate] = useState(
    formatDate(new Date(searchCriteria.departure_date || ""))
  );
  const [currentPage, setCurrentPage] = useState(0);
  const datesPerPage = 7;
  const [visible, setVisible] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { lastSearchedFlightData } = useSelector(
    (state: RootState) => state.flight
  );

  useEffect(() => {
    const fetchFlightData = async () => {
      if (lastSearchedFlightData) {
        dispatch(setFlightData(lastSearchedFlightData));
        dispatch(setInitialFlightData(lastSearchedFlightData));
      } else if (
        searchCriteria.from &&
        searchCriteria.to &&
        searchCriteria.departure_date
      ) {
        try {
          dispatch(setLoading(true));
          const formattedDepartureDate = formatDateToYYYYMMDD(
            searchCriteria.departure_date
          );
          const formattedArrivalDate = searchCriteria.arrival_date
            ? formatDateToYYYYMMDD(searchCriteria.arrival_date)
            : undefined;

          const formattedSearchCriteria = {
            ...searchCriteria,
            departure_date: formattedDepartureDate,
            arrival_date: formattedArrivalDate,
          };

          const response = await axiosInstance.post(
            "flights/search",
            formattedSearchCriteria
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
      } else {
        router.push("/");
      }
    };

    fetchFlightData();
  }, [dispatch, lastSearchedFlightData, searchCriteria, router, selectedDate]);

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

    // Format the date to YYYY-MM-DD for the API
    const formattedDateYYYYMMDD = formatDateToYYYYMMDD(formattedDate);

    // Create a new search criteria object with the updated departure date
    const updatedSearchCriteria = {
      ...searchCriteria,
      departure_date: formattedDateYYYYMMDD,
    };

    // Dispatch action to update the search criteria in Redux store
    dispatch(setSearchCriteria(updatedSearchCriteria));

    // Trigger a new search with the updated criteria
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

  // const getLowestPrice = (date: Date) => {
  //   const formattedDate = formatDate(date);
  //   let lowestPrice = Infinity;
  //   sortedFlightData.forEach((airlineFlights) => {
  //     const flights = Object.values(airlineFlights)[0];
  //     flights.forEach((flight) => {
  //       if (
  //         flight.departure.date === formattedDate &&
  //         flight.departure.price < lowestPrice
  //       ) {
  //         lowestPrice = flight.departure.price;
  //       }
  //     });
  //   });
  //   return lowestPrice !== Infinity ? `₦${lowestPrice.toLocaleString()}` : "";
  // };

  // console.log(flightData, "flightDataTest")

  const filteredFlightData = Array.isArray(flightData)
    ? flightData.filter((airlineFlights) => {
        const [minPrice, maxPrice] = filter.priceRange;
        const { selectedAirlines, isRefundable } = filter;
        const flights = Object.values(airlineFlights)[0];
        return flights.some((flight) => {
          const { departure } = flight;
          if (departure.price < minPrice || departure.price > maxPrice) {
            return false;
          }
          if (
            selectedAirlines.length > 0 &&
            !selectedAirlines.includes(departure.airline.company)
          ) {
            return false;
          }
          if (isRefundable && !departure.is_refundable) {
            return false;
          }
          return true;
        });
      })
    : [];

  const sortedFlightData = filteredFlightData.sort((a, b) => {
    const flightsA = Object.values(a)[0];
    const flightsB = Object.values(b)[0];
    switch (filter.sortOption) {
      case "recommended":
        return 0;
      case "cheapest":
        return flightsA[0].departure.price - flightsB[0].departure.price;
      case "fastest":
        return 0;
      default:
        return 0;
    }
  });

  return (
    <div className={styles.flightContainer}>
      <div className={styles.fixed}>
        <Navbar />
      </div>
      <div className={styles.Navbar}>
        <Link href="/">
          <IoIosArrowBack
            style={{ color: "white", marginLeft: "30px", fontSize: "25px" }}
          />
        </Link>
        <div className={styles.navbarText}>
          <span
            className={styles.location}
          >{`${searchCriteria.from} - ${searchCriteria.to}`}</span>
          <span>
            {`${formatDate(searchCriteria.departure_date)} - ${formatDate(
              searchCriteria.arrival_date
            )}, 
            ${totalPassengers} Pass, ${searchCriteria.classType}`}
          </span>
        </div>
        <div className={styles.imgDiv}>
          <Link href="/mobileflight">
            <Image src={Edit} alt="" />
          </Link>
          <Link href="/filter">
            <Image src={FilterImg} alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.flightWrapper}>
        <div style={{ margin: "30px" }}>
          <span className={styles.found}>
            We Found {totalFlight} Flights From {searchCriteria.from} To{" "}
            {searchCriteria.to}
          </span>
        </div>
        <div className={styles.flightContent}>
          <div className={styles.flightContentOne}>
            <FlightFilter onApplyFilter={() => setOpenEdit(false)} />
          </div>
          <div className={styles.flightContentTwo}>
            <div className={styles.dateDiv}>
              <IoIosArrowBack
                className={styles.arrow}
                onClick={handlePrevPage}
              />
              <div className={styles.dateOptions}>
                {visibleDates.map((date, index) => (
                  <div
                    key={index}
                    className={`${styles.dateOption} ${
                      formatDate(date) ===
                      formatDate(new Date(searchCriteria.departure_date || ""))
                        ? styles.departureDate
                        : ""
                    } ${
                      selectedDate === formatDate(date) ? styles.selected : ""
                    }`}
                    onClick={() => handleDateSelection(formatDate(date))}
                  >
                    <p className={styles.date}>{formatDate(date)}</p>
                    {/* <span className={styles.price}>{getLowestPrice(date)}</span> */}
                  </div>
                ))}
              </div>
              <IoIosArrowForward
                className={styles.arrow}
                onClick={handleNextPage}
              />
            </div>
            {sortedFlightData.map(
              (airlineFlights: AirlineFlights, index: number) => (
                <React.Fragment key={index}>
                  {index === 0 && (
                    <FlightChunk
                      flightData={airlineFlights}
                      selectedDate={selectedDate}
                    />
                  )}
                  {index === 1 && (
                    <h4 className={styles.other}>Other Flights Options</h4>
                  )}
                  {index > 0 && (
                    <FlightChunk
                      flightData={airlineFlights}
                      selectedDate={selectedDate}
                    />
                  )}
                </React.Fragment>
              )
            )}
            {sortedFlightData.length >= 2 ? (
              <div className={styles.loadDiv}>
                <p>Load More Result</p> <Image alt="" src={arrow} />
              </div>
            ) : sortedFlightData.length === 1 ? (
              <p>Only one airline available</p>
            ) : (
              <p>No flights available</p>
            )}
          </div>
        </div>
      </div>
      <MobileNav />
      <Footer />
    </div>
  );
};

export default Flight;
