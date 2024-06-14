import React, {useState} from 'react'
import CorporateImg from "@/public/assets/images/Coporate Booking.png"
import styles from "./corporate.module.css"
import QuoteBar from "../Qoute/quote"
import Image from 'next/image'

function Corporate() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.general}>
        <div className={styles.body}>
            <Image src={CorporateImg} alt=''/>
            <div className={styles.secondDiv}>
                <span className={styles.corporateText}> Corporate Booking</span>
                <span className={styles.text}>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem.</span>
                <span className={styles.text}>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem.</span>
                <span className={styles.started} onClick={() => {setIsOpen(true)}}>Get Started</span>
            </div>
        </div>
        {isOpen && <QuoteBar setIsOpen={setIsOpen}/>}

    </div>
  )
}

export default Corporate