import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, Filter, Sort, TicketsList } from './components';
import { Col, Row, Container } from 'react-bootstrap';
import { Styles } from './styled/Global-styled';

const App = () => (
        <Styles>
            <Container>
                <Header/>
                <Row>
                    <Filter/>
                    <Col lg="8" md="12">
                        <Sort/>
                        <TicketsList />
                    </Col>
                </Row>
            </Container>
        </Styles>
    );

export default App;