import React, { useState, useEffect } from "react";
import styles from "./passengerlist.module.css";
import { Link } from "@nextui-org/react";
import axiosInstance from "@/redux/api"; // Ensure this path is correct

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

function PassengerList() {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.general}>
      <div className={styles.mother}>
        <table className={styles.table}>
          <thead className={`${styles.none}`}>
            <tr className={styles.tr}>
              <th className={styles.th}>S/N</th>
              <th className={styles.th}>PASSENGER</th>
              <th className={styles.th}>EMAIL</th>
              <th className={styles.th}>PHONE NUMBER</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {passengers.map((passenger, index) => (
              <tr key={passenger.id} className={styles.tr}>
                <td className={styles.td}>
                  {String(index + 1).padStart(2, "0")}
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
                <td colSpan={4} className={`${styles.none} ${styles.td}`}>
                  <HeroiconsOutlineDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PassengerList;
