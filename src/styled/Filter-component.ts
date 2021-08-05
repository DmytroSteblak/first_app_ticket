import styled from 'styled-components';

import { LARGE_SIZE, MOBILE_SIZE } from './Variable-styled';

export const FilterRow = styled.div`
    display: flex;
    @media (max-width: ${LARGE_SIZE}) {
        margin-top: 25px;
        justify-content: space-between;
    }
    @media (max-width: ${MOBILE_SIZE}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
`;