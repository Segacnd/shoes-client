import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleSneakers, Wish } from "../../interface";

const initialState: Wish = {
  wishList: [],
  isFetching: false,
  error: null,
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    startWishFetching: (state) => {
      state.isFetching = true;
    },
    getWishList: (state, action: PayloadAction<number>) => {
        if (state.wishList.includes(action.payload)){
            state.wishList.filter(item => item !== action.payload) 
        } else {
            state.wishList = [...state.wishList, action.payload];
        }
    },
  },
});

export const {startWishFetching,
    getWishList } = wishSlice.actions
  
  export default wishSlice.reducer
