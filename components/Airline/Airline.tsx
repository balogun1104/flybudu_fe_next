/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import styles from "./airline.module.css";
import { RootState } from "@/redux/store";
import { Booking } from "@/redux/flight/bookingTypes.type";

import iconUp from "@/public/assets/images/icon.png";
import iconDown from "@/public/assets/images/icon (1).png";
import greenAfrica from "@/public/assets/images/greenAfrica.png";

const HeroiconsOutlineDotsVertical: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
    />
  </svg>
);

const Airline: React.FC = () => {
  const router = useRouter();
  const { bookingData } = useSelector((state: RootState) => state.booking);

  const handleBookingClick = (id: number) => {
    router.push(`/booking-information/${id}`);
  };

  const renderMobileView = () => (
    <div className={styles.mobileMother}>
      <div className={styles.firstDate}>
        <Link href="/information" className={styles.line}>
          <span>01</span> <span>Feb. 15,2024</span>
        </Link>
      </div>
      <div className={styles.secondDate}>
        <Link href="/information" className={styles.line}>
          <span>LOS - ABV</span> <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );

  const renderTableHeader = () => (
    <thead>
      <tr>
        <th>S/N</th>
        <th>
          AIRLINE
          <div className={styles.iconDiv}>
            <Image alt="Sort Up" src={iconUp} width={7} height={7} />
            <Image alt="Sort Down" src={iconDown} width={7} height={7} />
          </div>
        </th>
        <th>
          BOOKING ID
          <div className={styles.iconDiv}>
            <Image alt="Sort Up" src={iconUp} width={7} height={7} />
            <Image alt="Sort Down" src={iconDown} width={7} height={7} />
          </div>
        </th>
        <th>
          ROUTE
          <div className={styles.iconDiv}>
            <Image alt="Sort Up" src={iconUp} width={7} height={7} />
            <Image alt="Sort Down" src={iconDown} width={7} height={7} />
          </div>
        </th>
        <th>BOOKING AMOUNT</th>
        <th>
          STATUS
          <div className={styles.iconDiv}>
            <Image alt="Sort Up" src={iconUp} width={7} height={7} />
            <Image alt="Sort Down" src={iconDown} width={7} height={7} />
          </div>
        </th>
        <th>
          DATE
          <div className={styles.iconDiv}>
            <Image alt="Sort Up" src={iconUp} width={7} height={7} />
            <Image alt="Sort Down" src={iconDown} width={7} height={7} />
          </div>
        </th>
        {/* <th>BOOKING</th> */}
      </tr>
    </thead>
  );

  const bookingRows = useMemo(() => 
    bookingData?.regular.map((booking, index) => {
      const formattedAmount = parseFloat(booking.amount_paid).toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const formattedDate = new Date(booking.departure).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      return (
        <tr
          key={booking.id}
          onClick={() => handleBookingClick(booking.id)}
          className={styles.bookingRow}
        >
          <td>{index + 1}</td>
          <td>
            <div className={styles.airlineInfo}>
              <Image
                alt={`${booking.schedule?.airline?.company || 'Airline'} logo`}
                src={booking.schedule?.airline?.logo || greenAfrica}
                width={20}
                height={20}
              />
              <span>{booking.schedule?.airline?.company || "N/A"}</span>
            </div>
          </td>
          <td>{booking.ticket}</td>
          <td>{`${booking.route?.location_code}-${booking.route?.destination_code}`}</td>
          <td>
            <span className={styles.currency}>&#8358;</span>
            {formattedAmount}
          </td>
          <td className={booking.status === "confirmed" ? styles.confirmedStatus : styles.pendingStatus}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </td>
          <td>{formattedDate}</td>
          <td><HeroiconsOutlineDotsVertical /></td>
        </tr>
      );
    }),
    [bookingData, handleBookingClick]
  );

  return (
    <div className={styles.general}>
      {renderMobileView()}
      <div className={styles.tableContainer}>
        <table className={styles.bookingTable}>
          {renderTableHeader()}
          <tbody>
            {bookingRows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Airline;