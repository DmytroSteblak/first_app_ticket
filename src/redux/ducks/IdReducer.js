import { call, put } from 'redux-saga/effects';

import { GET_SEARCH_ID, LOAD_ID } from './types';
import {getId} from '../../api';

const initialState = {
    searchId: ''
};

export const idReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_ID:
            return {
                ...state,
                searchId: action.payload
            };
        default:
            return state;
    }
}

export const getSearchId = (payload) => ({ type:GET_SEARCH_ID, payload });
export const LoadId = () => ({ type: LOAD_ID });

export function* idWorkerSaga() {
    const data = yield call(getId);
    yield put(getSearchId(data.searchId));
}