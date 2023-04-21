import styles from './NewArrivals.module.css'
import axios from 'axios'
import { useState, useMemo, useEffect } from 'react'
import CardItem from './CardItem/CardItem';
import { SingleSneakers } from '../interface';
import { useActionData } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { startLimitFetching } from '../redux/slices/LimitSlice';




function NewArrivals(){
    
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(startLimitFetching(4))

    }, [dispatch])

    const arrivalsCard = useAppSelector(state => state.limitSlice.result)
    
   
  return( 
  <div>
    <h2>New arrivals</h2>
    <div className={styles.arrivalsBox}>
        {
            arrivalsCard.length && arrivalsCard.map((el) => <CardItem key={el.id} obj={el} closeButton={true}/>)
        }
    </div>
  </div>
  )
}
export default NewArrivals