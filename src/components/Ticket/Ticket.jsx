import React from "react";
import {Card, Col, Image, Row} from "react-bootstrap";
import {CardBody} from "../../styled/Ticket-styled";



const Ticket = () =>(
    <CardBody>
        <Card className="mt-4 border-0 shadow 1 ">
            <Card.Body>
                <Row className="header_ticket m-1">
                    <h5 className="w-50">12 000p</h5>
                    <Image src="/assets/icon.png"/>
                </Row>

                <Row className="content_ticket">
                    <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                        <div className="topClass">
                            mow - hkt
                        </div>
                        <div className="hideClass">
                            10:45-08:00
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                        <div className="topClass">
                            в пути
                        </div>
                        <div className="hideClass">
                            21ч 15м
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                        <div className="topClass">
                            2 пересадки
                        </div>
                        <div className="hideClass">
                            HKG,JNB
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                        <div className="topClass">
                            mow - hkt
                        </div>
                        <div className="hideClass">
                            11:20-00:50
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                        <div className="topClass">
                            в пути
                        </div>
                        <div className="hideClass">
                            13ч 30м
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="5" className="m-2">
                        <div className="topClass">
                            2 пересадки
                        </div>
                        <div className="hideClass">
                            HKG
                        </div>
                    </Col>
                </Row>
                {/*<Row className="d-flex justify-content-between">*/}

                {/*</Row>*/}
            </Card.Body>
        </Card>
    </CardBody>



)

export default Ticket;