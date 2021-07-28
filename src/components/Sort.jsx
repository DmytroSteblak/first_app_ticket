import React from 'react';

import { ButtonComp } from './index';
import { FilterRow } from '../styled/Filter-component';

import { useDispatch } from 'react-redux';
import { fastTickets, sortTickets } from '../redux/ducks/TicketsReducer';

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