import React, { Dispatch, SetStateAction } from "react";
import styles from "./quote.module.css";
import QuoteImg from "@/public/assets/images/Quote.png";
import { useRouter } from "next/navigation";

import Image from "next/image";

interface QuoteBarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function QuoteBar({ setIsOpen }: QuoteBarProps) {
  const router = useRouter();
  return (
    <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
      <div className={styles.centered}>
        <div className={styles.body}>
          <Image src={QuoteImg} alt="" className={styles.imgDiv} />
          <div className={styles.inputDiv}>
            <div className={styles.clearDiv}>
              {" "}
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
              {" "}
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
              {" "}
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
                {" "}
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
                {" "}
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
                {" "}
                <input type="checkbox" className={styles.check} />{" "}
                <span>
                  By clicking this box, you agree to our opt-in privacy
                </span>
              </div>
              <span
                className={styles.quote}
                onClick={() => {
                  router.push("/");
                }}
              >
                Get a quote
              </span>
            </div>
            {/* <span onClick={() => setIsOpen(true)} className={styles.send}>Send Message</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteBar;
