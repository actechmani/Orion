import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from "redux-saga/effects";
import {
    getAllClusterServices, getAllClusterSchedules, getClusterDetailedInformation,
    postClusterInformation, getNodeGroupActivities
} from '../service/cluster.service';
import { ClusterList } from './MockData'

export function* getClusterListSaga(action: PayloadAction<any>) {
    const payload = action.payload;
    yield put(sagaClusterListLoad());
    try {
        const response = yield call(getAllClusterServices, payload);
        yield put(sagaClusterListSuccess(response.data))
    } catch (error: any) {
        yield put(sagaClusterListFailure(error.message))
    }
}

export function* getAllClusterSchedulesSaga() {
    yield put(sagaClusterListLoad());
    try {
        const response = yield call(getAllClusterSchedules);
        yield put(sagaClusterSchedulesSuccess(response.data))
    } catch (error: any) {
        yield put(sagaClusterListFailure(error.message))
    }
}

export function* getAllClusterInfoSaga(action: PayloadAction<any>): any {
    const payload = action.payload;
    yield put(sagaClusterListLoad());
    try {
        const response = yield call(getClusterDetailedInformation, payload);
        yield put(sagaClusterInfoSuccess(response.data))
    } catch (error: any) {
        yield put(sagaClusterListFailure(error.message))
    }
}

export function* clusterRefreshInformationSaga(action: PayloadAction<any>): any {
    const payload = action.payload;
    console.log("payload", payload)
    yield put(sagaClusterListLoad());
    try {
        const response = yield call(postClusterInformation(payload));
        yield put(sagaClusterInfoSuccess(response.data))
    } catch (error: any) {
        yield put(sagaClusterListFailure(error.message))
    }
}

export function* nodeGroupActivitiesSaga(action: PayloadAction<any>): any {
    const payload = action.payload;
    console.log("activity ====>><<<<<", payload)
    yield put(sagaClusterListLoad());
    try {
        const response = yield call(getNodeGroupActivities(payload));
        yield put(sagaNodeGroupActivitiesSuccess(response.data))
    } catch (error: any) {
        console.log("error", error)
        yield put(sagaClusterListFailure(error.message))
    }
}




interface ClusterInit {
    clusterList: any[];
    loading: boolean;
    error: string;
    pageSize: number;
    currentPage: number;
    clusterSchedules: any[],
    clusterDetailedInformation: any,
    clusterActivity: any;
}


const initialState: ClusterInit = {
    clusterList: [],
    loading: false,
    error: '',
    pageSize: 0,
    currentPage: 0,
    clusterSchedules: [],
    clusterDetailedInformation: {},
    clusterActivity: {}
};



const clusterSlice = createSlice({
    name: "cluster",
    initialState,
    reducers: {
        sagaClusterListLoad(state) {
            state.loading = true;
        },
        sagaClusterListFailure(state, action) {
            console.log("action error message", action.payload)
            state.loading = false;
            state.error = action.payload;
            state.clusterList = ClusterList.results;

        },
        sagaClusterListSuccess(state, action: PayloadAction<any>) {
            console.log("action.payload", action.payload)
            state.loading = false;
            state.clusterList = [...action.payload.results];
            state.currentPage = action.payload.paginationInfo.totalPages;
            state.pageSize = action.payload.paginationInfo.totalRecords
        },
        sagaClusterSchedulesSuccess(state, action: PayloadAction<any>) {
            state.clusterSchedules = action.payload;
            state.loading = false;
        },
        sagaClusterInfoSuccess(state, action: PayloadAction<any>) {
            console.log("which valkue ", action.payload)
            state.clusterDetailedInformation = action.payload;
            state.loading = false;
        },
        sagaNodeGroupActivitiesSuccess(state, action: PayloadAction<any>) {
            state.clusterActivity = action.payload;
            state.loading = false;
        },


    }
})
const getClusterList = createAction<any>("getClusterListAction");
const getClusterSchedule = createAction("getClusterScheduleAction");
const getClusterInfo = createAction<any>("getClusterInfoAction");
const getClusterRefreshInfo = createAction<any>("getClusterRefreshAction");
const nodeGroupActivityInfo = createAction<any>("nodeGroupActivityInfoAction");

export const { sagaClusterListFailure, sagaClusterListLoad, sagaClusterListSuccess,
    sagaClusterSchedulesSuccess, sagaClusterInfoSuccess, sagaNodeGroupActivitiesSuccess } = clusterSlice.actions


export { getClusterList, getClusterSchedule, getClusterInfo, getClusterRefreshInfo, nodeGroupActivityInfo };
export default clusterSlice.reducer;