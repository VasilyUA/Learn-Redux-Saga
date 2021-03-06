import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// Saga generetors watch and worker
import { watchLoadTodo } from './Todo/SagaTodo';

// Redusers
import { todo } from './Todo/ReduserTodo';
import { error } from './Error/Error';

const sagaMiddleware = createSagaMiddleware();

function* combineWatcher() {
   yield all([watchLoadTodo()]);
}

// store redux
export default createStore(combineReducers({ todo, error }), applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(combineWatcher);
