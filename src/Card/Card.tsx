import { startRemoveFromCard } from "../redux/slices/cardSlice"
import { useAppDispatch, useAppSelector } from "../redux/store"
import styles from "./Card.module.css"
import ClearCard from "./ClearCard"

function Card(){
    const cardItems = useAppSelector(state => state.cardSlice.card)
    console.log('carditemsc', cardItems)
    const dispatch = useAppDispatch()

    const removeItem = (id: number) => {
        dispatch(startRemoveFromCard(id))
    }
  return( 
  <div className={styles.card}>
    {cardItems.length ? <h1>Card</h1> : ''}
        <div className={styles.cardWrapper}>
            {
        cardItems.length ? cardItems.map((el, i) => (
            
                <div className={styles.cardItem} key={el.id + el.name+ i}>
                    <div className={styles.imgWrapper}> <img src={el.pucture} alt={el.brand_name} /> </div>
                    <div className={styles.titleWrapper}>
                        <div className={styles.brandName}>{el.name}</div>               
                        <span className={styles.size}>Size: {el.size_range}</span>
                        <span className={styles.price}>Price: ${el.retail_price_cents / 100}</span>
                        <div className={styles.buttonWrap}>
                            <button className={styles.close} onClick={() => removeItem(el.id)}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M292.7 840h438.6l24.2-512h-487z"></path><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"></path></svg></button>
                            <button className={styles.buy}>Buy Now</button>
                        </div>

                    </div>
                    
                
            </div>
        )) : <ClearCard/>
}
        </div>
  </div>
  )
}
export default Card