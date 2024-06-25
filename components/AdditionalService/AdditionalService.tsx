// AdditionalService.tsx
import React, { useState } from "react";
import styles from "./additionalservice.module.css";
import briefcase from "@/public/assets/images/suitcase 1.png";
import backpack from "@/public/assets/images/backpack 1.png";
import suitcase from "@/public/assets/images/Group 8.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Luggage } from "@/redux/types/formData.types";

interface AdditionalServiceProps {
  onLuggageSelect: (selectedLuggage: Luggage[]) => void;
}

function AdditionalService({ onLuggageSelect }: AdditionalServiceProps) {
  const [isActive, setIsActive] = useState(false);
  const [selectedLuggage, setSelectedLuggage] = useState<Luggage[]>([]);

  const toggleText = () => {
    setIsActive(!isActive);
  };

  const handleLuggageChange = (
    weight: string,
    quantity: number,
    price: number
  ) => {
    const existingLuggageIndex = selectedLuggage.findIndex(
      (luggage) => luggage.weight === weight
    );

    if (existingLuggageIndex !== -1) {
      const updatedLuggage = [...selectedLuggage];
      updatedLuggage[existingLuggageIndex] = {
        ...updatedLuggage[existingLuggageIndex],
        quantity,
        price,
      };
      setSelectedLuggage(updatedLuggage);
    } else {
      const newLuggage: Luggage = {
        weight,
        quantity,
        price,
      };
      setSelectedLuggage([...selectedLuggage, newLuggage]);
    }

    onLuggageSelect([...selectedLuggage]);
  };

  return (
    <div className={styles.general}>
      <div className={styles.firstDiv} onClick={toggleText}>
        {" "}
        <span style={{ fontFamily: "myFont" }}>Extra Baggage</span>{" "}
        <IoIosArrowForward />
      </div>
      <span className={styles.make}>
        Make your trip more enjoyable. What would you like to add?
      </span>
      {isActive ? (
        <div className={styles.appear}>
          <div className={styles.secondDiv}>
            <div className={styles.taye}>
              {" "}
              <Image src={backpack} alt="slam" />{" "}
              <div>
                <span>
                  10Kg <span className={styles.none}>checked bag</span>
                </span>{" "}
                <p>
                  <span className={styles.none}>Starting from </span>{" "}
                  &#8358;6,000
                </p>
              </div>
            </div>
            <div className={styles.kehinde}>
              {" "}
              <Image src={suitcase} alt="dance" />{" "}
              <div>
                <span>
                  15Kg <span className={styles.none}> checked bag </span>{" "}
                </span>{" "}
                <p>
                  <span className={styles.none}>Starting from </span>{" "}
                  &#8358;9,000
                </p>
              </div>{" "}
            </div>
            <div className={styles.idowu}>
              {" "}
              <Image src={briefcase} alt="dance" />{" "}
              <div>
                <span>
                  20Kg <span className={styles.none}> checked bag</span>{" "}
                </span>{" "}
                <p>
                  <span className={styles.none}>Starting from </span>{" "}
                  &#8358;12,000
                </p>
              </div>
            </div>
          </div>
          <div className={styles.thirdDiv}>
            <div className={styles.div1}>
              <div className={styles.departDiv}>
                <span>Depart</span>{" "}
                <span className={styles.lagos}>Lagos to Abuja</span>
              </div>
              <div className={styles.checkDiv}>
                <span>10Kg check bag</span>{" "}
                <div className={styles.spanDiv}>
                  <button
                    className={styles.minus}
                    onClick={() =>
                      handleLuggageChange(
                        "10Kg",
                        Math.max(
                          (selectedLuggage.find(
                            (luggage) => luggage.weight === "10Kg"
                          )?.quantity || 0) - 1,
                          0
                        ),
                        6000
                      )
                    }
                  >
                    -
                  </button>
                  <span className={styles.number}>
                    {selectedLuggage.find(
                      (luggage) => luggage.weight === "10Kg"
                    )?.quantity || 0}
                  </span>
                  <button
                    className={styles.plus}
                    onClick={() =>
                      handleLuggageChange(
                        "10Kg",
                        (selectedLuggage.find(
                          (luggage) => luggage.weight === "10Kg"
                        )?.quantity || 0) + 1,
                        6000
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className={styles.bold}>&#8358;6,000</span>{" "}
              </div>
              <div className={styles.checkDiv}>
                <span>15Kg check bag</span>{" "}
                <div className={styles.spanDiv}>
                  <button
                    className={styles.minus}
                    onClick={() =>
                      handleLuggageChange(
                        "15Kg",
                        Math.max(
                          (selectedLuggage.find(
                            (luggage) => luggage.weight === "15Kg"
                          )?.quantity || 0) - 1,
                          0
                        ),
                        9000
                      )
                    }
                  >
                    -
                  </button>
                  <span className={styles.number}>
                    {selectedLuggage.find(
                      (luggage) => luggage.weight === "15Kg"
                    )?.quantity || 0}
                  </span>
                  <button
                    className={styles.plus}
                    onClick={() =>
                      handleLuggageChange(
                        "15Kg",
                        (selectedLuggage.find(
                          (luggage) => luggage.weight === "15Kg"
                        )?.quantity || 0) + 1,
                        9000
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className={styles.bold}>&#8358;9,000</span>{" "}
              </div>
              <div className={styles.checkDiv3}>
                <span>20Kg check bag</span>{" "}
                <div className={styles.spanDiv}>
                  <button
                    className={styles.minus}
                    onClick={() =>
                      handleLuggageChange(
                        "20Kg",
                        Math.max(
                          (selectedLuggage.find(
                            (luggage) => luggage.weight === "20Kg"
                          )?.quantity || 0) - 1,
                          0
                        ),
                        12000
                      )
                    }
                  >
                    -
                  </button>
                  <span className={styles.number}>
                    {selectedLuggage.find(
                      (luggage) => luggage.weight === "20Kg"
                    )?.quantity || 0}
                  </span>
                  <button
                    className={styles.plus}
                    onClick={() =>
                      handleLuggageChange(
                        "20Kg",
                        (selectedLuggage.find(
                          (luggage) => luggage.weight === "20Kg"
                        )?.quantity || 0) + 1,
                        12000
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className={styles.bold}>&#8358;12,000</span>{" "}
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.departDiv}>
                <span>Return</span>{" "}
                <span className={styles.lagos}>Lagos to Abuja</span>
              </div>
              <div className={styles.checkDiv}>
                <span>10Kg check bag</span>{" "}
                <div className={styles.spanDiv}>
                  <button
                    className={styles.minus}
                    onClick={() =>
                      handleLuggageChange(
                        "10Kg",
                        Math.max(
                          (selectedLuggage.find(
                            (luggage) => luggage.weight === "10Kg"
                          )?.quantity || 0) - 1,
                          0
                        ),
                        6000
                      )
                    }
                  >
                    -
                  </button>
                  <span className={styles.number}>
                    {selectedLuggage.find(
                      (luggage) => luggage.weight === "10Kg"
                    )?.quantity || 0}
                  </span>
                  <button
                    className={styles.plus}
                    onClick={() =>
                      handleLuggageChange(
                        "10Kg",
                        (selectedLuggage.find(
                          (luggage) => luggage.weight === "10Kg"
                        )?.quantity || 0) + 1,
                        6000
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className={styles.bold}>₦6,000</span>{" "}
              </div>
              <div className={styles.checkDiv}>
                <span>15Kg check bag</span>{" "}
                <div className={styles.spanDiv}>
                  <button
                    className={styles.minus}
                    onClick={() =>
                      handleLuggageChange(
                        "15Kg",
                        Math.max(
                          (selectedLuggage.find(
                            (luggage) => luggage.weight === "15Kg"
                          )?.quantity || 0) - 1,
                          0
                        ),
                        9000
                      )
                    }
                  >
                    -
                  </button>
                  <span className={styles.number}>
                    {selectedLuggage.find(
                      (luggage) => luggage.weight === "15Kg"
                    )?.quantity || 0}
                  </span>
                  <button
                    className={styles.plus}
                    onClick={() =>
                      handleLuggageChange(
                        "15Kg",
                        (selectedLuggage.find(
                          (luggage) => luggage.weight === "15Kg"
                        )?.quantity || 0) + 1,
                        9000
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className={styles.bold}>₦9,000</span>{" "}
              </div>
              <div className={styles.checkDiv3}>
                <span>20Kg check bag</span>{" "}
                <div className={styles.spanDiv}>
                  <button
                    className={styles.minus}
                    onClick={() =>
                      handleLuggageChange(
                        "20Kg",
                        Math.max(
                          (selectedLuggage.find(
                            (luggage) => luggage.weight === "20Kg"
                          )?.quantity || 0) - 1,
                          0
                        ),
                        12000
                      )
                    }
                  >
                    -
                  </button>
                  <span className={styles.number}>
                    {selectedLuggage.find(
                      (luggage) => luggage.weight === "20Kg"
                    )?.quantity || 0}
                  </span>
                  <button
                    className={styles.plus}
                    onClick={() =>
                      handleLuggageChange(
                        "20Kg",
                        (selectedLuggage.find(
                          (luggage) => luggage.weight === "20Kg"
                        )?.quantity || 0) + 1,
                        12000
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <span className={styles.bold}>₦12,000</span>{" "}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default AdditionalService;
