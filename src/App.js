import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"


import {Card, Button, Col, Row, Container, Image} from "react-bootstrap";
import React from "react";
import Nav from "./components/Nav/Nav";


const Styles = styled.div`
    background: #f3f7fa;
    
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
const Btn = styled.div`
    button{
        width: 17rem;
        height: 60px;
        @media(max-width: 992px){
            min-width: 50%;
        }
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
                    <Nav/>
                    <Col lg="8" md="12">
                        <Btn>
                            <Button>
                                самый дешевый
                            </Button>
                            <Button>
                                самый дорогой
                            </Button>
                        </Btn>
                        
                        <Card style={{width: '34rem', margin: "0 auto"}} className="mt-4 border-0 shadow 1">
                            <Card.Body>
                                <Row className="d-flex justify-content-between m-1">
                                    <h5 className="w-25">12 000p</h5>
                                    <Image style={{width: "150px"}} src="/assets/icon.png"/>
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
