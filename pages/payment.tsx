import React, { useEffect, useState } from "react";
import styles from "@/styles/payment.module.css";
import SideCard from "../components/SideCard/SideCard";
import { PaystackButton } from "react-paystack";
import Paystack from "../components/Paystack/Paystack";
import paystack from "@/public/assets/images/Frame 48097430.png";
import flutterwave from "@/public/assets/images/Frame 48097430 (2).png";
import visa from "@/public/assets/images/Frame 48097430 (1).png";
import masterCard from "@/public/assets/images/Frame 48097434.png";
import flybudu from "@/public/assets/images/flybuduLogo.png";
import selectFlight from "@/public/assets/images/selectflight.png";
import user from "@/public/assets/images/customerinfo.png";
import luggage from "@/public/assets/images/travel white.png";
import payment from "@/public/assets/images/payment white.png";
import verve from "@/public/assets/images/Frame 48097433.png";
import Link from "next/link";
import customerSupport from "@/public/assets/images/customer-support (1) 1.png";
import PaymentApproved from "../components/PaymentApproved/PaymentApproved";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useFlightData } from "@/utils/helper";
import { RootState } from "../redux/store";
import axiosInstance from "@/redux/api";

function Payment() {
  const { searchCriteria, flightData, loading, totalFlight, totalPassengers } =
    useFlightData();
  const selectedAirline = useSelector(
    (state: RootState) => state.flight.selectedFlight
  );

  const arrivalPrice = selectedAirline?.arrival?.price
    ? Number(selectedAirline.arrival.price)
    : 0;
  const departurePrice = selectedAirline?.departure?.price
    ? Number(selectedAirline.departure.price)
    : 0;

  const Addition = arrivalPrice + departurePrice;
  const passenger =
    searchCriteria.passengers.adults +
    searchCriteria.passengers.children +
    searchCriteria.passengers.infants;
  const finalPrice = Addition * passenger;

  const [isOpen, setIsOpen] = useState(false);
  const formData = useSelector((state: RootState) => state.formData);
  const { updatedTotalPrice } = formData;

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  const handlePaymentSuccess = async () => {
    try {
      const response = await axiosInstance.post("flights/submit", formData);
      console.log("Payment Successful!", response.data);
      setIsOpen(true);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const paystackOptions = {
    email: formData.email,
    amount: updatedTotalPrice * 100,
    publicKey: "pk_test_198184ef9c4222f0fa560b0791a3a7f342f154cc",
    text: "Pay Now",
    onSuccess: handlePaymentSuccess,
    onClose: () => {
      console.log("Payment Closed!");
    },
  };

  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <div className={styles.fath}>
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
              style={{ textDecoration: "none" }}
              className={styles.all2}
            >
              <Image src={user} alt="jdf" />
              <span className={styles.p}>Customer Info</span>
            </Link>
            <Link
              href="/travelinformation"
              style={{ textDecoration: "none" }}
              className={styles.all}
            >
              <Image src={luggage} alt="jhf" />
              <span className={styles.p}>Travel Info</span>
            </Link>
            <Link
              href="/payment"
              style={{ textDecoration: "none" }}
              className={styles.all}
            >
              <Image src={payment} alt="sdj" />
              <span className={styles.p}>Payment</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondHeader}>
        <Link href="/travelinformation">
          <Image alt="s" src={BackButton} className={styles.back} />
        </Link>
        <span>
          {" "}
          Payment <span className={styles.specialText}> 4/4</span>
        </span>
        <Image src={support} className={styles.support} alt="" />
      </div>
      <div className={styles.father}>
        <div className={styles.firstDiv}>
          <div className={styles.first}>
            <span>Payment</span>
            <p>Choose your preferred method</p>
          </div>
          <div className={styles.generall}>
            <div className={styles.firstdiv}>
              <div className={styles.paystackDiv}>
                {" "}
                <span>Paystack</span> <Image src={paystack} alt="dsa" />
              </div>
              <div className={styles.images}>
                {" "}
                <Image src={visa} alt="dsa" /> <Image src={verve} alt="dsa" />{" "}
                <Image src={masterCard} alt="dsa" />
              </div>
              <div className={styles.textDiv}>
                <span>
                  By selecting 'Pay Now', you confirm reservation of selected
                  service and agree with the condition of carriage and the fare
                  application rules of FlyBudu. You will be redirected to our
                  secure payment checkout page.{" "}
                </span>
              </div>
            </div>
            <div className={styles.seconddiv}>
              <div className={styles.payment}>
                <p>Your full payment is</p>
                <span>
                  &#8358;{" "}
                  {updatedTotalPrice
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.skipDiv}>
            <Link
              href="/travelinformation"
              className={styles.link}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <button
                style={{ fontWeight: "bold", cursor: "pointer" }}
                className={styles.skip}
              >
                Go Back
              </button>
            </Link>{" "}
            <span className={styles.money}> #172,000</span>
            {formData.email && (
              <PaystackButton className={styles.save} {...paystackOptions} />
            )}
          </div>
        </div>
        <div className={styles.secondDiv}>
          <SideCard />
          <div className={styles.customerDiv}>
            <Image src={customerSupport} alt="dr" />
            <div>
              <span>Customer Support</span>
              <p>For support, please call us on</p>
              <span>08160178711, 08160178711,</span>
              <p>24/7 (Monday to Sunday)</p>
            </div>
          </div>
        </div>
      </div>
      {formData.email && (
        <PaystackButton className={styles.save} {...paystackOptions} />
      )}
      {isOpen && <PaymentApproved setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Payment;
