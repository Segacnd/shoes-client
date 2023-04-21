import { PayloadAction } from "@reduxjs/toolkit"
import { call, put } from "redux-saga/effects"
import axios from "axios"
import { SingleSneakers } from "../../interface"
import { getSingleProducts } from "../slices/singleProductSlice"

async function getOneProductAPI (id: number):Promise<SingleSneakers>{
    return await axios.get(`http://localhost:5000/shoes/${id}`).then(res => res.data)
}

function* getSingleProductSaga(action: PayloadAction<number>){
    const res: SingleSneakers = yield call(getOneProductAPI, action.payload)
    yield put(getSingleProducts(res))
}
export default getSingleProductSaga