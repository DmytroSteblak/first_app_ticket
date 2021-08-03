import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import { Header, Filter, Sort, TicketsList } from './components';
import { Styles } from './styled/Global-styled';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = (): JSX.Element => (
    <Styles>
        <Container>
            <Header />
            <Row>
                <Filter />
                <Col lg="8" md="12">
                    <Sort />
                    <TicketsList />
                </Col>
            </Row>
        </Container>
    </Styles>
);

export default App;