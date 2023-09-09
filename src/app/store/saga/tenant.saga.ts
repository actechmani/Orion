import { takeEvery } from "redux-saga/effects";

import {getTenantList,getTenantListSaga} from '../reducer/tenentReducer';

export function* fetchTenantListSaga() {
    yield takeEvery(getTenantList, getTenantListSaga)
}