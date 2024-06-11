import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./homeSectionThree.module.css";
import fullHair from "@/public/assets/images/fullHair.png";
import motion from "@/public/assets/images/motionImage.png";
import overLay from "@/public/assets/images/ovalayHair.png";
import house from "@/public/assets/svg/houseOTS.svg";
import Image from "next/image";


const HomeSectionThree = () => {
  const settingsSlider1 = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 5000, // Speed for slider 1 (5 seconds)
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
    focusOnSelect: false,
    pauseOnHover: false,
  };

  const settingsSlider2 = {
    dots: false,
    infinite: true,
    speed: 3000, // Speed for slider 2 (3 seconds)
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
    focusOnSelect: false,
    pauseOnHover: false,
  };

  return (
    <div className={styles.HomeSectionThree}>
      <div className={styles.homeSect}>
        <p className={styles.our}>Our Travel Stories</p>
        <Image src={fullHair} alt="full HD" className={styles.fullHair} />
        <div className={styles.cardWrapper}>
          <Slider className={styles.slider} {...settingsSlider1}>
            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </Slider>

          <Slider className={styles.slider}  {...settingsSlider2}>
            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <Image src={motion} alt="motion" className={styles.cardImage} />
              <div>
                <h5 className={styles.green}>Green Africa</h5>
                <p className={styles.yorem}>
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem
                  ipsum dolor sit cons ectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <Image src={overLay} alt="full HD" className={styles.overLay} />
        <Image src={house} alt="full HD" className={styles.house} />
      </div>
    </div>
  );
};

export default HomeSectionThree;
