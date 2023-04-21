import styles from './CardItem.module.css'

import { SingleSneakers } from '../../interface' 
import { useNavigate } from 'react-router-dom'
import AddToWishList from '../../AddToWishList/AddToWishList'

export interface ButtonsProps {
  obj: SingleSneakers;
  closeButton?: boolean;
}

function CardItem({obj,closeButton}: ButtonsProps){
    const navigate = useNavigate()
    
    const convertToDollars = obj.retail_price_cents /100
    const goToSinglePage = (id:number) => {
       
       navigate(`/sheakers/${id}`)
    }
    
    
  return( 
  <div className={styles.root} >
    <div className={styles.imgWrapp} onClick={() => goToSinglePage(obj.id)}>
        <img src={obj.pucture} alt={obj.brand_name} />

    </div>
    {
      closeButton ?  <AddToWishList id={obj.id}/> : ''
    }
   

    <div className={styles.cardBlockText}>
        <span className={styles.brandName}> {obj.brand_name}</span>
        <span className={styles.price}>${convertToDollars}</span>
        <div className={styles.name}>{obj.name}</div>

    </div>

  </div>
  )
}
export default CardItem