import React, { useMemo, useState } from "react";
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
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

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

const ITEMS_PER_PAGE = 5;

const Airline: React.FC = () => {
  const router = useRouter();
  const { bookingData } = useSelector((state: RootState) => state.booking);
  const [currentPage, setCurrentPage] = useState(1);

  const handleBookingClick = (booking: Booking, isMobile: boolean) => {
    const pathname = isMobile
      ? "/information"
      : `/booking-information/${booking.id}`;
    router.push({
      pathname,
      query: { bookingData: JSON.stringify(booking) },
    });
  };

  const paginatedBookings = useMemo(() => {
    if (!bookingData || !bookingData.regular) return [];
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return bookingData.regular.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [bookingData, currentPage]);

  const totalPages = useMemo(() => {
    if (!bookingData || !bookingData.regular) return 0;
    return Math.ceil(bookingData.regular.length / ITEMS_PER_PAGE);
  }, [bookingData]);

  const renderMobileView = () => {
    if (!paginatedBookings || paginatedBookings.length === 0) {
      return null;
    }

    return (
      <div>
        {paginatedBookings.map((booking) => {
          const formattedDate = new Date(booking.departure);
          const day = formattedDate.getDate();
          const formattedDateString = formattedDate.toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            }
          );

          return (
            <div
              key={booking.id}
              className={styles.line}
              onClick={() => handleBookingClick(booking, true)}
            >
              <div className={styles.mobileMother}>
                <div className={styles.firstDate}>
                  <span className={styles.date}>
                    {day.toString().padStart(2, "0")}
                  </span>
                  <span>{formattedDateString}</span>
                </div>
                <div className={styles.secondDate}>
                  <span className={styles.secondText}>
                    {`${booking.route?.location_code} - ${booking.route?.destination_code}`}
                  </span>
                  <IoIosArrowForward color="#9B9B9B" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

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
      </tr>
    </thead>
  );

  const bookingRows = useMemo(
    () =>
      paginatedBookings.map((booking, index) => {
        const formattedAmount = parseFloat(booking.amount_paid).toLocaleString(
          "en-NG",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );

        const formattedDate = new Date(booking.departure).toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
            year: "numeric",
          }
        );

        return (
          <tr
            key={booking.id}
            onClick={() => handleBookingClick(booking, false)}
            className={styles.bookingRow}
          >
            <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
            <td>
              <div className={styles.airlineInfo}>
                <Image
                  alt={`${booking.schedule?.airline?.company || "Airline"} logo`}
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
            <td
              className={
                booking.status === "confirmed"
                  ? styles.confirmedStatus
                  : styles.pendingStatus
              }
            >
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </td>
            <td>{formattedDate}</td>
            <td>
              <HeroiconsOutlineDotsVertical />
            </td>
          </tr>
        );
      }),
    [paginatedBookings, currentPage, handleBookingClick]
  );

  const renderPagination = () => (
    <div className={styles.pagination}>
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        <MdOutlineKeyboardDoubleArrowLeft className={styles.paginationIcon} />
        <span>Prev</span>
      </button>
      <div className={styles.pageInfo}>
        <span className={styles.currentPage}>{currentPage}</span>
        <span className={styles.totalPages}>of {totalPages}</span>
      </div>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        <span>Next</span>
        <MdOutlineKeyboardDoubleArrowRight className={styles.paginationIcon} />
      </button>
    </div>
  );

  return (
    <div className={styles.general}>
      {renderMobileView()}
      <div className={styles.tableContainer}>
        <table className={styles.bookingTable}>
          {renderTableHeader()}
          <tbody>{bookingRows}</tbody>
        </table>
      </div>
      {renderPagination()}
    </div>
  );
};

export default Airline;
