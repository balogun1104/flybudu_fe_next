import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./homeSectionThree.module.css";
import fullHair from "@/public/assets/images/fullHair.png";
import motion from "@/public/assets/images/flybuduLogo2.png";
import overLay from "@/public/assets/images/ovalayHair.png";
import house from "@/public/assets/svg/houseOTS.svg";
import Image, { StaticImageData } from "next/image";

// Define the SliderSettings type
interface SliderSettings {
  dots?: boolean;
  autoplay?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplaySpeed?: number;
  cssEase?: string;
  arrows?: boolean;
  vertical?: boolean;
  verticalSwiping?: boolean;
  swipeToSlide?: boolean;
  touchMove?: boolean;
  draggable?: boolean;
  focusOnSelect?: boolean;
  pauseOnHover?: boolean;
}

interface TravelStory {
  image: StaticImageData;
  title: string;
  description: string;
}

interface TravelStoryCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const TravelStoryCard: React.FC<TravelStoryCardProps> = ({
  image,
  title,
  description,
}) => (
  <div className={styles.card}>
    <Image src={image} alt={title} className={styles.cardImage} />
    <div>
      <h5 className={styles.green}>{title}</h5>
      <p className={styles.yorem}>{description}</p>
    </div>
  </div>
);

const HomeSectionThree: React.FC = () => {
  const settingsSlider1: SliderSettings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 5000,
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

  const settingsSlider2: SliderSettings = {
    ...settingsSlider1,
    speed: 3000,
  };

  const travelStories: TravelStory[] = [
    {
      image: motion,
      title: "Lagos to Abuja Adventure",
      description:
        "Discover the vibrant culture and bustling energy of Nigeria's two major cities in this unforgettable journey.",
    },
    {
      image: motion,
      title: "Exploring Calabar's Heritage",
      description:
        "Immerse yourself in the rich history and beautiful landscapes of Calabar, a hidden gem in Nigeria's southeast.",
    },
    {
      image: motion,
      title: "Kano's Ancient Wonders",
      description:
        "Step back in time as you explore the ancient city walls and traditional markets of Kano in northern Nigeria.",
    },
    {
      image: motion,
      title: "Port Harcourt's Coastal Charm",
      description:
        "Experience the coastal beauty and warm hospitality of Port Harcourt, Nigeria's garden city.",
    },
  ];

  return (
    <div className={styles.HomeSectionThree}>
      <div className={styles.homeSect}>
        <h2 className={styles.our}>Our Travel Stories</h2>
        <Image
          src={fullHair}
          alt="Travel experiences"
          className={styles.fullHair}
        />
        <div className={styles.cardWrapper}>
          <Slider className={styles.slider} {...settingsSlider1}>
            {travelStories.map((story, index) => (
              <TravelStoryCard key={index} {...story} />
            ))}
          </Slider>

          <Slider className={styles.slider} {...settingsSlider2}>
            {travelStories.map((story, index) => (
              <TravelStoryCard key={index + 4} {...story} />
            ))}
          </Slider>
        </div>

        <Image
          src={overLay}
          alt="Decorative overlay"
          className={styles.overLay}
        />
        <Image src={house} alt="House icon" className={styles.house} />
      </div>
    </div>
  );
};

export default HomeSectionThree;
