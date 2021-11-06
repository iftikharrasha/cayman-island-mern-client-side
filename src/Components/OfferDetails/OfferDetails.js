import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { offers } from '../../FakeData/offers';
import { Container, Row, Col } from 'react-bootstrap';

const OfferDetails = (props) => {
    const { orderId } = useParams();

    const [offer, setOffer] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/place-order/${orderId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOffer(data));
    }, [])

    return (
        <>
            <section className="hero page" id="home">
                <Container className="c--custom">
                    <Row className="py-5">
                        <Col md={12} className="text-center">
                            <h2 className="bold--40"> <strong>Offers Details</strong></h2>
                        </Col>
                    </Row>
                </Container>
                <Container className="c--custom">
                    <div className="hero--top page--top">
                        <Row className="overflowX">
                            <Col lg={12} className="order-lg-1 order-2 pt-lg-0 pt-5 text-lg-left text-center mb-lg-5 mb-0 " data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <img className="img-fluid banner" src={offer.img} alt={offer.key}/>
                            </Col>
                            <Col lg={12} className="order-lg-2 order-1" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <h1 className="bold--30">{offer.title}</h1>
                                <h2 className="my-4 bold--30">Category: {offer.category}</h2>
                                <h4 className="lit--16">{offer.desc}</h4>
                                <p className="mt-4 bold--16">Price Starting from:</p> 
                                <h5 className="lit--16">{offer.price}$/Night</h5>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default OfferDetails;