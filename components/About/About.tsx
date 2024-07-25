import React from "react";
import { useSelector } from "react-redux";
import styles from "./about.module.css";
import booking from "@/public/assets/images/Vector.png";
import notification from "@/public/assets/images/Group 2.png";
import profileImg from "@/public/assets/images/Layer 2.png";
import savedImg from "@/public/assets/images/Currency Exchange.png";
import logoutImg from "@/public/assets/images/Wallet.png";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useAuth } from "@/hooks/useAuth";

function About() {
  const { bookingData, loading, error } = useSelector(
    (state: RootState) => state.booking
  );
  const { isAuthenticated, user } = useAuth();

  console.log("User data:", user); // Debugging: Log user data

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!bookingData || bookingData.regular.length === 0)
    return <div>No booking data available</div>;

  const renderUserAvatar = () => {
    if (user?.name || user?.last_name) {
      const initials = getInitials(user?.name, user.last_name);
      console.log("Generated initials:", initials);
      return <div className={styles.userInitials}>{initials}</div>;
    }
    return <div className={styles.userInitials}>NA</div>;
  };

  const getInitials = (
    firstName: string | undefined,
    lastName: string | undefined
  ) => {
    if (firstName && lastName) {
      return `${firstName.charAt(0).toUpperCase()}${lastName
        .charAt(0)
        .toUpperCase()}`;
    } else if (firstName) {
      return firstName.length > 1
        ? `${firstName.charAt(0).toUpperCase()}${firstName
            .charAt(1)
            .toLowerCase()}`
        : firstName.toUpperCase();
    } else if (lastName) {
      return lastName.length > 1
        ? `${lastName.charAt(0).toUpperCase()}${lastName
            .charAt(1)
            .toLowerCase()}`
        : lastName.toUpperCase();
    }
    return "NA";
  };
  return (
    <div className={styles.genera}>
      <div className={styles.avatarImg}>
        {renderUserAvatar()}
        <Link
          style={{ textDecoration: "none", color: "black" }}
          href="/profile"
        >
          <span className={styles.edit}>Edit Profile</span>
        </Link>
      </div>

      <div className={styles.nameDiv}>
        <span>
          {user?.name} {user?.last_name}
        </span>
        <p>{user?.phone}</p>
        <p>{user?.email}</p>
      </div>

      <div className={styles.listDiv}>
        <div className={styles.fourDiv}>
          <Link
            href="/managebooking"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className={styles.mybookingDiv}>
              <Image alt="Booking Icon" src={booking} />
              <span>My Bookings</span>
            </div>
          </Link>

          <Link
            href="/notification"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className={styles.notification}>
              <div className={styles.inner}>
                <Image alt="Notification Icon" src={notification} />
                <span>Notifications</span>
              </div>
              <p className={styles.red}>7</p>
            </div>
          </Link>

          <Link
            href="/profilepage"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className={styles.profile}>
              <Image alt="Profile Icon" src={profileImg} />
              <span>Profile</span>
            </div>
          </Link>

          <Link
            href="/savedpassenger"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className={styles.profile}>
              <Image alt="Saved Passengers Icon" src={savedImg} />
              <span>Saved Passengers</span>
            </div>
          </Link>
        </div>
        <div className={styles.logoutDiv}>
          <div className={styles.profile}>
            <Image alt="Logout Icon" src={logoutImg} />
            <Link
              style={{ textDecoration: "none", cursor: "pointer" }}
              href="/login"
            >
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
