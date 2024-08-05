import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchNotifications } from "@/redux/notification/notificationSlice";
import styles from "../styles/notification.module.css";
import Navbar from "../components/NavbarSecond/navbar";
import hero from "@/public/assets/images/Hero Illustration.png";
import About from "../components/About/About";
import Footer from "../components/Footer/index";
import MobileNav from "../components/MobileNavBar/index";
import Image from "next/image";
import NotificationMessage from "@/components/NotificationMessage/NotificationMessge";

function Notification() {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, status, error } = useSelector(
    (state: RootState) => state.notifications
  );

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isYesterday = (date: Date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  };

  const isLastWeek = (date: Date) => {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    return (
      date >= lastWeek &&
      date < new Date(lastWeek.getTime() + 7 * 24 * 60 * 60 * 1000)
    );
  };

  const isLastMonth = (date: Date) => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return (
      date.getMonth() === lastMonth.getMonth() &&
      date.getFullYear() === lastMonth.getFullYear()
    );
  };

  const renderNotifications = (filterFn: (date: Date) => boolean) => {
    return notifications
      .filter((notification) => filterFn(new Date(notification.created_at)))
      .map((notification) => (
        <NotificationMessage
          key={notification.id}
          notification={notification}
        />
      ));
  };

  const todayNotifications = renderNotifications(isToday);
  const yesterdayNotifications = renderNotifications(isYesterday);
  const lastWeekNotifications = renderNotifications(isLastWeek);
  const lastMonthNotifications = renderNotifications(isLastMonth);

  return (
    <div className={styles.general}>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.firstDiv}>
        <Image className={styles.hero} src={hero} alt="" />
        <div className={styles.textDiv}>
          <span className={styles.bigText}> MANAGE BOOKINGS</span>
          <p className={styles.small}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div className={styles.about}>
          <About />
        </div>
        <div className={styles.second}>
          <span className={styles.notification}>Notifications</span>
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" && (
            <>
              {todayNotifications.length > 0 && (
                <>
                  <span className={styles.today}>TODAY</span>
                  <div className={styles.message}>{todayNotifications}</div>
                </>
              )}
              {yesterdayNotifications.length > 0 && (
                <>
                  <div className={styles.yesterdayDiv}>
                    <span className={styles.yesterday}>YESTERDAY</span>
                  </div>
                  <div className={styles.messageBook}>
                    {yesterdayNotifications}
                  </div>
                </>
              )}
              {lastWeekNotifications.length > 0 && (
                <>
                  <div className={styles.lastWeekDiv}>
                    <span className={styles.lastWeek}>LAST WEEK</span>
                  </div>
                  <div className={styles.messageBook}>
                    {lastWeekNotifications}
                  </div>
                </>
              )}
              {lastMonthNotifications.length > 0 && (
                <>
                  <div className={styles.lastMonthDiv}>
                    <span className={styles.lastMonth}>LAST MONTH</span>
                  </div>
                  <div className={styles.messageBook}>
                    {lastMonthNotifications}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <MobileNav />
      <Footer />
    </div>
  );
}

export default Notification;
