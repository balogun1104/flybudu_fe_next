import React, { useState, useEffect, useMemo } from "react";
import styles from "./passengerlist.module.css";
import axiosInstance from "@/redux/api";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface Passenger {
  id: number;
  title: string;
  surname: string;
  first_name: string;
  middle_name: string | null;
  nationality: string;
  gender: string;
  DOB: string;
  user_id: string;
  email: string | null;
  phone: string | null;
}

interface PassengerListProps {
  onPassengerSelect: (passenger: Passenger) => void;
}
const SkeletonLoader = () => {
  <div className={styles.motherDiv}>
   
  </div>
}
const ITEMS_PER_PAGE = 5;

function PassengerList({ onPassengerSelect }: PassengerListProps) {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        const response = await axiosInstance.get<{ data: Passenger[] }>(
          "/savedPassengers/list"
        );
        setPassengers(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch passengers");
        setLoading(false);
      }
    };

    fetchPassengers();
  }, []);

  const paginatedPassengers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return passengers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [passengers, currentPage]);

  const totalPages = Math.ceil(passengers.length / ITEMS_PER_PAGE);

  function HeroiconsOutlineDotsVertical(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
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

  if (loading) return <div className={styles.motherDiv}>
     <div className={styles.whiteDiv}> </div>
    <div className={styles.whiteDiv}> </div>
    <div className={styles.whiteDiv}> </div>
    <div className={styles.whiteDiv}> </div>
    <div className={styles.whiteDiv}> </div>
  </div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.general}>
      <div className={styles.mother}>
        <table className={styles.table}>
          <thead className={styles.none}>
            <tr className={styles.tr}>
              <th className={styles.th}>S/N</th>
              <th className={styles.th}>PASSENGER</th>
              <th className={styles.th}>EMAIL</th>
              <th className={styles.th}>PHONE NUMBER</th>
              <th className={styles.th}></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {paginatedPassengers.map((passenger, index) => (
              <tr
                key={passenger.id}
                className={styles.tr}
                onClick={() => onPassengerSelect(passenger)}
              >
                <td className={styles.td}>
                  {String(
                    (currentPage - 1) * ITEMS_PER_PAGE + index + 1
                  ).padStart(2, "0")}
                </td>
                <td className={styles.td}>
                  <span className={styles.nameCircle}>
                    {passenger.first_name[0]}
                    {passenger.surname[0]}
                  </span>
                  {`${passenger.title} ${passenger.first_name} ${passenger.surname}`}
                </td>
                <td className={`${styles.none} ${styles.td}`}>
                  {passenger.email || "N/A"}
                </td>
                <td className={`${styles.none} ${styles.td}`}>
                  {passenger.phone || "N/A"}
                </td>
                <td className={`${styles.none} ${styles.td}`}>
                  <HeroiconsOutlineDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {renderPagination()}
    </div>
  );
}

export default PassengerList;
