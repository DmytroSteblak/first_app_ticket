import { CHEAP, FAST, GET_TICKETS, LOAD_ID } from './types';

const initialState = {
    tickets: [],
    loading: true
};

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS:
            return {
                ...state,
                tickets: action.payload,
                loading: false
            };
        case CHEAP:
            return {
                ...state,
                tickets: state.tickets.sort((a, b) => a.price - b.price)
            };
        case FAST:
            return {
                ...state,
                tickets: state.tickets.sort(
                    (a, b) => a.segments[0].duration - b.segments[0].duration)
            };
        default:
            return state;
    }
}

export default ticketsReducer;

export const LoadId = () =>({ type:LOAD_ID });
export const getTickets = (payload) => ({ type:GET_TICKETS, payload });
export const sortTickets = () => ({ type:CHEAP });
export const fastTickets = () => ({ type: FAST });