import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

import { getData, getTime } from '../different';
import { PropsTickets } from '../types';
import { CardBody } from '../styled/Ticket-styled';

const Ticket: React.FC<PropsTickets> = ({
    price,
    duration,
    durationBack,
    date,
    dateBack,
    stopsAmount,
    stopsBackAmount,
    origin,
    originBack,
    destination,
    destinationBack,
    stops,
    stopsBack
}) => {

    return (
        <>
            <CardBody>
                <Card className="mt-4 border-0 shadow 1 ">
                    <Card.Body>
                        <Row className="header_ticket m-1">
                            <h5 className="w-50">{price}p</h5>
                            <Image src="/assets/icon.png"/>
                        </Row>
                        <Row className="content_ticket">
                            <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                                <div className="topClass">
                                    {origin} - {destination}
                                </div>
                                <div className="hideClass">
                                    {getData(date, duration)}
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                                <div className="topClass">
                                    в пути
                                </div>
                                <div className="hideClass">
                                    {getTime(duration)}
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                                <div className="topClass">
                                    {stopsAmount} пересадки
                                </div>
                                <div className="hideClass">
                                    {stops}
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                                <div className="topClass">
                                    {originBack} - {destinationBack}
                                </div>
                                <div className="hideClass">
                                    {getData(dateBack, durationBack)}
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                                <div className="topClass">
                                    в пути
                                </div>
                                <div className="hideClass">
                                    {getTime(durationBack)}
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                                <div className="topClass">
                                    {stopsBackAmount} пересадки
                                </div>
                                <div className="hideClass">
                                    {stopsBack}
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </CardBody>
        </>
    );
};

export default Ticket;
