import { createAction, createSlice ,PayloadAction } from '@reduxjs/toolkit';
import { call, put } from "redux-saga/effects";
import { fetchTenantAPI } from '../service/tenant.service'


export function* getTenantListSaga() {
    yield put(sagaTenantListLoad());
    try {
        const response = yield call(fetchTenantAPI);
        yield put(sagaTenantListSuccess(response.data.entries))
    } catch (error: any) {
        yield put(sagaTenantListFailure(error.message))
    }
}

const initialState = {
    tenants: <any>[],
    loading: false,
    error: ''
};



const tenantSlice = createSlice({
    name: "tenant",
    initialState,
    reducers: {
        sagaTenantListLoad(state) {
            console.log("loading??")
            state.loading = true;
        },
        sagaTenantListSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.tenants = [...action.payload]
        },
        sagaTenantListFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        },
    }
})
const getTenantList = createAction("getTenantListAction");
export const { sagaTenantListFailure, sagaTenantListLoad, sagaTenantListSuccess } = tenantSlice.actions


export {getTenantList };
export default tenantSlice.reducer;