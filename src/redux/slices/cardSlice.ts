import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Card,  SingleSneakers } from '../../interface'




  const initialState: Card = {
    card: [],
    isFetching: false,
    error: null,
    totalPrice: 0,
    totalCount: 0,
  }
  
  export const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       startCardFetching:(state) => {
        state.isFetching = true
       },
      getCard: (state, action:PayloadAction<SingleSneakers[]>) => {
        state.card = action.payload;
        state.totalPrice = state.card.reduce((sum,obj) => {
            return (obj.retail_price_cents/100) + sum
        }, 0)
        state.isFetching = false
        state.totalCount = state.card.length
      },

      startAddToCard: (state, action: PayloadAction<SingleSneakers>) => {
        state.isFetching = true;
      },
      startRemoveFromCard: (state, action: PayloadAction<number>) => {
        state.isFetching = true;
      },


    },
  })
  

  export const {startCardFetching,getCard,startAddToCard,startRemoveFromCard } = cardSlice.actions
  
  export default cardSlice.reducer