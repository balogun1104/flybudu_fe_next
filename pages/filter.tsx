import React from "react";
import styles from "@/styles/filter.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import BackButton from "@/public/assets/images/backbutton.png";
import Link from "next/link";
import Image from "next/image";

interface FilterProps {
  onClick: () => void;
}

function Filter({ onClick }: FilterProps) {
  return (
    <div className={styles.general}>
      <div className={styles.flg}>
        <Link href="/flight">
          {" "}
          <Image src={BackButton} alt="" />
        </Link>
        <p
          className={styles.bold}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "bold",
          }}
        >
          {/* <Image src={Filter} alt="" /> */}
          Filter
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            color: "#06BCE1",
          }}
        >
          <Link
            href="/flight"
            style={{ textDecoration: "none", color: "#06BCE1" }}
          >
            {" "}
            Clear <span onClick={onClick}>x</span>
          </Link>
        </p>
      </div>
      <div
        className={styles.flg}
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <p style={{ fontWeight: "600" }}>Status</p>
        <IoIosArrowForward />
      </div>
      <div className={styles.rec}>
        <p style={{ backgroundColor: "#06BCE1", color: "#fff" }}>Reconmmeded</p>
        <p>Cheapest</p>
      </div>
      <div className={styles.rec}>
        <p>Fastest</p>
        <p>Rating</p>
      </div>
      <div style={{ border: "0.5px solid #BFBFBF" }}></div>
      <div className={styles.price} style={{ marginTop: "10px" }}>
        <span>
          <p style={{ fontWeight: "600" }}>Price</p>
          <IoIosArrowForward />
        </span>
        {/* <SliderControl/> */}
      </div>
      <div style={{ border: "0.5px solid #BFBFBF" }}></div>
      <div className={styles.airline}>
        <span className={styles.airlineHead}>
          <p style={{ fontWeight: "600" }}>Airline</p>
          <IoIosArrowForward />
        </span>
        <span className={styles.airlineSearch}>
          <CiSearch style={{ padding: "6px 0" }} />
          <input type="text" placeholder="search airline" />
        </span>
        <div className={styles.airPeace}>
          <span>
            <input type="checkbox" name="" id="" />
            <p>Air Peace</p>
          </span>
          <span>
            From <span style={{ color: "#7A7A7A" }}>#160,000</span>
          </span>
        </div>
        <div className={styles.airPeace}>
          <span>
            <input type="checkbox" name="" id="" />
            <p>Air Peace</p>
          </span>
          <span>From #160,000</span>
        </div>
        <div className={styles.airPeace}>
          <span>
            <input type="checkbox" name="" id="" />
            <p>Air Peace</p>
          </span>
          <span>From #160,000</span>
        </div>
        <div className={styles.airPeace}>
          <span>
            <input type="checkbox" name="" id="" />
            <p>Air Peace</p>
          </span>
          <span>From #160,000</span>
        </div>
        <div className={styles.airPeace}>
          <span>
            <input type="checkbox" name="" id="" />
            <p>Air Peace</p>
          </span>
          <span>From #160,000</span>
        </div>
      </div>
      <div style={{ border: "0.5px solid #BFBFBF" }}></div>
      <div>
        <div className={styles.flexibilty}>
          <p style={{ fontWeight: "600" }}>Flexibility</p>
          <IoIosArrowForward />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <span className={styles.refund}>
            <input type="checkbox" name="" id="" />
            <p>Refundable</p>
          </span>

          <span className={styles.refund}>
            <input type="checkbox" name="" id="" />
            <p>Non Refundable</p>
          </span>
        </div>
      </div>
      <div className={styles.filterDiv}>
        <Link href="/flight" style={{ textDecoration: "none", color: "black" }}>
          <span className={styles.cancel}>Cancel</span>
        </Link>
        <Link
          href="/selectflight"
          style={{ textDecoration: "none", color: "black" }}
        >
          <span className={styles.filter}> Apply Filter</span>
        </Link>
      </div>
    </div>
  );
}

export default Filter;
