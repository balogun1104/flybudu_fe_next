/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/customerinfo.module.css";
import { RootState } from "@/redux/store";
import { setFormData } from "@/redux/flight/formDataSlice";
import { FormData } from "@/redux/types/formData.types";
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

function CustomerInfo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const storedFormData = useSelector((state: RootState) => state.formData);

  const [formData, setFormDataState] = useState<FormData>(storedFormData);
  const [isActive, setIsActive] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [corporateCode, setCorporateCode] = useState("");
  const [discountResponse, setDiscountResponse] = useState<any>(null);
  const [corporateResponse, setCorporateResponse] = useState<any>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setFormDataState(storedFormData);
  }, [storedFormData]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      "title",
      "surname",
      "first_name",
      "middle_name",
      "nationality",
      "gender",
      "DOB",
      "email",
      "phone",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormDataState(updatedFormData);
    dispatch(setFormData(updatedFormData));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
      setFormDataState((prevState) => ({
        ...prevState,
        discount_code: discountCode,
        discounted_slash: parseFloat(response.data.value),
      }));
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
    } catch (error) {
      console.error("Error checking corporate code:", error);
    }
  };

  const handleSaveAndContinue = () => {
    if (validateForm()) {
      dispatch(setFormData(formData));
      router.push("/travelinformation");
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
                  <span>Passenger 1 (Adult-Primary Contact)</span>
                  <p>Saved Passenger</p>
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
                        className={`${styles.select1} ${
                          errors.title ? "error-field" : ""
                        }`}
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        style={errors.title ? { borderColor: "red" } : {}}
                      >
                        <option value="">Title </option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Master">Master</option>
                      </select>
                      {errors.title && (
                        <p className={styles.errorText}>{errors.title}</p>
                      )}
                      <input
                        className={`${styles.input1} ${
                          errors.surname ? "error-field" : ""
                        }`}
                        type="text"
                        placeholder="Enter surname here"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        style={errors.surname ? { borderColor: "red" } : {}}
                      />
                      {errors.surname && (
                        <p className={styles.errorText}>{errors.surname}</p>
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
                        errors.first_name ? "error-field" : ""
                      }`}
                      type="text"
                      placeholder="Enter name here"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      style={errors.first_name ? { borderColor: "red" } : {}}
                    />
                    {errors.first_name && (
                      <p className={styles.errorText}>{errors.first_name}</p>
                    )}
                  </div>
                  <div className={styles.middle}>
                    <label>
                      Middle Name{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <input
                      className={`${styles.input} ${
                        errors.middle_name ? "error-field" : ""
                      }`}
                      type="text"
                      placeholder="Enter middlename here"
                      name="middle_name"
                      value={formData.middle_name}
                      onChange={handleInputChange}
                      style={errors.middle_name ? { borderColor: "red" } : {}}
                    />
                    {errors.middle_name && (
                      <p className={styles.errorText}>{errors.middle_name}</p>
                    )}
                  </div>
                  <div className={styles.nationality}>
                    <label>
                      Nationality{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <select
                      className={`${styles.select} ${
                        errors.nationality ? "error-field" : ""
                      }`}
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      style={errors.nationality ? { borderColor: "red" } : {}}
                    >
                      <option value="">Select Nationality</option>
                      <option value="Nigeria">Nigeria </option>
                      <option value="Brazil">Brazil</option>
                      <option value="Austria">Austria</option>
                      <option value="China">China</option>
                    </select>
                    {errors.nationality && (
                      <p className={styles.errorText}>{errors.nationality}</p>
                    )}
                  </div>
                  <div className={styles.gender}>
                    <label>
                      Gender{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <select
                      className={`${styles.select} ${
                        errors.gender ? "error-field" : ""
                      }`}
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      style={errors.gender ? { borderColor: "red" } : {}}
                    >
                      <option value="">Select Gender </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className={styles.errorText}>{errors.gender}</p>
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
                      value={formData.DOB}
                      onChange={handleInputChange}
                      className={`${styles.input} ${
                        errors.DOB ? "error-field" : ""
                      }`}
                      style={errors.DOB ? { borderColor: "red" } : {}}
                    />
                    {errors.DOB && (
                      <p className={styles.errorText}>{errors.DOB}</p>
                    )}
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
                      className={`${styles.input} ${
                        errors.email ? "error-field" : ""
                      }`}
                      placeholder="Enter Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={errors.email ? { borderColor: "red" } : {}}
                    />
                    {errors.email && (
                      <p className={styles.errorText}>{errors.email}</p>
                    )}
                  </div>
                  <div className={styles.titleDiv}>
                    <label className={`${styles.bold} ${styles.bigger}`}>
                      Phone Number{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                    <div className={styles.sigh}>
                      <input
                        className={`${styles.input1} ${
                          errors.phone ? "error-field" : ""
                        }`}
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={errors.phone ? { borderColor: "red" } : {}}
                      />
                      {errors.phone && (
                        <p className={styles.errorText}>{errors.phone}</p>
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
                <span className={styles.money}> #160,000</span>
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
