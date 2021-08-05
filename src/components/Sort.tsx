import React, { FC } from 'react';

import { ButtonComp } from './index';
import { useAction } from '../hooks/useAction';
import { FilterRow } from '../styled/Filter-component';

const Sort: FC = () => {
    const { sortTickets, fastTickets } = useAction();
    const handleCheap = () => {
        sortTickets();
    };
    const handleFast = () => {
        fastTickets();
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