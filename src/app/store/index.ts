import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import rootSaga from './saga'
import createRootReducer from './reducer'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, sagaMiddleware]
const rootReducer = createRootReducer() // Create your root reducer

export default function configureStore() {
  const store = createStore(
    rootReducer, // root reducer with router state
    // WithDevTools
    compose(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  return store
}
