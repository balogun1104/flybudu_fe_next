import React, { useState, useEffect } from "react";
import styles from "./passengerdetails.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import axiosInstance from "@/redux/api";
import Backbutton from "@/public/assets/images/backbutton.png";

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
  onBack?: () => void;
}

const HeroiconsOutlineDotsVertical: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
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
    />
  </svg>
);

const InputField: React.FC<{
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  options?: string[];
  disabled?: boolean;
}> = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  options,
  disabled,
}) => (
  <div className={styles[name] || styles.firstDiv}>
    <label>
      {label} <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
    </label>
    {type === "select" ? (
      <select
        className={styles.select}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    )}
  </div>
);

function PassengerDetails({ passenger, onBack }: PassengerDetailsProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Passenger>(
    passenger || ({} as Passenger)
  );
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (router.query.passenger) {
      try {
        const parsedPassenger = JSON.parse(router.query.passenger as string);
        setFormData(parsedPassenger);
      } catch (error) {
        console.error("Failed to parse passenger data:", error);
      }
    }
  }, [router.query.passenger]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/savedPassengers/${formData.id}`, formData);
      setIsEditing(false);
      if (onBack) {
        onBack();
      } else {
        router.push("/saved-passenger");
      }
    } catch (error) {
      console.error("Failed to update passenger:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (onBack) {
      onBack();
    } else {
      router.push("/saved-passenger");
    }
  };

  return (
    <div className={styles.general}>
      <div className={styles.navbar}>
        <button onClick={onBack} className={styles.backButton}>
          <Image src={Backbutton} alt="Back" width={24} height={24} />
          <span>Back</span>
        </button>
        <span>Passenger Details</span>
        <HeroiconsOutlineDotsVertical />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.mother}>
          <div className={styles.firstLine}>
            <span className={styles.edit}>
              {isEditing ? "Edit Passenger" : "Passenger Details"}
            </span>
            {!isEditing && (
              <button
                type="button"
                onClick={handleEdit}
                className={styles.editButton}
              >
                Edit
              </button>
            )}
          </div>
          <div className={styles.secondDiv}>
            <div className={styles.father}>
              <InputField
                label="Title"
                name="title"
                type="select"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Select Title"
                options={["Mr", "Mrs", "Miss", "Master"]}
                disabled={!isEditing}
              />
              <InputField
                label="Surname"
                name="surname"
                type="text"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Enter surname here"
                disabled={!isEditing}
              />
              <InputField
                label="First Name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="Enter name here"
                disabled={!isEditing}
              />
              <InputField
                label="Middle Name"
                name="middle_name"
                type="text"
                value={formData.middle_name || ""}
                onChange={handleInputChange}
                placeholder="Enter middlename here"
                disabled={!isEditing}
              />
              <InputField
                label="Nationality"
                name="nationality"
                type="select"
                value={formData.nationality}
                onChange={handleInputChange}
                options={["Nigeria", "Brazil", "Austria", "China"]}
                disabled={!isEditing}
              />
              <InputField
                label="Gender"
                name="gender"
                type="select"
                value={formData.gender}
                onChange={handleInputChange}
                placeholder="Select Gender"
                options={["Male", "Female", "Other"]}
                disabled={!isEditing}
              />
              <InputField
                label="Date of Birth"
                name="DOB"
                type="date"
                value={formData.DOB}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                placeholder="Enter Email Address"
                disabled={!isEditing}
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone || ""}
                onChange={handleInputChange}
                placeholder="Phone Number"
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className={styles.bottom}>
          <button
            type="button"
            onClick={handleCancel}
            className={styles.cancel}
          >
            Cancel
          </button>
          <button type="submit" className={styles.changes}>
            Save Changes
          </button>
        </div>
        </div>
        
      </form>
    </div>
  );
}

export default PassengerDetails;
