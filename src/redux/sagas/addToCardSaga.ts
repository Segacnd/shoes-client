import axios from "axios"

import { PayloadAction } from "@reduxjs/toolkit"
import { call, put } from "redux-saga/effects"

import { SingleSneakers } from "../../interface"
import { getCard } from "../slices/cardSlice"



async function addToCardAPI (data: SingleSneakers): Promise<SingleSneakers[]>{
    return await axios.post(`http://localhost:5000/cart/`, data).then(res => res.data)
}

function* addToCardSaga(action: PayloadAction<SingleSneakers>){
    const res: SingleSneakers[] = yield call(addToCardAPI, action.payload)
    yield put(getCard(res))
}
export default addToCardSaga