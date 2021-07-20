import 'bootstrap/dist/css/bootstrap.min.css';


import  {Button,Col, Row, Container} from "react-bootstrap";
import React from "react";
import Transplants from "./components/Transplants/Transplants";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Ticket from "./components/Ticket/Ticket";
import {useDispatch, useSelector} from "react-redux";
import {Styles} from "./styled/Global-styled";




function App() {

    const dispatch = useDispatch();
    const {searchId} = useSelector(state =>state)


    return (
        <Styles>
            <Container>
                <Header/>

                {searchId ? <span>ключ: <b>{searchId}</b></span> : <Button onClick={() => dispatch({type: "LOAD_ID"})}>
                    получит  ключ
                </Button>}
                <Row>
                    <Transplants/>
                    <Col lg="8" md="12">
                        <Filter/>
                        <Ticket/>
                    </Col>
                </Row>
            </Container>
        </Styles>

    );
}

export default App;
