import React from "react";
import styles from "./notificationmessage.module.css";
import message from "@/public/assets/images/message (1) 1.png";
import greenAfrica from "@/public/assets/images/greenAfrica.png";
import adobe from "@/public/assets/images/adobe 1.png";
import Image from "next/image";
function NotificationMessge() {
  return (
    <div className={styles.general}>
      <div className={styles.mother}>
        <div className={styles.firstDiv}>
          <span>14:25</span>
          <Image alt="lolipop" src={message} />
          <div className={styles.greenDiv}>
            {" "}
            <Image
              alt=""
              width="40"
              className={styles.green}
              src={greenAfrica}
            />{" "}
            <span> Green Africa</span>
          </div>
          <div className={styles.columnDiv}>
            <span className={styles.bold}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className={styles.imageDiv}>
              <Image alt="" src={adobe} />
              <span className={styles.flight}>
                {" "}
                Flight Ticket sfdkjfkgjdkgjjhjjfkffffffgdfdggdrewewrdr
              </span>
            </div>
          </div>
        </div>
        <div className={styles.firstDiv}>
          <span>14:25</span>
          <Image alt="lolipop" src={message} />
          <div className={styles.greenDiv}>
            {" "}
            <Image
              alt=""
              width="40"
              className={styles.green}
              src={greenAfrica}
            />{" "}
            <span> Green Africa</span>
          </div>
          <div className={styles.columnDiv}>
            <span className={styles.bold}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className={styles.imageDiv}>
              <Image alt="" src={adobe} />
              <span className={styles.flight}>
                {" "}
                Flight Ticket sfdkjfkgjdkgjjhjjfkffffffgdfdggdrewewrdr
              </span>
            </div>
          </div>
        </div>
        <div className={styles.firstDiv}>
          <span>14:25</span>
          <Image alt="lolipop" src={message} />
          <div className={styles.greenDiv}>
            {" "}
            <Image
              alt=""
              width="40"
              className={styles.green}
              src={greenAfrica}
            />{" "}
            <span> Green Africa</span>
          </div>
          <div className={styles.columnDiv}>
            <span className={styles.bold}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className={styles.imageDiv}>
              <Image alt="" src={adobe} />
              <span className={styles.flight}>
                {" "}
                Flight Ticket sfdkjfkgjdkgjjhjjfkffffffgdfdggdrewewrdr
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationMessge;
