import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import allProd from "./slices/allProductSlice";
import singleProd from "./slices/singleProductSlice";
import cardSlice from "./slices/cardSlice";
import limitSlice from "./slices/LimitSlice";
import wishSlice from "./slices/WishListSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    allProd,
    singleProd,
    cardSlice,
    limitSlice,
    wishSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


sagaMiddleware.run(rootSaga)