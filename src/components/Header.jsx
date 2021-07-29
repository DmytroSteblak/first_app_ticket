import React from 'react';
import { Image, Row } from 'react-bootstrap';

import { StyledHeader } from '../styled/Header-styled';

const Header = () => (
    <Row>
        <StyledHeader>
            <Image src="/assets/airport.png" alt="icon_img"/>
        </StyledHeader>
    </Row>
);

export default Header;