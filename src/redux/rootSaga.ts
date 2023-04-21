import { takeEvery} from 'redux-saga/effects'
import addToCardSaga from './sagas/addToCardSaga'
import getCardSaga from './sagas/fetchCardSaga'
import getAllProductSaga from './sagas/getAllProductsSaga'
import getLimitItemsSaga from './sagas/limitItemsSaga'
import removeFromCardSaga from './sagas/removeCardSaga'
import getSingleProductSaga from './sagas/singleProductSaga'
import { startFetchingAll } from './slices/allProductSlice'
import { startAddToCard, startCardFetching, startRemoveFromCard } from './slices/cardSlice'
import { startLimitFetching } from './slices/LimitSlice'
import { startFetchingOne } from './slices/singleProductSlice'


export function* rootSaga() {
    yield takeEvery(startFetchingAll, getAllProductSaga)
    yield takeEvery(startFetchingOne, getSingleProductSaga)
    yield takeEvery(startAddToCard, addToCardSaga)
    yield takeEvery(startCardFetching, getCardSaga)
    yield takeEvery(startLimitFetching, getLimitItemsSaga)
    yield takeEvery(startRemoveFromCard, removeFromCardSaga)
}