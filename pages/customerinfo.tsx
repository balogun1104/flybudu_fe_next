/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import styles from "../styles/customerinfo.module.css";
import Header from "@/components/header/header";
import Padlock from "@/public/assets/images/lock 1.png";
import error from "@/public/assets/images/error (2) 1.png";
import SideCard from "../components/SideCard/SideCard";
import customerSupport from "@/public/assets/images/customer-support (1) 1.png";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Approved from "@/public/assets/images/Layer 3.png";
import Image from "next/image";
import { useFlightData } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { Passenger, FormData } from "@/redux/types/formData.types";
import { setFormData } from "@/redux/flight/formDataSlice";
import { useRouter } from "next/router";
import axiosInstance from "@/redux/api";
import { setDiscountValue } from "@/redux/flight/flightSlice";
import moment from 'moment';

function CustomerInfo() {
  const router = useRouter();
  const { searchCriteria, flightData, loading, totalFlight, totalPassengers } =
    useFlightData();
  const selectedAirline = useSelector(
    (state: RootState) => state.flight.selectedFlight
  );
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const [formData, setFormDataState] = useState<FormData>({
    title: "",
    surname: "",
    first_name: "",
    middle_name: "",
    email: "",
    phone: "",
    nationality: "Nigeria",
    gender: "",
    DOB: "",
    passengers: [],
    price: 0,
    discount_code: "",
    discounted_slash: 0,
    corporate_code: "",
    corporate_slash: 0,
    amount_paid: 0,
    user_id: 1,
    schedule_id: 2,
    route_id: 3,
    airline_id: 4,
    status: "confirmed",
    type: "regular",
    departure: "",
    ticket: "",
  });
  const [discountCode, setDiscountCode] = useState("");
  const [corporateCode, setCorporateCode] = useState("");
  const [discountResponse, setDiscountResponse] = useState<{
    id: number;
    code: string;
    percentage_or_price: string;
    type: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
  } | null>(null);

  const [corporateResponse, setCorporateResponse] = useState<{
    id: number;
    code: string;
    percentage_or_price: string;
    type: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
  } | null>(null);
  

  const handleDiscountCodeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDiscountCode(e.target.value);
  };

  const handleCorporateCodeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCorporateCode(e.target.value);
  };

  const handleDiscountCodeSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/vouchers/check", {
        code: discountCode,
        type: "Discount",
      });
      setDiscountResponse(response.data);
      setFormDataState((prevState) => ({
        ...prevState,
        discount_code: discountCode,
        discounted_slash: parseFloat(response.data.value),
      }));
      dispatch(setDiscountValue(parseFloat(response.data.value)));
    } catch (error) {
      console.error("Error checking discount code:", error);
    }
  };

  const handleCorporateCodeSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/vouchers/check", {
        code: corporateCode,
        type: "Corporate",
      });
      setCorporateResponse(response.data);
      setFormDataState((prevState) => ({
        ...prevState,
        corporate_code: corporateCode,
        corporate_slash: parseFloat(response.data.value),
      }));
      dispatch(setDiscountValue(parseFloat(response.data.value)));
    } catch (error) {
      console.error("Error checking corporate code:", error);
    }
  };

  console.log(formData);
  useEffect(() => {
    if (selectedAirline && searchCriteria) {
      const departurePrice = parseFloat(
        selectedAirline.departure?.price || "0"
      );
      const arrivalPrice = parseFloat(selectedAirline.arrival?.price || "0");
      const totalPrice = departurePrice + arrivalPrice;

      const passengers: Passenger[] = [];
      const { adults, children, infants } = searchCriteria.passengers;

      for (let i = 0; i < adults; i++) {
        passengers.push({ name: "", age: 18, gender: "" });
      }
      for (let i = 0; i < children; i++) {
        passengers.push({ name: "", age: 12, gender: "" });
      }
      for (let i = 0; i < infants; i++) {
        passengers.push({ name: "", age: 1, gender: "" });
      }
      const departureDate = moment(searchCriteria.departureDate).format('YYYY-MM-DD');
      const departureTime = selectedAirline.departure?.departure_time || "00:00:00";
      const fullDepartureDatetime = moment(`${departureDate} ${departureTime}`, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');

      setFormDataState((prevState) => ({
        ...prevState,
        price: totalPrice,
        amount_paid: totalPrice,
        passengers,
        departure: fullDepartureDatetime,
        airline_id:
          selectedAirline.departure?.airline_id || prevState.airline_id,
        route_id: selectedAirline.departure?.route_id || prevState.route_id,
      }));
    }
  }, [selectedAirline, searchCriteria]);

  const toggle = () => {
    setOpenCode(!openCode);
  };
  const toggleText = () => {
    setIsActive(!isActive);
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormDataState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveAndContinue = () => {
    dispatch(setFormData(formData));
    router.push("/travelinformation");
  };

  return (
    <div className={styles.general}>
      <Header />
      <div className={styles.secondHeader}>
        <Link href="/selectflight">
          <Image
            alt="s"
            src={BackButton}
            className={styles.back}
            width={20}
            height={20}
          />
        </Link>
        <span style={{ fontWeight: "bold" }}>
          Customer Info <span className={styles.specialText}> 2/4</span>
        </span>
        <Image
          src={support}
          className={styles.support}
          alt=""
          width={20}
          height={20}
        />
      </div>
      <div className={styles.father}>
        <div className={styles.first}>
          <div className={styles.niceDiv}>
            <Image src={Approved} alt="" width={20} height={20} />
            <div style={{ textAlign: "start" }}>
              <p>Nice job! You picked one of the best option. </p>
              <span>Book Now so you don't miss out on this price.</span>
            </div>
          </div>
          <span className={styles.who}>Who is travelling to Abuja?</span>
          <form>
            <div className={styles.generall}>
              <div className={styles.detailsDiv}>
                <span className={styles.details}>Enter your Details</span>
                <div className={styles.lock}>
                  <span className={styles.personal}>
                    Your Personal data is protected{" "}
                  </span>
                  <Image src={Padlock} alt="" width={20} height={20} />
                </div>
              </div>
              <div className={styles.passportDiv}>
                <Image src={error} alt="" width={20} height={20} />
                <span>
                  Use all given names and surnames exactly as they appear on
                  your passport/ID to avoid complications.
                </span>
              </div>
              <div className={styles.mother}>
                <div className={styles.adult}>
                  <span>Passenger 1(Adult-Primary Contact)</span>
                  <label className={styles.label}>
                    <select className={styles.select}>
                      <option>Saved Passenger </option>
                      <option>Tiamiyu Wasiu Oladimeji</option>
                      <option>Olaniyan Tunde Bushran</option>
                      <option>Ogenenchukwo Ifeomalu</option>
                      <option>Taiye Taiwo</option>
                    </select>
                  </label>
                </div>
                <div className={styles.fatherVerified}>
                  <div className={styles.titleDiv}>
                    <div className={styles.omo}>
                      <label>
                        Title{" "}
                        <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                      </label>
                      <label>
                        Surname{" "}
                        <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                      </label>
                    </div>
                    <div className={styles.surnameDiv}>
                      <select
                        className={styles.select1}
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                      >
                        <option value="">Title </option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Master">Master</option>
                      </select>
                      <input
                        className={styles.input1}
                        type="text"
                        placeholder="Enter surname here"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className={styles.firstDiv}>
                    <label>
                      First Name{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Enter name here"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.middle}>
                    <label>
                      Middle Name{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Enter middlename here"
                      name="middle_name"
                      value={formData.middle_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.nationality}>
                    <label>
                      Nationality{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <select
                      className={styles.select}
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                    >
                      <option value="Nigeria">Nigeria </option>
                      <option value="Brazil">Brazil</option>
                      <option value="Austria">Austria</option>
                      <option value="China">China</option>
                    </select>
                  </div>
                  <div className={styles.gender}>
                    <label>
                      Gender{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <select
                      className={styles.select}
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Gender </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.DOB}>
                    <label>
                      Date of Birth{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <input
                      type="date"
                      name="DOB"
                      value={formData.DOB}
                      onChange={handleInputChange}
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.thirdNla}>
                <span className={styles.confirm}>
                  Passenger 1 contact confirmation?
                </span>
                <div className={styles.firstDivk}>
                  <div className={styles.firstDiv}>
                    <label className={styles.bold}>
                      Email{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <input
                      className={styles.input}
                      placeholder="Enter Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.titleDiv}>
                    <label className={`${styles.bold} ${styles.bigger}`}>
                      Phone Number{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <div className={styles.sigh}>
                      <input
                        className={styles.input1}
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.checkbox2}>
                  <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <p>Save this passenger to my FlyBudu Account</p>
                  </div>
                  <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <p>Get Booking and Payment confirmation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.codeDiv}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                onClick={toggleText}
              >
                <span>Do you have a discount code or voucher?</span>
                <IoIosArrowForward />
              </div>
              {isActive && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className={styles.code}
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                  />
                  <button onClick={handleDiscountCodeSubmit}>Send</button>
                  {discountResponse && (
                    <p>Discount Applied: &#8358;{discountResponse.value}</p>
                  )}
                </div>
              )}
            </div>
            <div className={styles.codeDiv}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                onClick={toggle}
              >
                <span>Do you have a corporate code?</span>
                <IoIosArrowForward onClick={toggle} />
              </div>
              {openCode && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className={styles.code}
                    value={corporateCode}
                    onChange={handleCorporateCodeChange}
                  />
                  <button onClick={handleCorporateCodeSubmit}>Send</button>
                  {corporateResponse && (
                    <p>
                      Corporate Discount Applied: &#8358;
                      {corporateResponse.value}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className={styles.saveDiv}>
              <div className={styles.ilu}>
                <span className={styles.money}> #160,000</span>
                <Link href="/flight">
                  {" "}
                  <button className={styles.back}>Back</button>
                </Link>
                <button
                  type="button"
                  className={styles.save}
                  onClick={handleSaveAndContinue}
                >
                  Save & Continue
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.second}>
          <SideCard />
          <div className={styles.customerDiv}>
            <Image src={customerSupport} alt="dr" width={20} height={20} />
            <div>
              <span>Customer Support</span>
              <p>For support, please call us on</p>
              <span>08160178711, 08160178711,</span>
              <p>24/7 (Monday to Sunday)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
