import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga'

const saga = createSagaMiddleware();

const middleware = [saga];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

saga.run(rootSaga)

export { store };