import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// eslint-disable-next-line no-undef
const reduxTools = window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxTools,
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
