import React from "react";
import styles from "./airline.module.css";
import iconUp from "@/public/assets/images/icon.png";
import iconDown from "@/public/assets/images/icon (1).png";
import greenAfrica from "@/public/assets/images/greenAfrica.png";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

function Airline() {
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
      <div className={styles.mother}>
        <div className={styles.mobileMother}>
          <div className={styles.firstDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              {" "}
              <span>01</span> <span>Feb. 15,2024</span>{" "}
            </Link>
          </div>
          <div className={styles.secondDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              <span>LOS - ABV</span> <IoIosArrowForward />
            </Link>{" "}
          </div>
        </div>
        <div className={styles.mobileMother}>
          <div className={styles.firstDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              {" "}
              <span>01</span> <span>Feb. 15,2024</span>{" "}
            </Link>
          </div>
          <div className={styles.secondDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              <span>LOS - ABV</span> <IoIosArrowForward />
            </Link>{" "}
          </div>
        </div>{" "}
        <div className={styles.mobileMother}>
          <div className={styles.firstDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              {" "}
              <span>01</span> <span>Feb. 15,2024</span>{" "}
            </Link>
          </div>
          <div className={styles.secondDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              <span>LOS - ABV</span> <IoIosArrowForward />
            </Link>{" "}
          </div>
        </div>{" "}
        <div className={styles.mobileMother}>
          <div className={styles.firstDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              {" "}
              <span>01</span> <span>Feb. 15,2024</span>{" "}
            </Link>
          </div>
          <div className={styles.secondDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              <span>LOS - ABV</span> <IoIosArrowForward />
            </Link>{" "}
          </div>
        </div>{" "}
        <div className={styles.mobileMother}>
          <div className={styles.firstDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              {" "}
              <span>01</span> <span>Feb. 15,2024</span>{" "}
            </Link>
          </div>
          <div className={styles.secondDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              <span>LOS - ABV</span> <IoIosArrowForward />
            </Link>{" "}
          </div>
        </div>{" "}
        <div className={styles.mobileMother}>
          <div className={styles.firstDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              {" "}
              <span>01</span> <span>Feb. 15,2024</span>{" "}
            </Link>
          </div>
          <div className={styles.secondDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              <span>LOS - ABV</span> <IoIosArrowForward />
            </Link>{" "}
          </div>
        </div>{" "}
        <div className={styles.mobileMother}>
          <div className={styles.firstDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              {" "}
              <span>01</span> <span>Feb. 15,2024</span>{" "}
            </Link>
          </div>
          <div className={styles.secondDate}>
            {" "}
            <Link
              href="/information"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className={styles.line}
            >
              <span>LOS - ABV</span> <IoIosArrowForward />
            </Link>{" "}
          </div>
        </div>
        <div className={styles.firstDiv}>
          <div className={styles.first}>
            <span>S/N</span>
            <span className={styles.iconSpan}>
              AIRLINE{" "}
              <div className={styles.iconDiv}>
                <Image alt="" src={iconUp} /> <Image alt="" src={iconDown} />
              </div>
            </span>
          </div>
          <span className={styles.iconSpan}>
            BOOKING ID{" "}
            <div className={styles.iconDiv}>
              <Image alt="" src={iconUp} /> <Image alt="" src={iconDown} />
            </div>
          </span>
          <span className={styles.iconSpan}>
            ROUTE{" "}
            <div className={styles.iconDiv}>
              <Image alt="" src={iconUp} /> <Image alt="" src={iconDown} />
            </div>
          </span>
          <span>BOOKING AMOUNT</span>
          <span className={styles.iconSpan}>
            STATUS{" "}
            <div className={styles.iconDiv}>
              <Image alt="" src={iconUp} /> <Image alt="" src={iconDown} />
            </div>
          </span>
          <span className={styles.iconSpan}>
            DATE{" "}
            <div className={styles.iconDiv}>
              <Image alt="" src={iconUp} /> <Image alt="" src={iconDown} />
            </div>
          </span>
          <span className={styles.juju}>BOOKING</span>
        </div>
        <div className={styles.sameDiv}>
          <div className={styles.togeda}>
            <span>01</span>
            <div className={styles.imageDiv}>
              <Image alt="" width="32" src={greenAfrica} />
              <span>Green Africa</span>
            </div>
          </div>
          <span className={styles.hash}>#UY6789G54</span>
          <div className={styles.routeDiv}>
            <span>LOS-ABV</span>
            <span>ABV-LOS</span>
          </div>
          <span className={styles.owo}>
            {" "}
            <span style={{ fontWeight: "bold" }}>&#8358;</span>160,000.00
          </span>
          <span style={{ color: "rgba(30, 222, 141, 1)" }}>Completed</span>
          <span>Feb. 15,2024</span>
          <HeroiconsOutlineDotsVertical />
        </div>
        <div className={styles.sameDiv}>
          <div className={styles.togeda}>
            <span>02</span>
            <div className={styles.imageDiv}>
              <Image alt="" width="32" src={greenAfrica} />
              <span>Green Africa</span>
            </div>
          </div>
          <span className={styles.hash}>#UY6789G54</span>
          <div className={styles.routeDiv}>
            <span>LOS-ABV</span>
          </div>
          <span className={styles.owo}>
            {" "}
            <span style={{ fontWeight: "bold" }}>&#8358;</span>160,000.00
          </span>
          <span style={{ color: "rgba(30, 222, 141, 1)" }}>Completed</span>
          <span>Feb. 15,2024</span>
          <HeroiconsOutlineDotsVertical />
        </div>
        <div className={styles.sameDiv}>
          <div className={styles.togeda}>
            <span>03</span>
            <div className={styles.imageDiv}>
              <Image alt="" width="32" src={greenAfrica} />
              <span>Green Africa</span>
            </div>
          </div>
          <span className={styles.hash}>#UY6789G54</span>
          <div className={styles.routeDiv}>
            <span>LOS-ABV</span>
          </div>
          <span className={styles.owo}>
            {" "}
            <span style={{ fontWeight: "bold" }}>&#8358;</span>160,000.00
          </span>
          <span style={{ color: "rgba(239, 12, 12, 1)" }}>Cancelled</span>
          <span>Feb. 15,2024</span>
          <HeroiconsOutlineDotsVertical />
        </div>
        <div className={styles.sameDiv}>
          <div className={styles.togeda}>
            <span>04</span>
            <div className={styles.imageDiv}>
              <Image alt="" width="32" src={greenAfrica} />
              <span>Green Africa</span>
            </div>
          </div>
          <span className={styles.hash}>#UY6789G54</span>
          <div className={styles.routeDiv}>
            <span>LOS-ABV</span>
            <span>ABV-LOS</span>
          </div>
          <span className={styles.owo}>
            <span style={{ fontWeight: "bold" }}>&#8358;</span> 160,000.00
          </span>
          <span style={{ color: "rgba(30, 222, 141, 1)" }}>Completed</span>
          <span>Feb. 15,2024</span>
          <HeroiconsOutlineDotsVertical />
        </div>
        <div className={styles.sameDiv}>
          <div className={styles.togeda}>
            <span>05</span>
            <div className={styles.imageDiv}>
              <Image alt="" width="32" src={greenAfrica} />
              <span>Green Africa</span>
            </div>
          </div>
          <span className={styles.hash}>#UY6789G54</span>
          <div className={styles.routeDiv}>
            <span>LOS-ABV</span>
          </div>
          <span className={styles.owo}>
            {" "}
            <span style={{ fontWeight: "bold" }}>&#8358;</span> 160,000.00
          </span>
          <span style={{ color: "rgba(239, 12, 12, 1)" }}>Cancelled</span>
          <span>Feb. 15,2024</span>
          <HeroiconsOutlineDotsVertical />
        </div>
        <div className={styles.sameDiv}>
          <div className={styles.togeda}>
            <span>06</span>
            <div className={styles.imageDiv}>
              <Image alt="" width="32" src={greenAfrica} />
              <span>Green Africa</span>
            </div>
          </div>
          <span className={styles.hash}>#UY6789G54</span>
          <div className={styles.routeDiv}>
            <span>LOS-ABV</span>
            <span>ABV-LOS</span>
          </div>
          <span className={styles.owo}>
            {" "}
            <span style={{ fontWeight: "bold" }}>&#8358;</span>160,000.00
          </span>
          <span style={{ color: "rgba(30, 222, 141, 1)", border: "none" }}>
            Completed
          </span>
          <span>Feb. 15,2024</span>
          <HeroiconsOutlineDotsVertical />
        </div>
      </div>
    </div>
  );
}

export default Airline;
