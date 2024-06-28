import React, { useState } from "react";
import Navbar from "../components/Navbar/indexBlack";
import styles from "../styles/flight.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import FlightChunk from "../components/Flight/FlightChunk";
import arrow from "@/public/assets/images/double chevron.png";
import Footer from "../components/Footer/index";
import FilterImg from "@/public/assets/images/filter (2).png";
import Edit from "@/public/assets/images/Edit.png";
import MobileNav from "../components/MobileNavBar";
import FlightFilter from "../components/FlightFilter/index";
import Image from "next/image";
import Link from "next/link";
import { useFlightData, formatDate } from '@/utils/helper';
import { AirlineFlights, } from "@/redux/flight/types";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Flight = () => {
  const { searchCriteria, flightData, loading, error, totalFlight, totalPassengers } = useFlightData();
  const { filter } = useSelector((state: RootState) => state.flight);

  const [visible, setVisible] = useState(false);
  const toggleDivs = () => {
    setVisible(!visible);
  };
  const [openEdit, setOpenEdit] = useState(false);

  // Apply filters to the flightData based on the filter state
  const filteredFlightData = flightData.filter((airlineFlights) => {
    const [minPrice, maxPrice] = filter.priceRange;
    const { selectedAirlines, isRefundable } = filter;

    const flights = Object.values(airlineFlights)[0];

    return flights.some((flight) => {
      const { departure } = flight;

      // Filter by price range
      if (departure.price < minPrice || departure.price > maxPrice) {
        return false;
      }

      // Filter by selected airlines
      if (selectedAirlines.length > 0 && !selectedAirlines.includes(departure.airline.company)) {
        return false;
      }

      // Filter by refundable
      if (isRefundable && !departure.is_refundable) {
        return false;
      }

      return true;
    });
  });

  // Sort the filtered flight data based on the sort option
  const sortedFlightData = filteredFlightData.sort((a, b) => {
    const flightsA = Object.values(a)[0];
    const flightsB = Object.values(b)[0];

    switch (filter.sortOption) {
      case 'recommended':
        // Implement your recommended sorting logic
        return 0;
      case 'cheapest':
        return flightsA[0].departure.price - flightsB[0].departure.price;
      case 'fastest':
        // Implement your fastest sorting logic
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
          <span className={styles.location}>{`${searchCriteria.from} - ${searchCriteria.to}`}</span>
          <span>
            {`${formatDate(searchCriteria.departure_date)} - ${formatDate(searchCriteria.arrival_date)}, 
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

      {openEdit && <FlightFilter onClick={() => setOpenEdit(false)} />}

      <div className={styles.flightWrapper}>
        <div style={{ margin: "30px" }}>
          <span className={styles.found}>
            We Found {totalFlight} Flights From {searchCriteria.from} To {searchCriteria.to}
          </span>
        </div>

        <div className={styles.flightContent}>
          <div className={styles.flightContentOne}>
            <FlightFilter onClick={() => setOpenEdit(false)} />
          </div>
          <div className={styles.flightContentTwo}>
            <div className={styles.dateDiv}>
              <IoIosArrowBack />
              <div className={styles.opor}>
                <div className={styles.flexDiv}>
                  <span>Tue, May 14</span>
                  <span className={styles.blueText}>#160,000</span>
                </div>
                <div className={styles.flexDiv}>
                  <span>Tue, May 14</span>
                  <span className={styles.blueText}>#160,000</span>
                </div>
                <div className={`${styles.flexDiv} ${styles.display}`}>
                  <span>Tue, May 14</span>
                  <span className={`${styles.blueText} ${styles.blue}`}>
                    #160,000
                  </span>
                </div>
                <div className={styles.flexDiv} style={{ borderLeft: "none" }}>
                  <span>Tue, May 14</span>
                  <span className={styles.blueText}>#160,000</span>
                </div>
                <div className={styles.flexDiv}>
                  <span>Tue, May 14</span>
                  <span className={styles.blueText}>#160,000</span>
                </div>
                <div className={`${styles.flexDiv} ${styles.flex}`}>
                  <span>Tue, May 14</span>
                  <span className={styles.blueText}>#160,000</span>
                </div>
              </div>
              <IoIosArrowForward />
            </div>

            {sortedFlightData.map((airlineFlights: AirlineFlights, index: number) => (
              <React.Fragment key={index}>
                {index === 0 && <FlightChunk flightData={airlineFlights} />}
                {index === 1 && <h4 className={styles.other}>Other Flights Options</h4>}
                {index > 0 && <FlightChunk flightData={airlineFlights} />}
              </React.Fragment>
            ))}

            <div className={styles.loadDiv}>
              <p>Load More Result</p> <Image alt="" src={arrow} />
            </div>
          </div>
        </div>
      </div>

      <MobileNav />
      <Footer />
    </div>
  );
};

export default Flight;