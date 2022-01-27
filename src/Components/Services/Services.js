import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import camping from '../../img/camping.png';
import guide from '../../img/guide.png';
import beaches from '../../img/beaches.png';
import rides from '../../img/rides.png';
import popular from '../../img/popular.png';
import budget from '../../img/budget.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Services = () => {
    // const [experiences, setExperiences] = useState([]);
    // useEffect(() => {
    //     fetch('https://glacial-springs-97945.herokuapp.com/all-experiences')
    //     .then(res => res.json())
    //     .then(data => setExperiences(data));
    // }, [])

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
            name: "Tent",
            icon: popular,
        },
        {
            id: 6,
            name: "Budget",
            icon: budget,
        },
    ]

    return (
        <>
            <section className="get-service py-5" id="getservice">
                <Container className="c--custom">
                        <Row>
                            <Col md={8} className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Popular Services</strong></h2>
                                <Row className="d-flex align-items-center justify-content-center">

                                {services.map((service) => (
                                    <Col sm={4} className="d-flex align-items-center justify-content-center p-4" key={service.id}>
                                        <div className="services">
                                            <div className="serve-item text-center">
                                                <img src={service.icon} className="py-3" alt="rentals"/>
                                                <h3 className="text-center semi-28">{service.name}</h3>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                                </Row>
                            </Col>
                            <Col md={4} className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Top Rated</strong></h2>
                                <Row className="d-flex align-items-center justify-content-center pt-5">

                                    <Col sm={12} className="pb-5">
                                        <h5>Camping (12)</h5>
                                    </Col>
                                    <Col sm={12} className="pb-5">
                                        <h5>Guide (8)</h5>
                                    </Col>
                                    <Col sm={12} className="pb-5">
                                        <h5>Beaches (5)</h5>
                                    </Col>
                                    <Col sm={12} className="pb-5">
                                        <h5>Budget (4)</h5>
                                    </Col>
                                    <Col sm={12} className="pb-5">
                                        <h5>Rides (1)</h5>
                                    </Col>
                                    <Col sm={12} className="pb-5">
                                        <h5>Tent (0)</h5>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;