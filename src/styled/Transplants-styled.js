import styled from "styled-components";
import {theme} from "./Global-styled";

export const NavB = styled.div`
    .check_itm:hover{
        background:${theme.colors.primary};
        background-size:cover;
    }
    label:hover{
        cursor: pointer;
    }
    @media ${theme.media.large}, ${theme.media.tablet}{
    h6{
        text-align: center;
    }
    div{
        display: flex;
        justify-content space-between;
        flex-wrap: wrap;
    }
}
    @media ${theme.media.phone}{
    h6{
        text-align: center;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
`