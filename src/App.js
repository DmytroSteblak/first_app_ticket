import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Transplants, Filter, Ticket } from './components';
import  { Button, Col, Row, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Styles } from './styled/Global-styled';

function App() {

    const dispatch = useDispatch();
    const { searchId } = useSelector(state => state);
    const { tickets } = useSelector(state => state);

    return (
        <Styles>
            <Container>
                <Header/>
                { searchId ? <span> ключ: <b>{ searchId }</b></span> : <Button onClick={() => dispatch({type: "LOAD_ID"})}>
                    получит  ключ
                </Button>}
                <Row>
                    <Transplants/>
                    <Col lg="8" md="12">
                        <Filter/>
                        { tickets.map((ticket,id) => <Ticket key={id} price={ticket.price}/>)}

                    </Col>
                </Row>
            </Container>
        </Styles>
    );
}

export default App;
