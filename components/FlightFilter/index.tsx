import React from "react";
import styles from "./filter.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import BackButton from "@/public/assets/images/backbutton.png";
import Link from "next/link";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPriceRange,
  setSortOption,
  setSelectedAirlines,
  setIsRefundable,
  resetFilter,
} from "@/redux/flight/flightSlice";

function Index({ onApplyFilter }) {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.flight.filter);

  const handlePriceRangeChange = (value) => {
    dispatch(setPriceRange(value));
  };

  const handleSortOptionChange = (option) => {
    dispatch(setSortOption(option));
  };

  const handleAirlineChange = (airline) => {
    const selectedAirlines = filterState.selectedAirlines;
    const updatedAirlines = selectedAirlines.includes(airline)
      ? selectedAirlines.filter((a) => a !== airline)
      : [...selectedAirlines, airline];
    dispatch(setSelectedAirlines(updatedAirlines));
  };

  const handleRefundableChange = () => {
    dispatch(setIsRefundable(!filterState.isRefundable));
  };

  const handleClear = () => {
    dispatch(resetFilter());
  };

  const handleApplyFilter = () => {
    onApplyFilter(filterState);
  };

  return (
    <div className={styles.general}>
      <div className={styles.flg}>
        <Link href="/flight">
          <Image src={BackButton} alt="" />
        </Link>
        <p className={styles.bold} style={{ fontWeight: "bold" }}>
          Filter
        </p>
        <p
          style={{
            cursor: "pointer",
            color: "#06BCE1",
          }}
        >
          <span
            onClick={handleClear}
            style={{ textDecoration: "none", color: "#06BCE1" }}
          >
            Clear <span>x</span>
          </span>
        </p>
      </div>
      <div
        className={styles.flg}
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <p style={{ fontWeight: "600" }}>Sort By</p>
        <IoIosArrowForward />
      </div>
      <div className={styles.rec}>
        <p
          style={{
            backgroundColor:
              filterState.sortOption === "recommended"
                ? "#06BCE1"
                : "transparent",
            color:
              filterState.sortOption === "recommended" ? "#fff" : "inherit",
            cursor: "pointer",
          }}
          onClick={() => handleSortOptionChange("recommended")}
        >
          Recommended
        </p>
        <p
          style={{
            backgroundColor:
              filterState.sortOption === "cheapest" ? "#06BCE1" : "transparent",
            color: filterState.sortOption === "cheapest" ? "#fff" : "inherit",
            cursor: "pointer",
          }}
          onClick={() => handleSortOptionChange("cheapest")}
        >
          Cheapest
        </p>
      </div>
      <div className={styles.rec}>
        <p
          style={{
            backgroundColor:
              filterState.sortOption === "fastest" ? "#06BCE1" : "transparent",
            color: filterState.sortOption === "fastest" ? "#fff" : "inherit",
            cursor: "pointer",
          }}
          onClick={() => handleSortOptionChange("fastest")}
        >
          Fastest
        </p>
      </div>
      <div style={{ border: "0.5px solid #BFBFBF" }}></div>
      <div className={styles.price} style={{ marginTop: "10px" }}>
        <span>
          <p style={{ fontWeight: "600" }}>Price</p>
          <IoIosArrowForward />
        </span>
        <div className={styles.priceSlider}>
          <Slider
            range
            min={0}
            max={200000}
            value={filterState.priceRange}
            onChange={handlePriceRangeChange}
          />
          <div className={styles.priceValues}>
            <span>₦{filterState.priceRange[0].toLocaleString()}</span>
            <span>₦{filterState.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
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
        {[
          "Air Peace",
          "Arik Air",
          "Dana Air",
          "Ibom Air",
          "United Nigeria",
        ].map((airline) => (
          <div key={airline} className={styles.airPeace}>
            <span>
              <input
                type="checkbox"
                checked={filterState.selectedAirlines.includes(airline)}
                onChange={() => handleAirlineChange(airline)}
              />
              <p>{airline}</p>
            </span>
            <span>
              From <span style={{ color: "#7A7A7A" }}>#160,000</span>
            </span>
          </div>
        ))}
      </div>
      <div style={{ border: "0.5px solid #BFBFBF" }}></div>
      <div>
        <div className={styles.flexibilty}>
          <p style={{ fontWeight: "600" }}>Flexibility</p>
          <IoIosArrowForward />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <span className={styles.refund}>
            <input
              type="checkbox"
              checked={filterState.isRefundable}
              onChange={handleRefundableChange}
            />
            <p>Refundable</p>
          </span>
        </div>
      </div>
      <div className={styles.filterDiv}>
        <Link href="/flight" style={{ textDecoration: "none", color: "black" }}>
          <span className={styles.cancel}>Cancel</span>
        </Link>
        <span className={styles.filter} onClick={handleApplyFilter}>
          Apply Filter
        </span>
      </div>
    </div>
  );
}

export default Index;
