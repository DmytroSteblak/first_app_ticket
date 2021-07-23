import React from 'react';

import { Button } from 'react-bootstrap';
import { Btn } from '../styled/Button-styled';
import { Link } from 'react-router-dom';

const ButtonComp = ({children, router, onClick}) => (
    <Btn>
        <Link to={`/${router}`}>
            <Button onClick={() => onClick()}>
                {children};
            </Button>
        </Link>
    </Btn>
);

export default ButtonComp;