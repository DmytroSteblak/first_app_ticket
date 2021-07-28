import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

import { CardBody } from '../styled/Ticket-styled';

const Ticket = ({
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
    const getTime = (duration) => {
        return Math.floor(duration / 60) + 'ч: ' + (duration % 60) + 'м';
    };
    const getData = (date, duration) => {
        const dateStart = new Date(date);
        const dateEnd = new Date(dateStart.getTime() + duration * 60 * 1000);
        return dateStart.toTimeString().slice(0, 5) + ' - ' + dateEnd.toTimeString().slice(0, 5);
    };

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