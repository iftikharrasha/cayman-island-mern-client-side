import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { offers } from '../../FakeData/offers';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.svg';

const Offers = () => {
    return (
        <>
            <section className="offers py-5" id="offers">
                <Container className="c--custom">
                        <Row>
                            <Col md={12} className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Main offers</strong></h2>
                                <p className="py-3 lit--20">Choose a category that suits you. We got your back!</p>
                            </Col>
                            <div class="offer--cards">
                                {offers.map((offer) => (
                                    <div class="card--single" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" key={offer.id}>
                                        <div class="card--img">
                                            <img src={offer.icon} alt={offer.icon} class="img-fluid"/>
                                        </div>
                                        <h3 class="bold--22 my-4">{offer.title}</h3>
                                        <p class="lit--16">Our most popular service. Clients can appear on both "Today" and "All Time" rankings.
                                        </p>
                                        <button class="btn bold--22">
                                            <Link to={`/offer-search/${offer.route}`}>
                                                Order Now
                                                <span>
                                                    <img src={arrow} alt="arrow" class="img-fluid pl-2"/>
                                                </span>
                                            </Link>
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Offers;