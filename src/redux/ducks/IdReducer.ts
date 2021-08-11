import { call, put } from 'redux-saga/effects';

import { getId } from '../../api';
import { ActionLoadId, ActionTypeId, dataId, IdTypes, initialStateId } from '../../types';

export const initialState: initialStateId = {
    searchId: ''
};

export const idReducer = (state = initialState, action: ActionTypeId):initialStateId => {
    switch (action.type) {
        case IdTypes.GET_SEARCH_ID:
            return {
                ...state,
                searchId: action.payload
            };
        default:
            return state;
    }
}

export const getSearchId = (payload: string): ActionTypeId => ({ type: IdTypes.GET_SEARCH_ID, payload });
export const LoadId = (): ActionLoadId => ({ type: IdTypes.LOAD_ID });

export function* idWorkerSaga() {
    const data: dataId = yield call(getId);
    yield put(getSearchId(data.searchId));
}
