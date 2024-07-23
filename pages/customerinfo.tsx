/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/customerinfo.module.css";
import { RootState } from "@/redux/store";
import { setFormData } from "@/redux/flight/formDataSlice";
import Header from "@/components/header/header";
import SideCard from "../components/SideCard/SideCard";
import { IoIosArrowForward } from "react-icons/io";
import axiosInstance from "@/redux/api";

import Padlock from "@/public/assets/images/lock 1.png";
import error from "@/public/assets/images/error (2) 1.png";
import customerSupport from "@/public/assets/images/customer-support (1) 1.png";
import BackButton from "@/public/assets/images/backbutton.png";
import support from "@/public/assets/images/customer-support (1) 1.png";
import Approved from "@/public/assets/images/Layer 3.png";
import { Passenger } from "@/redux/types/formData.types";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";





interface ErrorState {
  [key: number]: {
    [key: string]: string;
  };
}

interface DiscountResponse {
  value: number;
}

function CustomerInfo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<ErrorState>({});
  const selectedAirline = useSelector((state: RootState) => state.flight.selectedFlight);
const searchCriteria = useSelector((state: RootState) => state.flight.searchCriteria);
const formData = useSelector((state: RootState) => state.formData);
const discountValue = useSelector((state: RootState) => state.flight.discountValue);
  const { adults, children, infants } = useSelector(
    (state: RootState) => state.flight.searchCriteria.passengers
  );

  const currentPassengers = useSelector(
    (state: RootState) => state.formData.passengers
  );

  

  const passengers = useSelector(
    (state: RootState) => state.formData.passengers
  );


  const { updatedTotalPrice } = calculateTotalPrice(
    selectedAirline,
    searchCriteria,
    formData.luggages,
    discountValue
  );

  useEffect(() => {
    const totalPassengers = adults + children + infants;
    if (passengers.length !== totalPassengers) {
      const initialPassengers = Array(totalPassengers).fill({
        title: "",
        surname: "",
        first_name: "",
        middle_name: "",
        nationality: "",
        gender: "",
        DOB: "",
        email: "",
        phone: "",
      });
      dispatch(setFormData({ passengers: initialPassengers }));
    }
  }, [adults, children, infants, passengers.length, dispatch]);

  
  const [isActive, setIsActive] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [corporateCode, setCorporateCode] = useState("");
  const [discountResponse, setDiscountResponse] =
    useState<DiscountResponse | null>(null);
  const [corporateResponse, setCorporateResponse] =
    useState<DiscountResponse | null>(null);

  const validateForm = () => {
    const newErrors: ErrorState = {};
    const requiredFields = [
      "title",
      "surname",
      "first_name",
      "nationality",
      "gender",
      "DOB",
    ];

    let isValid = true;

    passengers.forEach((passenger, index) => {
      newErrors[index] = {};
      requiredFields.forEach((field) => {
        if (!passenger[field as keyof Passenger]) {
          newErrors[index][field] = "This field is required";
          isValid = false;
          console.log(
            `Validation failed for passenger ${index + 1}, field: ${field}`
          );
        }
      });

      // Only validate email and phone for the first passenger (adult)
      if (index === 0) {
        if (!passenger.email) {
          newErrors[index].email = "This field is required";
          isValid = false;
          console.log(`Validation failed for passenger 1, field: email`);
        }
        if (!passenger.phone) {
          newErrors[index].phone = "This field is required";
          isValid = false;
          console.log(`Validation failed for passenger 1, field: phone`);
        }
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      console.log("Form validation failed. Errors:", newErrors);
    } else {
      console.log("Form validation passed");
    }

    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    passengerIndex: number
  ) => {
    const { name, value } = e.target;

    const updatedPassengers = passengers.map((passenger, index) =>
      index === passengerIndex ? { ...passenger, [name]: value } : passenger
    );

    dispatch(setFormData({ passengers: updatedPassengers }));

    // Clear error for this field if it exists
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (newErrors[passengerIndex] && newErrors[passengerIndex][name]) {
        delete newErrors[passengerIndex][name];
      }
      return newErrors;
    });
  };

  const handleDiscountCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };

  const handleCorporateCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    } catch (error) {
      console.error("Error checking corporate code:", error);
    }
  };

  const handleSaveAndContinue = () => {
    if (validateForm()) {
      // No need to dispatch here as the state is already up-to-date
      router
        .push("/travelinformation")
        .then(() => {
          console.log("Navigation completed");
        })
        .catch((err) => {
          console.error("Navigation failed:", err);
        });
    } else {
      const firstErrorField = document.querySelector(".error-field");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const toggle = () => {
    setOpenCode(!openCode);
  };

  const toggleText = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.general}>
      <Header />
      <div className={styles.secondHeader}>
        <Link href="/selectflight">
          <Image
          // width={0}
            alt="Back"
            src={BackButton}
            className={styles.backbutton}
            
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
              <p>Nice job! You picked one of the best options. </p>
              <span>Book Now so you don't miss out on this price.</span>
            </div>
          </div>
          <span className={styles.who}>Who is travelling?</span>
          <form>
            {passengers.map((passenger, index) => (
              <div key={index} className={styles.generall}>
                <div className={styles.detailsDiv}>
                  <span className={styles.details}>
                    Enter Passenger {index + 1} Details
                  </span>
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
                    <span>
                      Passenger {index + 1} (
                      {index < adults
                        ? "Adult"
                        : index < adults + children
                        ? "Child"
                        : "Infant"}
                      )
                    </span>
                    {index === 0 && <p>Primary Contact</p>}
                  </div>
                  <div className={styles.fatherVerified}>
                    <div className={styles.titleDiv}>
                      <div className={styles.omo}>
                        <label>
                          Title{" "}
                          <span style={{ color: "rgba(239, 12, 12, 1)" }}>
                            *
                          </span>
                        </label>
                        <label>
                          Surname{" "}
                          <span style={{ color: "rgba(239, 12, 12, 1)" }}>
                            *
                          </span>
                        </label>
                      </div>
                      <div className={styles.surnameDiv}>
                        <select
                          className={`${styles.select1} ${
                            errors[index]?.title ? "error-field" : ""
                          }`}
                          name="title"
                          value={passenger.title}
                          onChange={(e) => handleInputChange(e, index)}
                          style={
                            errors[index]?.title ? { borderColor: "red" } : {}
                          }
                        >
                          <option value="">Title </option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                          <option value="Master">Master</option>
                        </select>
                        {/* {errors[index]?.title && (
                          <p className={styles.errorText}>
                            {errors[index].title}
                          </p>
                        )} */}
                        <input
                          className={`${styles.input1} ${
                            errors[index]?.surname ? "error-field" : ""
                          }`}
                          type="text"
                          placeholder="Enter surname here"
                          name="surname"
                          value={passenger.surname}
                          onChange={(e) => handleInputChange(e, index)}
                          style={
                            errors[index]?.surname ? { borderColor: "red" } : {}
                          }
                        />
                        {errors[index]?.surname && (
                          <p className={styles.errorText}>
                            {errors[index].surname}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={styles.firstDiv}>
                      <label>
                        First Name{" "}
                        <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                      </label>
                      <input
                        className={`${styles.input} ${
                          errors[index]?.first_name ? "error-field" : ""
                        }`}
                        type="text"
                        placeholder="Enter name here"
                        name="first_name"
                        value={passenger.first_name}
                        onChange={(e) => handleInputChange(e, index)}
                        style={
                          errors[index]?.first_name
                            ? { borderColor: "red" }
                            : {}
                        }
                      />
                      {errors[index]?.first_name && (
                        <p className={styles.errorText}>
                          {errors[index].first_name}
                        </p>
                      )}
                    </div>
                    <div className={styles.middle}>
                      <label>
                        Middle Name{" "}
                        <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                      </label>
                      <input
                        className={`${styles.input} ${
                          errors[index]?.middle_name ? "error-field" : ""
                        }`}
                        type="text"
                        placeholder="Enter middlename here"
                        name="middle_name"
                        value={passenger.middle_name}
                        onChange={(e) => handleInputChange(e, index)}
                        style={
                          errors[index]?.middle_name
                            ? { borderColor: "red" }
                            : {}
                        }
                      />
                      {errors[index]?.middle_name && (
                        <p className={styles.errorText}>
                          {errors[index].middle_name}
                        </p>
                      )}
                    </div>
                    <div className={styles.nationality}>
                      <label>
                        Nationality{" "}
                        <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                      </label>
                      <select
                        className={`${styles.select} ${
                          errors[index]?.nationality ? "error-field" : ""
                        }`}
                        name="nationality"
                        value={passenger.nationality}
                        onChange={(e) => handleInputChange(e, index)}
                        style={
                          errors[index]?.nationality
                            ? { borderColor: "red" }
                            : {}
                        }
                      >
                        <option value="">Select Nationality</option>
                        <option value="Nigeria">Nigeria </option>
                        <option value="Brazil">Brazil</option>
                        <option value="Austria">Austria</option>
                        <option value="China">China</option>
                      </select>
                      {errors[index]?.nationality && (
                        <p className={styles.errorText}>
                          {errors[index].nationality}
                        </p>
                      )}
                    </div>
                    <div className={styles.gender}>
                      <label>
                        Gender{" "}
                        <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                      </label>
                      <select
                        className={`${styles.select} ${
                          errors[index]?.gender ? "error-field" : ""
                        }`}
                        name="gender"
                        value={passenger.gender}
                        onChange={(e) => handleInputChange(e, index)}
                        style={
                          errors[index]?.gender ? { borderColor: "red" } : {}
                        }
                      >
                        <option value="">Select Gender </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errors[index]?.gender && (
                        <p className={styles.errorText}>
                          {errors[index].gender}
                        </p>
                      )}
                    </div>
                    <div className={styles.DOB}>
                      <label>
                        Date of Birth{" "}
                        <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                      </label>
                      <input
                        type="date"
                        name="DOB"
                        value={passenger.DOB}
                        onChange={(e) => handleInputChange(e, index)}
                        className={`${styles.input} ${
                          errors[index]?.DOB ? "error-field" : ""
                        }`}
                        style={errors[index]?.DOB ? { borderColor: "red" } : {}}
                      />
                      {errors[index]?.DOB && (
                        <p className={styles.errorText}>{errors[index].DOB}</p>
                      )}
                    </div>
                  </div>
                </div>
                {index === 0 && (
                  <div className={styles.thirdNla}>
                    <span className={styles.confirm}>
                      Passenger 1 contact confirmation?
                    </span>
                    <div className={styles.firstDivk}>
                      <div className={styles.firstDiv}>
                        <label className={styles.bold}>
                          Email{" "}
                          <span style={{ color: "rgba(239, 12, 12, 1)" }}>
                            *
                          </span>
                        </label>
                        <input
                          className={`${styles.input} ${
                            errors[index]?.email ? "error-field" : ""
                          }`}
                          placeholder="Enter Email Address"
                          type="email"
                          name="email"
                          value={passenger.email}
                          onChange={(e) => handleInputChange(e, index)}
                          style={
                            errors[index]?.email ? { borderColor: "red" } : {}
                          }
                        />
                        {errors[index]?.email && (
                          <p className={styles.errorText}>
                            {errors[index].email}
                          </p>
                        )}
                      </div>
                      <div className={styles.titleDiv}>
                        <label className={`${styles.bold} ${styles.bigger}`}>
                          Phone Number{" "}
                          <span style={{ color: "rgba(239, 12, 12, 1)" }}>
                            *
                          </span>
                        </label>
                        <div className={styles.sigh}>
                          <input
                            className={`${styles.input1} ${
                              errors[index]?.phone ? "error-field" : ""
                            }`}
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            value={passenger.phone}
                            onChange={(e) => handleInputChange(e, index)}
                            style={
                              errors[index]?.phone ? { borderColor: "red" } : {}
                            }
                          />
                          {errors[index]?.phone && (
                            <p className={styles.errorText}>
                              {errors[index].phone}
                            </p>
                          )}
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
                )}
              </div>
            ))}
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
                <div className={styles.code}>
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className={styles.codeInput}
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                  />
                  <button
                    type="button"
                    className={styles.codeSend}
                    onClick={(e) =>
                      handleDiscountCodeSubmit(
                        e as any as React.FormEvent<HTMLFormElement>
                      )
                    }
                  >
                    Send
                  </button>
                </div>
              )}
              {discountResponse && (
                <p>Discount Applied: &#8358;{discountResponse.value}</p>
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
                <div className={styles.code}>
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className={styles.codeInput}
                    value={corporateCode}
                    onChange={handleCorporateCodeChange}
                  />
                  <button
                    type="button"
                    className={styles.codeSend}
                    onClick={(e) =>
                      handleCorporateCodeSubmit(
                        e as any as React.FormEvent<HTMLFormElement>
                      )
                    }
                  >
                    Send
                  </button>
                </div>
              )}
              {corporateResponse && (
                <p>
                  Corporate Discount Applied: &#8358;{corporateResponse.value}
                </p>
              )}
            </div>
            <div className={styles.saveDiv}>
              <div className={styles.ilu}>
                <span className={styles.money}> &#8358; {updatedTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>
                <Link href="/flight">
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
