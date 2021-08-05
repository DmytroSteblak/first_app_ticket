import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { takeEvery } from 'redux-saga/effects';

import  { ticketsReducer, ticketsWorkerSaga } from './ducks/TicketsReducer';
import  { idReducer, idWorkerSaga } from './ducks/IdReducer';
import { IdTypes, TicketTypes } from '../types';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    idReducer,ticketsReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

function* rootSaga() {
    yield watchTicketSaga();
}

function* watchTicketSaga() {
    yield takeEvery(IdTypes.LOAD_ID, idWorkerSaga);
    yield takeEvery(TicketTypes.SET_TICKETS, ticketsWorkerSaga);
}

export default store;