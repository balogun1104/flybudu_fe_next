import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/information.module.css";
import copyImg from "@/public/assets/images/pasteImage.png";
import Aeroplane from "@/public/assets/images/Aeroplane.png";
import masterCard from "@/public/assets/images/Frame 48097434.png";
import BackButton from "@/public/assets/images/backbutton.png";
import Link from "next/link";
import Image from "next/image";
import { Booking } from "@/redux/flight/bookingTypes.type";

function Information() {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<Booking | null>(null);

  useEffect(() => {
    const bookingDataString = router.query.bookingData as string;
    if (bookingDataString) {
      const parsedBookingData = JSON.parse(bookingDataString);
      setBookingData(parsedBookingData);
    }
  }, [router.query]);

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

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  const departureDate = new Date(bookingData.departure).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  return (
    <div className={styles.general}>
      <div className={styles.secondHeader}>
        <Link href="/managebooking">
          <Image alt="s" src={BackButton} className={styles.back} />
        </Link>
        <span style={{ fontWeight: "bold" }}> Flight Information </span>
        <HeroiconsOutlineDotsVertical />
      </div>
      <div className={styles.mother}>
        <div className={styles.topsec}>
          <div className={styles.firstDiv}>
            <span className={styles.sike}>Flight Information</span>
            <div className={styles.innerFirst}>
              <span className={styles.flightId}>
                Flight ID: {bookingData.ticket || "N/A"}{" "}
              </span>
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
            <span>{departureDate}</span>
            <span style={{ border: "none" }}>0 Stop</span>
          </div>
          <div className={styles.travelDiv}>
            <div className={styles.state}>
              <span>
                {bookingData.route?.location} (
                {bookingData.route?.location_code})
              </span>
              <span>
                {bookingData.route?.destination} (
                {bookingData.route?.destination_code})
              </span>
            </div>
            <div className={styles.airportDiv}>
              <span className={styles.airportLeft}>
                {bookingData.route?.location} Airport
              </span>{" "}
              <Image className={styles.airpalne} alt="" src={Aeroplane} />{" "}
              <span className={styles.airport}>
                {bookingData.route?.destination} Airport
              </span>
            </div>
            <div className={styles.time}>
              <span>{bookingData.schedule?.departure}</span>
              <span>{bookingData.schedule?.arrival}</span>
            </div>
          </div>
        </div>
        {/* Remove return flight information as it's not in the provided data */}
        <div className={styles.customerDiv}>
          <div>
            <span className={styles.customer}>Customer Information</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Title</span>
            <span className={styles.infoValue}>{bookingData.title}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Surname</span>
            <span className={styles.infoValue}>{bookingData.surname}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>First name</span>
            <span className={styles.infoValue}>{bookingData.first_name}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Middle name</span>
            <span className={styles.infoValue}>
              {bookingData.middle_name || "N/A"}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Email</span>
            <span className={styles.infoValue}>{bookingData.email}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Phone Number</span>
            <span className={styles.infoValue}>{bookingData.phone}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Nationality</span>
            <span className={styles.infoValue}>{bookingData.nationality}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Gender</span>
            <span className={styles.infoValue}>{bookingData.gender}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Date of Birth</span>
            <span className={styles.infoValue}>
              {new Date(bookingData.DOB).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className={styles.fareDiv}>
          <div className={styles.infoRow}>
            <span className={styles.customer}>Flight Base Fare</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>
              Adult x {JSON.parse(bookingData.passengers).length}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Class</span>
            <span className={styles.infoValue}>Economy</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Base Fare</span>
            <span className={styles.infoValue}>
              &#8358;
              {parseFloat(bookingData.price).toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Extra Baggage</span>
            <span className={styles.infoValue}>
              &#8358;{calculateExtraBaggage(bookingData.luggages ?? "")}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Discount</span>
            <span className={styles.infoValue}>
              &#8358;
              {parseFloat(bookingData.discounted_slash).toLocaleString(
                "en-NG",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Taxes and Fees</span>
            <span className={styles.infoValue}>&#8358;0.00</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.total}>Total</span>
            <span className={styles.totalAmt}>
              &#8358;
              {parseFloat(bookingData.amount_paid).toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}

function calculateExtraBaggage(luggages: string): string {
  const parsedLuggages = JSON.parse(luggages);
  let totalCost = 0;

  for (const direction in parsedLuggages) {
    parsedLuggages[direction].forEach((luggage: { price: number }) => {
      totalCost += luggage.price;
    });
  }

  return totalCost.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default Information;
