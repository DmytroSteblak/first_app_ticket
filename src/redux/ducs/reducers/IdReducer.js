import { GET_SEARCH_ID } from './types';

const initialState = {
    searchId: ''
};

const idReducer = (state = initialState, action) => {
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

export default idReducer;

export const getSearchId = (payload) => ({ type:GET_SEARCH_ID, payload });
