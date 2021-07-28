import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import{ Col, Form, FormCheck } from 'react-bootstrap';

import {
    allTickets,
    oneStopping, threeStopping,
    twoStopping,
    withoutStopped
} from '../redux/ducks/TicketsReducer';
import { NavB } from '../styled/Transplants-styled';

const Filter = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        all: false,
        no: false,
        one: false,
        two: false,
        three: false,
    });

    useEffect(() =>{
        const { pathname } = history.location;
        setState({
            [pathname.slice(1)]: true,
        });
    },[]);

    const handleClickFilter = (e) =>{
        history.push(`/${e.target.name}`);
        setState({
        [e.target.name]: e.target.checked,
        });
    if (e.target.name === 'one') {
        dispatch(oneStopping());
        }
    if (e.target.name === 'two') {
        dispatch(twoStopping());
        }
    if (e.target.name === 'three') {
        dispatch(threeStopping());
        }
    if (e.target.name === 'all') {
        dispatch(allTickets());
        }
    if (e.target.name === 'no') {
        dispatch(withoutStopped());
        }
    }

    return (
        <Formik
            initialValues={{
                toggle: false,
                check: []
            }}
        >
            <Col lg="4" md="12" xs="12">
                <Form.Group className="bg-white p-4 shadow 1">
                    <NavB>
                        <h6 className="mb-4">количество пересадок</h6>
                        <div>
                            <FormCheck className="check_itm">
                                <FormCheck.Label>Все
                                    <FormCheck.Input
                                        onChange={handleClickFilter}
                                        checked={state.all}
                                        name="all"
                                        value="all"
                                        className="mb-3"
                                    />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck className="check_itm">
                                <FormCheck.Label>Без пересадок
                                    <FormCheck.Input
                                        onChange={handleClickFilter}
                                        checked={state.no}
                                        name="no"
                                        value="no"
                                        className="mb-3"
                                    />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck className="check_itm">
                                <FormCheck.Label>1 пересадка
                                    <FormCheck.Input
                                        onChange={handleClickFilter}
                                        checked={state.one}
                                        name="one"
                                        value="one"
                                        className="mb-3"
                                    />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck className="check_itm">
                                <FormCheck.Label>2 пересадки
                                    <FormCheck.Input
                                        onChange={handleClickFilter}
                                        checked={state.two}
                                        name="two"
                                        value="two"
                                        className="mb-3"
                                    />
                                </FormCheck.Label>
                            </FormCheck>
                            <FormCheck className="check_itm">
                                <FormCheck.Label>3 пересадки
                                    <FormCheck.Input
                                        onChange={handleClickFilter}
                                        checked={state.three}
                                        name="three"
                                        value="three"
                                        className="mb-4"
                                    />
                                </FormCheck.Label>
                            </FormCheck>
                        </div>
                    </NavB>
                </Form.Group>
            </Col>
        </Formik>
    );
};

export default Filter;