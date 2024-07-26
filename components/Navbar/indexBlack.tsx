/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./nav.module.css";
import MenuImg from "@/public/assets/svg/menu.svg";
import Quote from "@/public/assets/svg/Payment.svg";
import Logo from "@/public/assets/images/flybuduLogo.png";
import Arrow from "@/public/assets/images/arrowlr.png";
import QuoteBar from "../Qoute/quote";
import SmallFly from "@/public/assets/svg/buttonFly.svg";
import { useMediaQuery } from "react-responsive";
import { useFlightData, formatDate } from "@/utils/helper";
import ArrowDown from "@/public/assets/svg/arrowDown.svg";
import Cycle from "@/public/assets/svg/cycle.svg";
import { Dropdown, Menu, Button } from "antd";
import Link from "next/link";
import LocationPin from "@/public/assets/images/location pin.png";
import Calendar from "@/public/assets/images/calendar.png";
import Passenger from "@/public/assets/images/account.png";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "@/redux/api";
import {
  setSearchCriteria,
  setFlightData,
  setLoading,
  setError,
} from "@/redux/flight/flightSlice";
import {
  FlightSearchRequest,
  FlightSearchResponse,
} from "@/redux/flight/types";

const Navbar = () => {
  const dispatch = useDispatch();
  const { searchCriteria, flightData, loading, error, totalFlight } =
    useFlightData();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>(
    `${searchCriteria.from}, Nigeria`
  );
  const [local, setLocal] = useState<string[]>([]);
  const [international, setInternational] = useState<string[]>([]);
  const [round, setRound] = useState<string[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<string>(
    `${searchCriteria.to}, Nigeria`
  );
  const [isPassengerDropdownVisible, setIsPassengerDropdownVisible] =
    useState<boolean>(false);
  const [departureDate, setDepartureDate] = useState<Date | null>(
    new Date(searchCriteria.departure_date)
  );
  const [returnDate, setReturnDate] = useState<Date | null>(
    searchCriteria.arrival_date ? new Date(searchCriteria.arrival_date) : null
  );
  const [isRoundTrip, setIsRoundTrip] = useState(
    searchCriteria.tripType === "Round trip"
  );
  const [passengerCounts, setPassengerCounts] = useState<{
    adults: number;
    children: number;
    infants: number;
  }>({
    adults: searchCriteria.passengers.adults,
    children: searchCriteria.passengers.children,
    infants: searchCriteria.passengers.infants,
  });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const formatDate = (date: Date | string | null): string => {
    if (!date) return "";

    if (typeof date === "string") {
      // If it's already a string, assume it's in the correct format
      return date.split("T")[0];
    }

    if (date instanceof Date) {
      // If it's a Date object, convert to ISO string
      return date.toISOString().split("T")[0];
    }

    // If it's neither a string nor a Date, return an empty string
    return "";
  };

  const handleLetGoClick = async () => {
    setErrors({});

    let newErrors: { [key: string]: string } = {};
    if (!selectedLocation || selectedLocation === "City or Airport") {
      newErrors.from = "Please select a departure location";
    }
    if (!selectedDestination || selectedDestination === "City or Airport") {
      newErrors.to = "Please select a destination";
    }
    if (!departureDate) {
      newErrors.departureDate = "Please select a departure date";
    }
    if (isRoundTrip && !returnDate) {
      newErrors.returnDate = "Please select a return date";
    }
    if (Object.values(passengerCounts).reduce((a, b) => a + b, 0) === 0) {
      newErrors.passengers = "Please select passengers";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updatedSearchCriteria: FlightSearchRequest = {
      from: selectedLocation.split(",")[0],
      to: selectedDestination.split(",")[0],
      departure_date: formatDate(departureDate),
      arrival_date: isRoundTrip ? formatDate(returnDate) : undefined,
      passengers: passengerCounts,
      flightType: international[0] || "Local Flights",
      tripType: round[0] || "Round trip",
      classType: local[0] || "Economy",
    };

    dispatch(setSearchCriteria(updatedSearchCriteria));
    dispatch(setLoading(true));
    setIsLoading(true);

    try {
      const response = await axiosInstance.post<FlightSearchResponse>(
        "flights/search",
        updatedSearchCriteria
      );
      dispatch(setFlightData(response.data));
     
    } catch (error) {
      dispatch(setError("Failed to fetch flight data"));
      console.error("Error fetching flight data:", error);
    } finally {
      dispatch(setLoading(false));
      setIsLoading(false);
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const toggleDivs = () => {
    setVisible(!visible);
  };

  const getInitials = (
    firstName: string | undefined,
    lastName: string | undefined
  ) => {
    if (firstName && lastName) {
      return `${firstName.charAt(0).toUpperCase()}${lastName
        .charAt(0)
        .toUpperCase()}`;
    } else if (firstName) {
      return firstName.charAt(0).toUpperCase();
    } else if (lastName) {
      return lastName.charAt(0).toUpperCase();
    }
    return "";
  };

  const renderUserAvatar = () => {
    if (isAuthenticated && (user?.name || user?.last_name)) {
      const initials = getInitials(user?.name, user?.last_name);
      return (
        <div className={styles.userInitials} onClick={() => setIsOpen(!isOpen)}>
          {initials}
        </div>
      );
    }
    return (
      <Image
        src={MenuImg}
        alt=""
        className={styles.quoteImg}
        onClick={() => setIsOpen(!isOpen)}
      />
    );
  };

  const handlePassengerChange = (
    type: keyof typeof passengerCounts,
    operation: "increment" | "decrement"
  ) => {
    setPassengerCounts((prevCounts) => {
      const newValue =
        operation === "increment" ? prevCounts[type] + 1 : prevCounts[type] - 1;
      if (newValue < 0) {
        return prevCounts;
      }
      return {
        ...prevCounts,
        [type]: newValue,
      };
    });
  };

  const closePassengerDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPassengerDropdownVisible(false);
  };

  const handleDepartureDateChange = (date: Date | null) => {
    setDepartureDate(date);
    if (returnDate && date && date > returnDate) {
      setReturnDate(null);
    }
  };

  const handleReturnDateChange = (date: Date | null) => {
    setReturnDate(date);
  };

  const handleInternational = (info: any) => {
    setInternational([internationalTrip[info.key]]);
  };

  const handleRoundTrip = (info: any) => {
    const selectedTripType = roundTrip[info.key];
    setRound([selectedTripType]);
    setIsRoundTrip(selectedTripType === "Round trip");
    if (selectedTripType !== "Round trip") {
      setReturnDate(null);
    }
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
  const roundTrip: string[] = ["Round trip", "One Way"];
  const localFlight: string[] = ["Economy", "Business", "First Class"];
  const locations = [
    "Lagos, Nigeria",
    "Abuja, Nigeria",
    "Port Harcourt, Nigeria",
    "Kano, Nigeria",
    "Calabar, Nigeria",
    "Enugu, Nigeria",
    "Jos, Nigeria",
  ];

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
            {trip}
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

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
            {trip}
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

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
            {flight}
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

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

            {renderUserAvatar()}
          </div>
        </div>

        <div
          className={styles.NavTwo}
          style={{ display: visible ? "none" : "flex" }}
        >
          <div className={styles.nvTwo}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {`${searchCriteria.from}`}
            </span>
            <Image src={Arrow} alt="" />
            <span style={{ fontWeight: "bold" }}>{`${searchCriteria.to}`}</span>
          </div>
          <div className={styles.border}>
            <p className={styles.passengerSelected}>
              {" "}
              {`${formatDate(searchCriteria.departure_date)} - ${
                searchCriteria.arrival_date
                  ? formatDate(searchCriteria.arrival_date)
                  : ""
              }`}
            </p>
          </div>
          <div className={styles.nvTwo}>
            <p className={styles.passengerSelected}>
              {searchCriteria.passengers.children +
                searchCriteria.passengers.adults +
                searchCriteria.passengers.infants}{" "}
              {searchCriteria.passengers.adults +
                searchCriteria.passengers.children +
                searchCriteria.passengers.infants >
              1
                ? "Passengers,"
                : "Passenger,"}{" "}
              {searchCriteria.classType}
            </p>
            <button className={styles.edit} onClick={toggleDivs}>
              Edit Search
            </button>
          </div>
        </div>

        <div
          className={styles.midloc}
          style={{ display: visible ? "flex" : "none" }}
        >
          <div className={styles.firstDiv}>
            <div className={styles.Buttoncontainer}>
              <Dropdown overlay={internationalTripMenu} trigger={["click"]}>
                <button className={`${styles.buttonTravel} ${styles.local}`}>
                  <span className={styles.small}>
                    <Image src={SmallFly} alt="f " />
                  </span>
                  {searchCriteria.flightType}
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
                  {searchCriteria.tripType}
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
                  {searchCriteria.classType}
                  <span className={styles.dropdownIcon}>
                    {" "}
                    <Image src={ArrowDown} alt="flw dow " />
                  </span>
                </button>
              </Dropdown>
            </div>
            <span
              onClick={toggleDivs}
              style={{ cursor: "pointer" }}
              className={styles.cancel}
            >
              x
            </span>
          </div>
          <div className={styles.searchForm}>
            <div
              className={styles.inputGroup}
              style={{ fontFamily: "sans-serif", fontWeight: "600" }}
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
                    placeholder="From"
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
            <div className={styles.inputGroup}>
              <span className={styles.icon}>
                <Image alt="" src={LocationPin} />
              </span>
              <div>
                <Dropdown
                  overlay={destinationMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                  overlayClassName={styles.dropdownMenu}
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
                      placeholder="To"
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
            <div className={styles.inputGroup}>
              <span className={styles.icon}>
                {" "}
                <Image src={Calendar} alt="" />{" "}
              </span>
              <div>
                <div className={styles.datePickerHeaders}>
                  <div>
                    <label className={styles.label}>Leaving On</label>
                    <DatePicker
                      selected={departureDate}
                      onChange={handleDepartureDateChange}
                      minDate={new Date()}
                      placeholderText="Select date"
                      className={styles.dateInput}
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                  {isRoundTrip && (
                    <div>
                      <label className={styles.label}>Returning On</label>
                      <DatePicker
                        selected={returnDate}
                        onChange={handleReturnDateChange}
                        minDate={departureDate || new Date()}
                        placeholderText="Select date"
                        className={styles.dateInput}
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.inputGroup}>
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
                    {`${
                      passengerCounts.adults +
                      passengerCounts.children +
                      passengerCounts.infants
                    } Passenger${
                      passengerCounts.adults +
                        passengerCounts.children +
                        passengerCounts.infants >
                      1
                        ? "s"
                        : ""
                    }`}{" "}
                  </Button>
                </Dropdown>
              </div>
            </div>
            <button
              className={styles.let}
              onClick={handleLetGoClick}
              disabled={isLoading}
            >
              {isLoading ? "Updating Flight..." : "Let's Go"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
