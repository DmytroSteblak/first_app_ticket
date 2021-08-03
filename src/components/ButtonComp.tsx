import React from 'react';
import { Button } from 'react-bootstrap';

import { Btn } from '../styled/Button-styled';
import { TypeButton } from '../typeTS/type';

const ButtonComp = ({ children, onClick }:TypeButton): JSX.Element => (
    <Btn>
        <Button onClick={() => onClick()}>
            { children }
        </Button>
    </Btn>
);

export default ButtonComp;