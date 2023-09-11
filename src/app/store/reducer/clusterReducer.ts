import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from "redux-saga/effects";
import { fetchClusterAPI } from '../service/cluster.service'
import { ClusterList } from './MockData'

export function* getClusterListSaga() {
    yield put(sagaClusterListLoad());
    try {
        const response = yield call(fetchClusterAPI);
        yield put(sagaClusterListSuccess(response.data.entries))
    } catch (error: any) {
        yield put(sagaClusterListFailure(error.message))
    }
}


interface ClusterInit {
    clusterList: any[];
    loading: boolean;
    error: string;
}


const initialState: ClusterInit = {
    clusterList: [],
    loading: false,
    error: ''
};



const clusterSlice = createSlice({
    name: "cluster",
    initialState,
    reducers: {
        sagaClusterListLoad(state) {
            console.log("loading??")
            state.loading = true;
        },
        sagaClusterListSuccess(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.clusterList = [...action.payload]
        },
        sagaClusterListFailure(state, action) {
            console.log("action error message", action.payload)
            state.loading = false;
            state.error = action.payload;
            state.clusterList = [...ClusterList.results] // TODO Tesing purpose only
        },
    }
})
const getClusterList = createAction("getClusterListAction");
export const { sagaClusterListFailure, sagaClusterListLoad, sagaClusterListSuccess } = clusterSlice.actions


export { getClusterList };
export default clusterSlice.reducer;