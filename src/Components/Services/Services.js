import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { services } from '../../FakeData/services';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <section className="get-service py-5" id="getservice">
                <Container className="c--custom">
                        <Row>
                            <Col md={12} className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Top Services</strong></h2>
                                <p className="py-3 lit--20">Choose a category that suits you. We got your back!</p>
                            </Col>
                            <Col md={12}>
                                <Row className="d-flex align-items-center justify-content-center">

                                {services.map((service) => (
                                    <Col xl={4} sm={6} className="d-flex align-items-center justify-content-center p-4" key={service.id}>
                                        <div className="services">
                                            <div className="serve-item text-center">
                                                <h3 className="text-center semi-28">{service.name}</h3>
                                                <img src={service.icon} className="py-3" alt="rentals"/>
                                                <div className="serve-extra">
                                                    <p>
                                                        <span className="ml-2 lit--20">{service.title}</span> 
                                                    </p>
                                                </div>
                                                <Link to={`/service-search/${service.route}`}>
                                                    <button className="btn btn-tag-1 mt-3">Read More</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                                </Row>
                            </Col>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;