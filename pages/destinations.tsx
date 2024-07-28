/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import styles from "../styles/destinations.module.css";
import Navbar from "../components/NavbarSecond/navbar";
import threeImg from "@/public/assets/images/threepictures.png";
import Lagos from "@/public/assets/images/lagosIsland.png";
import Akure from "@/public/assets/images/akure.png";
import Ibadan from "@/public/assets/images/ibadan.png";
import portHarcout from "@/public/assets/images/portharcourtBoys.png";
import Subscribe from "@/public/assets/images/Paper Plane.png";
import cloud from "@/public/assets/svg/ffDown.svg";
import locationIcon from "@/public/assets/svg/locationpin.svg";
import flyIcon from "@/public/assets/svg/buttonFly.svg";
import calendarIcon from "@/public/assets/svg/date.svg";
import Prev from "@/public/assets/images/prev.png";
import Next from "@/public/assets/images/Next.png";
import final1 from "@/public/assets/images/uptodate1.png";
import final2 from "@/public/assets/images/uptodate2.png";
import final3 from "@/public/assets/images/uptodate3.png";
import Footer from "../components/Footer/index";
import MobileNav from "../components/MobileNavBar";

import Menu from "@/public/assets/images/menu 1.png";
import Quote from "@/public/assets/svg/Payment.svg";
import flyBudu2 from "@/public/assets/images/flybuduLogo2.png";
import { MobileNavScreen } from "@/components/ManageBookingNavBar";
import QuoteBar from "@/components/Qoute/quote";
import Logo from "@/public/assets/images/flybuduLogo.png";
import avatar from "@/public/assets/images/Avatar.png";
import WhiteLogo from "@/public/assets/images/whiteFlybudu.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Destinations() {
  const MobileNavButtons = [
    {
      id: 1,
      title: "Featured Flights",
      icon: flyIcon,
      Route: "featuredflights",
      class: "black",
    },
    {
      id: 2,
      title: "Destinations",
      class: "rgba(6, 188, 225, 1)",
      icon: locationIcon,
      Route: "destinations",
    },
    {
      id: 3,
      title: "Manage Booking",
      icon: calendarIcon,
      Route: "managebooking",
      class: "black",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.general}>
      <div>
        <div className={styles.NavtwoContainer}>
          <div className={styles.navcon}>
            <div className={styles.navbarWrapBlack}>
              <div
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={handleLogoClick}
              >
                {isMobile ? (
                  <Image className={styles.flybudu} src={flyBudu2} alt="" />
                ) : (
                  <Image className={styles.flybudu} src={Logo} alt="" />
                )}
              </div>

              <div>
                <div className={styles.navbar}>
                  <Link href="/flight">flight</Link>
                  <Link className={styles.active} href="/destinations">
                    Destinations
                  </Link>
                  <Link href="/featuredflights">Featured Flights</Link>
                  <Link href="/contacts">Contact</Link>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search Flights"
                className={styles.searchInput}
              />
              <div className={styles.quoteWrap}>
                <div
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                  className={styles.quote}
                >
                  <span>Corporate Booking</span>
                  <span>
                    <Image src={Quote} alt="" />
                  </span>
                </div>
                <Image alt="" className={styles.avatar} src={avatar} />
                {isMobile ? (
                  <Image
                    src={WhiteLogo}
                    alt=""
                    className={styles.quoteImg}
                    onClick={() => setOpenMenu(!openMenu)}
                  />
                ) : (
                  <Image
                    src={Menu}
                    alt=""
                    onClick={() => setOpenMenu(!openMenu)}
                  />
                )}
              </div>
            </div>
          </div>

          {openMenu && <MobileNavScreen onClick={() => setOpenMenu(false)} />}
        </div>
        {isOpen && <QuoteBar setIsOpen={setIsOpen} />}
      </div>

      <div className={styles.backgroundDiv}>
        <div className={styles.firstPart}>
          <span>DESTINATIONS</span>
          <p>
            Explore the diverse beauty of Nigeria through our curated selection
            of destinations. From bustling cities to serene landscapes, embark
            on a journey to discover the rich culture and breathtaking sights
            our country has to offer.
          </p>
        </div>
        <div className={styles.secondPart}>
          <div className={styles.blurDiv}>
            <p
              style={{ fontFamily: "NeueHaasDisplayBold" }}
              className={styles.from}
            >
              From
            </p>
            <span className={styles.amount}>&#8358;58,900</span>
            <p
              style={{ fontFamily: "NeueHaasDisplayBold" }}
              className={styles.japa}
            >
              Explore Lagos to Abuja Flights
            </p>
            <div className={styles.pictureText}>
              <Image alt="" src={threeImg} />
              <div>
                <p style={{ fontFamily: "NeueHaasDisplayBold" }}>5000+</p>
                <p>Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.HomeSectionFour}>
          <div className={`${styles.card} ${styles.cardOne}`}>
            <div className={styles.jos}>
              <p className={styles.state} style={{ color: "#fff" }}>
                JOS
              </p>
              <p className={styles.overflow}>
                Discover the cool climate and stunning rock formations of Jos.
                Known as the "Switzerland of Nigeria," Jos offers a unique blend
                of natural beauty and rich cultural heritage. Explore the Jos
                Wildlife Park and experience the warmth of the local community.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardTwo}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(156, 54, 7, 1)" }}
              >
                Akure
              </p>
              <Image src={Akure} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Experience the charm of Akure, the capital of Ondo State. Known
                for its lush forests and ancient palaces, Akure offers a perfect
                blend of nature and tradition. Visit the Idanre Hills for
                breathtaking views and explore the vibrant local markets.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardThree}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(6, 188, 225, 1)" }}
              >
                LAGOS
              </p>
              <Image src={Lagos} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow} style={{ color: "#fff" }}>
                Immerse yourself in the vibrant energy of Lagos, Nigeria's
                largest city. From the bustling markets of Balogun to the serene
                beaches of Tarkwa Bay, Lagos offers a diverse range of
                experiences. Explore the rich history at the National Museum and
                enjoy the nightlife in Victoria Island.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardFour}`}>
            <div className={styles.jos}>
              <p className={styles.state}>CALABAR</p>
              <p className={styles.overflow}>
                Discover the beauty of Calabar, known as the tourism capital of
                Nigeria. Experience the famous Calabar Carnival, visit the Slave
                History Museum, and enjoy the city's renowned cuisines. Don't
                miss the Obudu Cattle Ranch for a refreshing mountain retreat.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardFive}`}>
            <div className={styles.jos}>
              <p
                className={styles.state}
                style={{ color: "rgba(172, 130, 0, 1)" }}
              >
                ABUJA
              </p>
              <p className={styles.overflow}>
                Explore Abuja, the capital city of Nigeria. Known for its modern
                architecture and well-planned layout, Abuja offers attractions
                like the iconic Aso Rock, the National Mosque, and the Arts and
                Culture Center. Enjoy the city's parks and gardens for a
                peaceful retreat.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardSix}`}>
            <div className={styles.eko}>
              <p className={styles.state}>IBADAN</p>

              <Image src={Ibadan} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Discover Ibadan, the largest city in West Africa. Known for its
                rich Yoruba heritage, Ibadan offers attractions like the ancient
                Mapo Hall, the University of Ibadan Zoological Garden, and the
                bustling Oje Market. Experience the city's unique blend of
                tradition and modernity.
              </p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardFour}`}>
            <div className={styles.jos}>
              <p className={styles.state}>ENUGU</p>
              <p className={styles.overflow}>
                Explore Enugu, the coal city of Nigeria. Known for its rolling
                hills and coal mines, Enugu offers a unique blend of natural
                beauty and industrial heritage. Visit the Nike Lake Resort,
                explore the Awhum Waterfall, and experience the rich Igbo
                culture at the National Museum of Unity.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardEight}`}>
            <div className={styles.jos}>
              <p className={styles.state} style={{ color: "#fff" }}>
                KANO
              </p>
              <p className={styles.overflow}>
                Discover the ancient city of Kano, a center of commerce and
                Islamic culture. Explore the historic Gidan Makama Museum, visit
                the colorful Kurmi Market, and see the impressive Kano City
                Walls. Experience the unique blend of tradition and modernity in
                this vibrant northern city.
              </p>
            </div>
          </div>

          <div className={` ${styles.cardSeven}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(156, 54, 7, 1)" }}
              >
                PORT HARCOURT
              </p>
              <Image src={portHarcout} alt="lagos" className={styles.PHImage} />
              <p className={styles.overflow}>
                Experience the vibrant city of Port Harcourt, known as Nigeria's
                Garden City. Enjoy the beautiful beaches, visit the Port
                Harcourt Tourist Beach, and explore the lively waterfront. Don't
                miss the opportunity to taste the famous Port Harcourt cuisine
                and experience the city's nightlife.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardNine}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(156, 54, 7, 1)" }}
              >
                OWERRI
              </p>
              <Image src={Akure} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow}>
                Discover Owerri, the entertainment capital of Eastern Nigeria.
                Known for its hospitality and vibrant nightlife, Owerri offers
                attractions like the Mbari Cultural Center, Oguta Lake, and the
                lively Eke Ukwu Owerri Market. Experience the rich Igbo culture
                and warm hospitality of the city.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardTen}`}>
            <div className={styles.eko}>
              <p
                className={styles.state}
                style={{ color: "rgba(6, 188, 225, 1)" }}
              >
                KADUNA
              </p>
              <Image src={Lagos} alt="lagos" className={styles.LagosImage} />
              <p className={styles.overflow} style={{ color: "#fff" }}>
                Explore Kaduna, a city rich in history and cultural diversity.
                Visit the Kajuru Castle for a unique architectural experience,
                enjoy the serenity of the Matsirga Waterfalls, and learn about
                local crafts at the Kaduna National Museum. Experience the blend
                of tradition and modernity in this northern Nigerian city.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tooMuch}>
          <Image className={styles.cloud} src={cloud} alt="" />
          <div className={styles.buttonDiv}>
            <button className={styles.prev}>
              {" "}
              <Image src={Prev} alt="" /> Prev{" "}
            </button>
            <button className={styles.next}>
              Next <Image src={Next} alt="" />
            </button>
          </div>
          <div>
            <span>
              Page <span className={styles.special}>1</span> Of 2
            </span>
          </div>
        </div>
        <div className={styles.final}>
          <div className={styles.imageWrapFinal}>
            <Image src={final1} alt="" className={styles.image1} />
            <Image src={final2} alt="" className={styles.image2} />
            <Image src={final3} alt="" className={styles.image3} />
          </div>
          <div className={styles.uptoDate}>
            <p className={styles.be}>Be Up To Date</p>
            <p className={styles.sub}>
              Subscribe to our newsletter and never miss our latest news and
              promotions. Our newsletter is sent once a week, every Tuesday
            </p>
            <div className={styles.subscribe}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Email Address"
                className={styles.subscribeInput}
              />
              <button className={styles.subscribeButton}>
                {isMobile ? (
                  <Image src={Subscribe} alt="" />
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.navba}>
          <div className={styles.buttondiv}>
            {MobileNavButtons.map((item) => (
              <Link key={item.id} href={`/${item.Route}`}>
                <button className={styles.buttons}>
                  <div className={styles.img}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <p style={{ color: `${item.class}` }}>{item.title}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Destinations;
