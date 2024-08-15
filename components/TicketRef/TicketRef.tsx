import ApprovedImg from "@/public/assets/images/Customer care 1.png";
import Link from "next/link";
import styles from "./ticketref.module.css"
import Image from "next/image";

interface TicketRefProps {
  setIsOpen: (isOpen: boolean) => void;
}

function TicketRef({ setIsOpen }: TicketRefProps) {
  return (
    <div className={styles.darkBG}>
      <div className={styles.centered}>
        <div className={styles.modal}>
           <div>
            <span className={styles.member}>Please Input your Ticket No</span>
          </div>
                <input type="text" placeholder=" e.g 3434234df" className={styles.input}/>
          <div className={styles.skipDiv}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className={styles.save}>Submit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketRef;