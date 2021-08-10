import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonComp } from './index';
import { fastTickets, sortTickets } from '../redux/ducks/TicketsReducer';

import { FilterRow } from '../styled/Filter-component';

const Sort: FC = () => {
    const dispatch = useDispatch();
    const SortByPrice = () => {
        dispatch(sortTickets());
    };
    const SortBySpeed = () => {
        dispatch(fastTickets());
    };

    return (
        <FilterRow>
            <ButtonComp onClick={SortByPrice}>
                самый дешевый
            </ButtonComp>
            <ButtonComp onClick={SortBySpeed}>
                самый быстрый
            </ButtonComp>
        </FilterRow>
    );
};

export default Sort;