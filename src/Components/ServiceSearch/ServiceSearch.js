import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { services } from '../../FakeData/services';
import './ServiceSearch.css';

const ServiceSearch = () => {
    const { serviceRoute } = useParams();
    const serviceDetail = services.find(service => service.name.toLowerCase() === serviceRoute);
    const {id, name, title, icon, img, desc} = serviceDetail;

    return (
        <>
           <section className="service-search py-5">
               <Container className="c_custom">
                        <Row>
                            <Col lg={12}>
                                <h2 className="reg-28">Service You've Picked: <img src={icon} alt={name} className="img-fluid"/> <span className="semi-28">{name}</span></h2>
                                <Row className="my-5">
                                    <Col className="d-flex justify-content-center">
                                        <img src={img} alt={img} className="img-fluid w-75" />
                                    </Col>
                                </Row>

                                <h4 className="text-center medi-30 px-5">{title}</h4>

                                <Row className="my-5">
                                    <Col className="d-flex justify-content-center">
                                       <p>{desc}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
               </Container>
           </section>
        </>
    );
};

export default ServiceSearch;