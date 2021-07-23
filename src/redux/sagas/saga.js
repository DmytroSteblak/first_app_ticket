import axios from 'axios';

import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_ID } from '../ducs/reducers/types';
import { getTickets } from '../ducs/reducers/TicketsReducer';
import { getSearchId } from '../ducs/reducers/IdReducer';

const getId = async () => {
    let response = await axios.get("https://front-test.beta.aviasales.ru/search");
    return response.data;
};
const getTicket = async (id) =>{
    let response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
    return response.data;
};
export function* workerSaga() {
    const data = yield call(getId);
    yield put(getSearchId(data.searchId));
    const tickets = yield call(getTicket,data.searchId);
    yield put(getTickets(tickets.tickets));
}

export function* watchTicketSaga() {
    yield takeEvery(LOAD_ID,workerSaga);
}

export default function* rootSaga() {
    yield watchTicketSaga();
};

