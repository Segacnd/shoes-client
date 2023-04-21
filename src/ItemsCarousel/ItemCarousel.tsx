import { useEffect, useMemo, useState } from "react"
import { startLimitFetching } from "../redux/slices/LimitSlice"
import { useAppDispatch, useAppSelector } from "../redux/store"
import Item from "./Item"

function ItemCarousel(){
    const [currentItem, setCurrentItem] = useState<number>(0)
    const itemList =[1,2,3]

    
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(startLimitFetching(4))

  }, [dispatch])
    const carouselItems = useAppSelector(state => state.limitSlice.result)
    
    const memoizeCarouselItems = useMemo(() => {
      carouselItems.map((el,i) => (
        <Item key={el.id} {...el}/>
      ))
    }, [carouselItems])

    
    const nextItem = () => {
        if(currentItem === 3) {
            setCurrentItem(0)
        }
        
        setCurrentItem(prev => prev + 1)
    }
    const previtem = () => {
      if(currentItem < 1) {
          setCurrentItem(3)
      }
      
      setCurrentItem(prev => prev - 1)
  }
  return( 
  <div>
    <button onClick={previtem}>previos</button>
        {currentItem === 3 ? itemList[0] : itemList[currentItem]}
    <button onClick={nextItem}>nextios</button>
  </div>
  )
}
export default ItemCarousel