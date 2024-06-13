import React from "react";
import styles from "./passengerlist.module.css";
import { useRouter } from "next/router";
function PassengerList() {
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

  const router = useRouter();
  return (
    <div className={styles.general}>
      <div className={styles.mother}>
        <table className={styles.table}>
          <thead className={styles.none}>
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <th className={styles.th}>S/N</th>
              <th className={styles.th}>PASSENGER</th>
              <th className={styles.th}>EMAIL</th>
              <th className={styles.th}>PHONE NUMBER</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>01</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>02</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>{" "}
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>03</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>{" "}
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>04</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>{" "}
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>01</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>{" "}
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>05</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>06</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>07</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>
            <tr
              className={styles.tbody}
              onClick={() => {
                router.push("/passengerdetails");
              }}
            >
              <td className={styles.td}>08</td>
              <td className={styles.td}>
                {" "}
                <span className={styles.nameCircle}>AG</span> Unknown User
              </td>
              <td className={styles.none}>unknown@gmail.com.com</td>
              <td className={styles.none}>080xxxxxxx</td>
              <td colSpan={4} className={styles.none}>
                {" "}
                <HeroiconsOutlineDotsVertical />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PassengerList;
