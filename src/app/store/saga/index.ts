import { all, fork } from "redux-saga/effects";
import { fetchTenantListSaga } from './tenant.saga';
import { fetchClusterListSaga } from './cluster.saga';

const rootSaga = function* rootSaga() {
    yield all([
        fork(fetchTenantListSaga),
        fork(fetchClusterListSaga)
    ])
};

export { rootSaga };