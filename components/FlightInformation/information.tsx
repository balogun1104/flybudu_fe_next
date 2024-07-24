import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./information.module.css";
import copyImg from "@/public/assets/images/pasteImage.png";
import Aeroplane from "@/public/assets/images/Aeroplane.png";
import masterCard from "@/public/assets/images/Frame 48097434.png";
import BackButton from "@/public/assets/images/backbutton.png";

import { Booking } from "@/redux/flight/bookingTypes.type"; 

interface InformationProps {
  booking: Booking;
}

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

const Information: React.FC<InformationProps> = ({ booking }) => {
  const renderHeader = () => (
    <div className={styles.secondHeader}>
      <Link href="/manage-booking">
        <Image alt="Back" src={BackButton} className={styles.back} />
      </Link>
      <span className={styles.headerTitle}>Flight Information</span>
      <HeroiconsOutlineDotsVertical />
    </div>
  );

  const renderFlightInfo = () => (
    <div className={styles.firstDiv}>
      <span className={styles.sike}>Flight Information</span>
      <div className={styles.innerFirst}>
        <span>Flight ID: {booking.ticket}</span>
        <Image alt="Copy" src={copyImg} width={20} height={20} />
      </div>
    </div>
  );

  const renderDepartureInfo = () => (
    <div className={styles.departDiv}>
      <span className={`${styles.depart} ${styles.blueText}`}>Depart</span>
      <span>{new Date(booking.departure).toLocaleDateString()}</span>
      <span className={styles.noBorder}>0 Stop</span>
    </div>
  );

  const renderTravelInfo = () => (
    <div className={styles.travelDiv}>
      <div className={styles.state}>
        <span>
          {booking.route?.location} ({booking.route?.location_code})
        </span>
        <span>
          {booking.route?.destination} ({booking.route?.destination_code})
        </span>
      </div>
      <div className={styles.airportDiv}>
        <span className={styles.airportLeft}>{booking.route?.location}</span>
        <Image alt="Airplane" src={Aeroplane} width={24} height={24} />
        <span className={styles.airport}>{booking.route?.destination}</span>
      </div>
      <div className={styles.time}>
        <span>
          {new Date(booking.departure).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <span>{/* Add arrival time if available */}</span>
      </div>
    </div>
  );

  const renderCustomerInfo = () => (
    <div className={styles.customerDiv}>
      <h3 className={styles.sectionTitle}>Customer Information</h3>
      <InfoRow label="Title" value={booking.title} />
      <InfoRow label="Surname" value={booking.surname} />
      <InfoRow label="First name" value={booking.first_name} />
      <InfoRow label="Middle name" value={booking.middle_name} />
      <InfoRow label="Email" value={booking.email} />
      <InfoRow label="Phone Number" value={booking.phone} />
      <InfoRow label="Nationality" value={booking.nationality} />
      <InfoRow label="Gender" value={booking.gender} />
      <InfoRow label="Date of Birth" value={booking.DOB} />
    </div>
  );

  const renderFareInfo = () => (
    <div className={styles.fareDiv}>
      <h3 className={styles.sectionTitle}>Flight Base Fare</h3>
      <InfoRow label="Adult x 1" value="" />
      <InfoRow label="Class" value="Economy" />
      <InfoRow
        label="Base Fare"
        value={`₦${parseFloat(booking.price).toLocaleString("en-NG", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}
      />
      <InfoRow label="Extra Baggage" value="₦0.00" />
      <InfoRow
        label="Discount"
        value={`₦${parseFloat(booking.discounted_slash).toLocaleString(
          "en-NG",
          { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        )}`}
      />
      <InfoRow label="Taxes and Fees" value="₦0.00" />
      <InfoRow
        label="Total"
        value={`₦${parseFloat(booking.amount_paid).toLocaleString("en-NG", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}
        isTotal
      />
    </div>
  );

  const renderPaymentInfo = () => (
    <div className={styles.paymentDiv}>
      <h3 className={styles.sectionTitle}>Payment</h3>
      <div className={styles.paymentMethod}>
        <span>Payment Method</span>
        <div>
          <span className={styles.cardNumber}>****0556</span>
          <Image alt="Mastercard" src={masterCard} width={40} height={24} />
        </div>
      </div>
      <InfoRow label="Status" value={booking.status} isStatus />
    </div>
  );

  return (
    <div className={styles.general}>
      {renderHeader()}
      <div className={styles.mother}>
        {renderFlightInfo()}
        {renderDepartureInfo()}
        {renderTravelInfo()}
        {renderCustomerInfo()}
        {renderFareInfo()}
        {renderPaymentInfo()}
      </div>
    </div>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
  isTotal?: boolean;
  isStatus?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  isTotal,
  isStatus,
}) => (
  <div className={`${styles.infoRow} ${isTotal ? styles.total : ""}`}>
    <span>{label}</span>
    <span
      className={`
      ${styles.value}
      ${isTotal ? styles.totalValue : ""}
      ${
        isStatus
          ? value.toLowerCase() === "confirmed"
            ? styles.confirmedStatus
            : styles.pendingStatus
          : ""
      }
    `}
    >
      {value}
    </span>
  </div>
);

export default Information;
