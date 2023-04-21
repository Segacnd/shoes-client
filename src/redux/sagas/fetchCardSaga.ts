import axios from "axios"

import { PayloadAction } from "@reduxjs/toolkit"
import { call, put } from "redux-saga/effects"

import { SingleSneakers } from "../../interface"
import { getCard } from "../slices/cardSlice"



async function getCardApi (): Promise<SingleSneakers[]>{
    return await axios.get(`http://localhost:5000/cart/`).then(res => res.data)
}

function* getCardSaga(){
    const res: SingleSneakers[] = yield call(getCardApi)
    console.log("ALLALALA - ", res)
    yield put(getCard(res))
}
export default getCardSaga