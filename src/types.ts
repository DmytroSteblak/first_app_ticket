import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface TypeButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    onClick: () => void,
    children: ReactNode
}

export enum IdTypes {
    GET_SEARCH_ID = 'GET_SEARCH_ID',
    LOAD_ID = 'LOAD_ID'
}
export interface initialStateId {
    searchId: string
}
export interface ActionTypeId {
    type: IdTypes.GET_SEARCH_ID,
    payload: string
}
export interface ActionLoadId {
    type: IdTypes.LOAD_ID
}

export enum TicketTypes {
    SET_TICKETS = 'SET_TICKETS',
    GET_TICKETS = 'GET_TICKETS',
    CHEAP = 'CHEAP',
    FAST = 'FAST',
    ALL_TICKETS = 'ALL_TICKETS',
    FILTER_STOPPING = 'FILTER_STOPPING'
}
export type ActionTypes = ActionCheap | ActionFast | ActionAllTickets | ActionGetTicket | ActionFilterStopped;
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
    type: TicketTypes.SET_TICKETS,
}
export interface ActionCheap {
    type: TicketTypes.CHEAP
}
export interface ActionFast {
    type: TicketTypes.FAST
}
export interface ActionAllTickets {
    type: TicketTypes.ALL_TICKETS
}
export interface ActionGetTicket {
    type: TicketTypes.GET_TICKETS,
    payload: TicketsType[]
}
export interface ActionFilterStopped {
    type: TicketTypes.FILTER_STOPPING,
    payload: number
}

export interface PropsTickets {
    price: number
    duration: number
    durationBack: number
    date: string
    dateBack: string
    stopsAmount: number
    stopsBackAmount: number
    origin: string
    originBack: string
    destination: string
    destinationBack: string
    stops: string
    stopsBack: string
}
export interface checkTypes {
    name: string,
    id: number,
    value: string,
    label: string,
}
export enum Categories {
    All = 'all'
}

export interface dataId {
    searchId: string
}
export interface dataTypes {
    stop: boolean,
    tickets: TicketsType[]
}
