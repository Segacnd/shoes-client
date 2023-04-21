import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DataObj, Limit,  SingleSneakers } from '../../interface'




  const initialState: DataObj = {
    result: [],
    brands: [],
    sizes: [],
    totalCount: 0,
    isFetching: false,
    error: null,
  }
  
  export const limitSlice = createSlice({
    name: 'limit',
    initialState,
    reducers: {
       startLimitFetching:(state, action:PayloadAction<number>) => {
        state.isFetching = true
       },
      getLimitItems: (state, action:PayloadAction<DataObj>) => {
        state.result = action.payload.result
        state.brands = action.payload.brands
        state.sizes = action.payload.sizes
        state.totalCount = action.payload.totalCount
      },

    },
  })
  

  export const {startLimitFetching,getLimitItems } = limitSlice.actions
  
  export default limitSlice.reducer