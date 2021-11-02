import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import send from '../../img/send.png';

const Footer = () => {
    return (
        <>
            <footer className="footer" id="footer">
                <div className="big-img">
                    <h2 class="bold-140"><span>CAYMAN ISLAND</span></h2>
                </div>
                <Container className="c--custom">
                    <div className="footer--counter">
                        <Row>
                            <Col xs={12}>
                                <div className="footer--contact">
                                    <div className="contact--title text-center">
                                        <h2 className="bold--26 mb-4">
                                            <div className="line-1"><span></span></div>
                                                <span className="px-4">Contact Us</span>
                                            <div className="line-2"><span></span></div>
                                        </h2>
                                        <p className="lit--16">Get in touch with us! We never contact you first and our support team is only available via Telegram. Contact ONLY @michaelrankup on Telegram for any questions or inquiries.</p>
                                    </div>
                                </div>
                                <div className="contact--info">
                                    <h4 className="lit--16 mr-sm-5">@caymanisland</h4>
                                    <img src={send} alt="send" className="img-fluid"/>
                                    <h4 className="lit--16 ml-sm-5">@iftikharrasha</h4>
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