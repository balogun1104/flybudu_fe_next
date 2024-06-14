import React from "react";
import styles from "./information.module.css";
import copyImg from "@/public/assets/images/pasteImage.png";
import Aeroplane from "@/public/assets/images/Aeroplane.png";
import masterCard from "@/public/assets/images/Frame 48097434.png";
import BackButton from "@/public/assets/images/backbutton.png";
import Link from "next/link";
import Image from "next/image";
function information() {
  function HeroiconsOutlineDotsVertical(props: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
        ></path>
      </svg>
    );
  }
  return (
    <div className={styles.general}>
      <div className={styles.secondHeader}>
        <Link href="/manage-booking">
          <Image alt="s" src={BackButton} className={styles.back} />
        </Link>
        <span style={{ fontWeight: "bold" }}> Flight Information </span>
        <HeroiconsOutlineDotsVertical />
      </div>
      <div className={styles.mother}>
        <div className={styles.firstDiv}>
          <span className={styles.sike}>Flight Information</span>
          <div className={styles.innerFirst}>
            {" "}
            <span>Flight ID:#UY6789G54 </span>
            <Image alt="dance" src={copyImg} />
          </div>
        </div>
        <div className={styles.departDiv}>
          <span
            style={{ color: "rgba(6, 188, 225, 1)", fontWeight: "bold" }}
            className={styles.depart}
          >
            Depart
          </span>
          <span>Mar. 14,2023</span>
          <span style={{ border: "none" }}>0 Stop</span>
        </div>
        <div className={styles.travelDiv}>
          <div className={styles.state}>
            <span>Lagos (LOS)</span>
            <span>Abuja (ABV)</span>
          </div>
          <div className={styles.airportDiv}>
            <span className={styles.airportLeft}>
              Murtala Muhammed International Airport
            </span>{" "}
            <Image alt="" src={Aeroplane} />{" "}
            <span className={styles.airport}>
              Nnamdi Azikiwe International Airport
            </span>
          </div>
          <div className={styles.time}>
            <span>07:00</span>
            <span>08:40</span>
          </div>
        </div>
        <div className={styles.departDiv}>
          <span
            style={{ color: "rgba(6, 188, 225, 1)", fontWeight: "bold" }}
            className={styles.depart}
          >
            Return
          </span>
          <span>Mar. 24,2023</span>
          <span style={{ border: "none" }}>0 Stop</span>
        </div>
        <div className={styles.travelDiv}>
          <div className={styles.state}>
            <span>Abuja (ABV)</span>
            <span>Lagos (LOS)</span>
          </div>
          <div className={styles.airportDiv}>
            <span className={styles.airportLeft}>
              Nnamdi Azikiwe International Airport
            </span>
            <Image alt="" src={Aeroplane} />{" "}
            <span className={styles.airport}>
              Murtala Muhammed International Airport
            </span>{" "}
          </div>
          <div className={styles.time}>
            <span>07:45</span>
            <span>09:15</span>
          </div>
        </div>
        <div className={styles.customerDiv}>
          <div>
            <span className={styles.customer}>Customer Information</span>
          </div>
          <div>
            <span>Title </span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Mr
            </span>
          </div>
          <div>
            <span>Surname</span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Lorem
            </span>
          </div>
          <div>
            <span>First name</span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Lorem
            </span>
          </div>
          <div>
            <span>Middle name</span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Lorem
            </span>
          </div>
          <div>
            <span>Email</span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Lorem@gmail.com
            </span>
          </div>
          <div>
            <span>Phone Number </span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              0980xxxxxxx
            </span>
          </div>
          <div>
            <span>Nationality</span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Nigerian
            </span>
          </div>
          <div>
            <span>Gender</span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Male
            </span>
          </div>
          <div>
            <span>Date of Birth</span>
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              jan. 1,2023
            </span>
          </div>
        </div>
        <div className={styles.fareDiv}>
          <div>
            {" "}
            <span className={styles.customer}>Flight Base Fare</span>{" "}
          </div>
          <div>
            {" "}
            <span>Adult x 1 </span>{" "}
          </div>
          <div>
            {" "}
            <span>Class</span>{" "}
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              Economy
            </span>{" "}
          </div>
          <div>
            {" "}
            <span>Base Fare</span>{" "}
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              &#8358;160,000.00
            </span>{" "}
          </div>
          <div>
            {" "}
            <span>Extra Baggage</span>{" "}
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              &#8358;12,000.00
            </span>{" "}
          </div>
          <div>
            {" "}
            <span>Discount</span>{" "}
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              &#8358;00.00
            </span>{" "}
          </div>
          <div>
            {" "}
            <span>Taxes and Fees</span>{" "}
            <span
              style={{ color: "rgba(100, 100, 100, 1)", fontWeight: "bold" }}
            >
              &#8358;00.00
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className={styles.total}>Total</span>{" "}
            <span className={styles.totalAmt}>&#8358;172,000.00</span>{" "}
          </div>
        </div>
        <div className={styles.paymentDiv}>
          <div>
            {" "}
            <span className={styles.customer}>Payment</span>
          </div>
          <div>
            {" "}
            <span>Payment Method</span>{" "}
            <div>
              {" "}
              <span style={{ fontWeight: "bold", fontSize: "19px" }}>
                4526****0556
              </span>{" "}
              <Image alt="fddsfd" src={masterCard} />
            </div>
          </div>
          <div>
            <span>Status</span>{" "}
            <span
              style={{ color: "rgba(30, 222, 141, 1)", fontWeight: "bold" }}
            >
              Successful
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default information;
