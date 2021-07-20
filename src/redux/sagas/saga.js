import {takeEvery,put,call} from "redux-saga/effects"
import axios from "axios";
import {getSearchId, getTickets} from "../reducers/reducer";



const getId = async () => {
    let response = await axios.get("https://front-test.beta.aviasales.ru/search")
    return response.data
}
const getTicket = async (id) =>{
    let response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
    return response.data
}

export function* workerSaga() {
    const data = yield call(getId)
    yield put(getSearchId(data.searchId))
    const tickets = yield call(getTicket,data.searchId)
    yield put(getTickets(tickets))

}

export function* watchClickSaga() {

    yield takeEvery("LOAD_ID",workerSaga)

}


export default function* rootSaga() {
    yield watchClickSaga()
}

