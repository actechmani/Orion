import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from "redux-saga/effects";
import { fetchTenantAPI } from '../service/tenant.service'
import { TenantList } from './MockData'

export function* getTenantListSaga() {
    yield put(sagaTenantListLoad());
    try {
        const response = yield call(fetchTenantAPI);
        yield put(sagaTenantListSuccess(response.data.entries))
    } catch (error: any) {
        yield put(sagaTenantListFailure(error.message))
    }
}

export interface Tenants {
    createdBy: string;
    modifiedBy: string | null;
    createdAt: string;
    modifiedAt: string | null;
    id: string;
    name: string;
    slug: string;
    businessEntity: string;
    businessUnit: string;
}

interface TenantInit {
    tenantList: Tenants[];
    loading: boolean;
    error: string;
}


const initialState: TenantInit = {
    tenantList: [],
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
        sagaTenantListSuccess(state, action: PayloadAction<Tenants[]>) {
            state.loading = false;
            state.tenantList = [...action.payload]
        },
        sagaTenantListFailure(state, action) {
            console.log("action error message", action.payload)
            state.loading = false;
            state.error = action.payload;
            state.tenantList = [...TenantList] // TODO Tesing purpose only
        },
    }
})
const getTenantList = createAction("getTenantListAction");
export const { sagaTenantListFailure, sagaTenantListLoad, sagaTenantListSuccess } = tenantSlice.actions


export { getTenantList };
export default tenantSlice.reducer;