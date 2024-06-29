import React, { useState, useEffect } from "react";
import styles from "@/styles/selectflight.module.css";
import Plane from "@/public/assets/images/BlueSmallPlane.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SelectFlightComponent from "../components/selectFlight/index";
import flybudu from "@/public/assets/images/flybuduLogo.png";
import selectFlight from "@/public/assets/images/selectflight.png";
import user from "@/public/assets/images/customer 1.png";
import luggage from "@/public/assets/images/secondtravelinfo.png";
import payment from "@/public/assets/images/payment 1.png";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Link from "next/link";
import Image from "next/image";
import { useFlightData } from "@/utils/helper";
import { useRouter } from "next/router";
import { Flight } from "@/redux/flight/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface SelectFlightComponentProps {
  flightData?: Flight | null;
}

function SelectFlightPage() {
  const router = useRouter();
  const { flightId } = router.query;
  const {
    searchCriteria,
    flightData: flightSearchResponse,
    loading,
    error,
  } = useFlightData();

  const selectedAline = useSelector(
    (state: RootState) => state.flight.selectedFlight
  );

 console.log(selectedAline, "seleced Airleine from  selected flight page")

  const [visible, setVisible] = useState(false);
  const toggleDivs = () => {
    setVisible(!visible);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { Departures: departure, Arrivals: arrival } = selectedAline || {};


  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <div className={styles.father}>
          <div className={styles.flybudu}>
            <Link href="/">
              <button style={{ border: "none", background: "none" }}>
                {" "}
                <Image
                  style={{ cursor: "pointer" }}
                  src={flybudu}
                  alt=""
                />{" "}
              </button>
            </Link>
          </div>
          <div className={styles.others}>
            <Link
              href="/selectflight"
              style={{ textDecoration: "none" }}
              className={styles.all1}
            >
              <Image src={selectFlight} alt="dtrt" />
              <span className={styles.p}>Select Flight</span>
            </Link>
            <Link
              href="/customerinfo"
              style={{ textDecoration: "none", color: "black" }}
              className={styles.all2}
            >
              <Image src={user} alt="jdf" />
              <span className={styles.p}>Customer Info</span>
            </Link>
            <Link
              href="/travelinformation"
              style={{ textDecoration: "none", color: "black" }}
              className={styles.all}
            >
              <Image src={luggage} alt="jhf" />
              <span className={styles.p}>Travel Info</span>
            </Link>
            <Link
              href="/payment"
              style={{ textDecoration: "none", color: "black" }}
              className={styles.all}
            >
              <Image src={payment} alt="sdj" />
              <span className={styles.p}>Payment</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondHeader}>
        <Link href="/flight">
          <Image alt="s" src={BackButton} className={styles.back} />
        </Link>
        <span style={{ fontWeight: "500" }}>
          {" "}
          Select Flight <span className={styles.specialText}> 1/4</span>
        </span>
        <Image src={support} className={styles.support} alt="" />
      </div>
      <div className={styles.flight}>
        <span style={{ fontSize: "20px" }}>Depature</span>
        <div className={styles.Plane}>
          <Image src={Plane} alt="" />
          <span
            className={styles.state}
          >{`${searchCriteria.from} to ${searchCriteria.to}`}</span>
        </div>
      </div>

      <div className={styles.margin}>
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
      </div>
      <div className={styles.margin}>
        {departure ? (
          <SelectFlightComponent flightData={{ departure }} />
        ) : (
          <div>No departure flight selected</div>
        )}
      </div>

      {/* {arrival && (
        <React.Fragment>
          <div className={styles.flight}>
            <span style={{ fontSize: "20px" }}>Return</span>
            <div className={styles.Plane}>
              <Image src={Plane} alt="" />
              <span
            className={styles.state}
          >{`${searchCriteria.to} to ${searchCriteria.from}`}</span>
            </div>
          </div>

          <div className={styles.margin}>
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
          </div>
          <div className={styles.margin}>
          <SelectFlightComponent selectedAline={{ departure: arrival }} />
          </div>
        </React.Fragment>
      )} */}
      <div className={styles.finalDiv}>
        <div className={styles.checkBox}>
          <input type="checkbox" />
          <span>
            By submitting your flight request, you are agree to our{" "}
            <span style={{ fontWeight: "bold", color: "#06BCE1" }}>
              {" "}
              Terms & Conditions
            </span>{" "}
            &{" "}
            <span style={{ fontWeight: "bold", color: "#06BCE1" }}>
              Privacy Policy
            </span>{" "}
            and to receive further communications regarding your flight.
            <span className={styles.disappear}>
              {" "}
              I acknowledge that personal information relating to my booking may
              be accessible to government authorities, selected airlines and the
              agents to whom the airline grants system access.
            </span>{" "}
          </span>
        </div>
        <Link
          href="/customerinfo"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          <span className={styles.continue}>Continue</span>
        </Link>
      </div>
      <div className={styles.lastDiv}>
        <span className={styles.note}>PLEASE NOTE</span>
        <span style={{ marginBottom: "5px" }}> * Non Refundable. </span>
        <span>
          *Total fare displayed above has been rounded off and may thus show a
          slight difference.
        </span>
      </div>
      <div className={styles.sigh}>
        <span className={styles.money}>#160,000</span>
        <Link
          className={styles.link}
          style={{ textDecoration: "none", color: "white" }}
          href="/customerinfo"
        >
          <span className={styles.booking}>Continue to Booking</span>
        </Link>
      </div>
    </div>
  );
}

export default SelectFlightPage;
