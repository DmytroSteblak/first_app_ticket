import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { takeEvery } from "redux-saga/effects";

import  { ticketsReducer, ticketsWorkerSaga } from './ducks/TicketsReducer';
import  { idReducer, idWorkerSaga } from './ducks/IdReducer';
import { LOAD_ID, SET_TICKETS } from "./ducks/types";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    idReducer,ticketsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

function* rootSaga() {
    yield watchTicketSaga();
};

function* watchTicketSaga() {
    yield takeEvery(LOAD_ID, idWorkerSaga);
    yield takeEvery(SET_TICKETS, ticketsWorkerSaga);
}

export default store;