/* eslint-disable react/no-unescaped-entities */
import { Layout, Dropdown } from "antd";
import { useState } from "react";
import styles from "../styles/mobileflight.module.css";
import locationpin from "@/public/assets/images/location pin.png";
import Cycle from "@/public/assets/svg/cycle.svg";

import calendar from "@/public/assets/svg/date.svg";
import { useRouter } from "next/router";
import Image from "next/image";
export const FooterComponent = () => {
  const router = useRouter();
  return (
    <div className={styles.footerbtn}>
      <button
        className={styles.footerbutton}
        onClick={() => router.push("/flight")}
      >
        Cancel
      </button>
      <button
        className={styles.footerbutton2}
        onClick={() => router.push("/selectflight")}
      >
        Let's Go
      </button>
    </div>
  );
};

interface DropdownProps {
  title: string;
  // add other props as needed
}

function MobileFlight() {
  const [from, setFrom] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [to, setTo] = useState("");

  const [returnDate, setReturnDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [leavingDate, setLeavingDate] = useState("");

  //const [returnDate, setReturnDate] = useState("")
  const switchLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const flightTrips = [
    {
      id: 1,
      title: "One Way",
      value: "one-way",
    },
    {
      id: 2,
      title: "Round Trip",
      value: "round-trip",
    },
    {
      id: 3,
      title: "Multi City",
      value: "multi-city",
    },
  ];

  const handleButtonClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className={styles.general}>
      <Layout
      // headerColor={"#333333"}
      // header={"Find Flights"}
      // footer={<FooterComponent />}
      >
        <div className={styles.flightcard}>
          <div>{/* <Dropdown title={"Local Flights"} /> */}</div>
          <div className={styles.buttondiv}>
            {flightTrips.map((item) => (
              <button
                className={
                  selectedId === item.id
                    ? styles.optionsSelected
                    : styles.options
                }
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className={styles.form}>
            <div className={styles.inputgroup}>
              <Image src={locationpin} alt="pin" className={styles.pin} />
              <div>
                <label htmlFor="from">From Where</label>
                <input
                  // type="text"
                  id="from"
                  readOnly
                  placeholder="City or Airport"
                  value={from}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setIsOpenTwo(false);
                  }}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
            </div>

            {/* <div className={styles.cycle}> */}
            <div>
              <Image
                src={Cycle}
                className={styles.cycle}
                alt="cycle"
                onClick={switchLocations}
              />
            </div>

            {/* </div> */}
            <div className={styles.inputgroup}>
              <Image src={locationpin} alt="pin" className={styles.pin} />
              <div>
                <label htmlFor="to">To Where</label>

                <input
                  // type="text"
                  id="to"
                  placeholder="City or Airport"
                  value={to}
                  onClick={() => {
                    setIsOpenTwo(!isOpenTwo);
                    setIsOpen(false);
                  }}
                  onChange={(e) => setTo(e.target.value)}
                  readOnly
                />
              </div>
            </div>

            <div className={styles.inputgroup}>
              <Image src={calendar} alt="pin" className={styles.pin} />
              <div>
                <label htmlFor="to">Leaving On</label>

                <input
                  type="date"
                  id="leaving"
                  placeholder="Date"
                  value={leavingDate}
                  onClick={() => {
                    // setLeavingOpen(!leavingOpen)
                  }}
                  onChange={(e) => setLeavingDate(e.target.value)}
                  //readOnly
                />
              </div>
            </div>

            <div className={styles.inputgroup}>
              <Image src={calendar} alt="pin" className={styles.pin} />
              <div>
                <label htmlFor="to">Returning On</label>

                <input
                  type="date"
                  placeholder="Date"
                  value={returnDate}
                  // onClick={() => {
                  //     // setIsOpenTwo(!isOpenTwo)
                  //     // setIsOpen(false)

                  // }}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className={styles.returnDate}
                />
              </div>
            </div>

            <div className={styles.economy}>
              {/* <Dropdown title={"Economy"} /> */}
            </div>
            <div></div>
            <div className={styles.Letgo}>
              <input type="checkbox" name="dates" />
              <p>My dates are flexible(+/- 3days)</p>
            </div>
          </div>

          {isOpen && (
            <div className={styles.dropdowncontent}>
              <div
                onClick={() => {
                  setFrom("LAGOS, ABUJA");
                  setIsOpen(false);
                }}
              >
                LAGOS, ABUJA
              </div>
              <div
                onClick={() => {
                  setFrom("LAGOS, ABUJA");
                  setIsOpen(false);
                }}
              >
                LAGOS, ABUJA
              </div>
              <div
                onClick={() => {
                  setIsOpen(false);
                  setFrom("LAGOS, ABUJA");
                }}
              >
                LAGOS, ABUJA
              </div>
            </div>
          )}

          {isOpenTwo && (
            <div className={styles.dropdowncontenttwo}>
              <div
                onClick={() => {
                  setTo("LAGOS, ABUJA");
                  setIsOpenTwo(false);
                }}
              >
                LAGOS, ABUJA
              </div>
              <div
                onClick={() => {
                  setTo("LAGOS, ABUJA");
                  setIsOpenTwo(false);
                }}
              >
                LAGOS, ABUJA
              </div>
              <div
                onClick={() => {
                  setTo("LAGOS, ABUJA");
                  setIsOpenTwo(false);
                }}
              >
                LAGOS, ABUJA
              </div>
            </div>
          )}

          {/* <div className={styles.action}>
                        <button onClick={() => navigate("/mobileflight")}>Let's Go</button>
                    </div> */}
        </div>
      </Layout>
    </div>
  );
}

export default MobileFlight;
