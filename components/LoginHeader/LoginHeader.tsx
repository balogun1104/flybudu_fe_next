import React from 'react';
import styles from "@/styles/forgotpassword.module.css";

interface LoginHeaderProps {
  title: string;
  description: string;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ title, description }) => {
  return (
    <div className={styles.createDiv}>
      <span className={styles.create}>{title}</span>
      <span className={styles.letFly}>{description}</span>
    </div>
  );
};

export default LoginHeader;