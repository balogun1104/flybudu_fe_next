import React from "react";
import styles from "./notificationmessage.module.css";
import message from "@/public/assets/images/message (1) 1.png";
import greenAfrica from "@/public/assets/images/greenAfrica.png";
import adobe from "@/public/assets/images/adobe 1.png";
import Image from "next/image";

interface NotificationProps {
  notification: {
    id: number;
    headline: string;
    details: string;
    created_at: string;
  }
}

function NotificationMessage({ notification }: NotificationProps) {
  const date = new Date(notification.created_at);
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={styles.general}>
      <div className={styles.mother}>
        <div className={styles.firstDiv}>
          <span>{time}</span>
          <Image alt="lolipop" src={message} />
          <div className={styles.greenDiv}>
            <Image
              alt=""
              width="40"
              className={styles.green}
              src={greenAfrica}
            />
            <span> Green Africa</span>
          </div>
          <div className={styles.columnDiv}>
            <span className={styles.bold}>
              {notification.headline}
            </span>
            <div className={styles.imageDiv}>
              <Image alt="" src={adobe} />
              <span className={styles.flight}>
                {notification.details}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationMessage;