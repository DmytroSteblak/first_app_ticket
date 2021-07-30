import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import{ Col, Form, FormCheck } from 'react-bootstrap';

import {allTickets, filterStopped} from '../redux/ducks/TicketsReducer';
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
    const tickets = [
        { name: "checked", id: 4, value: "all", label: "Все", state: state.all },
        { name: "checked", id: 0, value: "no", label: "Без пересадок", state: state.no },
        { name: "checked", id: 1, value: "one", label: "1 пересадка", state: state.one },
        { name: "checked", id: 2, value: "two", label: "2 пересадки", state: state.two },
        { name: "checked", id: 3, value: "three", label: "3 пересадки", state: state.three },
    ];
    const { pathname } = history.location;
    useEffect(() =>{
        setState({
            [pathname.slice(1)]: true,
        });
    },[]);
    useEffect(() =>{
        setState(prevState => ({
            ...prevState, all: true
        }));
    },[]);
    const handleClickFilter = (e, id, value) =>{
        history.push(`/${e.target.defaultValue}`);
        setState({
            [e.target.defaultValue]: e.target.checked,
        });
        if (e.target.defaultValue === value) {
            dispatch(filterStopped(id));
        }
        if (e.target.defaultValue === "all") {
            dispatch(allTickets());
        }
    };

    return (
        <Formik
            initialValues={{
                checked: []
            }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {() => (
                <Col lg="4" md="12" xs="12">
                    <Form.Group className="bg-white p-4 shadow 1">
                        <NavB>
                            <h6 className="mb-4">количество пересадок</h6>
                            <div>
                                {tickets.map((itm) => (
                                    <FormCheck className="check_itm" key={itm.id}>
                                        <FormCheck.Label>{itm.label}
                                            <FormCheck.Input
                                                onChange={(event) => handleClickFilter(event, itm.id, itm.value)}
                                                checked={itm.state}
                                                name={itm.name}
                                                value={itm.value}
                                                className="mb-3"
                                            />
                                        </FormCheck.Label>
                                    </FormCheck>
                                ))}
                            </div>
                        </NavB>
                    </Form.Group>
                </Col>
            )}
        </Formik>
    );
};

export default Filter;