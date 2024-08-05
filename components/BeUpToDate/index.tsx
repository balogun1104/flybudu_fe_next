/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Image from "next/image";
import styles from "./beUpToDate.module.css";
import final1 from "@/public/assets/images/uptodate1.png";
import final2 from "@/public/assets/images/uptodate2.png";
import final3 from "@/public/assets/images/uptodate3.png";
import Subscribe from "@/public/assets/images/Paper Plane.png";
interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <h2>Thank you for subscribing!</h2>
      <p>You've successfully subscribed to our newsletter.</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const BeUptoDate = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = () => {
    setShowModal(true);
    // Here you can also add logic to actually submit the email
  };

  return (
    <div className={styles.final}>
      <div className={styles.imageWrapFinal}>
        <Image src={final1} alt="" className={styles.image1} />
        <Image src={final2} alt="" className={styles.image2} />
        <Image src={final3} alt="" className={styles.image3} />
      </div>
      <div className={styles.uptoDate}>
        <p className={styles.be}>Be Up To Date</p>
        <p className={styles.sub}>
          Subscribe to our newsletter and never miss our latest news and
          promotions. Our newsletter is sent once a week, every Tuesday
        </p>
        <div className={styles.subscribe}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Email Address"
            className={styles.subscribeInput}
          />
          <button className={styles.subscribeButton} onClick={handleSubscribe}>
            {isMobile ? (
              <Image src={Subscribe} alt="" />
            ) : (
              <span>Subscribe</span>
            )}
          </button>
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BeUptoDate;
