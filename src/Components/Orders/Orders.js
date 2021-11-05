import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Orders = () => {
    const { owner } = useParams();

    return (
        <>
            <section className="orders" id="services">
                <Container className="c--custom">
                    <div className="service--title text-center">
                        <h2 className="bold--40"> <strong>Your Orders</strong></h2>
                        <p className="py-3 lit--20">Choose a category that suits you. We got your back!</p>
                    </div>
                </Container>
                <Container className="c--custom--2 mt-5">
                    <div className="service--table">
                        <div className="card service--card">
                            <div className="card-body overflowX">
                                <div className="card--title">
                                    <Row>
                                        <Col sm={1} className="text-center">
                                            <p className="bold--13">BY</p>
                                        </Col>
                                        <Col sm={3} className="text-center">
                                            <p className="bold--13">ORDER TOKEN</p>
                                        </Col>
                                        <Col sm={2} className="d-sm-block d-none">
                                            <p className="bold--13">STATUS</p>
                                        </Col>
                                        <Col sm={2} className="d-sm-block d-none">
                                            <p className="bold--13">TRAFFIC INDEX</p>
                                        </Col>
                                        <Col sm={2} className="d-sm-block d-none">
                                            <p className="bold--13">PRICING STARTING FROM</p>
                                        </Col>
                                        <Col sm={2} className="d-sm-block d-none">
                                            <p className="bold--13">ACTION</p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="card--data" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="row mb-4">
                                        <Col sm={1} className="profile">
                                            <div className="platform--icon mr-lg-4 mr-3">
                                                <img src="./img/coinmarketcap-icon.png" alt="coinmarketcap-icon" className="img-fluid"/>
                                            </div>
                                        </Col>
                                        <div className="col-sm-3 d-flex align-items-center justify-content-center" id="heading-one">
                                            <div className="platform" id="accordion-one" data-toggle="collapse" data-target="#platform-one" aria-expanded="true" aria-controls="platform-one">
                                                <p className="lit--22">HWEW3003HY</p>
                                                <span className="platform--toggle fa-stack fa-sm d-sm-none d-block">
                                                    <i className="fas fa-circle fa-stack-2x"></i>
                                                    <i className="fas fa-plus fa-stack-1x fa-inverse text-white" id="toggleIcon-one"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <Col sm={2} className="label">
                                            <p className="bold--14" id="label-one">PENDING</p>
                                        </Col>
                                        <Col sm={2} className="traffic">
                                            <p className="bold--18" id="traffic-one"><span className="pr-2 up" id="tick-one"></span> 6,700</p>
                                        </Col>
                                        <Col sm={2} className="price">
                                            <p className="lit--22"><span className="bold--18" id="price-one">40 USD</span></p>
                                        </Col>
                                        <Col sm={2} className="store">
                                            <Link to="/cancel" className="bold--20" id="store-one">Cancel</Link>
                                        </Col>
                                        <Col id="platform-one" className="collapse" aria-labelledby="heading-one" data-parent="#accordion">
                                            {/* for mobile screen */}
                                        </Col>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Orders;