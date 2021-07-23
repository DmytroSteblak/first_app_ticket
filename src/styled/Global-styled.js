import styled, { createGlobalStyle } from 'styled-components';

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
        primary: "#f3f7fa",
        secondary: "#1b97f3"
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 768px) and (min-width: 425px)',
        large: '(max-width: 992px) and (min-width: 768px)'
    },
    size: {
        medium: "22px"
    }
};

export const Styles = styled.div`
    background: ${theme.colors.primary};
    .container {
        max-width: 960px;
        height: 100vh;
    }
`;