import { call, put, select } from 'redux-saga/effects';

import { getTicket } from '../../api';
import {
    ActionAllTickets,
    ActionCheap,
    ActionFast, ActionFilterStopped,
    ActionGetTicket,
    ActionSetTicket, ActionTypes, dataTypes,
    initialStateTicket,
    TicketsType, TicketTypes
} from '../../types';

export const initialState: initialStateTicket = {
    tickets: [],
    loading: true,
    filterTickets: []
};

export const ticketsReducer = (state = initialState, action: ActionTypes): initialStateTicket => {
    switch (action.type) {
        case TicketTypes.GET_TICKETS:
            return {
                ...state,
                tickets: action.payload,
                loading: false
            };
        case TicketTypes.CHEAP:
            return {
                ...state,
                filterTickets: state.filterTickets.slice().sort((a, b) => a.price - b.price)
            };
        case TicketTypes.FAST:
            return {
                ...state,
                filterTickets: state.filterTickets.slice().sort(
                    (a, b) => a.segments[0].duration - b.segments[0].duration)
            };
        case TicketTypes.ALL_TICKETS:
            const allData = state.tickets.slice();
            return {
                ...state,
                filterTickets: allData
            };
        case TicketTypes.FILTER_STOPPING:
            const data = state.tickets.filter((a) =>
                a.segments[0].stops.length === action.payload && a.segments[1].stops.length === action.payload);
            return {
                ...state,
                filterTickets: data,
            };
        default:
            return state;
    }
}

export const setTickets = (): ActionSetTicket => ({ type: TicketTypes.SET_TICKETS });
export const getTickets = (payload: TicketsType[]): ActionGetTicket => ({ type: TicketTypes.GET_TICKETS, payload });

export const sortTickets = (): ActionCheap => ({ type: TicketTypes.CHEAP });
export const fastTickets = (): ActionFast => ({ type: TicketTypes.FAST });

export const allTickets = (): ActionAllTickets => ({ type: TicketTypes.ALL_TICKETS });
export const filterStopped = (payload: number): ActionFilterStopped => ({ type: TicketTypes.FILTER_STOPPING, payload });

export function* ticketsWorkerSaga() {
    const id: string = yield select(state => state.idReducer.searchId);
    if (id){
        const data: dataTypes = yield call(getTicket,id);
        yield put(getTickets(data?.tickets));
    }
}