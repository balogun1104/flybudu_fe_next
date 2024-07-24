import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import styles from "./login.module.css";
import Link from "next/link";
import { IoLogoApple, IoLogoGoogle } from "react-icons/io";
import { useRouter } from 'next/router';
import axiosInstance from "@/redux/api"; 
import { showToast } from "@/utils/useToast"; 
import { loginSuccess } from '@/redux/auth/authslice';

function Tab() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/login", {
        email,
        password
      });

      if (response.data && response.data.token) {
        const { data, token } = response.data;
        dispatch(loginSuccess({ user: data, token: token.access_token }));
        localStorage.setItem("userToken", response.data.token);
        showToast("Login successful!", "success");
        router.push("/managebooking");
      } else {
        showToast("Login failed. Please try again.", "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      showToast("Login failed. Please check your credentials and try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <span className={styles.welcome}>Welcome To Fly Budu</span>
        <div className={styles.joinDiv}>
          {" "}
          <button>Join with <IoLogoGoogle /> </button> <button>Join with <IoLogoApple /> </button>
        </div>
        <div className={styles.lineDiv}>
          <div className={styles.leftLine}></div> <span>or</span>{" "}
          <div className={styles.rightLine}></div>
        </div>
        <span className={styles.fill}>Fill in your details</span>
        <form onSubmit={handleLogin}>
          <div className={styles.emailDiv}>
            <span>Email</span>
            <input
              type="email"
              className={styles.email}
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.emailDiv}>
            <span>Password</span>
            <input
              type="password"
              className={styles.password}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link href="/password" className={styles.forgot}>
            <span>Forgot Password?</span>
          </Link>
          <button type="submit" className={styles.create} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tab;