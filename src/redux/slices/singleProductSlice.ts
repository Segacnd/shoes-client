import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { singleProduct, SingleSneakers } from '../../interface'



  const initialState: singleProduct = {
    singleProduct: null,
    isFetching: false,
    error: null,
  }
  
  export const singleProducts = createSlice({
    name: 'singleProducts',
    initialState,
    reducers: {
       startFetchingOne:(state, action: PayloadAction<number>) => {
        state.isFetching = true
       },
      getSingleProducts: (state, action:PayloadAction<SingleSneakers>) => {
        state.singleProduct = action.payload
      },

    },
  })
  

  export const {startFetchingOne,
    getSingleProducts } = singleProducts.actions
  
  export default singleProducts.reducer