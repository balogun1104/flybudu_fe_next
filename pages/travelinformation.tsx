import React, { useEffect, useState } from "react";
import styles from "@/styles/travelinformation.module.css";
import SideCard from "../components/SideCard/SideCard";
import SpecialAssistance from "../components/SpecialAssistance/SpecialAssistance";
import Seat from "../components/Seat/Seat";
import flybudu from "@/public/assets/images/flybuduLogo.png";
import selectFlight from "@/public/assets/images/selectflight.png";
import user from "@/public/assets/images/customerinfo.png";
import luggage from "@/public/assets/images/travel white.png";
import payment from "@/public/assets/images/payment 1.png";
import customerSupport from "@/public/assets/images/customer-support (1) 1.png";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Additional from "../components/AdditionalService/AdditionalService";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setFormData } from "@/redux/flight/formDataSlice";
import { Luggage } from "@/redux/types/formData.types";
import { useRouter } from "next/router";

function TravelInformation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.formData);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLuggageSelect = (selectedLuggage: Luggage[]) => {
    dispatch(setFormData({ ...formData, luggages: selectedLuggage }));
  };

  const handleSaveAndContinue = () => {
    router.push("/payment");
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
              className={styles.all3}
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
        <Link href="/customerinfo">
          <Image alt="s" src={BackButton} className={styles.back} />
        </Link>
        <span>
          {" "}
          Travel Info <span className={styles.specialText}> 3/4</span>
        </span>
        <Image src={support} className={styles.support} alt="" />
      </div>
      <div className={styles.father}>
        <div className={styles.firstDiv}>
          <div className={styles.travelDiv}>
            {" "}
            <span className={styles.travel}>
              Travel Information (Additional Service)
            </span>
          </div>
          <Additional onLuggageSelect={handleLuggageSelect} />
          <SpecialAssistance />
          <Seat />
          <div className={styles.skipDiv}>
            <Link
              className={styles.none}
              href="/payment"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <span className={styles.skip}>Skip Step</span>
            </Link>
            <span className={styles.money}> #160,000</span>
            {isMobile ? (
              <Link
                className={styles.link}
                href="/side-card"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <span className={styles.save}>Save Continue</span>
              </Link>
            ) : (
              <button
                className={styles.link}
                style={{ textDecoration: "none" }}
                onClick={handleSaveAndContinue}
              >
                {" "}
                <span className={styles.save}>Save Continue</span>
              </button>
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
    </div>
  );
}

export default TravelInformation;
