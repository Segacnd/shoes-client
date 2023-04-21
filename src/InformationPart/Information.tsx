import {  useState } from "react";
import {motion} from 'framer-motion'
import styles from "./Information.module.css";

const textTitleAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}
const textSecondTitleAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {delay: .5}
  },
}



function Information() {
  const [open, setOpen] = useState<boolean>(false);

  const specialCard = [
    {pucture: 'https://image.goat.com/750/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png', id: 123},
    {pucture: 'https://image.goat.com/750/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png', id: 321},
  ]

  return (
    <motion.div initial='hidden' whileInView='visible' className={styles.container}>
      <div className={styles.redpart}>
        <motion.p variants={textTitleAnimation} className={styles.firstTitle}>We are ready to help</motion.p>
        <motion.p variants={textSecondTitleAnimation} className={styles.secondTitle} >For Best Choose</motion.p>
        <p className={styles.thirdTitle}>
          Our goth team help choose the best sneakers for you and your family. Contact us by
          pressing the button below.
        </p>
        <button onClick={() => setOpen(!open)} className={styles.button}>Contact Us</button>
        {
          open ? 
          <>
           <input type="text" className={styles.contact} placeholder='email@qwe.com'/>
          <button className={styles.send}>send</button>
          </> : ''
        }
        
      </div>
      <div className={styles.whitepart}>
        <div className={styles.treygolnikWhite}></div>
        <div className={styles.treygolnikRed}></div>
        <div className={styles.imageWrapper}>
          {specialCard.length &&
            specialCard.map((el, i) => (
              <motion.div className={`${styles.image}`} key={el.id}>
                <img src={el.pucture} alt="wer" />
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
export default Information;
