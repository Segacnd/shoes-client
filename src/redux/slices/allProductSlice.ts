import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {  QueryParams,  DataObj } from '../../interface'



  
  const initialState: DataObj = {
    result: [],
    brands: [],
    sizes: [],
    totalCount: 0,
    isFetching: false,
    error:  null,
  }
  
  export const allProducts = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        startFetchingAll:(state, action: PayloadAction<QueryParams>) => {
        state.isFetching = true
       },
      getAllProducts: (state, action:PayloadAction<DataObj>) => {
        state.result = action.payload.result
        state.brands = action.payload.brands
        state.sizes = action.payload.sizes
        state.totalCount = action.payload.totalCount
      },

    },
  })
  

  export const {startFetchingAll,
    getAllProducts } = allProducts.actions
  
  export default allProducts.reducer