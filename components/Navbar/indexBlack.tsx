import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import MenuImg from "@/public/assets/svg/menu.svg";
import Quote from "@/public/assets/svg/Payment.svg";
import Logo from "@/public/assets/images/flybuduLogo.png";
import Arrow from "@/public/assets/images/arrowlr.png";
import QuoteBar from "../Qoute/quote";
import FlyUP from "@/public/assets/svg/fly-up.svg";
import Travel from "@/public/assets/svg/Travel.svg";
import SmallFly from "@/public/assets/svg/buttonFly.svg";
import { useMediaQuery } from "react-responsive";
import { DateRangePicker } from "@/utils/DateRangePicker";
import { today, getLocalTimeZone } from "@internationalized/date";
import dynamic from "next/dynamic";
import ArrowDown from "@/public/assets/svg/arrowDown.svg";
import Cycle from "@/public/assets/svg/cycle.svg";
import { Dropdown, Menu, Button } from "antd";
import Link from "next/link";
import cloud from "@/public/assets/svg/Vector.png";
// import { FlightCard } from "../SwitchableInputs";
import LocationPin from "@/public/assets/images/location pin.png";
import Calendar from "@/public/assets/images/calendar.png";
import Passenger from "@/public/assets/images/account.png";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };


  const [visible, setVisible] = useState(false);
  const toggleDivs = () =>{
      setVisible(!visible)
  }
  const [visibl, setVisibl] = useState(false);
  const toggleDiv = () =>{
      setVisibl(!visibl)
  }








  const [selectedLocation, setSelectedLocation] =
  useState<string>("City or Airport");
const [local, setLocal] = useState<string[]>([]);
const [international, setInternational] = useState<string[]>([]);
const [round, setRound] = useState<string[]>([]);
const [selectedDestination, setSelectedDestination] =
  useState<string>("City or Airport");
const [, setDates] = useState<Date[]>([]);
const [isPassengerDropdownVisible, setIsPassengerDropdownVisible] =
  useState<boolean>(false);
const [, setLeaveDate] = useState<string | null>(null);
const [, setReturnDate] = useState<string | null>(null);
const [passengerCounts, setPassengerCounts] = useState<{
  adults: number;
  children: number;
  infants: number;
}>({
  adults: 1,
  children: 0,
  infants: 0,
});
const [isDatePickOpen, setIsDatePickOpen] = useState<boolean>(false);
const isMobile = useMediaQuery({ maxWidth: 767 });

const totalPassengers = Object.values(passengerCounts).reduce(
  (total, count) => total + count,
  0
);
const OverlayContainer = dynamic(
  () =>
    import("@react-aria/overlays").then((module) => module.OverlayContainer),
  { ssr: false }
);

const [isClient, setIsClient] = useState(false);
const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

const handleDatePickerToggle = () => {
  setIsDatePickerOpen(!isDatePickerOpen);
};

const handlePassengerChange = (
  type: keyof typeof passengerCounts,
  operation: "increment" | "decrement"
) => {
  setPassengerCounts((prevCounts) => {
    const newValue =
      operation === "increment" ? prevCounts[type] + 1 : prevCounts[type] - 1;

    // Ensure the count never goes below 0
    if (newValue < 0) {
      return prevCounts;
    }

    return {
      ...prevCounts,
      [type]: newValue,
    };
  });
};

const closePassengerDropdown = (e: any) => {
  e.preventDefault(); // Prevent default form submission
  e.stopPropagation(); // Stop click event from reaching the Dropdown
  setIsPassengerDropdownVisible(false);
};

const passengersMenu = (
  <Menu className={styles.menuover} style={{ position: "relative" }}>
    <Menu.ItemGroup title="Adult" className={styles.passengerCountsFlex}>
      <Menu.Item
        style={{ padding: "5px" }}
        key="adults-increment"
        onClick={() => handlePassengerChange("adults", "increment")}
      >
        <span className={styles.plus}>+</span>
      </Menu.Item>
      <Menu.Item key="adults-count" style={{ padding: "5px" }}>
        {passengerCounts.adults}
      </Menu.Item>
      <Menu.Item
        style={{ padding: "5px" }}
        key="adults-decrement"
        onClick={() => handlePassengerChange("adults", "decrement")}
      >
        <span className={styles.minus}>-</span>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title="Children" className={styles.passengerCountsFlex}>
      <Menu.Item
        style={{ padding: "5px" }}
        key="children-increment"
        onClick={() => handlePassengerChange("children", "increment")}
      >
        <span className={styles.plus}>+</span>
      </Menu.Item>
      <Menu.Item key="children-count" style={{ padding: "5px" }}>
        {passengerCounts.children}
      </Menu.Item>
      <Menu.Item
        style={{ padding: "5px" }}
        key="children-decrement"
        onClick={() => handlePassengerChange("children", "decrement")}
      >
        <span className={styles.minus}>-</span>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title="Infants" className={styles.passengerCountsFlex}>
      <Menu.Item
        style={{ padding: "5px" }}
        key="infants-increment"
        onClick={() => handlePassengerChange("infants", "increment")}
      >
        <span className={styles.plus}>+</span>
      </Menu.Item>
      <Menu.Item key="infants-count" style={{ padding: "5px" }}>
        {passengerCounts.infants}
      </Menu.Item>
      <Menu.Item
        style={{ padding: "5px" }}
        key="infants-decrement"
        onClick={() => handlePassengerChange("infants", "decrement")}
      >
        <span className={styles.minus}>-</span>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.Divider />
    <Menu.Item>
      <button
        style={{
          outline: "none",
          border: "none",
          marginBottom: "10px",
          background: "none",
        }}
        type="primary"
        block
        onClick={closePassengerDropdown}
      >
        <span
          style={{
            color: "white",
            padding: "10px 60px",
            borderRadius: "30px",
            background: "#06BCE1",
            width: "100%",
          }}
        >
          Done
        </span>
      </button>
    </Menu.Item>
  </Menu>
);

const handleDatesChange = (dates: Date[], dateStrings: [string, string]) => {
  setDates(dates);
  setLeaveDate(dateStrings[0]);
  setReturnDate(dateStrings[1]);

  // Check if both leaving and returning dates are selected
  if (dates && dates.length === 2) {
    setIsDatePickOpen(false); // Close the date picker
  }
};

const handleInternational = (info: any) => {
  setInternational([internationalTrip[info.key]]);
};

const handleRoundTrip = (info: any) => {
  setRound([roundTrip[info.key]]);
};

const handleLocalFlight = (info: any) => {
  setLocal([localFlight[info.key]]);
};

const handleMenuClick = (info: any) => {
  setSelectedLocation(locations[info.key]);
};

const handleDestinationClick = (info: any) => {
  setSelectedDestination(locations[info.key]);
};

const internationalTrip: string[] = [
  "Local Flights",
  "International Flights",
];

const internationalTripMenu = (
  <Menu onClick={handleInternational}>
    {internationalTrip.map((trip, index) => (
      <Menu.Item key={index} style={{ background: "fff" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "200px",
          }}
        >
          {/* <Image src=""/> */}
          {trip}
        </div>
      </Menu.Item>
    ))}
  </Menu>
);

const roundTrip: string[] = ["Round trip", "One Way"];

const roundTripMenu = (
  <Menu onClick={handleRoundTrip}>
    {roundTrip.map((trip, index) => (
      <Menu.Item key={index} style={{ background: "fff" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "200px",
          }}
        >
          {/* <Image src=""/> */}
          {trip}
        </div>
      </Menu.Item>
    ))}
  </Menu>
);
const localFlight: string[] = ["Economy", "Business", "First Class"];

const LocalFlightMenu = (
  <Menu onClick={handleLocalFlight}>
    {localFlight.map((flight, index) => (
      <Menu.Item key={index} style={{ background: "fff" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "200px",
          }}
        >
          {/* <Image src=""/> */}
          {flight}
        </div>
      </Menu.Item>
    ))}
  </Menu>
);

const locations = [
  "Lagos, Nigeria",
  "Abuja, Nigeria",
  "Port Harcourt, Nigeria",
  "Kano, Nigeria",
  "Calabar, Nigeria",
  "Enugu, Nigeria",
  "Jos, Nigeria",
];

const locationMenu = (
  <Menu onClick={handleMenuClick} className={styles.locationWrapper}>
    {locations.map((location, index) => (
      <Menu.Item key={index} style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {location} <span>Los</span>
        </div>
      </Menu.Item>
    ))}
  </Menu>
);

const destinationMenu = (
  <Menu onClick={handleDestinationClick} className={styles.locationWrapper}>
    {locations.map((location, index) => (
      <Menu.Item key={index} style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {location} <span>Los</span>
        </div>
      </Menu.Item>
    ))}
  </Menu>
);










  return (
    <div className={styles.NavtwoContainer}>
      <div className={styles.navcon}>
        <div className={styles.navbarWrapBlack}>
          <button
            style={{ background: "none", border: "none" }}
            onClick={handleLogoClick}
          >
            <Image src={Logo} alt="" />
          </button>

          <div>
            <div className={styles.navbar}>
              <Link className={styles.active} href="/flight">
                flight
              </Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/featuredflights">Featured Flights</Link>
              <Link href="/contacts">Contact</Link>
            </div>
          </div>
          <div className={styles.quoteWrap}>
            <div className={styles.quote}>
              <span
                onClick={() => setIsOpen(true)}
                style={{ cursor: "pointer" }}
              >
                Corporate Booking
              </span>
              <span>
                <Image src={Quote} alt="" />
              </span>
            </div>

            <Image src={MenuImg} alt="" className={styles.quoteImg} />
          </div>
        </div>

        <div className={styles.NavTwo}  style={{display: visible ? "none" : "flex"}}>
          <div className={styles.nvTwo}>
            <span style={{ fontWeight: "bold" }}>Lagos(LOS)</span>
            <Image src={Arrow} alt="" />
            <span style={{ fontWeight: "bold" }}>Abuja(ABJ)</span>
          </div>
          <div className={styles.border}>
            <p>Mar. 15, 2023 - Mar. 24, 2023</p>
          </div>
          <div className={styles.nvTwo}>
            <p>1 Passenger, Economy</p>
            <button className={styles.edit}    onClick={toggleDivs}>Edit Search</button>
          </div>
        </div>

        <div className={styles.midloc}  style={{display: visible ? "flex" : "none"}}>

       <div className={styles.firstDiv}>
       <div className={styles.Buttoncontainer}>
              <Dropdown overlay={internationalTripMenu} trigger={["click"]}>
                <button className={`${styles.buttonTravel} ${styles.local}`}>
                  <span className={styles.small}>
                    <Image src={SmallFly} alt="f " />
                  </span>
                  Local Flights
                  <span className={styles.dropdownIcon}>
                    <Image src={ArrowDown} alt="flw dow " />
                  </span>
                </button>
              </Dropdown>
              <Dropdown overlay={roundTripMenu} trigger={["click"]}>
                <button
                  className={`${styles.buttonTravel} ${styles.roundTrip}`}
                >
                  <span className={styles.small}>
                    <Image src={SmallFly} alt="f " />
                  </span>
                  Round Trip
                  <span className={styles.dropdownIcon}>
                    {" "}
                    <Image src={ArrowDown} alt="flw dow " />
                  </span>
                </button>
              </Dropdown>
              <Dropdown overlay={LocalFlightMenu} trigger={["click"]}>
                <button className={`${styles.buttonTravel} ${styles.economy}`}>
                  <span className={styles.small}>
                    <Image src={SmallFly} alt="f " />
                  </span>
                  Economy
                  <span className={styles.dropdownIcon}>
                    {" "}
                    <Image src={ArrowDown} alt="flw dow " />
                  </span>
                </button>
              </Dropdown>
            </div>
            <span className={styles.cancel}>x</span>
       </div>
              <div className={styles.searchForm}>
                <div
                  className={styles.inputGroup}
                  style={{ fontFamily: "sans-serif", fontWeight: "600" }}
                  // style={{ width: "23.77%" }}
                >
                  <span className={styles.icon}>
                    <Image alt="" src={LocationPin} />
                  </span>
                  <Dropdown
                    overlay={locationMenu}
                    trigger={["click"]}
                    overlayClassName={styles.dropdownMenuOne}
                  >
                    <div className={styles.whereDropdown}>
                      <label
                        htmlFor="to"
                        style={{ marginLeft: "15px", display: "none" }}
                      >
                        To Where
                      </label>
                      <input
                        style={{ cursor: "pointer" }}
                        type="text"
                        placeholder="City or Airport"
                        className={styles.inputField}
                        value={selectedLocation}
                        readOnly
                      />
                      <span className={styles.dropdownIcon}>
                        <Image
                          style={{ visibility: "hidden", display: "none" }}
                          src={ArrowDown}
                          alt="Dropdown"
                        />
                      </span>
                    </div>
                  </Dropdown>
                </div>
                <Image src={Cycle} className={styles.cycle} alt="cycle" />
                <div
                  className={styles.inputGroup}
                  // style={{ width: "23.77%" }}
                >
                  <span className={styles.icon}>
                    <Image alt="" src={LocationPin} />
                  </span>
                  <div>
                    <Dropdown
                      overlay={destinationMenu}
                      trigger={["click"]}
                      placement="bottomRight"
                      overlayClassName={styles.dropdownMenu}
                      // style={{ position: "relative", right: "200px" }}
                    >
                      <div className={styles.whereDropdown}>
                        <label
                          htmlFor="to"
                          style={{ marginLeft: "15px", display: "none" }}
                        >
                          To Where
                        </label>
                        <input
                          style={{ cursor: "pointer" }}
                          type="text"
                          placeholder="City or Airport"
                          className={styles.inputField}
                          value={selectedDestination}
                          readOnly
                        />
                        <span className={styles.dropdownIcon}>
                          <Image
                            style={{ visibility: "hidden", display: "none" }}
                            src={ArrowDown}
                            alt="Dropdown"
                          />
                        </span>
                      </div>
                    </Dropdown>
                  </div>
                </div>
                <div
                  className={styles.inputGroup}
                  //  style={{ width: "33.99%" }}
                >
                  <span className={styles.icon}>
                    {" "}
                    <Image src={Calendar} alt="" />{" "}
                  </span>
                  <div>
                    <div className={styles.datePickerHeaders}>
                      <div>
                        <label className={styles.label}>Leaving On</label>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <label className={styles.label}>Returning On </label>
                      </div>
                    </div>
                    <button type="button" onClick={handleDatePickerToggle}>
                    
                    </button>
                    {isClient && isDatePickerOpen && (
                      <OverlayContainer>
                        <DateRangePicker
                          label="Trip dates"
                          minValue={today(getLocalTimeZone())}
                        />
                      </OverlayContainer>
                    )}
                    <div className="flex flex-col gap-4"></div>
                  </div>
                </div>
                <div
                  className={styles.inputGroup}
                  // style={{ width: "18.47%", cursor: "pointer" }}
                >
                  <span className={styles.icon}>
                    <Image src={Passenger} alt="" />
                  </span>
                  <div>
                    <label className={styles.label}>Passengers</label>
                    <Dropdown
                      className={styles.dropdown}
                      overlay={passengersMenu}
                      trigger={["click"]}
                      visible={isPassengerDropdownVisible}
                      onVisibleChange={setIsPassengerDropdownVisible}
                      overlayClassName={styles.passengerDropdownMenu}
                    >
                      <Button className={styles.inputField}>
                        {`${totalPassengers} Passenger${
                          totalPassengers > 1 ? "s" : ""
                        }`}{" "}
                        {/* <DownOutlined /> */}
                      </Button>
                    </Dropdown>
                  </div>
                </div>
                <Link href="selectflight"><span  onClick={toggleDiv} className={styles.let}>Let's Go</span></Link>
              </div>
            </div>
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
