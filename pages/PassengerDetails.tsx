import React, { useState, useEffect } from "react";
import styles from "@/styles/passengerdetails.module.css";
import Link from "next/link";
import Backbutton from "@/public/assets/images/backbutton.png";
import Image from "next/image";
import { useRouter } from "next/router";
import axiosInstance from "@/redux/api";
import { FaBackward } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

interface Passenger {
  id: number;
  title: string;
  surname: string;
  first_name: string;
  middle_name: string | null;
  nationality: string;
  gender: string;
  DOB: string;
  user_id: string;
  email: string | null;
  phone: string | null;
}

interface PassengerDetailsProps {
  passenger?: Passenger;
  onBack: () => void;
}

function PassengerDetails({ passenger, onBack }: PassengerDetailsProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Passenger | null>(null);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/savedpassenger");
  };

  useEffect(() => {
    if (passenger) {
      setFormData(passenger);
    } else if (router.query.passenger) {
      try {
        const parsedPassenger = JSON.parse(router.query.passenger as string);
        setFormData(parsedPassenger);
      } catch (error) {
        console.error("Failed to parse passenger data:", error);
      }
    }
  }, [passenger, router.query.passenger]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    try {
      await axiosInstance.put(`/savedPassengers/${formData.id}`, formData);
      onBack();
    } catch (error) {
      console.error("Failed to update passenger:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  function HeroiconsOutlineDotsVertical(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
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

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.general}>
      <div className={styles.navbar}>
        <MdArrowBack onClick={handleBack} color="#646464" size="20" />
        <span> Passenger Details</span> <HeroiconsOutlineDotsVertical />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.mother}>
          <div className={styles.firstLine}>
            <span className={styles.edit}> Edit Passenger</span>
          </div>
          <div className={styles.secondDiv}>
            <div className={styles.father}>
              <div className={styles.titleDiv}>
                <div className={styles.omo}>
                  <div>
                    <label>
                      Title{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      Surname{" "}
                      <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                    </label>
                  </div>
                </div>
                <div className={styles.surnameDiv}>
                  <label className={styles.label}>
                    <select
                      className={styles.select1}
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                    >
                      <option value="">Title</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Master">Master</option>
                    </select>
                  </label>
                  <input
                    className={`${styles.input1} ${styles.spad}`}
                    type="text"
                    name="surname"
                    placeholder="Enter surname here"
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
                  name="first_name"
                  placeholder="Enter name here"
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
                  name="middle_name"
                  placeholder="Enter middlename here"
                  value={formData.middle_name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.nationality}>
                <label>
                  Nationality{" "}
                  <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
                <label className={styles.label}>
                  <select
                    className={styles.select}
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Austria">Austria</option>
                    <option value="China">China</option>
                  </select>
                </label>
              </div>
              <div className={styles.gender}>
                <label>
                  Gender{" "}
                  <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
                <label className={styles.label}>
                  <select
                    className={styles.select}
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
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
              <div className={styles.firstDiv}>
                <label>
                  Email <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.titleDivk}>
                <label>
                  Phone Number{" "}
                  <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
                <div className={styles.sigh}>
                  <input
                    className={styles.input1}
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <button type="button" onClick={handleBack} className={styles.cancel}>
            Cancel
          </button>
          <button type="submit" className={styles.changes}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default PassengerDetails;
