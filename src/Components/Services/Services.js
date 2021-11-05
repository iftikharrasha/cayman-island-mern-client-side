import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import camping from '../../img/camping.png';
import guide from '../../img/guide.png';
import beaches from '../../img/beaches.png';
import rides from '../../img/rides.png';
import popular from '../../img/popular.png';
import budget from '../../img/budget.png';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Camping",
            icon: camping,
        },
        {
            id: 2,
            name: "Guide",
            icon: guide,
        },
        {
            id: 3,
            name: "Beaches",
            icon: beaches,
        },
        {
            id: 4,
            name: "Rides",
            icon: rides,
        },
        {
            id: 5,
            name: "Popular",
            icon: popular,
        },
        {
            id: 6,
            name: "budget",
            icon: budget,
        },
    ]

    return (
        <>
            <section className="get-service py-5" id="getservice">
                <Container className="c--custom">
                        <Row>
                            <Col md={12} className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Our Services</strong></h2>
                            </Col>
                            <Col md={12}>
                                <Row className="d-flex align-items-center justify-content-center">

                                {services.map((service) => (
                                    <Col xl={2} sm={4} className="d-flex align-items-center justify-content-center p-4" key={service.id}>
                                        <div className="services">
                                            <div className="serve-item text-center">
                                                <h3 className="text-center semi-28">{service.name}</h3>
                                                <img src={service.icon} className="py-3" alt="rentals"/>
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