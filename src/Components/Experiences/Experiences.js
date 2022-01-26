import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleExp from '../SingleExp/SingleExp';

const Experiences = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('https://glacial-springs-97945.herokuapp.com/all-offers')
        .then(res => res.json())
        .then(data => setOffers(data));
    }, [])

    return (
        <>
            <section className="offers py-5" id="offers">
                <Container className="c--custom">
                        <Row>
                            <Col md={12} className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Travel Experiences</strong></h2>
                            </Col>
                            <div className="offer--cards">
                                {offers.slice(0, 10).map((offer) => (
                                    <SingleExp offer={offer} key={offer._id}/>
                                ))}

                            </div>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Experiences;