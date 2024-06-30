import React from 'react'
import styles from "@/styles/passengerdetails.module.css"
// import ProfileImg from "../../assets/images/whatsaap.jpg"
// import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link';
import Backbutton from "@/public/assets/images/backbutton.png"
import Image from 'next/image';

function PassengerDetails() {

  function HeroiconsOutlineDotsVertical(props) {
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

  return (
    <div className={styles.general}>
      <div className={styles.navbar}> <Link href="/saved-passenger"> <Image src={Backbutton} alt='' /> </Link><span> Passenger Details</span> <HeroiconsOutlineDotsVertical/></div>
      <div className={styles.mother}>
        <div className={styles.firstLine}>
          <span className={styles.edit}> Edit Passenger</span>
        </div>
        <div className={styles.secondDiv}>
          <div className={styles.father}>

            <div className={styles.titleDiv}>
              <div className={styles.omo}>
                <label> Title <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
                <label>Surname <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              </div>
              <div className={styles.surnameDiv}>
               
                <label className={styles.label}>
                  <select className={styles.select1}>
                    <option>Title </option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Master</option>
                  </select>
                </label>
                <input className={`${styles.input1} ${styles.spad}`} type="text" placeholder="Enter surname here" />
              </div>
            </div>
            <div className={styles.firstDiv}>
              <label> First Name <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              <input className={styles.input} type="text" placeholder="Enter name here" />
            </div>
            <div className={styles.middle}>
              <label> Middle Name <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              <input className={styles.input} type="text" placeholder="Enter middlename here" />
            </div>
            <div className={styles.nationality}>
              <label> Nationality <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              <label className={styles.label}>
                <select className={styles.select}>
                  <option>Nigeria </option>
                  <option>Brazil</option>
                  <option>Austria</option>
                  <option>Austria</option>
                  <option>China</option>
                </select>
              </label>
            </div>
            <div className={styles.gender}>
              <label> Gender <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              <label className={styles.label}>
                <select className={styles.select}>
                  <option>Select Gender </option>
                  <option>Female</option>
                  <option>Custom</option>
                </select>
              </label>
            </div>
            <div className={styles.DOB}>
              <label>Date of Birth <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              <div className={styles.triplet}>
                <label className={styles.labels}>
                  <select className={styles.taye}>
                    <option>Year </option>
                    <option>2020</option>
                    <option>2019</option>
                  </select>
                </label>  <label className={styles.labels}>
                  <select className={styles.kehinde}>
                    <option>Month </option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                </label>  <label className={styles.labels}>
                  <select className={styles.idowu}>
                    <option>Day </option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                  </select>
                </label>
              </div>
            </div>
            <div className={styles.firstDiv}>
              <label>Email <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              <input className={styles.input} placeholder="Enter Email Address" type="text" />

            </div>
            <div className={styles.titleDivk}>

              <label> Phone Number <span style={{ color: "rgba(239, 12, 12, 1)" }}>*</span></label>
              <div className={styles.sigh}>
                <label className={styles.label}>
                  <select className={styles.select1}>
                    <option>+234 </option>
                    <option>+235</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+419</option>
                  </select>
                </label>

               
                  <input className={styles.input1} type="number" placeholder="Phone Number" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}> <Link href="/savedpassenger" style={{color:"black", textDecoration:"none"}}><span className={styles.cancel}>Cancel</span>  </Link>  <Link  href="/profilepage" style={{color:"black", textDecoration:"none"}} ><span className={styles.changes}>Save Changes</span></Link></div>
    </div>
  )
}

export default PassengerDetails
