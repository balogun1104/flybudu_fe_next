import React from "react";
import Padlock from "@/public/assets/images/lock 1.png";
import error from "@/public/assets/images/error (2) 1.png";
import Image from "next/image";

import styles from "./verified.module.css";
function Verified() {
  return (
    <div className={styles.general}>
      <div className={styles.detailsDiv}>
        <span className={styles.details}>Enter your Details</span>{" "}
        <div className={styles.lock}>
          <span className={styles.personal}>
            Your Personal data is protected{" "}
          </span>
          <Image src={Padlock} alt="" />
        </div>
      </div>
      <div className={styles.passportDiv}>
        <Image src={error} alt="" />
        <span>
          Use all given names and surnames exactly as they appear on your
          passport/ID to avoid complications.{" "}
        </span>
      </div>
      <div className={styles.mother}>
        {" "}
        <div className={styles.adult}>
          <span>Passenger 1(Adult-Primary Contact)</span>
          <label className={styles.label}>
            <select className={styles.select}>
              <option>Saved Passenger </option>
              <option>Tiamiyu Wasiu Oladimeji</option>
              <option>Olaniyan Tunde Bushran</option>
              <option>Ogenenchukwo Ifeomalu</option>
              <option>Taiye Taiwo</option>
            </select>
          </label>
        </div>
        <>
          <div className={styles.father}>
            <div className={styles.titleDiv}>
              <div className={styles.omo}>
                <label>
                  {" "}
                  Title <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
                <label>
                  Surname{" "}
                  <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
              </div>
              <div className={styles.surnameDiv}>
                <label className={styles.label}>
                  <select className={styles.select1}>
                    <option>Title </option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Master</option>
                  </select>
                </label>

                <input
                  className={styles.input1}
                  type="text"
                  placeholder="Enter surname here"
                />
              </div>
            </div>
            <div className={styles.firstDiv}>
              <label>
                {" "}
                First Name{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter name here"
              />
            </div>
            <div className={styles.middle}>
              <label>
                {" "}
                Middle Name{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter middlename here"
              />
            </div>
            <div className={styles.nationality}>
              <label>
                {" "}
                Nationality{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <label className={styles.label}>
                <select className={styles.select}>
                  <option>Nigeria </option>
                  <option>Brazil</option>
                  <option>Austria</option>
                  <option>Austria</option>
                  <option>China</option>
                </select>
              </label>
            </div>
            <div className={styles.gender}>
              <label>
                {" "}
                Gender <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <label className={styles.label}>
                <select className={styles.select}>
                  <option>Select Gender </option>
                  <option>Female</option>
                  <option>Custom</option>
                </select>
              </label>
            </div>
            <div className={styles.DOB}>
              <label>
                Date of Birth{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <div className={styles.triplet}>
                <label className={styles.labels}>
                  <select className={styles.taye}>
                    <option>Year </option>
                    <option>2020</option>
                    <option>2019</option>
                  </select>
                </label>{" "}
                <label className={styles.labels}>
                  <select className={styles.kehinde}>
                    <option>Month </option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                </label>{" "}
                <label className={styles.labels}>
                  <select className={styles.idowu}>
                    <option>Day </option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </>
      </div>
      <div className={styles.thirdNla}>
        <span className={styles.confirm}>
          Passenger 1 contact confirmation?
        </span>
        <div className={styles.firstDivk}>
          <div className={styles.firstDiv}>
            <label className={styles.bold}>
              Email <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
            </label>
            <input
              className={styles.input}
              placeholder="Enter Email Address"
              type="text"
            />
          </div>
          <div className={styles.titleDiv}>
            <label className={`${styles.bold} ${styles.bigger}`}>
              {" "}
              Phone Number{" "}
              <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
            </label>
            <div className={styles.sigh}>
              <label className={styles.label}>
                <select className={styles.select1}>
                  <option>+234 </option>
                  <option>+235</option>
                  <option>+1</option>
                  <option>+44</option>
                  <option>+419</option>
                </select>
              </label>

              {/* <div className={styles.surnameDiv}> */}
              <input
                className={styles.input1}
                type="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
        <div className={styles.checkbox2}>
          <div className={styles.checkbox}>
            {" "}
            <input type="checkbox" />{" "}
            <p>Save this passenger to my FlyBudu Account</p>
          </div>
          <div className={styles.checkbox}>
            {" "}
            <input type="checkbox" />{" "}
            <p>Get Booking and Payment confirmation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verified;
