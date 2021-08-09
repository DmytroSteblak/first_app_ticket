import { idReducer, initialState, LoadId } from '../redux/ducks/IdReducer';
import { IdTypes } from '../types';

it('GET_SEARCH_ID', () => {
    const action = {
        type: IdTypes.GET_SEARCH_ID,
        payload: '33rjk'
    };
    expect(idReducer(initialState, action)).toEqual({
        ...initialState,
        searchId: action.payload
    });
});

it('action sort fast ', function () {
    expect(LoadId()).toEqual({
        type: IdTypes.LOAD_ID
    });
});