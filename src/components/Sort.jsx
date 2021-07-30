import React from 'react';
import { useDispatch } from 'react-redux';

import { ButtonComp } from './index';
import { fastTickets, sortTickets } from '../redux/ducks/TicketsReducer';
import { FilterRow } from '../styled/Filter-component';

const Sort = () => {
    const dispatch = useDispatch();
    const handleCheap = () => {
        dispatch(sortTickets());
    };
    const handleFast = () => {
        dispatch(fastTickets());
    };

    return (
        <FilterRow>
            <ButtonComp onClick={handleCheap}>
                самый дешевый
            </ButtonComp>
            <ButtonComp onClick={handleFast}>
                самый быстрый
            </ButtonComp>
        </FilterRow>
    );
};

export default Sort;