import React from 'react';
import { Button } from 'react-bootstrap';

import { Btn } from '../styled/Button-styled';

const ButtonComp = ({ children, onClick }) => (
    <Btn>
        <Button onClick={() => onClick()}>
            { children }
        </Button>
    </Btn>
);

export default ButtonComp;