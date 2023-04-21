import styles from './First.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { useAppDispatch, useAppSelector } from '../redux/store';
import { startFetchingAll } from '../redux/slices/allProductSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'


const titleAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .5,
      duration: 1,

    }
  },
}
const buttonAnimation = {
  hidden: {
    
    opacity: 0,
  },
  visible: {
   
    opacity: 1,
    transition: {
      delay: 1,
      duration: .5,

    }
  },
}


const shoesAnimation = {
  hidden: {
    
    opacity: 0,
  },
  visible: {
   
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,

    }
  },
}

function FirstBlock(){
  const navigate = useNavigate()
  const images = [
    {url: 'https://image.goat.com/750/attachments/product_template_pictures/images/021/321/847/original/473391_00.png.png'},
    {url: 'https://image.goat.com/750/attachments/product_template_pictures/images/009/559/594/original/144690_00.png.png'},
    {url: 'https://image.goat.com/750/attachments/product_template_pictures/images/020/270/533/original/CD6578_507.png.png'},
    {url: 'https://image.goat.com/750/attachments/product_template_pictures/images/020/249/059/original/485842_00.png.png'},
  ]

  return( 
  <motion.div initial='hidden' viewport={{ once: true }} whileInView='visible'  className={styles.root}>
    <div className={styles.imageWrapper}>
        <img src='https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1380&t=st=1670914354~exp=1670914954~hmac=030b32ea6dea4d408ee91da37b6ba1a1beb263b12c01bbf6361b7a743af7b51a' alt='sdf' />
    </div>
    <div className={styles.titleWrap}>
     <motion.h1 variants={titleAnimation}>Design & high quality</motion.h1>
     <motion.h5 variants={titleAnimation}>Best react sneakers shop in the world</motion.h5>
     <motion.button variants={buttonAnimation} className={styles.but} onClick={() => navigate('/store')}>Open Store</motion.button>
     <motion.button variants={buttonAnimation} className={styles.but}>Explore More</motion.button>
    </div>
    <motion.div className={styles.shoesWrapper} variants={shoesAnimation}>
      <SimpleImageSlider
        width={500}
        height={504}
        images={images}
        showBullets={false}
        showNavs={true}
        bgColor={'transparent'}
        autoPlay={true}
        autoPlayDelay={5.0}
        navSize={30}
        navMargin={-1}
      />
    </motion.div>
  </motion.div>
  )
}
export default FirstBlock