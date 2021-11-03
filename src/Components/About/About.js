import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import phone from '../../img/phone.svg';
import mail from '../../img/mail.svg';

const About = () => {

    return (
        <>
            <section className="about"> 
                <Container>
                    <Row className="pt-5">
                        <Col sm={12} className="pb-5">
                            <Row>
                                <Col>
                                    <h2 className="bold--40 mb-4">Cayman Island</h2>
                                    <p className="lit--22">Cayman Islands, island group and overseas territory of the United Kingdom in the Caribbean Sea, comprising the islands of Grand Cayman, Little Cayman, and Cayman Brac, situated about 180 miles (290 km) northwest of Jamaica. The islands are the outcroppings of a submarine mountain range that extends northeastward from Belize to Cuba. The capital is George Town, on Grand Cayman.s</p>
                                </Col>
                            </Row>
                            <Row className="py-5">
                                <Col>
                                    <h2 className="bold--40 mb-4">The Land</h2>
                                    <p className="lit--22">The islands are generally low-lying, though Cayman Brac has a central bluff that constitutes 90 percent of its landmass. The coasts are ironshore (limestone fringes with numerous marine fossils) interspersed with sandy beaches and enclosed by coral reefs. Grand Cayman is the largest and most populous island, about 22 miles (35 km) long and 8 miles (13 km) across at its widest, with a total area of 76 square miles (197 square km). It has a 36-square-mile (93-square-km) sound that is a breeding ground for much marine life. Cayman Brac, about 89 miles (143 km) northeast of Grand Cayman, is the next largest island; it is about 12 miles (19 km) long, averages about 1 mile (1.6 km) in width, and has the highest elevation of the group, rising to 140 feet (42 metres) above sea level. Its total area is 14 square miles (36 square km). The smallest of the islands, Little Cayman, lies 5 miles (8 km) west of Cayman Brac; it is 10 miles (16 km) long and has a maximum width of 2 miles (3 km) and a total area of 10 square miles (26 square km). There are no rivers.</p>
                                </Col>
                            </Row>
                            
                            <Row className="py-5 info--field">
                                <Col md={5} className="d-flex justify-content-center align-items-center">
                                    <div className="address">
                                        <p className="bold--26 pt-3 mb-0">
                                            Grand Cayman, North Side
                                        </p>
                                        <h4 className="bold--20 pb-4">
                                            Bodden Tower, West Indies
                                        </h4>
                                        <div className="contacts pb-5 pb-md-0">
                                            <p className="bold--20 py-1">
                                                <img className="img-fluid pr-2" src={phone} alt="phone"/> 041 720 18 08
                                            </p>
                                            <p className="bold--20 py-1">
                                                <img className="img-fluid pr-2" src={mail} alt="mail"/> info@caymanislands.com
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120477.00758138107!2d-81.32263921305156!3d19.329863712927324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f258987d79949a1%3A0x3a0bed0c18902c49!2sGrand%20Cayman!5e0!3m2!1sen!2sbd!4v1635881820594!5m2!1sen!2sbd" allowFullScreen="" loading="lazy"></iframe>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </section>
            
        </>
    );
};

export default About;