import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"


import  {FormCheck,Card,Button,Col, Row, Container, Image, Form } from "react-bootstrap";
import React from "react";



const Styles = styled.div`
    background: #f3f7fa;
    
    input,label:hover{
        background:#f1fcff;
        cursor: pointer;
        }
    button{ 
        background: white;
        border: none;
        color: black;
        font-size:22px;
    }
    h5{
        color:#1b97f3;
        font-size: 32px;
        font-weight: 500;
    }    
    span{
        font-size: 14px;
    }
`

function App() {
    return (
        <Styles>
            <Container style={{maxWidth: "960px", height: "100vh"}}>
                <Row className="icon">
                    <Image style={{width: "120px", margin: "70px auto"}} src="/assets/airport.png" alt="icon_img"/>
                </Row>
                <Row>
                    <Col md="4">
                        <Form.Group className="bg-white p-4 shadow 1 ">
                            <h6 className="mb-4">количество пересадок</h6>
                            <FormCheck>
                                <FormCheck.Label>Все
                                    <FormCheck.Input className="mb-3" type={"checkbox"} />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck>
                                <FormCheck.Label>Без пересадок
                                    <FormCheck.Input className="mb-3" type={"checkbox"} />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck>
                                <FormCheck.Label>1 пересадка
                                    <FormCheck.Input className="mb-3" type={"checkbox"} />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck>
                                <FormCheck.Label>2 пересадки
                                    <FormCheck.Input className="mb-3" type={"checkbox"} />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck>
                                <FormCheck.Label>3 пересадки
                                    <FormCheck.Input className="mb-3" type={"checkbox"} />
                                </FormCheck.Label>
                            </FormCheck>
                        </Form.Group>
                        {/*<Card className="bg-white pt-4 ps-4 border-0 shadow 1" >*/}
                        {/*    <h6 className="mb-4">количество песадок</h6>*/}
                        {/*    <ul className="list-unstyled">*/}
                        {/*        <li className="mb-3"><input type="checkbox"/> Все</li>*/}
                        {/*        <li className="mb-3"><input type="checkbox"/> Без пересадок</li>*/}
                        {/*        <li className="mb-3"><input type="checkbox"/> 1 пересадка</li>*/}
                        {/*        <li className="mb-3"><input type="checkbox"/> 2 пересадки</li>*/}
                        {/*        <li className="mb-3"><input type="checkbox"/> 3 пересадки</li>*/}
                        {/*    </ul>*/}
                        {/*</Card>*/}
                    </Col>
                    <Col md="8">

                        <Button style={{width: "17rem", height: "60px"}}>
                            самый дешевый
                        </Button>
                        <Button style={{width: "17rem", height: "60px"}}>
                            самый дорогой
                        </Button>

                        <Card style={{ width: '34rem' }} className="mt-4 border-0 shadow 1">
                            <Card.Body>
                                <Row className="d-flex justify-content-between m-1">
                                    <h5 className="w-25">12 000p</h5>
                                    <Image style={{width: "150px"}}  src="/assets/icon.png" />
                                </Row>

                                <Row className="d-flex justify-content-between">
                                    <Col md="3" className="m-2">
                                        <div className="topClass">
                                            mow - hkt
                                        </div>
                                        <div className="hideClass">
                                            10:45-08:00
                                        </div>
                                    </Col>
                                    <Col md="3" className="m-2">
                                        <div className="topClass">
                                            в пути
                                        </div>
                                        <div className="hideClass">
                                            21ч 15м
                                        </div>
                                    </Col>
                                    <Col md="3" className="m-2">
                                        <div className="topClass">
                                            2 пересадки
                                        </div>
                                        <div className="hideClass">
                                            HKG,JNB
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-between">
                                    <Col md="3" className="m-2">
                                        <div className="topClass">
                                            mow - hkt
                                        </div>
                                        <div className="hideClass">
                                            11:20-00:50
                                        </div>
                                    </Col>
                                    <Col md="3" className="m-2">
                                        <div className="topClass">
                                            в пути
                                        </div>
                                        <div className="hideClass">
                                            13ч 30м
                                        </div>
                                    </Col>
                                    <Col md="3" className="m-2">
                                        <div className="topClass">
                                            2 пересадки
                                        </div>
                                        <div className="hideClass">
                                            HKG
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>


                    </Col>
                </Row>

            </Container>
        </Styles>

    );
}

export default App;
