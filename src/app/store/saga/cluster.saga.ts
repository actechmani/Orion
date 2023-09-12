import { takeEvery } from "redux-saga/effects";

import {
    getClusterList, getClusterSchedule,
    getClusterListSaga, getAllClusterSchedulesSaga,
    getClusterInfo, getAllClusterInfoSaga,
    getClusterRefreshInfo, clusterRefreshInformationSaga,
    nodeGroupActivityInfo, nodeGroupActivitiesSaga
} from '../reducer/clusterReducer';

export function* fetchClusterListSaga() {
    yield takeEvery(getClusterList, getClusterListSaga);
    yield takeEvery(getClusterSchedule, getAllClusterSchedulesSaga);
    yield takeEvery(getClusterInfo, getAllClusterInfoSaga);
    yield takeEvery(getClusterRefreshInfo, clusterRefreshInformationSaga);
    yield takeEvery(nodeGroupActivityInfo, nodeGroupActivitiesSaga);
}