import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonComp } from './index';

import { FilterRow } from '../styled/Filter-component';
import {fastTickets, sortTickets} from "../redux/ducks/TicketsReducer";


const Sort: FC = () => {
    const dispatch = useDispatch();
    const handleSortCheap = () => {
        dispatch(sortTickets());
    };
    const handleSortFast = () => {
        dispatch(fastTickets());
    };

    return (
        <FilterRow>
            <ButtonComp onClick={handleSortCheap}>
                самый дешевый
            </ButtonComp>
            <ButtonComp onClick={handleSortFast}>
                самый быстрый
            </ButtonComp>
        </FilterRow>
    );
};

export default Sort;