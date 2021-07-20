import React from "react";
import {ButtonComp} from "../Button/Button";
import {FilterRow} from "../../styled/Filter-component";




const Filter = (props) => (
    <FilterRow {...props}>
        <ButtonComp router={"cheap"}>
            самый дешевый
        </ButtonComp>
        <ButtonComp router={"fast"}>
            самый быстрый
        </ButtonComp>
    </FilterRow>


)

export default Filter;