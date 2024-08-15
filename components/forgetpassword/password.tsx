import React, { useState, ChangeEvent } from 'react';
import styles from "./password.module.css";
import Link from 'next/link';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if (newEmail.trim() === '') {
      setError('Email is required');
    } else if (!validateEmail(newEmail)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (email.trim() === '') {
      setError('Email is required');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else {
      // Proceed with password reset logic
      // For now, we'll just clear the error
      setError('');
    }
  };

  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <p className={styles.welcome}>Reset Your Password</p>
        <p className={styles.welcomeEmail}>Enter email address and select send email.</p>
        <div className={styles.emailDiv}>
          <span style={{color: '#4D4D4D'}}>Email</span>
          <input 
            type='email' 
            className={`${styles.email} ${error ? styles.errorInput : ''}`}  
            placeholder='Enter email address' 
            required
            value={email}
            onChange={handleEmailChange}
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
        {!error && email ? (
          <Link href="/email-sent">   
            <button className={styles.create} onClick={handleSubmit}>Send Email</button>
          </Link>
        ) : (
          <button className={`${styles.create} ${styles.disabled}`} onClick={handleSubmit} disabled={!!error || !email}>Send Email</button>
        )}
        <Link href="/login"> 
          <button className={styles.sign}>Back to Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;