import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from './sagas/sagas';
import issueTracker from './reducers/issueTracker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    issueTracker,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

console.log(store.getState());

export default store;