import { FC, useState} from 'react'
import styles from "../HomeSectionFive/HomeSectionFive.module.css"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";



interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void; 
}


const DetailsModal: FC<DetailsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.open}>
      <p>
        Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
        metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
        tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
        dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit
        amet feugiat lectus
      </p>
    </div>
  );
};

  
function Faq() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
     setIsModalOpen(!isModalOpen);
   };
   const ButtonIcon = isModalOpen ? IoIosArrowDown : IoIosArrowForward;
 
  return (
            <div className={styles.bookflight}>
             <div onClick={toggleModal}  className={styles.trip}>
             <p className={styles.bookp}>
                How do I book a trip with your travel agency?
              </p>
              <button style={{background: "rgba(255, 255, 255, 0.1)", border:"none"}}>
                <span>
                <ButtonIcon/>
                </span>
              </button>
             </div>

             <DetailsModal isOpen={isModalOpen} onClose={toggleModal} />
            </div>
          

         
  )
}

export default Faq
