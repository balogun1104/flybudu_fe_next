import React, { useState } from "react";
import styles from "./specialassistance.module.css";
import { IoIosArrowForward } from "react-icons/io";

function SpecialAssistance() {
  const [isActive, setIsActive] = useState(false);

  const toggleText = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.general}>
      <div className={styles.firstDiv} onClick={toggleText}>
        <span style={{ fontFamily: "myFont" }}>Special Assistance</span>{" "}
        <IoIosArrowForward />
      </div>
      <span className={styles.assistance}>
        Assistance for customers who might need help onboarding
      </span>
      {isActive ? (
        <div className={styles.secondDiv}>
          <div className={styles.triplet}>
            {" "}
            <input type="checkbox" />{" "}
            <text>
              {" "}
              <span style={{ fontFamily: "myFont" }}>
                Wheelchair on the Ramp
              </span>{" "}
              - Customer can climb stairs, walk to and from seat but unable to
              walk long distance. Require assistance to and from the aircraft.{" "}
            </text>
          </div>
          <div className={styles.triplet}>
            {" "}
            <input type="checkbox" />{" "}
            <text>
              <span style={{ fontFamily: "myFont" }}>Visually Impaired</span>-
              Customer requires full assistance to the aircraft and escort
              inflight.{" "}
            </text>
          </div>
          <div className={styles.triplet}>
            {" "}
            <input type="checkbox" />{" "}
            <text>
              <span style={{ fontFamily: "myFont" }}>Hearing Impaired</span>-
              Customer requires full assistance to the aircraft and escort
              inflight.
            </text>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SpecialAssistance;
