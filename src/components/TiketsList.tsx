import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Ticket } from './index';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { LoadId } from '../redux/ducks/IdReducer';
import { allTickets, setTickets } from '../redux/ducks/TicketsReducer';

const TicketsList: React.FC = () => {
    const dispatch = useDispatch();
    const { searchId } = useTypeSelector(state => state.idReducer);
    const { filterTickets, tickets, loading } = useTypeSelector(state => state.ticketsReducer);

    useEffect(() =>{
        dispatch(LoadId());
    },[dispatch]);

    useEffect(() =>{
        dispatch(setTickets());
    },[searchId,dispatch]);

    useEffect(() =>{
        dispatch(allTickets());
    },[tickets,dispatch]);

    return (
        <>
            {loading && <h3>Загрузка...</h3>}
            {filterTickets && filterTickets.map((ticket, id) => (
                <Ticket
                    key={id}
                    price={ticket.price}
                    origin={ticket.segments[0].origin}
                    destination={ticket.segments[0].destination}
                    date={ticket.segments[0].date}
                    stopsAmount={ticket.segments[0].stops.length}
                    stops={ticket.segments[0].stops.join()}
                    duration={ticket.segments[0].duration}
                    originBack={ticket.segments[1].origin}
                    destinationBack={ticket.segments[1].destination}
                    dateBack={ticket.segments[1].date}
                    stopsBackAmount={ticket.segments[1].stops.length}
                    stopsBack={ticket.segments[1].stops.join()}
                    durationBack={ticket.segments[1].duration}
                />
            ))}
        </>
    );
};

export default TicketsList;
