import React from 'react';
import { Button } from 'react-bootstrap';

import { Btn } from '../styled/Button-styled';
import { TypeButton } from '../types';

const ButtonComp: React.FC<TypeButton> = ({ children, onClick }) => (
    <Btn>
        <Button onClick={() => onClick()}>
            { children }
        </Button>
    </Btn>
);

export default ButtonComp;