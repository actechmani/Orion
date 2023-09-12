import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put } from "redux-saga/effects";
import { fetchTenantAPI } from '../service/tenant.service'
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _findIndex from 'lodash/findIndex';
import { TenantList } from './MockData';

export function* getTenantListSaga() {
    yield put(sagaTenantListLoad());
    try {
        const response = yield call(fetchTenantAPI);
        yield put(sagaTenantListSuccess(response.data))
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
    tenantName: string | null;
    tenantId: string | null;
    globalTenants: Tenants[];
    tenant: string | null;
    businessEntity: string | null;
    businessUnit: string | null;
}


const initialState: TenantInit = {
    tenantList: [],
    loading: false,
    error: '',
    tenantName: null,
    tenantId: null,
    globalTenants: [],
    tenant: null,
    businessEntity: null,
    businessUnit: null
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
            state.tenantList = [...action.payload];
            let tenantProperties = action.payload.length > 0 ? action.payload[action.payload.length - 1] : null;
            const sessionTenantId = window.sessionStorage.getItem('tenantId');
            if (_isEmpty(sessionTenantId)) {
                window.sessionStorage.setItem('tenantId', _get(tenantProperties, 'id', null));
                window.sessionStorage.setItem('tenantName', _get(tenantProperties, 'name', null));
            } else {
                const tenantIdx = _findIndex(action.payload, (item) => item.id === sessionTenantId);
                if (tenantIdx === -1) {
                    window.sessionStorage.setItem('tenantId', _get(tenantProperties, 'id', null));
                    window.sessionStorage.setItem('tenantName', _get(tenantProperties, 'name', null));
                } else {
                    tenantProperties = action.payload[tenantIdx];
                }
            }

            state.tenantName = _get(tenantProperties, 'name', null);
            state.tenantId = _get(tenantProperties, 'id', null);
            state.businessUnit = _get(tenantProperties, 'businessUnit', null);
            state.businessEntity = _get(tenantProperties, 'businessEntity', null);
        },
        sagaTenantListFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
})
const getTenantList = createAction("getTenantListAction");
export const { sagaTenantListFailure, sagaTenantListLoad, sagaTenantListSuccess } = tenantSlice.actions


export { getTenantList };
export default tenantSlice.reducer;