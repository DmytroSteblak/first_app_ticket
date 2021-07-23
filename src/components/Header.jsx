import React from 'react';

import { Image, Row } from 'react-bootstrap';

const Header = () => (
    <Row>
        <Image style={{width: '120px', margin: '70px auto'}} src="/assets/airport.png" alt="icon_img"/>
    </Row>
);

export default Header;