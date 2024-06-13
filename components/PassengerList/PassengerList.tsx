import React from 'react'
import styles from "./passengerlist.module.css"
import {  useNavigate } from 'react-router-dom';
function PassengerList() {
    function HeroiconsOutlineDotsVertical(props) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
            ></path>
          </svg>
        );
      }

      const navigate = useNavigate()
  return (
    <div className={styles.general}>
   <div className={styles.mother}>
    
   <table>
  
  <thead className={styles.none}>
    <tr onClick={()=> {navigate("/passenger-details")}}>
      <th>S/N</th>
      <th>PASSENGER</th>
      <th>EMAIL</th>
      <th>PHONE NUMBER</th>
    </tr>
  </thead>
  <tbody>
    <tr onClick={()=> {navigate("/passenger-details")}}>
      <td>01</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr>
    <tr onClick={()=> {navigate("/passenger-details")}}>
      <td>02</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr> <tr onClick={()=> {navigate("/passenger-details")}}>
      <td>03</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr> <tr onClick={()=> {navigate("/passenger-details")}}>
      <td>04</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr> <tr onClick={()=> {navigate("/passenger-details")}}>
      <td>01</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr> <tr onClick={()=> {navigate("/passenger-details")}}>
      <td>05</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr><tr onClick={()=> {navigate("/passenger-details")}}>
      <td>06</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr><tr onClick={()=> {navigate("/passenger-details")}}>
      <td>07</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr><tr onClick={()=> {navigate("/passenger-details")}}>
      <td>08</td>
      <td> <span className={styles.nameCircle}>AG</span> Unknown User</td>
      <td className={styles.none}>unknown@gmail.com.com</td>
      <td className={styles.none}>080xxxxxxx</td>
      <td colspan="4" className={styles.none}> <HeroiconsOutlineDotsVertical/></td>
    </tr>

  </tbody>
</table>

    
       </div>
    </div>
  )
}

export default PassengerList
