import React, {useEffect} from 'react';
import {Ticket} from "./index";
import {useDispatch, useSelector} from "react-redux";
import { LoadId } from "../redux/ducs/reducers/TicketsReducer";

const TicketsList = () => {
    const dispatch = useDispatch();
    const { tickets, loading } = useSelector(state => state.ticketsReducer);

    useEffect(() =>{
        dispatch(LoadId());
    },[]);

    return (
        <>
            {loading && <h3>Загрузка...</h3>}
            { tickets && tickets.map((ticket, id) => <Ticket key={id}
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
            />) }
        </>
    );
};

export default TicketsList;