// Tab.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import axiosInstance from "@/redux/api";
import { showToast } from "@/utils/useToast";
import { loginSuccess, setUserData } from "@/redux/auth/authslice";
import { LoginResponse, UserResponse } from "@/redux/auth/auth.types";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

function Tab() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.post<LoginResponse>("/login", {
        email,
        password,
      });

      if (response.data && response.data.token) {
        const { token } = response.data;
        dispatch(loginSuccess({ token: token.access_token }));
        localStorage.setItem("userToken", token.access_token);

        // Fetch user data
        const userResponse = await axiosInstance.get<UserResponse>("/user", {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        });

        if (userResponse.data && userResponse.data.status) {
          dispatch(setUserData(userResponse.data.data));
        }

        router.push("/managebooking");
      } else {
        showToast("Login failed. Please try again.", "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      showToast(
        "Login failed. Please check your credentials and try again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.general}>
      <div className={styles.body}>
        <span className={styles.welcome}>Welcome To Fly Budu</span>
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
            <div className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                className={styles.password}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className={styles.togglePasswordButton}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
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
