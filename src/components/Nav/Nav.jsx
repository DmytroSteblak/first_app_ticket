import React from "react"
import {Col, Form, FormCheck} from "react-bootstrap";
import styled from "styled-components"

const NavB = styled.div`
    .check_itm:hover{
            background:#f1fcff;
            background-size:cover;
            }
    label:hover{
        cursor: pointer;
    }
    @media(max-width: 992px){
    h6{
        text-align: center;
    }
    div{
        display: flex;
        justify-content space-between;
            h6{
                display: block;
                margin: 0 auto;
            }
        }
    }
    @media(max-width: 992px){
        div{
            flex-wrap: wrap;
        }
    }
`

const Nav = () => {
    return (
        <Col lg="4" md="12">
            <Form.Group className="bg-white p-4 shadow 1 ">
                <NavB>
                <h6 className="mb-4">количество пересадок</h6>
                    <div>
                        <FormCheck className="check_itm">
                            <FormCheck.Label>Все
                                <FormCheck.Input className="mb-3" type={"checkbox"}/>
                            </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="check_itm">
                            <FormCheck.Label>Без пересадок
                                <FormCheck.Input className="mb-3" type={"checkbox"}/>
                            </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="check_itm">
                            <FormCheck.Label>1 пересадка
                                <FormCheck.Input className="mb-3" type={"checkbox"}/>
                            </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="check_itm">
                            <FormCheck.Label>2 пересадки
                                <FormCheck.Input className="mb-3" type={"checkbox"}/>
                            </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="check_itm">
                            <FormCheck.Label>3 пересадки
                                <FormCheck.Input className="mb-3" type={"checkbox"}/>
                            </FormCheck.Label>
                        </FormCheck>

                    </div>

                </NavB>
            </Form.Group>


        </Col>

    )
}


export default Nav;