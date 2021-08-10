import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import{ Col, Form, FormCheck } from 'react-bootstrap';

import { allTickets, filterStopped } from '../redux/ducks/TicketsReducer';
import { Categories } from '../types';
import { tickets } from '../different';
import { NavB } from '../styled/Transplants-styled';

const Filter = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState<Categories>(Categories.All);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            setCurrentCategory(Categories.All);
        } else {
            setCurrentCategory(pathname.slice(1) as Categories);
        }
    },[pathname]);

    const updateStopped = (e: ChangeEvent<HTMLInputElement>, id: number, value: string) => {
        history.push(`/${e.target.defaultValue}`);
        if (e.target.defaultValue === value) {
            dispatch(filterStopped(id));
        }
        if (e.target.defaultValue === 'all') {
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
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => updateStopped(event, itm.id, itm.value)}
                                                checked={itm.value === currentCategory}
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