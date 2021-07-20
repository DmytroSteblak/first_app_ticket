import React from "react";
import {Button} from "react-bootstrap";
import {Btn} from "../../styled/Button-styled";
import {Link} from "react-router-dom";


export const ButtonComp = ({children,router}) =>(

    <Btn>
        <Link to={`/${router}`}>
            <Button>
                {children}
            </Button>
        </Link>
    </Btn>


)