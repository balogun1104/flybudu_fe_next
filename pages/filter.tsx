import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/filter.module.css";
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
import { RootState } from "@/redux/store";
import axiosInstance from "@/redux/api";
import rangeIcon from "@/public/assets/images/fliterPriceIcon.png";

interface Airline {
  id: number;
  company: string;
  code: string;
  logo: string;
  region: string;
  created_at: string;
  updated_at: string;
  luggage10: string;
  luggage15: string;
  luggage20: string;
}

function Filter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [airlines, setAirlines] = useState<Airline[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterState = useSelector((state: RootState) => state.flight.filter);

  const handlePriceRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      dispatch(setPriceRange(value as [number, number]));
    }
  };

  const handleSortOptionChange = (option: string) => {
    dispatch(setSortOption(option));
  };

  const handleAirlineChange = (airline: string) => {
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
    router.push("/flight");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        const response = await axiosInstance.get("airlines/list");
        setAirlines(response.data);
      } catch (error) {
        console.error("Error fetching airlines:", error);
      }
    };

    fetchAirlines();
  }, []);

  const filteredAirlines = airlines.filter((airline) =>
    airline.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.general}>
      <div className={`${styles.flgtop} ${styles.shadowBottom}`}>
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
            Clear <span className={styles.x}> x</span>
          </span>
        </p>
      </div>

      <div className={styles.fliterSection}>
        <div className={styles.flg}>
          <p style={{ fontWeight: "600" }}>Status</p>
          <IoIosArrowForward color="#8D8E8D" fontWeight="900" />
        </div>

        <div className={styles.rec}>
          <button
            className={`${styles.sortButton} ${
              filterState.sortOption === "recommended" ? styles.active : ""
            }`}
            onClick={() => handleSortOptionChange("recommended")}
          >
            Recommended
          </button>
          <button
            className={`${styles.sortButton} ${
              filterState.sortOption === "cheapest" ? styles.active : ""
            }`}
            onClick={() => handleSortOptionChange("cheapest")}
          >
            Cheapest
          </button>
          <button
            className={`${styles.sortButton} ${
              filterState.sortOption === "fastest" ? styles.active : ""
            }`}
            onClick={() => handleSortOptionChange("fastest")}
          >
            Fastest
          </button>
        </div>

        <div style={{ border: "0.5px solid #BFBFBF" }}></div>
        <div className={styles.price} style={{ marginTop: "13px" }}>
          <span className={styles.priceRange}>
            <p style={{ fontWeight: "600" }}>Price</p>
            <IoIosArrowForward color="#8D8E8D" fontWeight="900" />
          </span>
          <div className={styles.priceSlider}>
            <div className={styles.priceRangeSlider}>
              <Slider
                range
                className={styles.priceRangeSlider}
                max={200000}
                value={filterState.priceRange}
                onChange={handlePriceRangeChange}
                styles={{
                  handle: {
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    opacity: 1,
                    width: "30px",
                    height: "30px",
                  },
                }}
                handleRender={(node, handleProps) => {
                  return (
                    <div
                      {...node.props}
                      style={{
                        ...node.props.style,
                        backgroundImage: `url(${
                          handleProps.index === 0
                            ? rangeIcon.src
                            : rangeIcon.src
                        })`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        bottom: "-6px",
                        position: "absolute",
                      }}
                    />
                  );
                }}
              />
            </div>
            <div className={styles.priceValues}>
              <span className={styles.priceValuesNGN}>
                ₦{filterState.priceRange[0].toLocaleString()}
              </span>
              <span className={styles.priceValuesNGN}>
                ₦{filterState.priceRange[1].toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <div style={{ border: "0.5px solid #BFBFBF" }}></div>
        <div className={styles.airline}>
          <span className={styles.airlineHead}>
            <p style={{ fontWeight: "600" }}>Airline</p>
            <IoIosArrowForward color="#8D8E8D" fontWeight="900" />
          </span>
          <span className={styles.airlineSearch}>
            <CiSearch
              style={{ padding: "6px 0" }}
              color="#8D8E8D"
              fontSize={30}
            />
            <input
              type="text"
              placeholder="Search Airline"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </span>
          {filteredAirlines.map((airline) => (
            <div key={airline.id} className={styles.airPeace}>
              <span>
                <input
                  type="checkbox"
                  checked={filterState.selectedAirlines.includes(
                    airline.company
                  )}
                  onChange={() => handleAirlineChange(airline.company)}
                />
                <p className={styles.air}>{airline.company}</p>
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
          <Link
            href="/flight"
            style={{ textDecoration: "none", color: "#BFBFBF" }}
          >
            <span className={styles.cancel}>Cancel</span>
          </Link>
          <span className={styles.filter} onClick={handleApplyFilter}>
            Apply Filter
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
