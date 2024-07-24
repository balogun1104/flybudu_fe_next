import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import styles from "./sidecard.module.css";
import { RootState } from "@/redux/store";
import { useFlightData } from "@/utils/helper";
import { updateFormData } from "@/redux/flight/formDataSlice";
import { 
  calculateTotalPrice, 
  formatPrice, 
  convertFlightSearchRequestToSearchCriteria 
} from "@/utils/CalculateTotalPrice";

import greenImg from "@/public/assets/images/greenAfrica.png";
import star from "@/public/assets/svg/Star.svg";
import user from "@/public/assets/images/Customers.png";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import plane from "@/public/assets/images/plane.png";
import Increase from "@/public/assets/images/increase 1.png";

function SideCard() {
  const dispatch = useDispatch();
  const [showLuggageBreakdown, setShowLuggageBreakdown] = useState(false);
  const { searchCriteria: flightSearchRequest } = useFlightData();

  const selectedAirline = useSelector(
    (state: RootState) => state.flight.selectedFlight
  );
  const discountValue = useSelector(
    (state: RootState) => state.flight.discountValue
  );
  const formData = useSelector((state: RootState) => state.formData);

  const searchCriteria = convertFlightSearchRequestToSearchCriteria(flightSearchRequest);

  const { baseFare, totalLuggagePrice, updatedTotalPrice, luggagePrices } =
    calculateTotalPrice(
      selectedAirline,
      searchCriteria,
      formData.luggages ? formData.luggages : { depart: [], return: [] },
      discountValue
    );

  useEffect(() => {
    dispatch(updateFormData({ updatedTotalPrice }));
  }, [dispatch, updatedTotalPrice]);

  if (!selectedAirline || !selectedAirline.departure) {
    return <div>No flight selected</div>;
  }

  return (
    <div className={styles.body}>
      <div className={styles.general}>
        <div className={styles.secondHeader}>
          <Link href="/travelinformation">
            <Image alt="Back" src={BackButton} className={styles.back} />
          </Link>
          <span>
            Summary <span className={styles.specialText}> 3/4</span>
          </span>
          <Image src={support} className={styles.support} alt="Support" />
        </div>
        <div className={styles.img}>
          {selectedAirline.departure?.airline?.logo && (
            <Image
              className={styles.img}
              src={selectedAirline.departure.airline.logo}
              width={360}
              height={120}
              alt="airline logo"
            />
          )}
        </div>
        <div className={styles.seconddiv}>
          <div className={styles.greenAfrica}>
            <p className={styles.greenText}>
              {selectedAirline.departure?.airline?.company || "N/A"}
            </p>
            <Image src={star} alt="Star" />
            <span className={styles.bold}>5.0</span>
            <Image src={user} alt="User" /> <span>123</span>
          </div>
          <div className={styles.init}>
            <p className={styles.book}>Booking Summary</p>
            <Link href="/flight">
              <span className={styles.change}>Change</span>
            </Link>
          </div>
        </div>
        <div className={styles.thirdDiv}>
          <div className={styles.departDiv}>
            <p className={styles.depart}>Depart</p>
            <span className={styles.date}>
              {selectedAirline.departure?.date}
            </span>
            <span className={styles.stop}>
              {selectedAirline.arrival ? "1 Stop" : "0 Stop"}
            </span>
          </div>
          <div className={styles.triplet}>
            <div className={styles.lagos}>
              <span className={styles.abujaText}>{searchCriteria.origin}</span>
              <p>{selectedAirline.departure?.route.location_code}</p>
              <p className={styles.time}>
                {selectedAirline.departure?.departure}
              </p>
            </div>
            <div className={styles.plane}>
              <Image src={plane} alt="Plane" />
            </div>
            <div className={styles.abuja}>
              <span className={styles.abujaText}>{searchCriteria.destination}</span>
              <p>{selectedAirline.departure?.route.destination_code}</p>
              <p className={styles.time}>
                {selectedAirline.departure?.arrival}
              </p>
            </div>
          </div>
        </div>
        {selectedAirline.arrival && (
          <div className={styles.fourthDiv}>
            <div className={styles.departDiv}>
              <p className={styles.depart}>Return</p>
              <span className={styles.date}>
                {selectedAirline.arrival.date}
              </span>
            </div>
            <div className={styles.triplet}>
              <div>
                <span className={styles.abujaText}>{searchCriteria.destination}</span>
                <p>{selectedAirline.arrival.route?.location_code}</p>
                <p className={styles.time}>
                  {selectedAirline.arrival.departure}
                </p>
              </div>
              <div className={styles.plane}>
                <Image src={plane} alt="Plane" />
              </div>
              <div className={styles.abuja}>
                <span className={styles.abujaText}>{searchCriteria.origin}</span>
                <p>{selectedAirline.arrival.route?.destination_code}</p>
                <p className={styles.time}>{selectedAirline.arrival.arrival}</p>
              </div>
            </div>
          </div>
        )}
        <div className={styles.fifthDiv}>
          <span className={styles.base}>Flight Base Fare</span>
          <p>Adult x{searchCriteria.passengers.adults}</p>
          <div className={styles.twins}>
            <p>Class</p> <span>{searchCriteria.cabinClass}</span>
          </div>
          <div className={styles.twins}>
            <p>Base Fare</p>
            <span>&#8358; {formatPrice(baseFare)}</span>
          </div>
          <div className={styles.twins}>
            <p>Luggage</p>
            <span
              onClick={() => setShowLuggageBreakdown(!showLuggageBreakdown)}
            >
              &#8358; {formatPrice(totalLuggagePrice)}
            </span>
          </div>
          {showLuggageBreakdown && (
            <div className={styles.luggageBreakdown}>
              <h4>Luggage Breakdown</h4>
              <h5>Departure</h5>
              {formData.luggages?.depart?.map((luggage, index) => (
                <div key={index}>
                  <p>
                    {luggage.weight} x {luggage.quantity}: &#8358;{" "}
                    {formatPrice(luggage.price * luggage.quantity)}
                  </p>
                </div>
              ))}
              {selectedAirline.arrival && formData.luggages?.return && (
                <>
                  <h5>Return</h5>
                  {formData.luggages.return.map((luggage, index) => (
                    <div key={index}>
                      <p>
                        {luggage.weight} x {luggage.quantity}: &#8358;{" "}
                        {formatPrice(luggage.price * luggage.quantity)}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
          <div className={styles.twins}>
            <p>Discount</p>
            <span>&#8358; {formatPrice(discountValue)}</span>
          </div>
          <div className={styles.twins}>
            <p>Taxes and fee</p>
            <span>&#8358; 00.00</span>
          </div>
          <div className={styles.twins}>
            <p>Total</p>
            <span className={styles.blue}>
              &#8358; {formatPrice(updatedTotalPrice)}
            </span>
          </div>
          <div className={styles.priceDiv}>
            <Image src={Increase} alt="Increase" />
            <span className={styles.price}>
              This price may change if you come back later
            </span>
          </div>
        </div>
        <div className={styles.skipDiv}>
          <span className={styles.money}>
            &#8358; {formatPrice(updatedTotalPrice)}
          </span>
          <Link
            href="/payment"
            className={styles.link}
            style={{ textDecoration: "none" }}
          >
            <span className={styles.save}>Proceed To Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideCard;