import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { offers } from '../../FakeData/offers';
import SingleOffer from '../SingleOffer/SingleOffer';

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
                            <div className="offer--cards">
                                {offers.slice(0, 6).map((offer) => (
                                    <SingleOffer offer={offer} key={offer._id}/>
                                ))}

                            </div>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Offers;