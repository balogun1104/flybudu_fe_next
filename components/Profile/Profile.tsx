import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./profile.module.css";
import ProfileImg from "@/public/assets/images/whatsaap.jpg";
import Backbutton from "@/public/assets/images/backbutton.png";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { updateUserProfile } from "@/redux/flight/bookingSlice";
import { Booking } from "@/redux/flight/bookingTypes.type";

interface ProfileProps {
  userData: Booking;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const dispatch = useDispatch();
  const { bookingData } = useSelector((state: RootState) => state.booking);
  const user = bookingData?.regular[0];

  const [formData, setFormData] = useState({
    title: "",
    surname: "",
    first_name: "",
    middle_name: "",
    nationality: "",
    gender: "",
    DOB: { year: "", month: "", day: "" },
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      const [year, month, day] = (user.DOB || "").split("-");
      setFormData({
        title: user.title || "",
        surname: user.surname || "",
        first_name: user.first_name || "",
        middle_name: user.middle_name || "",
        nationality: user.nationality || "",
        gender: user.gender || "",
        DOB: { year, month, day },
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (["year", "month", "day"].includes(name)) {
      setFormData((prev) => ({ ...prev, DOB: { ...prev.DOB, [name]: value } }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      ...formData,
      DOB: `${formData.DOB.year}-${formData.DOB.month}-${formData.DOB.day}`,
    };
    dispatch(updateUserProfile(updatedUser as Booking));
  };

  return (
    <div className={styles.general}>
      <div className={styles.navbar}>
        <Image src={Backbutton} alt="" />
        <span>Edit Profile</span>
      </div>
      <div className={styles.mother}>
        <div className={styles.firstLine}>
          <Image alt="" className={styles.avatar} src={ProfileImg} />
          <span className={styles.edit}>Edit Profile</span>
        </div>
        <div className={styles.secondDiv}>
          <div className={styles.father}>
            <div className={styles.titleDiv}>
              <div className={styles.omo}>
                <label>
                  Title <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
                <label>
                  Surname{" "}
                  <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </label>
              </div>
              <div className={styles.surnameDiv}>
                <label className={styles.label}>
                  <select
                    className={styles.select1}
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
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
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Enter surname here"
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
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter name here"
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
                value={formData.middle_name}
                onChange={handleChange}
                placeholder="Enter middlename here"
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
                  onChange={handleChange}
                >
                  <option value="">Select Nationality</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Austria">Austria</option>
                  <option value="China">China</option>
                </select>
              </label>
            </div>
            <div className={styles.gender}>
              <label>
                Gender <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <label className={styles.label}>
                <select
                  className={styles.select}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Custom">Custom</option>
                </select>
              </label>
            </div>
            <div className={styles.DOB}>
              <label>
                Date of Birth{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <div className={styles.triplet}>
                <label className={styles.labels}>
                  <select
                    className={styles.taye}
                    name="year"
                    value={formData.DOB.year}
                    onChange={handleChange}
                  >
                    <option value="">Year</option>
                    {Array.from(
                      { length: 100 },
                      (_, i) => new Date().getFullYear() - i
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </label>{" "}
                <label className={styles.labels}>
                  <select
                    className={styles.kehinde}
                    name="month"
                    value={formData.DOB.month}
                    onChange={handleChange}
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (month) => (
                        <option
                          key={month}
                          value={month.toString().padStart(2, "0")}
                        >
                          {new Date(2000, month - 1, 1).toLocaleString(
                            "default",
                            { month: "long" }
                          )}
                        </option>
                      )
                    )}
                  </select>
                </label>{" "}
                <label className={styles.labels}>
                  <select
                    className={styles.idowu}
                    name="day"
                    value={formData.DOB.day}
                    onChange={handleChange}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day.toString().padStart(2, "0")}>
                        {day}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className={styles.firstDiv}>
              <label>
                Email <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <input
                className={styles.input}
                placeholder="Enter Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.titleDivk}>
              <label>
                Phone Number{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </label>
              <div className={styles.sigh}>
                <label className={styles.label}>
                  <select className={styles.select1}>
                    <option>+234</option>
                    <option>+235</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+419</option>
                  </select>
                </label>
                <input
                  className={styles.input1}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.changes} onClick={handleSubmit}>
          Save Changes
        </span>
      </div>
    </div>
  );
}

export default Profile;
