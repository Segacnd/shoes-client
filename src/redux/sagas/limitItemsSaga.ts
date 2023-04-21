import { PayloadAction } from "@reduxjs/toolkit"
import { call, put } from "redux-saga/effects"
import axios from "axios"
import { DataObj, SingleSneakers } from "../../interface"
import { getLimitItems } from "../slices/LimitSlice"

async function getLimitItemsAPI (limit: number):Promise<DataObj>{
    return await axios.get(`http://localhost:5000/shoes?limit=${limit}`).then(res => res.data)
}

function* getLimitItemsSaga(action: PayloadAction<number>){
    const res: DataObj = yield call(getLimitItemsAPI, action.payload)
    yield put(getLimitItems(res))
}
export default getLimitItemsSaga