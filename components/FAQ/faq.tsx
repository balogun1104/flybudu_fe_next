import { useState } from "react";
import styles from "../HomeSectionFive/HomeSectionFive.module.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const FAQuestion = [
  {
    id: 1,
    question: "How do I book a trip with your travel agency?"
  },
  {
    id: 2,
    question: "What payment methods do you accept?"
  },
  {
    id: 3,
    question: "Can I customize my travel itinerary?"
  },
  {
    id: 4,
    question: "What is your cancellation policy?"
  }
];

const FAQAnswers = [
  {
    id: 1,
    answer: "Booking a trip with us is simple! Start by browsing our destinations and selecting your preferred package. Once you've made your choice, click the ‘Book Now’ button to secure your spot. If you need help, feel free to call us or visit our office for personalized service. We’re here to make your travel planning hassle-free!"
  },
  {
    id: 2,
    answer: "We accept various payment methods, including credit/debit cards, bank transfers, and popular digital wallets. You can choose the option that's most convenient for you when completing your booking."
  },
  {
    id: 3,
    answer: "Absolutely! We offer customizable travel itineraries to suit your preferences. Whether you want to add extra activities, extend your stay, or choose specific accommodations, our team will work with you to create your perfect trip."
  },
  {
    id: 4,
    answer: "Our cancellation policy varies depending on the package you choose. Generally, cancellations made more than 30 days before departure are fully refundable. For detailed information, please review the specific terms and conditions for your booking or contact our support team."
  }
];

function Faq() {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className={styles.bookflight}>
      {FAQuestion.map((item) => {
        const isOpen = item.id === openQuestionId;
        const ButtonIcon = isOpen ? IoIosArrowDown : IoIosArrowForward;

        return (
          <div key={item.id} className={styles.trip}>
            <div className={styles.questionWrapper}  onClick={() => toggleQuestion(item.id)}>
              <p className={styles.bookp}>
                {item.question}
              </p>
              <button
                style={{ background: "rgba(255, 255, 255, 0.1)", border: "none" }}
              >
                <ButtonIcon color="black" />
              </button>
            </div>
            {isOpen && (
              <div className={styles.answer}>
                <p className={styles.boldText}>{FAQAnswers.find(answer => answer.id === item.id)?.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
