import styled from "styled-components";
import {theme} from "./Global-styled";

export const FilterRow = styled.div`
    display:flex;
    @media ${theme.media.large},${theme.media.tablet} {
    margin-top: 25px;
    justify-content: space-between 
}
    @media ${theme.media.phone}{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
`