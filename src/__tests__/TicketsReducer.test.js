import {
    allTickets,
    fastTickets,
    initialState,
    setTickets,
    sortTickets,
    ticketsReducer
} from '../redux/ducks/TicketsReducer';
import { TicketTypes } from '../types';

const state = [
    {
        price: 30546,
        carrier: 'S7',
        segments: [
            {
                origin: 'MOW',
                destination: 'HKT',
                date: '2021-04-24T02:20:00.000Z',
                stops: ['HKG', 'BKK', 'AUH'],
                duration: 1769,
            },
            {
                origin: 'HKT',
                destination: 'MOW',
                date: '2021-05-14T09:20:00.000Z',
                stops: [],
                duration: 1196,
            },
        ],
    },
];

describe('TicketsReducer', () => {

    it('should be ticket data added in the state', () => {
        const stateBefore = {
            tickets: [],
            loading: true,
            filterTickets: []
        }
        const action = {
            type: TicketTypes.GET_TICKETS,
            payload: state
        }
        expect(ticketsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            tickets: action.payload,
            loading: false
        });
    });

    it('should return filtered Tickets', () => {
        const action = {
            type: TicketTypes.FILTER_STOPPING,
            payload: 2
        }
        expect(ticketsReducer(initialState, action)).toEqual({
            ...initialState,
            filterTickets: []
        });
    });

    it('Should return SET_TICKETS', function () {
        expect(setTickets()).toEqual({
            type: TicketTypes.SET_TICKETS
        });
    });

    it('Should return CHEAP', function () {
        expect(sortTickets()).toEqual({
            type: TicketTypes.CHEAP
        });
    });

    it('Should return FAST', function () {
        expect(fastTickets()).toEqual({
            type: TicketTypes.FAST
        });
    });

    it('Should return ALL_TICKETS', function () {
        expect(allTickets()).toEqual({
            type: TicketTypes.ALL_TICKETS
        });
    });

});
