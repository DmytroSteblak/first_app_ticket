import createSagaMiddleware from "redux-saga"
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers/reducer";
import rootSaga from "./sagas/saga";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(rootSaga);

export default store;