import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { fetchTenantListSaga } from './saga'

const saga = createSagaMiddleware();

const middleware = [saga];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

saga.run(fetchTenantListSaga)

export { store };