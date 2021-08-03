import { call, put } from 'redux-saga/effects';

import { GET_SEARCH_ID, LOAD_ID } from './types';
import { getId } from '../../api';
import { ActionLoadId, ActionTypeId, initialStateId } from '../../typeTS/type';

const initialState: initialStateId = {
    searchId: ''
};

export const idReducer = (state = initialState, action: any):initialStateId => {
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

export const getSearchId = (payload: string):ActionTypeId => ({ type: GET_SEARCH_ID, payload });
export const LoadId = ():ActionLoadId => ({ type: LOAD_ID });

export function* idWorkerSaga(): any {
    const data = yield call(getId);
    yield put(getSearchId(data.searchId));
}