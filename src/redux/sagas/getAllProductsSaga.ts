import axios from "axios"


import { call, put } from "redux-saga/effects"
import { getAllProducts } from "../slices/allProductSlice"
import { DataObj, QueryParams, SingleSneakers } from "../../interface"
import { PayloadAction } from "@reduxjs/toolkit"



async function getAllProductAPI (params: QueryParams): Promise<DataObj>{
    return await axios.get(`http://localhost:5000/shoes`, {params: params}).then(res => res.data)
}

function* getAllProductSaga(action: PayloadAction<QueryParams>){
    const res: DataObj = yield call(() => getAllProductAPI(action.payload))
    yield put(getAllProducts(res))
}
export default getAllProductSaga