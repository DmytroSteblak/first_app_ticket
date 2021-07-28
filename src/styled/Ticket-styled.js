import styled from 'styled-components';

import { theme } from './Global-styled';

export const CardBody = styled.div`
    margin: 0 auto;
    .header_ticket {
        display: flex;
        justify-content: space-between;   
    }
    .content_ticket {
        display: flex;
        justify-content: space-between;
    }
    .hideClass {
        font-weight: 500;
    }
    .topClass {
        text-transform: uppercase;
        opacity: 0.5;
    }
    h5 {
        color: ${theme.colors.secondary};
        font-size: 32px;
        font-weight: 500;
    } 
    img {
        width: 150px;
    }
    @media ${theme.media.tablet} { 
        h5 {
            font-size: 30px;
        } 
        img {
            width: 170px;
            height: 50px;
        }
    }
    @media ${theme.media.phone} {
        .header_ticket {
            display: flex;
            justify-content: space-between;
        }
        h5 {
            font-size: ${theme.size.medium};
            padding-top: 5px;
        }   
        img {
            width: 140px;
            height: 40px;
            margin-right: 13px;
        }
    }
`;