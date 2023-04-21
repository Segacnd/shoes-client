import styles from "./GendersLink.module.css";
import { motion, useMotionValue, useScroll,useVelocity,useSpring,useTransform, useViewportScroll } from "framer-motion";



function GenderLink() {
  const {scrollY} = useScroll();  
  const offsetY = [0, 1500]
  const changeSize = [-300, 500]
  const left = useTransform(scrollY, offsetY,changeSize)

  return (
    <motion.div initial='hidden' whileInView='visible' className={styles.root}>
      <motion.h1 style={{left,}}  className={styles.title}>
        choice is yours
      </motion.h1>
      <div className={styles.for}>
        <img
          src="https://image.goat.com/750/attachments/product_template_pictures/images/016/152/710/original/402491_00.png.png"
          alt=""
        />
        <h3 className={styles.forEveryone}>For Him</h3>
      </div>
      <div className={styles.for}>
        <img
          src="https://image.goat.com/750/attachments/product_template_pictures/images/021/357/907/original/478963_00.png.png"
          alt=""
        />
        <h3 className={styles.forEveryon}>For Her</h3>
      </div>
    </motion.div>
  );
}
export default GenderLink;
