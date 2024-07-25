/* eslint-disable react/no-unescaped-entities */
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./quote.module.css";
import QuoteImg from "@/public/assets/images/Quote.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface QuoteBarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function QuoteBar({ setIsOpen }: QuoteBarProps) {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (isChecked) {
      setIsSubmitted(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setShowError(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.darkBG} onClick={handleOutsideClick}>
        <div className={styles.centered}>
          <div className={styles.body}>
            <Image src={QuoteImg} alt="" className={styles.imgDiv} />
            <div className={styles.successMessage}>
              <h2>Thank you for your quote request!</h2>
              <p>Your request has been received and is being reviewed.</p>
              <p>We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.darkBG} onClick={handleOutsideClick}>
      <div className={styles.centered} onClick={(e) => e.stopPropagation()}>
        <div className={styles.body}>
          <Image src={QuoteImg} alt="" className={styles.imgDiv} />
          <div className={styles.inputDiv}>
            <div className={styles.clearDiv}>
              <span className={styles.booking}>
                Get a Quote For Your Booking
              </span>
              <span
                className={styles.clear}
                onClick={() => setIsOpen(false)}
                style={{ cursor: "pointer" }}
              >
                X
              </span>
            </div>
            <div className={styles.messageInput}>
              <p>
                Message Title{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </p>
              <input
                className={styles.toor}
                type="text"
                placeholder="Enter the title of your message"
              />
            </div>
            <div className={styles.messageInput}>
              <p>
                Full name{" "}
                <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
              </p>
              <input
                className={styles.toor}
                type="text"
                placeholder="Enter your full name here"
              />
            </div>
            <div className={styles.twin}>
              <div className={styles.emailInput}>
                <p>
                  Email <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </p>
                <input
                  className={styles.email}
                  type="text"
                  placeholder="Enter email address"
                />
              </div>
              <div className={styles.phoneInput}>
                <p>
                  Phone Number{" "}
                  <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span>
                </p>
                <div className={styles.phoneSaga}>
                  <label className={styles.label}>
                    <select className={styles.select1}>
                      <option>+234 </option>
                      <option>+235</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+419</option>
                    </select>
                  </label>{" "}
                  <input
                    className={styles.number}
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>{" "}
            </div>
            <textarea
              id="text"
              name="text"
              rows={4}
              cols={50}
              placeholder="Enter your message here"
              className={styles.textArea}
            />
            <div className={styles.lastDiv}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  className={styles.check}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />{" "}
                <span>
                  By clicking this box, you agree to our opt-in privacy
                </span>
              </div>
              {showError && (
                <p className={styles.errorMessage}>
                  Please agree to the privacy policy before submitting.
                </p>
              )}
              <span
                className={`${styles.quote} ${
                  !isChecked ? styles.disabledQuote : ""
                }`}
                onClick={handleSubmit}
              >
                Get A Quote
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteBar;
