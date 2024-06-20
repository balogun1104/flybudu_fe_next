import React from 'react'
import styles from "./profile.module.css"
import ProfileImg from "@/public/assets/images/whatsaap.jpg"
// import { IoIosArrowBack } from 'react-icons/io'
import Backbutton from "@/public/assets/images/backbutton.png"
import Link from 'next/link'
import Image from 'next/image'
function Profile() {
  return (
    <div className={styles.general}>
    <div className={styles.navbar}>  <img src={Backbutton} alt='' /><span>Edit Profile</span></div>
    <div className={styles.mother}>
      <div className={styles.firstLine}>
        <img alt='' className={styles.avatar} src={ProfileImg} />
        <span className={styles.edit}>Edit Profile</span>
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
    <div className={styles.bottom}><span className={styles.changes}>Save Changes</span></div>
  </div>
  )
}

export default Profile
