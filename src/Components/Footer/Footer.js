import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import like from '../../img/like.png';
import arrow from '../../img/up-arrow.png';
import profile from '../../img/profile.png';
import send from '../../img/send.png';

const Footer = () => {
    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer--contact">
                    <Container className="c--custom">
                        <div className="contact--title text-center">
                            <h2 className="bold--26 mb-4">
                                <div className="line-1"><span></span></div>
                                    <span className="px-4">Contact Us</span>
                                <div className="line-2"><span></span></div>
                            </h2>
                            <p className="lit--16">Get in touch with us! We never contact you first and our support team is only available via Telegram. <br /> Contact ONLY @michaelrankup on Telegram for any questions or inquiries.</p>
                        </div>
                    </Container>
                    <Container className="c--custom--2">
                        <div className="contact--info">
                            <h4 className="lit--16 mr-sm-5">@peacebusters</h4>
                            <img src={send} alt="send" className="img-fluid"/>
                            <h4 className="lit--16 ml-sm-5">@iftikharrasha</h4>
                        </div>
                    </Container>
                </div>
                <Container className="c--custom">
                    <div className="footer--counter">
                        <Row>
                            <Col xs={4} className="counter--single" id="counter01">
                                <div className="text-center">
                                    <img src={like} alt="like" className="img-fluid mb-2"/>
                                    <p className="bold--30"><span className="counter">50</span>+</p>
                                </div>
                            </Col>
                            <Col xs={4} className="counter--single" id="counter02">
                                <div className="text-center">
                                    <img src={arrow} alt="up arrow" className="img-fluid mb-2"/>
                                    <p className="bold--30"><span className="counter">100000</span>+</p>
                                </div>
                            </Col>
                            <Col xs={4} className="counter--single" id="counter03">
                                <div className="text-center">
                                    <img src={profile} alt="profile" className="img-fluid mb-2"/>
                                    <p className="bold--30"><span className="counter">40</span>+</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>
                    <div className="footer--contents">
                        <div className="footer--copyright">
                            <p className="lit--16">Copyright © 2021  CaymanIslands | Serving our customers since 2021 | Website made with <i className="fa fa-heart pulse"></i> by Iftikhar</p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer;