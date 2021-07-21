import React from 'react';
import {ButtonComp} from './index';
import { FilterRow } from '../styled/Filter-component';

const Filter = () => (
    <FilterRow>
        <ButtonComp router={"cheap"}>
            самый дешевый
        </ButtonComp>
        <ButtonComp router={"fast"}>
            самый быстрый
        </ButtonComp>
    </FilterRow>
)

export default Filter;