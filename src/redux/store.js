import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import rootSaga from './sagas/saga';

import ticketsReducer from './ducs/reducers/TicketsReducer';
import idReducer from './ducs/reducers/IdReducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    idReducer,ticketsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;