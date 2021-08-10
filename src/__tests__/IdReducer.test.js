import { idReducer, initialState, LoadId } from '../redux/ducks/IdReducer';
import { IdTypes } from '../types';

it('It should return GET_SEARCH_ID payload', () => {
    const action = {
        type: IdTypes.GET_SEARCH_ID,
        payload: '33rjk'
    };
    expect(idReducer(initialState, action)).toEqual({
        ...initialState,
        searchId: action.payload
    });
});

it('Should return LOAD_ID', function () {
    expect(LoadId()).toEqual({
        type: IdTypes.LOAD_ID
    });
});