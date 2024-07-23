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

  const toggleText = () => {
    setIsActive(!isActive);
  };

  const getLuggagePrice = (type: "depart" | "return", weight: string): number => {
    const airline = type === "depart" ? selectedAirline?.departure?.airline : selectedAirline?.arrival?.airline;
    if (!airline) return 0;

    switch (weight) {
      case "10Kg":
        return parseFloat(airline.luggage10);
      case "15Kg":
        return parseFloat(airline.luggage15);
      case "20Kg":
        return parseFloat(airline.luggage20);
      default:
        return 0;
    }
  };

  const handleLuggageChange = (
    type: "depart" | "return",
    weight: string,
    quantity: number
  ) => {
    const price = getLuggagePrice(type, weight);
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

  useEffect(() => {
    if (storedLuggage) {
      setSelectedLuggage({
        depart: storedLuggage.depart || [],
        return: storedLuggage.return || [],
      });
    }
  }, [storedLuggage]);

  const renderLuggageOptions = (type: "depart" | "return") => {
    const flightData = type === "depart" ? selectedAirline?.departure : selectedAirline?.arrival;
    if (!flightData) return null;

    return (
      <div className={styles.div1}>
        <div className={styles.departDiv}>
          <span>{type === "depart" ? "Depart" : "Return"}</span>
          <span className={styles.lagos}>
            {flightData.route.location} to {flightData.route.destination}
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
                    type,
                    weight,
                    Math.max(getLuggageQuantity(type, weight) - 1, 0)
                  )
                }
              >
                -
              </button>
              <span className={styles.number}>
                {getLuggageQuantity(type, weight)}
              </span>
              <button
                className={styles.plus}
                onClick={() =>
                  handleLuggageChange(
                    type,
                    weight,
                    getLuggageQuantity(type, weight) + 1
                  )
                }
              >
                +
              </button>
            </div>
            <span className={styles.bold}>
              &#8358;{getLuggagePrice(type, weight).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
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
                  &#8358;{getLuggagePrice("depart", "10Kg").toLocaleString()}
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
                  &#8358;{getLuggagePrice("depart", "15Kg").toLocaleString()}
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
                  &#8358;{getLuggagePrice("depart", "20Kg").toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.thirdDiv}>
            {renderLuggageOptions("depart")}
            {selectedAirline?.arrival && renderLuggageOptions("return")}
          </div>
        </div>
      )}
    </div>
  );
}

export default AdditionalService;