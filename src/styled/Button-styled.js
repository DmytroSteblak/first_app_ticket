import styled from 'styled-components';

import { theme } from './Global-styled';

export const Btn = styled.div`
    button {
        width: 18rem;
        height: 60px;
        outline: none;
        background: ${theme.colors.white};
        border: none;
        color: black;
        font-size: ${theme.size.medium};                
    }
    @media ${theme.media.tablet} {
        button {
            width: 12rem;
            height: 50px;               
        }
    }   
`;