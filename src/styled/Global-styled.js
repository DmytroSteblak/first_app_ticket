import styled, { createGlobalStyle } from 'styled-components';

import { BLUE_COLOR, CREAM_COLOR, LARGE_SIZE, MOBILE_SIZE, TABLET_SIZE, WHITE_COLOR } from './Variable-styled';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        font-size: 17px;
    }
`;

export const theme = {
    colors: {
        primary: CREAM_COLOR,
        secondary: BLUE_COLOR,
        white: WHITE_COLOR
    },
    media: {
        phone: `(max-width: ${MOBILE_SIZE})`,
        tablet: `(max-width: ${TABLET_SIZE}) and (min-width: ${MOBILE_SIZE})`,
        large: `(max-width: ${LARGE_SIZE}) and (min-width: ${TABLET_SIZE})`
    },
    size: {
        medium: "22px"
    }
};

export const Styles = styled.div`
    background: ${theme.colors.primary};
    .container {
        max-width: 960px;
        min-height: 100vh;
        height: 100%;
    }
`;