import { call, put, select } from 'redux-saga/effects';

import {
    ALL_TICKETS,
    CHEAP,
    FAST, FILTER_STOPPING,
    GET_TICKETS,
    SET_TICKETS,
} from './types';
import { getTicket } from '../../api';
import {
    ActionAllTickets,
    ActionCheap,
    ActionFast, ActionFilterStopped,
    ActionGetTicket,
    ActionSetTicket,
    initialStateTicket,
    TicketsType
} from '../../typeTS/type';

const initialState: initialStateTicket = {
    tickets: [],
    loading: true,
    filterTickets: []
};

export const ticketsReducer = (state = initialState, action: any): initialStateTicket => {
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
                filterTickets: state.filterTickets.slice().sort((a, b) => a.price - b.price)
            };
        case FAST:
            return {
                ...state,
                filterTickets: state.filterTickets.slice().sort(
                    (a, b) => a.segments[0].duration - b.segments[0].duration)
            };
        case ALL_TICKETS:
            const allData = state.tickets.slice();
            return {
                ...state,
                filterTickets: allData
            };
        case FILTER_STOPPING:
            const data = state.tickets.slice().filter((a) =>
                a.segments[0].stops.length === action.payload
                && a.segments[1].stops.length === action.payload);
            return {
                ...state,
                filterTickets: data
            };
        default:
            return state;
    }
}

export const setTickets = (): ActionSetTicket => ({ type: SET_TICKETS });
export const getTickets = (payload: TicketsType[]): ActionGetTicket => ({ type: GET_TICKETS, payload });

export const sortTickets = (): ActionCheap => ({ type: CHEAP });
export const fastTickets = (): ActionFast => ({ type: FAST });

export const allTickets = (): ActionAllTickets => ({ type: ALL_TICKETS });
export const filterStopped = (payload: TicketsType[]): ActionFilterStopped => ({ type: FILTER_STOPPING, payload });

export function* ticketsWorkerSaga(): any {
    const id = yield select(state => state.idReducer.searchId);
    if (id){
        const data = yield call(getTicket,id);
        yield put(getTickets(data?.tickets));
    }
}