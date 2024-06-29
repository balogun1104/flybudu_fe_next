import React, { useState } from "react";
import GreenImg from "@/public/assets/images/GreenBox.png";
import styles from "./select.module.css";
import Line from "@/public/assets/images/Line.png";
import Seat from "@/public/assets/images/seats.png";
import Approved from "@/public/assets/images/Layer 3.png";
import Circle from "@/public/assets/images/circle.png";
import Image from "next/image";

function SelectFlightComponent({ flightData }) {
  const [mobileVisible, setMobileVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleDivs = () => {
    setVisible(!visible);
  };

  const toggleMobileDivs = () => {
    setMobileVisible(!mobileVisible);
  };

  if (!flightData) {
    return <div>No flight data available</div>;
  }

  // const { departure, arrival } = flightData;
  const departure = "";
  const arrival = "";
  const { MainSelectedFlight } = flightData;

  const dataComing = flightData.departure;
  console.log(dataComing, "dataconin g");

  const calculateDuration = (dep, arr) => {
    if (!dep || !arr || typeof dep !== "string" || typeof arr !== "string") {
      return "N/A"; // Return "N/A" if dep or arr is undefined or not a string
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

  const duration = calculateDuration(departure.departure, departure.arrival);

  return (
    <div className={styles.general}>
      {dataComing.map((departure) => (
        <div key={departure.id} className={styles.bodyContianer}>
          <div className={styles.body}>
            <div className={styles.firstDiv}>
              <Image src={departure.airline.logo} className={styles.GreenImg} alt="" width={40} height={40}/>
              <div className={styles.flex}>
                <span className={styles.time}>{departure.departure}</span>
                <span style={{ fontSize: "20px" }}>{departure.from}</span>
              </div>
              <div className={styles.lineDiv}>
                <span>{duration}</span>
                <div className={styles.circle}>
                  <Image src={Circle} alt="" />
                  <Image src={Line} alt="" />
                  <Image src={Circle} alt="" />
                </div>
                <span>{arrival ? "1 stop" : "Direct"}</span>
              </div>
              <div className={styles.flex}>
                <span className={styles.time}>{departure.arrival}</span>
                <span style={{ fontSize: "20px" }}>
                  {arrival ? arrival.from : departure.from}
                </span>
              </div>
              <div className={styles.extra}>
                <span>Flight No</span>
                <span style={{ fontWeight: "bold" }}>
                  {departure.airline?.code || "N/A"}
                </span>
              </div>
              <div className={styles.extra}>
                <span>Type</span>
                <span style={{ fontWeight: "bold" }}>
                  {arrival ? "One Stop" : "Direct"}
                </span>
              </div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.flex}>
                <span>From</span>
                <span className={styles.money}> ₦{departure.price}</span>
              </div>
              <div className={styles.selectDiv}>
                <Image
                  src={Approved}
                  alt=""
                  className={styles.image}
                  style={{ display: visible ? "flex" : "none" }}
                />
                <select
                  className={`${styles.custom} ${styles.selectChange}`}
                  style={{ display: visible ? "none" : "flex" }}
                >
                  <option>Economy</option>
                  <option>First Class</option>
                  <option>Business Class</option>
                </select>
                <div
                  className={styles.left}
                  style={{ display: visible ? "none" : "flex" }}
                >
                  <div className={styles.seat}>
                    <Image src={Seat} alt="" />
                    <span>{departure.available_seats || "N/A"} Seats Left</span>
                  </div>
                  <span className={styles.select} onClick={toggleDivs}>
                    Select
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mother}>
            <div className={styles.mobileDiv}>
              <Image src={GreenImg} className={styles.GreenImg} alt="" />
              <Image
                src={Approved}
                alt=""
                className={styles.image}
                style={{ display: mobileVisible ? "flex" : "none" }}
              />
              <select
                className={styles.selectChange}
                style={{ display: mobileVisible ? "none" : "flex" }}
              >
                <option>Economy</option>
                <option>First Class</option>
                <option>Business Class</option>
              </select>
            </div>
            <div className={styles.mobileDiv}>
              <div className={styles.mobileFlex}>
                <span style={{ fontWeight: "bold" }} className={styles.bold}>
                  {departure.departure}
                </span>
                <span className={styles.lagos}>{departure.from}</span>
              </div>
              <div className={styles.lineDiv}>
                <span>{duration}</span>
                <div className={styles.circle}>
                  <Image src={Circle} alt="" />
                  <Image src={Line} alt="" />
                  <Image src={Circle} alt="" />
                </div>
                <span>{arrival ? "1 stop" : "Direct"}</span>
              </div>
              <div className={styles.mobileFlex}>
                <span style={{ fontWeight: "bold" }} className={styles.bold}>
                  {departure.arrival}
                </span>
                <span className={styles.abuja}>
                  {arrival ? arrival.from : departure.from}
                </span>
              </div>
            </div>
            <div className={styles.mobileDiv}>
              <span>Flight No:</span>
              <span style={{ fontWeight: "bold" }} className={styles.bold}>
                {departure.airline?.code || "N/A"}
              </span>
            </div>
            <div className={styles.mobileDiv}>
              <span>Type:</span>
              <span style={{ fontWeight: "bold" }} className={styles.bold}>
                {arrival ? "One Stop" : "Direct"}
              </span>
            </div>
            <div className={styles.mobileDiv}>
              <span>From:</span>
              <span
                style={{ fontWeight: "bold", color: "#058EA9" }}
                className={styles.monay}
              >
                ₦{departure.price}
              </span>
            </div>
            <div
              className={styles.mobileDiv}
              style={{ display: mobileVisible ? "none" : "flex" }}
            >
              <div className={styles.seat}>
                <Image src={Seat} alt="" />
                <span>{departure.available_seats || "N/A"} Seats Left</span>
              </div>
              <span className={styles.select} onClick={toggleMobileDivs}>
                Select
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectFlightComponent;
