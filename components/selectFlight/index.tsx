import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./select.module.css";
import Line from "@/public/assets/images/Line.png";
import Seat from "@/public/assets/images/seats.png";
import Approved from "@/public/assets/images/Layer 3.png";
import Circle from "@/public/assets/images/circle.png";
import Plane from "@/public/assets/images/BlueSmallPlane.png";
import { FlightSearchResponse } from "@/redux/flight/types";

interface Airline {
  logo: string;
  code: string;
  company: string;
}

interface Route {
  location: string;
  location_code: string;
  destination: string;
  destination_code: string;
}

interface FlightDetails {
  id: string | number;
  airline: Airline;
  departure: string;
  arrival: string;
  price: number;
  available_seats: number | null;
  route: Route;
  date: string;
}

interface DepartureInfo extends FlightDetails {
  from: string;
  available_seats: number | null;
}

interface FlightData {
  departure: DepartureInfo[];
  arrival?: DepartureInfo[];
}

interface SelectFlightComponentProps {
  flightData: FlightSearchResponse;
  onSelectFlight: (
    flight: DepartureInfo,
    type: "departure" | "arrival"
  ) => void;
  selectedDeparture: DepartureInfo | null;
  selectedArrival: DepartureInfo | null;
}



function SelectFlightComponent({
  flightData,
  onSelectFlight,
  selectedDeparture,
  selectedArrival,
}: SelectFlightComponentProps) {
  console.log("SelectFlightComponent received flightData:", flightData);

  useEffect(() => {
    console.log("FlightData changed in SelectFlightComponent:", flightData);
  }, [flightData]);

  if (!flightData || !flightData.departure) {
    console.log("No flight data available");
    return <div>No flight data available</div>;
  }

  const { departure, arrival } = flightData;

  if (!Array.isArray(departure)) {
    console.error("Departure is not an array:", departure);
    return <div>Invalid flight data</div>;
  }

  const calculateDuration = (dep: string, arr: string): string => {
    if (!dep || !arr || typeof dep !== "string" || typeof arr !== "string") {
      return "N/A";
    }

    const [depHours, depMinutes] = dep.split(":").map(Number);
    const [arrHours, arrMinutes] = arr.split(":").map(Number);
    let durationHours = arrHours - depHours;
    let durationMinutes = arrMinutes - depMinutes;

    if (durationMinutes < 0) {
      durationHours--;
      durationMinutes += 60;
    }

    return `${durationHours}h ${durationMinutes}m`;
  };

  const isFlightSelected = (
    flight: DepartureInfo,
    type: "departure" | "arrival"
  ) => {
    return (
      (type === "departure" && selectedDeparture?.id === flight.id) ||
      (type === "arrival" && selectedArrival?.id === flight.id)
    );
  };

  const renderFlights = (
    flights: DepartureInfo[],
    type: "departure" | "arrival"
  ) => {
    return flights.map((flight) => {
      const duration = calculateDuration(flight.departure, flight.arrival);
      const isSelected = isFlightSelected(flight, type);

      const formatPrice = (price: number): string => {
        return "₦" + Math.round(price).toLocaleString("en-NG");
      };

      return (
        <div key={flight.id} className={styles.bodyContianer}>
          <div className={styles.body}>
            <div className={styles.firstDiv}>
              <Image
                src={flight.airline.logo}
                className={styles.GreenImg}
                alt=""
                width={40}
                height={40}
              />
              <div className={styles.flex}>
                <span className={styles.time}>{flight.departure}</span>
                <span style={{ fontSize: "20px" }}>{flight.from}</span>
              </div>
              <div className={styles.lineDiv}>
                <span>{duration}</span>
                <div className={styles.circle}>
                  <Image src={Circle} alt="" />
                  <Image src={Line} alt="" />
                  <Image src={Circle} alt="" />
                </div>
                <span>{type === "arrival" ? "1 stop" : "Direct"}</span>
              </div>
              <div className={styles.flex}>
                <span className={styles.time}>{flight.arrival}</span>
                <span style={{ fontSize: "20px" }}>
                  {flight.route.destination}
                </span>
              </div>
              <div className={styles.extra}>
                <span>Flight No</span>
                <span style={{ fontWeight: "bold" }}>
                  {flight.airline?.code || "N/A"}
                </span>
              </div>
              <div className={styles.extra}>
                <span>Type</span>
                <span style={{ fontWeight: "bold" }}>
                  {type === "arrival" ? "One Stop" : "Direct"}
                </span>
              </div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.flex}>
                <span>From</span>
                <span className={styles.money}>
                  {formatPrice(flight.price)}
                </span>
              </div>
              <div className={styles.selectDiv}>
                {isSelected ? (
                  <>
                    <Image src={Approved} alt="" className={styles.image} />
                    <span
                      className={styles.unselect}
                      onClick={() => onSelectFlight(flight, type)}
                    >
                      Unselect
                    </span>
                  </>
                ) : (
                  <>
                    <select
                      className={`${styles.custom} ${styles.selectChange}`}
                    >
                      <option>Economy</option>
                      <option>First Class</option>
                      <option>Business Class</option>
                    </select>
                    <div className={styles.left}>
                      <div className={styles.seat}>
                        <Image src={Seat} alt="" />
                        <span>
                          {flight.available_seats || "N/A"} Seats Left
                        </span>
                      </div>
                      <span
                        className={styles.select}
                        onClick={() => onSelectFlight(flight, type)}
                      >
                        Select
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className={styles.mother}>
            <div className={styles.mobileDiv}>
              <Image
                src={flight.airline.logo}
                className={styles.GreenImg}
                alt=""
                width={40}
                height={40}
              />
              <Image
                src={Approved}
                alt=""
                className={styles.image}
                style={{ display: isSelected ? "flex" : "none" }}
              />
              <select
                className={styles.selectChange}
                style={{ display: isSelected ? "none" : "flex" }}
              >
                <option>Economy</option>
                <option>First Class</option>
                <option>Business Class</option>
              </select>
            </div>
            <div className={styles.mobileDiv}>
              <div className={styles.mobileFlex}>
                <span style={{ fontWeight: "bold" }} className={styles.bold}>
                  {flight.departure}
                </span>
                <span className={styles.lagos}>{flight.from}</span>
              </div>
              <div className={styles.lineDiv}>
                <span>{duration}</span>
                <div className={styles.circle}>
                  <Image src={Circle} alt="" />
                  <Image src={Line} alt="" />
                  <Image src={Circle} alt="" />
                </div>
                <span>{type === "arrival" ? "1 stop" : "Direct"}</span>
              </div>
              <div className={styles.mobileFlex}>
                <span style={{ fontWeight: "bold" }} className={styles.bold}>
                  {flight.arrival}
                </span>
                <span className={styles.abuja}>{flight.route.destination}</span>
              </div>
            </div>
            <div className={styles.mobileDiv}>
              <span>Flight No:</span>
              <span style={{ fontWeight: "bold" }} className={styles.bold}>
                {flight.airline?.code || "N/A"}
              </span>
            </div>
            <div className={styles.mobileDiv}>
              <span>Type:</span>
              <span style={{ fontWeight: "bold" }} className={styles.bold}>
                {type === "arrival" ? "One Stop" : "Direct"}
              </span>
            </div>
            <div className={styles.mobileDiv}>
              <span>From:</span>
              <span
                style={{ fontWeight: "bold", color: "#058EA9" }}
                className={styles.monay}
              >
                <span className={styles.money}>
                  {formatPrice(flight.price)}
                </span>
              </span>
            </div>
            <div
              className={styles.mobileDiv}
              style={{ display: isSelected ? "none" : "flex" }}
            >
              <div className={styles.seat}>
                <Image src={Seat} alt="" />
                <span>{flight.available_seats || "N/A"} Seats Left</span>
              </div>
              <span
                className={styles.select}
                onClick={() => onSelectFlight(flight, type)}
              >
                Select
              </span>
            </div>
            {isSelected && (
              <div className={styles.mobileDiv}>
                <span
                  className={styles.unselect}
                  onClick={() => onSelectFlight(flight, type)}
                >
                  Unselect
                </span>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  const renderFlightSection = (
    flights: DepartureInfo[],
    type: "departure" | "arrival"
  ) => {
    return (
      <div className={styles.flightSection}>{renderFlights(flights, type)}</div>
    );
  };

  return (
    <div className={styles.general}>
      {renderFlightSection(departure, "departure")}
      {arrival && arrival.length > 0 && renderFlightSection(arrival, "arrival")}
    </div>
  );
}

export default SelectFlightComponent;