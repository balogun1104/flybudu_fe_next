/* eslint-disable react/no-unescaped-entities */

import styles from "./paymentapproved.module.css";
import ApprovedImg from "@/public/assets/images/Approve(Tick).png";
import Link from "next/link";
import Image from "next/image";

interface PaymentApprovedProps {
  setIsOpen: (isOpen: boolean) => void;
}

const PaymentApproved: React.FC<PaymentApprovedProps> = ({ setIsOpen }) => {
  return (
    <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <Image
            src={ApprovedImg}
            className={styles.ApprovedImg}
            alt="approvedImg"
          />
          <span className={styles.booking}>Booking Successful</span>
          <div>
            <span className={styles.text}>
              Your Flight booking has been confirmed and{" "}
              <span style={{ fontWeight: "bold" }}>
                your flight information sent to your email address.
              </span>{" "}
              Your itinerary is now set and you're on your way to your
              destination.
            </span>
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>
              Please make sure to arrive at the airport in time for check-in
            </span>{" "}
            and go through security before your Flight.{" "}
            <span style={{ fontWeight: "bold" }}>Safe travels!</span> If you
            need anything, don't hesitate to ask.
          </div>

          <div className={styles.skipDiv}>
            <Link
              className={styles.link}
              href="/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <span className={styles.skip}>Back to Home</span>
            </Link>
            <Link
              className={styles.link}
              href="/managebooking"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <span className={styles.save}>Manage Booking</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentApproved;
