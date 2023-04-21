import axios from "axios"

import { PayloadAction } from "@reduxjs/toolkit"
import { call, put } from "redux-saga/effects"

import { SingleSneakers } from "../../interface"
import { getCard } from "../slices/cardSlice"



async function removeFromCardAPI (id: number): Promise<SingleSneakers[]>{
    return await axios.delete(`http://localhost:5000/cart/`, { data: { id: id } }).then(res => res.data)
}

function* removeFromCardSaga(action: PayloadAction<number>){
    const res: SingleSneakers[] = yield call(removeFromCardAPI, action.payload)
    yield put(getCard(res))
}
export default removeFromCardSaga