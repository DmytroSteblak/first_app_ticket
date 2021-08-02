import styled from 'styled-components';

import { theme } from './Global-styled';
import { LARGE_SIZE, MOBILE_SIZE } from './Variable-styled';

export const NavB = styled.div`
    text-transform: uppercase;
    .check_itm:hover {
        background: ${theme.colors.primary};
        background-size:cover;
    }
    label:hover {
        cursor: pointer;
    }
    @media (max-width: ${LARGE_SIZE}) {
        h6 {
            text-align: center;
        }
        div {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
    @media (max-width: ${MOBILE_SIZE}) {
        h6 {
            text-align: center;
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;