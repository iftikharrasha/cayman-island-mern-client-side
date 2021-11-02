import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import youtube from '../../img/youtube.svg';
import phone from '../../img/phone.svg';
import mail from '../../img/mail.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';
import './About.css';

const About = () => {

    return (
        <>
            <section className="about">
                <div className="cover">
                    
                </div>

                <Container className="c_custom">
                        <div className="outlet-top mt--250-div">
                                <Row className="pt-4">
                                    <Col sm={12}>
                                        <h2 className="semi-50 text-left">About Us</h2> 
                                        <span className="bottom-line bl-cat"></span>
                                    </Col>
                                </Row>
                        </div>
                </Container>  

                <Container>
                        <div className="outlet-below mt-150-div">
                                <Row className="pt-5">
                                    <Col sm={12} className="pb-5">
                                        <Row>
                                            <Col sm={12} className="d-flex align-items-center"> 
                                                <h2 className="semi-50 c-tag-1">Cayman Island</h2>
                                            </Col>
                                            <Col>
                                                <div className="pt-4">
                                                    <p className="light-28">There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics. Bleaching methods use carbamide peroxide which reacts with water to form hydrogen peroxide loremis. There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="py-5">
                                            <Col>
                                                <h2 className="semi-50 c-tag-1">The Team</h2>
                                                <p className="light-28">Dentures actually improve our smiles and overall apperance. Not only they
                                                                        make us look better, but also make our life easier. Enjoy simple things as food,
                                                                        conversation and smile. Forget about uncomfortable social encounters.</p>
                                            </Col>
                                        </Row>
                                       
                                        <Row className="py-5 contact-field">
                                            <Col md={5} className="d-flex justify-content-center align-items-center">
                                                <div className="address">
                                                    <p className="c-tag-7 semi-25 pt-3 mb-0">
                                                       Gulshan 12, Banani
                                                    </p>
                                                    <h4 className="c-tag-7 medi-20 pb-4">
                                                        Dhaka, Bangladesh
                                                    </h4>
                                                    <div className="contacts pb-5 pb-md-0">
                                                        <p className="c-tag-7 medi-20 py-1">
                                                            <img className="img-fluid pr-2" src={phone} alt="phone"/> 041 720 18 08
                                                        </p>
                                                        <p className="c-tag-7 medi-20 py-1">
                                                            <img className="img-fluid pr-2" src={mail} alt="mail"/> info@dentario.com
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                        </div>
                </Container>

            </section>
            
        </>
    );
};

export default About;