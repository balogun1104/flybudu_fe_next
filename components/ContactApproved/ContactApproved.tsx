import ApprovedImg from "@/public/assets/images/Customer care 1.png";
import Link from "next/link";
import styles from "./contactapproved.module.css"
import Image from "next/image";

interface ContactApprovedProps {
  setIsOpen: (isOpen: boolean) => void;
}

function ContactApproved({ setIsOpen }: ContactApprovedProps) {
  return (
    <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <span className={styles.booking}>Thank you for your request.</span>
          <div>
            <span className={styles.member}>A member of our team will contact you shortly.</span>
          </div>
   
          <Image className={styles.ApprovedImg} src={ApprovedImg} alt="approvedImg" />
          <div className={styles.skipDiv}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className={styles.save}>Okay</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactApproved;