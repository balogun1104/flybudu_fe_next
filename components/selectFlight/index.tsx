import React, { useState } from 'react'
import GreenImg from "@/public/assets/images/GreenBox.png"
import styles from "./select.module.css"
import Line from "@/public/assets/images/Line.png"
import Seat from "@/public/assets/images/seats.png"
import Approved from "@/public/assets/images/Layer 3.png"
import Circle from "@/public/assets/images/circle.png"
import Image from 'next/image'


function Index() {
    const [mobileVisible, setMobilevisible] = useState(false)
    const [visible, setVisible] = useState(false);
    const toggleDivs = () =>{
        setVisible(!visible)
    }
    const toggleMobileDivs = () => {
        setMobilevisible(!mobileVisible)
    }
    return (
        <div className={styles.general}>
            <div className={styles.body}>
                <div className={styles.firstDiv}>
                    <Image src={GreenImg} className={styles.GreenImg} alt='' />
                    <div className={styles.flex}><span className={styles.time}>07:00</span> <span style={{ fontSize: "20px" }}>Lagos</span></div>
                    <div className={styles.lineDiv}>
                        <span>1h 40m</span>
                        <div className={styles.circle}>
                            <Image src={Circle} alt='' />
                            <Image src={Line} alt='' />
                            <Image src={Circle} alt='' />
                        </div>
                        <span>0 stop</span>
                    </div>

                    <div className={styles.flex}><span className={styles.time}>08:40</span> <span style={{ fontSize: "20px" }}>Abuja</span></div>
                    <div className={styles.extra}><span>Flight No</span> <span style={{ fontWeight: "bold" }}>UY6789G54</span></div>
                    <div className={styles.extra}><span>Type</span> <span style={{ fontWeight: "bold" }}>Direct</span></div>


                </div>
                <div className={styles.secondDiv}>

                    <div className={styles.flex}><span>From</span> <span className={styles.money}> #160,000</span></div>
                    <div className={styles.selectDiv}>
                            <Image src={Approved} alt='' className={styles.image}  style={{display: visible ? "flex" : "none"}} />
                        <select className={`${styles.custom} ${styles.selectChange}`} style={{display: visible ? "none" : "flex"}}>
                            <option>Economy</option>
                            <option>First Class</option>
                            <option>Business Class</option>
                        </select>
                        <div className={styles.left}   style={{display: visible ? "none" : "flex"}}>
                            <div className={styles.seat}> <Image src={Seat} alt='' /> <span>2 Seats Left</span></div>
                            <span className={styles.select} onClick={toggleDivs}>Select</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.mother}>
                <div className={styles.mobileDiv}>
                    <Image src={GreenImg} className={styles.GreenImg} alt='' />
                    <Image src={Approved} alt='' className={styles.image}  style={{display: mobileVisible ? "flex" : "none"}} />
                    <select  className={styles.selectChange} style={{display: mobileVisible ? "none" : "flex"}}>
                        <option>Economy</option>
                        <option>First Class</option>
                        <option>Business Class</option>
                    </select>
                </div>
                <div className={styles.mobileDiv}>
                    <div className={styles.mobileFlex}>
                        <span style={{ fontWeight: "bold" }} className={styles.bold}>07:00</span>
                        <span className={styles.lagos}>Lagos</span>
                    </div>
                    <div className={styles.lineDiv}>
                        <span>1h 40m</span>
                        <div className={styles.circle}>
                            <Image src={Circle} alt='' />
                            <Image src={Line} alt='' />
                            <Image src={Circle} alt='' />
                        </div>
                        <span>0 stop</span>
                    </div>
                    <div className={styles.mobileFlex}>
                        <span style={{ fontWeight: "bold" }} className={styles.bold}>08:40</span>
                        <span className={styles.abuja}>Abuja</span>
                    </div>
                </div>
                <div className={styles.mobileDiv}>
                    <span>Flight No:</span>
                    <span style={{ fontWeight: "bold" }} className={styles.bold}>UY6789G54</span>
                </div>
                <div className={styles.mobileDiv}>
                    <span>Type:</span>
                    <span style={{ fontWeight: "bold" }} className={styles.bold}>Direct</span>
                </div>
                <div className={styles.mobileDiv}>
                    <span>From:</span>
                    <span style={{ fontWeight: "bold", color: "#058EA9" }} className={styles.monay}>#160,000</span>
                </div>
                <div className={styles.mobileDiv}  style={{display: mobileVisible ? "none" : "flex"}}>
                    <div className={styles.seat}> <Image src={Seat} alt='' /> <span>2 Seats Left</span></div>
                    <span className={styles.select} onClick={toggleMobileDivs}>Select</span>
                </div>
            </div>

        </div>
    )
}

export default Index