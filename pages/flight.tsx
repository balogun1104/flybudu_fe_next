/* eslint-disable react/no-unescaped-entities */
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
import noFlightFound from "@/public/assets/images/noFlightfound.png";
import {
  setFlightData,
  setInitialFlightData,
  setLoading,
  setError,
  setSearchCriteria,
} from "@/redux/flight/flightSlice";
import { useFlightData, formatDate } from "@/utils/helper";
import type { AirlineFlights, Flight } from "@/redux/flight/types";
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
    formatDate(
      new Date(searchCriteria.departure_date || "").toISOString().split("T")[0]
    )
  );
  const [currentPage, setCurrentPage] = useState(0);
  const datesPerPage = 7;
  const [visible, setVisible] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { lastSearchedFlightData } = useSelector(
    (state: RootState) => state.flight
  );

  const formatDateToYYYYMMDD = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const filteredFlightData = Array.isArray(flightData)
    ? flightData.filter((airlineFlights: AirlineFlights) => {
        const [minPrice, maxPrice] = filter.priceRange;
        const { selectedAirlines, isRefundable } = filter;
        const flights = Object.values(airlineFlights)[0] as Flight[];
        return flights.some((flight: Flight) => {
          const { departure } = flight;

          // Price filter
          if (departure.price < minPrice || departure.price > maxPrice) {
            return false;
          }

          // Airline filter
          if (
            selectedAirlines.length > 0 &&
            !selectedAirlines.includes(departure.airline.company)
          ) {
            return false;
          }

          // Refundable filter
          if (isRefundable && !departure.is_refundable) {
            return false;
          }

          // If all conditions pass, include this flight
          return true;
        });
      })
    : [];

  const sortedFlightData = filteredFlightData.sort(
    (a: AirlineFlights, b: AirlineFlights) => {
      const flightsA = Object.values(a)[0] as Flight[];
      const flightsB = Object.values(b)[0] as Flight[];
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
    }
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
          {searchCriteria.arrival_date && (
            <span>
              {`${formatDate(searchCriteria.departure_date)} - ${formatDate(
                searchCriteria.arrival_date
              )}, `}
            </span>
          )}
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
            {sortedFlightData.length > 0
              ? `We Found ${sortedFlightData.length} Flights From ${searchCriteria.from} To ${searchCriteria.to}`
              : `No flights found from ${searchCriteria.from} to ${searchCriteria.to}`}
          </span>
        </div>
        <div className={styles.flightContent}>
          <div className={styles.flightContentOne}>
            <FlightFilter onApplyFilter={() => setOpenEdit(false)} />
          </div>
          <div className={styles.flightContentTwo}>
            {sortedFlightData.length > 0 ? (
              <>
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
                          formatDate(
                            new Date(searchCriteria.departure_date || "")
                          )
                            ? styles.departureDate
                            : ""
                        } ${
                          selectedDate === formatDate(date)
                            ? styles.selected
                            : ""
                        }`}
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
                {sortedFlightData.length >= 2 && (
                  <div className={styles.loadDiv}>
                    <p>Load More Result</p> <Image alt="" src={arrow} />
                  </div>
                )}
              </>
            ) : (
              <div className={styles.noFlightFound}>
                <div className={styles.noFlightFoundOpps}>
                  <p className={styles.noFlightFoundOppsText}>
                    Ooops Budu Can't Find Your Flight
                  </p>

                  {isMobile && (
                    <div className={styles.noFlightFoundDivTwoMoble}>
                      <Image
                        className={styles.noFlightFoundDivTwoImage}
                        src={noFlightFound}
                        alt=""
                        width={700}
                        height={480}
                      />
                    </div>
                  )}
                  <p className={styles.sohere}>
                    <span className={styles.sohereSpan}>Hey there! </span>
                    <br />
                    So, here's the deal: Budu tried hard to find your flight. He
                    climbed Everest, looked everywhere, but could only find suck
                    and slippers! Now, he's stuck on Everest, missing home.
                    <br />
                    <span className={styles.sohereSpan}>
                      {" "}
                      You can check your spelling or try a different time and
                      location.{" "}
                    </span>
                    Please allow him to go back home.
                  </p>

                  <Link href="/">
                    {" "}
                    <button className={styles.sohereButton}>
                      Go Back Home{" "}
                    </button>{" "}
                  </Link>
                </div>

                <div className={styles.noFlightFoundDivTwo}>
                  <Image
                    className={styles.noFlightFoundDivTwoImage}
                    src={noFlightFound}
                    alt=""
                    width={700}
                    height={480}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileNav />
      {!isMobile && <Footer />}
    </div>
  );
};

export default Flight;
