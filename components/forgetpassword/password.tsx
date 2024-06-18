import React from 'react'
import styles from "./password.module.css"
import Link from 'next/link'
function password() {
  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <span className={styles.welcome}>Reset Your Password</span>
        <span>Enter email address and select send email.</span>
        <div className={styles.emailDiv}>
          <span>Email</span>
          <input type='email' className={styles.email}  placeholder='Enter email address'/>
        </div>
  <Link href="/email-sent">      <button className={styles.create}>send Email</button></Link>
       <Link href="/login"> <button className={styles.sign}>Back to Sign In</button></Link>
      </div>
    </div>
  )
}

export default password
