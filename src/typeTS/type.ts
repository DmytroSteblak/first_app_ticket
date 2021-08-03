import {
    ALL_TICKETS,
    CHEAP,
    FAST,
    FILTER_STOPPING,
    GET_SEARCH_ID,
    GET_TICKETS,
    LOAD_ID,
    SET_TICKETS
} from '../redux/ducks/types';
import {ReactNode} from 'react';

export interface TypeButton {
    onClick: () => void,
    children: ReactNode
}

export interface initialStateId {
    searchId: string
}
export interface ActionTypeId {
    type: typeof GET_SEARCH_ID,
    payload: string
}
export interface ActionLoadId {
    type: typeof LOAD_ID
}
export interface initialStateTicket {
    tickets: TicketsType[],
    loading: boolean,
    filterTickets: TicketsType[]
}

export interface TicketsType {
    price: number,
    carrier: string,
    segments: SegmentsType[]
}
export interface SegmentsType{
    origin: string,
    destination: string,
    date: string,
    stops: string[]
    duration: number
}
export interface ActionSetTicket {
    type: typeof SET_TICKETS
}
export interface ActionCheap {
    type: typeof CHEAP
}
export interface ActionFast {
    type: typeof FAST
}
export interface ActionAllTickets {
    type: typeof ALL_TICKETS
}
export interface ActionGetTicket {
    type: typeof GET_TICKETS,
    payload: TicketsType[]
}
export interface ActionFilterStopped {
    type: typeof FILTER_STOPPING,
    payload: TicketsType[]
}
