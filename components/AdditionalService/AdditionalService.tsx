// AdditionalService.tsx
import React, { useState, useEffect } from "react";
import styles from "./additionalservice.module.css";
import briefcase from "@/public/assets/images/suitcase 1.png";
import backpack from "@/public/assets/images/backpack 1.png";
import suitcase from "@/public/assets/images/Group 8.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Luggage } from "@/redux/types/formData.types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setLuggage } from "@/redux/flight/formDataSlice";

interface AdditionalServiceProps {
  onLuggageSelect: (selectedLuggage: {
    depart: Luggage[];
    return: Luggage[];
  }) => void;
}

function AdditionalService({ onLuggageSelect }: AdditionalServiceProps) {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const selectedAirline = useSelector(
    (state: RootState) => state.flight.selectedFlight
  );
  const storedLuggage = useSelector(
    (state: RootState) => state.formData.luggages
  );

  const [selectedLuggage, setSelectedLuggage] = useState<{
    depart: Luggage[];
    return: Luggage[];
  }>({
    depart: storedLuggage?.depart || [],
    return: storedLuggage?.return || [],
  });

  useEffect(() => {
    if (storedLuggage) {
      setSelectedLuggage({
        depart: storedLuggage.depart || [],
        return: storedLuggage.return || [],
      });
    }
  }, [storedLuggage]);

  const toggleText = () => {
    setIsActive(!isActive);
  };

  const handleLuggageChange = (
    type: "depart" | "return",
    weight: string,
    quantity: number,
    price: number
  ) => {
    const updatedLuggage = {
      ...selectedLuggage,
      [type]: selectedLuggage[type].map((luggage) => ({ ...luggage })),
    };

    const existingLuggageIndex = updatedLuggage[type].findIndex(
      (luggage) => luggage.weight === weight
    );

    if (existingLuggageIndex !== -1) {
      if (quantity === 0) {
        updatedLuggage[type] = updatedLuggage[type].filter(
          (_, index) => index !== existingLuggageIndex
        );
      } else {
        updatedLuggage[type][existingLuggageIndex] = {
          weight,
          quantity,
          price,
        };
      }
    } else if (quantity > 0) {
      updatedLuggage[type] = [
        ...updatedLuggage[type],
        { weight, quantity, price },
      ];
    }

    setSelectedLuggage(updatedLuggage);
    dispatch(setLuggage(updatedLuggage));
    onLuggageSelect(updatedLuggage);
  };

  const getLuggageQuantity = (type: "depart" | "return", weight: string) => {
    return (
      selectedLuggage[type].find((luggage) => luggage.weight === weight)
        ?.quantity || 0
    );
  };

  return (
    <div className={styles.general}>
      <div className={styles.firstDiv} onClick={toggleText}>
        <span style={{ fontFamily: "myFont" }}>Extra Baggage</span>
        <IoIosArrowForward />
      </div>
      <span className={styles.make}>
        Make your trip more enjoyable. What would you like to add?
      </span>
      {isActive && (
        <div className={styles.appear}>
          <div className={styles.secondDiv}>
            <div className={styles.taye}>
              <Image src={backpack} alt="slam" />
              <div>
                <span>
                  10Kg <span className={styles.none}>checked bag</span>
                </span>
                <p>
                  <span className={styles.none}>Starting from </span>{" "}
                  &#8358;6,000
                </p>
              </div>
            </div>
            <div className={styles.kehinde}>
              <Image src={suitcase} alt="dance" />
              <div>
                <span>
                  15Kg <span className={styles.none}> checked bag </span>
                </span>
                <p>
                  <span className={styles.none}>Starting from </span>{" "}
                  &#8358;9,000
                </p>
              </div>
            </div>
            <div className={styles.idowu}>
              <Image src={briefcase} alt="dance" />
              <div>
                <span>
                  20Kg <span className={styles.none}> checked bag</span>
                </span>
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
                <span>Depart</span>
                <span className={styles.lagos}>
                  {selectedAirline?.departure?.from_city} to{" "}
                  {selectedAirline?.departure?.to_city}
                </span>
              </div>
              {["10Kg", "15Kg", "20Kg"].map((weight) => (
                <div key={weight} className={styles.checkDiv}>
                  <span>{weight} check bag</span>
                  <div className={styles.spanDiv}>
                    <button
                      className={styles.minus}
                      onClick={() =>
                        handleLuggageChange(
                          "depart",
                          weight,
                          Math.max(getLuggageQuantity("depart", weight) - 1, 0),
                          weight === "10Kg"
                            ? 6000
                            : weight === "15Kg"
                            ? 9000
                            : 12000
                        )
                      }
                    >
                      -
                    </button>
                    <span className={styles.number}>
                      {getLuggageQuantity("depart", weight)}
                    </span>
                    <button
                      className={styles.plus}
                      onClick={() =>
                        handleLuggageChange(
                          "depart",
                          weight,
                          getLuggageQuantity("depart", weight) + 1,
                          weight === "10Kg"
                            ? 6000
                            : weight === "15Kg"
                            ? 9000
                            : 12000
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <span className={styles.bold}>
                    &#8358;
                    {weight === "10Kg"
                      ? "6,000"
                      : weight === "15Kg"
                      ? "9,000"
                      : "12,000"}
                  </span>
                </div>
              ))}
            </div>
            {selectedAirline?.arrival && (
              <div className={styles.div1}>
                <div className={styles.departDiv}>
                  <span>Return</span>
                  <span className={styles.lagos}>
                    {selectedAirline.arrival.from_city} to{" "}
                    {selectedAirline.arrival.to_city}
                  </span>
                </div>
                {["10Kg", "15Kg", "20Kg"].map((weight) => (
                  <div key={weight} className={styles.checkDiv}>
                    <span>{weight} check bag</span>
                    <div className={styles.spanDiv}>
                      <button
                        className={styles.minus}
                        onClick={() =>
                          handleLuggageChange(
                            "return",
                            weight,
                            Math.max(
                              getLuggageQuantity("return", weight) - 1,
                              0
                            ),
                            weight === "10Kg"
                              ? 6000
                              : weight === "15Kg"
                              ? 9000
                              : 12000
                          )
                        }
                      >
                        -
                      </button>
                      <span className={styles.number}>
                        {getLuggageQuantity("return", weight)}
                      </span>
                      <button
                        className={styles.plus}
                        onClick={() =>
                          handleLuggageChange(
                            "return",
                            weight,
                            getLuggageQuantity("return", weight) + 1,
                            weight === "10Kg"
                              ? 6000
                              : weight === "15Kg"
                              ? 9000
                              : 12000
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <span className={styles.bold}>
                      &#8358;
                      {weight === "10Kg"
                        ? "6,000"
                        : weight === "15Kg"
                        ? "9,000"
                        : "12,000"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdditionalService;
