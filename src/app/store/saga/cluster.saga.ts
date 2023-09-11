import { takeEvery } from "redux-saga/effects";

import { getClusterList, getClusterListSaga } from '../reducer/clusterReducer';

export function* fetchClusterListSaga() {
    yield takeEvery(getClusterList, getClusterListSaga)
}