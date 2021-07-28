import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import {
    ALL_TICKETS,
    CHEAP,
    FAST,
    GET_TICKETS,
    ONE_STOPPING,
    SET_TICKETS, THREE_STOPPING,
    TWO_STOPPING,
    WITHOUT_STOPPING
} from './types';

import { urlApi } from './IdReducer';

const initialState = {
    tickets: [],
    loading: true,
    filterTickets: []
};

export const ticketsReducer = (state = initialState, action) => {
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
        case WITHOUT_STOPPING:
            const data = state.tickets.slice().filter((a) =>
                a.segments[0].stops.length === 0 && a.segments[1].stops.length === 0);
            return {
                ...state,
                filterTickets: data
            };
        case ONE_STOPPING:
            const dataOne = state.tickets.slice().filter((a) =>
                a.segments[0].stops.length === 1 && a.segments[1].stops.length === 1);
            return {
                ...state,
                filterTickets: dataOne
            };
        case TWO_STOPPING:
            const dataTwo = state.tickets.slice().filter((a) =>
                a.segments[0].stops.length === 2 && a.segments[1].stops.length === 2);
            return {
                ...state,
                filterTickets: dataTwo
            };
        case THREE_STOPPING:
            const dataThree = state.tickets.slice().filter((a) =>
                a.segments[0].stops.length === 3 && a.segments[1].stops.length === 3);
            return {
                ...state,
                filterTickets: dataThree
            };
        default:
            return state;
    }
}

export const setTickets = () => ({ type: SET_TICKETS });
export const getTickets = (payload) => ({ type:GET_TICKETS, payload });

export const sortTickets = () => ({ type:CHEAP });
export const fastTickets = () => ({ type: FAST });

export const allTickets = () => ({ type: ALL_TICKETS });
export const withoutStopped = () => ({ type: WITHOUT_STOPPING });
export const oneStopping = () => ({ type: ONE_STOPPING });
export const twoStopping = () => ({ type: TWO_STOPPING });
export const threeStopping = () => ({ type: THREE_STOPPING });

const getTicket =  async (id) => {
    try {
        const { data } = await axios.get(`${urlApi}tickets?searchId=${id}`);
        return data?.stop ? data : getTicket(id);
    }catch (error) {
        if (error.response.status === 500) {
            return getTicket(id);
        }
    }
};

export function* ticketsWorkerSaga() {
    const id = yield select(state => state.idReducer.searchId);
    if (id){
        const data = yield call(getTicket,id);
        yield put(getTickets(data?.tickets));
    }
}