import React from 'react'
import styles from "./login.module.css"
// import AppleIcon from '@mui/icons-material/Apple';
import Link from 'next/link';
function Tab() {
  return (
    <div className={styles.general}>
     <div className={styles.body}>
        <span className={styles.welcome}>Welcome To Fly Budu</span>
        <div className={styles.joinDiv}> <button>Join with </button> <button>Join with   </button></div>
        <div className={styles.lineDiv}><div className={styles.leftLine}></div> <span>Or</span> <div className={styles.rightLine}></div></div>
        <span className={styles.fill}>Fill in your details</span>
        <div className={styles.emailDiv}>
          <span>Email</span>
          <input type='email' className={styles.email}  placeholder='Enter email address'/>
        </div>
      <div className={styles.emailDiv}>
          <span>Password</span>
          <input type='password' className={styles.password}  placeholder='Enter your Password'/>
        </div>
        <Link href="/password" className={styles.forgot}>
        <span>Forgot Password?</span></Link>
        <button className={styles.create}>Login</button>
     </div>
    </div>
  )
}

export default Tab
