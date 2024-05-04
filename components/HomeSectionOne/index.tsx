/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import styles from "./hero.module.css";
import FLy from "@/public/assets/svg/fly.svg";
import TheArt from "@/public/assets/images/theArt.png";
import EleWon from "@/public/assets/images/elewon.png";
import Plane from "@/public/assets/svg/Plane.svg";
import People from "@/public/assets/svg/people.svg";
import Destination from "@/public/assets/svg/destination.svg";
import FlyUP from "@/public/assets/svg/fly-up.svg";
import Travel from "@/public/assets/svg/Travel.svg";
import SmallFly from "@/public/assets/svg/buttonFly.svg";
import ArrowDown from "@/public/assets/svg/arrowDown.svg";
import Cycle from "@/public/assets/svg/cycle.svg";
import { Dropdown, Menu, Button } from "antd";
import Link from "next/link";
import cloud from "@/public/assets/svg/Vector.png";
// import { FlightCard } from "../SwitchableInputs";
import LocationPin from "@/public/assets/images/location pin.png";
import Calendar from "@/public/assets/images/calendar.png";
import Passenger from "@/public/assets/images/account.png";
import Hero1 from "@/public/assets/images/hero.png";
import Hero2 from "@/public/assets/images/heroBg2.jpeg";
import Hero3 from "@/public/assets/images/heroBg3.jpeg";
import BookTravelImg from "@/public/assets/images/BookTravelImg.png";
import FlyPlane from "@/public/assets/images/planeHero.png";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  setSearchCriteria,
  setFlightData,
  setLoading,
  setError,
} from "@/redux/flight/flightSlice"; // Adjust the path as needed
import {
  FlightSearchRequest,
  FlightSearchResponse,
} from "@/redux/flight/types";

// import { OverlayContainer } from "@react-aria/overlays";
import { DateRangePicker } from "@/utils/DateRangePicker";
import { today, getLocalTimeZone } from "@internationalized/date";
import dynamic from "next/dynamic";
import axiosInstance from "@/redux/api";
import { useRouter } from "next/router";

const HomeSectionOne = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

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
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [canNavigate, setCanNavigate] = useState(false);
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
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    from?: string;
    to?: string;
    departureDate?: string;
    returnDate?: string;
    passengers?: string;
  }>({});

  const [localFlightText, setLocalFlightText] = useState("Local Flights");
  const [tripTypeText, setTripTypeText] = useState("Round Trip");
  const [classTypeText, setClassTypeText] = useState("Economy");

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

  const handleInternational = (info: any) => {
    setInternational([internationalTrip[info.key]]);
    setLocalFlightText(internationalTrip[info.key]);
  };

  const handleRoundTrip = (info: any) => {
    setRound([roundTrip[info.key]]);
    setTripTypeText(roundTrip[info.key]);
    setIsRoundTrip(roundTrip[info.key] === "Round trip");
  };

  const handleLocalFlight = (info: any) => {
    setLocal([localFlight[info.key]]);
    setClassTypeText(localFlight[info.key]);
  };

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

  const handleButtonClick = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default navigation
    const isValid = await handleLetGoClick();
    if (isValid) {
      setCanNavigate(true);
    }
  };

  const handleLetGoClick = async () => {
    setErrors({});

    // Validate fields
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
    if (totalPassengers === 0) {
      newErrors.passengers = "Please select passengers";
    }

    // If there are errors, set them and return false
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    // Prepare the search criteria
    const searchCriteria: FlightSearchRequest = {
      from: selectedLocation.split(",")[0],
      to: selectedDestination.split(",")[0],
      departure_date: departureDate,
      arrival_date: isRoundTrip ? returnDate : undefined,
      passengers: totalPassengers,
    };

    // Dispatch the search criteria to Redux
    dispatch(setSearchCriteria(searchCriteria));

    // Set loading state
    dispatch(setLoading(true));
    setIsLoading(true);

    try {
      const response = await axiosInstance.post<FlightSearchResponse>(
        "flights/search",
        searchCriteria
      );

      // Dispatch the flight data to Redux
      dispatch(setFlightData(response.data));

      console.log("API Response:", response.data);

      // Navigate to the flight page
      router.push("/flight");
      return true;
    } catch (error) {
      console.error("Error making API call:", error);

      // Dispatch error to Redux
      dispatch(setError("Failed to fetch flight data"));

      // Handle the error as needed
      return false;
    } finally {
      dispatch(setLoading(false));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (canNavigate) {
      router.push("/flight");
    }
  }, [canNavigate]);

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

  const handleHeroSectionChange = (index: number) => {
    setCurrentHeroIndex(index);
  };

  interface HeroSectionProps {
    backgroundImage: any;
    content: React.ReactNode;
  }

  const HeroSection: React.FC<HeroSectionProps> = ({
    backgroundImage,
    content,
  }) => {
    return (
      <div
        className={`${styles.hero} ${styles.fadeTransition}`}
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className={styles.heroWrap}>
          <div className={styles.heroMiddleText}>{content}</div>
          <div className={styles.heroSecondText}>
            <div className={styles.Buttoncontainer}>
              <Dropdown overlay={internationalTripMenu} trigger={["click"]}>
                <button className={`${styles.buttonTravel} ${styles.local}`}>
                  <span className={styles.small}>
                    <Image src={SmallFly} alt="f " />
                  </span>
                  {localFlightText}
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
                  {tripTypeText}
                  <span className={styles.dropdownIcon}>
                    <Image src={ArrowDown} alt="flw dow " />
                  </span>
                </button>
              </Dropdown>
              <Dropdown overlay={LocalFlightMenu} trigger={["click"]}>
                <button className={`${styles.buttonTravel} ${styles.economy}`}>
                  <span className={styles.small}>
                    <Image src={SmallFly} alt="f " />
                  </span>
                  {classTypeText}
                  <span className={styles.dropdownIcon}>
                    <Image src={ArrowDown} alt="flw dow " />
                  </span>
                </button>
              </Dropdown>
            </div>
            <div className={styles.midloc}>
              <div className={styles.searchForm}>
                <div
                  className={`${styles.inputGroup} ${
                    errors.from ? styles.inputError : ""
                  }`}
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
                      <input
                        style={{ cursor: "pointer" }}
                        type="text"
                        placeholder={errors.from || "City or Airport"}
                        className={styles.inputField}
                        value={
                          selectedLocation === "City or Airport"
                            ? ""
                            : selectedLocation
                        }
                        readOnly
                      />
                    </div>
                  </Dropdown>
                </div>

                <Image src={Cycle} className={styles.cycle} alt="cycle" />

                <div
                  className={`${styles.inputGroup} ${
                    errors.to ? styles.inputError : ""
                  }`}
                >
                  <span className={styles.icon}>
                    <Image alt="" src={LocationPin} />
                  </span>
                  <Dropdown
                    overlay={destinationMenu}
                    trigger={["click"]}
                    placement="bottomRight"
                    overlayClassName={styles.dropdownMenu}
                  >
                    <div className={styles.whereDropdown}>
                      <input
                        style={{ cursor: "pointer" }}
                        type="text"
                        placeholder={errors.to || "City or Airport"}
                        className={styles.inputField}
                        value={
                          selectedDestination === "City or Airport"
                            ? ""
                            : selectedDestination
                        }
                        readOnly
                      />
                    </div>
                  </Dropdown>
                </div>

                <div
                  className={`${styles.inputGroup} ${
                    errors.departureDate || errors.returnDate
                      ? styles.inputError
                      : ""
                  }`}
                >
                  <span className={styles.icon}>
                    <Image src={Calendar} alt="" />
                  </span>
                  <div>
                    <div className={styles.datePickerHeaders}>
                      <div>
                        <label className={styles.label}>Leaving On</label>
                        <input
                          type="date"
                          value={departureDate}
                          onChange={(e) => setDepartureDate(e.target.value)}
                          className={styles.dateInput}
                          placeholder={errors.departureDate || "Select date"}
                        />
                      </div>
                      {isRoundTrip && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                          }}
                        >
                          <label className={styles.label}>Returning On</label>
                          <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className={styles.dateInput}
                            placeholder={errors.returnDate || "Select date"}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.inputGroup} ${
                    errors.passengers ? styles.inputError : ""
                  }`}
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
                        {errors.passengers ||
                          `${totalPassengers} Passenger${
                            totalPassengers > 1 ? "s" : ""
                          }`}
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Letgo}>
              <span>
                <input
                  type="checkbox"
                  name="dates"
                  style={{ background: "#fff" }}
                />
                <p>My dates are flexible(+/- 3days)</p>
              </span>
              <Link href={canNavigate ? "/flight" : "#"} passHref>
                <button
                  className={styles.LegoButton}
                  onClick={handleButtonClick}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Let's Go"}
                </button>
              </Link>
            </div>

            {isLoading && (
              <div className={styles.loaderOverlay}>
                <div className={styles.loader}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const heroData = [
    {
      background: Hero1,
      content: (
        <div className={styles.contWrap}>
          <p className={styles.beci}>
            Because It's More
            <br className={styles.br} /> Than{" "}
            <span style={{ color: "#12B4D5" }}>Travel</span>
          </p>
          <Image src={Travel} alt="Travel" className={styles.TravelImg} />
          <p className={styles.crafts}>
            Craft Priceless Moments with Family and Friends.
          </p>
        </div>
      ),
    },
    {
      background: Hero2,
      content: (
        <div className={styles.contWrap}>
          <p className={styles.beci}>
            Search Fligh
            <br />
            <span style={{ color: "#12B4D5" }}> Book </span> Easily
          </p>
          <Image
            src={BookTravelImg}
            alt="Travel"
            className={styles.bookTravelImg}
          />
          <Image src={FlyPlane} alt="Travel" className={styles.FlyPlane} />
          <p className={styles.crafts}>
            Let Fly Budu Be Your Gateway to Seamless Travel.
          </p>
        </div>
      ),
    },
    {
      background: Hero3,
      content: (
        <div className={styles.contWrap}>
          {isMobile ? (
            <p className={styles.becidiff} style={{ fontSize: 30 }}>
              Beautiful
              <br />
              Destinations Awaits <br />
              Your<span style={{ color: "#12B4D5" }}> Arival </span>
            </p>
          ) : (
            <p className={styles.becidiff}>
              Beautiful Destinations
              <br />
              Awaits Your<span style={{ color: "#12B4D5" }}> Arival </span>
            </p>
          )}
          <Image
            src={BookTravelImg}
            alt="Travel"
            className={styles.arivalTravelImg}
          />
          <p className={styles.crafts}>
            Let Fly Budu Be Your Gateway to Seamless Travel.
          </p>
        </div>
      ),
    },
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  //     }, 5000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  return (
    <>
      <div className={styles.HomeSectionOne}>
        <div style={{ padding: "20px" }} className={styles.general}>
          <HeroSection
            backgroundImage={heroData[currentHeroIndex].background}
            content={heroData[currentHeroIndex].content}
          />
        </div>

        {/* <div className={styles.general}>
          {heroData.map((hero, index) => (
            <div
              key={index}
              onClick={() => handleHeroSectionChange(index)}
              s
              style={{ cursor: "pointer" }}
            >
              {index === currentHeroIndex && (
                <HeroSection
                  backgroundImage={hero.background}
                  content={hero.content}
                />
              )}
            </div>
          ))}
        </div> */}
        <div>{/* <FlightCard /> */}</div>
        <div className={styles.theArtContainer}>
          <Image src={FLy} className={styles.fly} alt="fly" />
          <p className={styles.theArtText2}>
            The <span style={{ color: "#fff" }}>A</span>rt Of <br />
            Tail<span style={{ color: "#fff" }}>o</span>red Tra
            <span style={{ color: "#fff" }}>v</span>el
          </p>
          <div className={styles.theArtDiv}>
            <Image src={TheArt} className={styles.theArt} alt="theArt" />
            <p className={styles.theArtText} style={{ color: "black" }}>
              The <span style={{ color: "#fff" }}>A</span>rt Of <br />
              Tail<span style={{ color: "#fff" }}>o</span>red Tra
              <span style={{ color: "#fff" }}>v</span>el
            </p>
            <div className={styles.theArtDiv2}>
              <Image src={EleWon} className={styles.elewon} alt="elewon" />
              <Image src={Plane} className={styles.plane} alt="plane" />
            </div>
          </div>
        </div>

        <div className={styles.cloudDiv}>
          <div className={styles.HomeSectionThree}>
            <div className={styles.secThree}>
              <div className={styles.secThreeUp}>
                <div>
                  <Image src={FlyUP} alt="" className={styles.secThreeImg} />
                </div>
                <div>
                  <p className={styles.secThreeText}>
                    Top Airline <br /> Companies
                  </p>
                </div>
              </div>
              <div className={styles.secThreeDown}>
                <p className={styles.secThreeMainText}>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit .
                </p>
              </div>
            </div>
            <div className={styles.secThree}>
              <div className={styles.secThreeUp}>
                <div>
                  <Image
                    src={Destination}
                    alt=""
                    className={styles.secThreeImg}
                  />
                </div>
                <div>
                  <p className={styles.secThreeText}>
                    More Than 550 <br />
                    Destinations
                  </p>
                </div>
              </div>
              <div className={styles.secThreeDown}>
                <p className={styles.secThreeMainText}>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus.
                </p>
              </div>
            </div>
            <div className={styles.secThree}>
              <div className={styles.secThreeUp}>
                <div>
                  <Image src={People} alt="" className={styles.secThreeImg} />
                </div>
                <p className={styles.secThreeText}>
                  More 1 Million
                  <br /> Happy Travelers
                </p>
              </div>
              <div className={styles.secThreeDown}>
                <p className={styles.secThreeMainText}>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.imgDiv}>
            <Image src={cloud} alt="dfs" />
          </div>
        </div>

        {/* <Image src={Curve} alt="" width="100%" /> */}
      </div>
    </>
  );
};

export default HomeSectionOne;
