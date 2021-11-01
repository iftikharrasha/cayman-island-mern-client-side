import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import youtube from '../../img/youtube.svg';
import phone from '../../img/phone.svg';
import mail from '../../img/mail.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';
import './About.css';

const About = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Dentario
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/lPOyaHAItAw" id="video"  allowFullScreen="always" allow="autoplay"></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <>
            <section className="about">
                <div className="cover">
                    <svg className="cover-svg" viewBox="0 0 1920 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M0 0H1920V196.068L0 381V0Z" fill="#CCDEE2"/>
                        <path d="M1520 321C1520 354.137 1493.14 381 1460 381V381C1426.86 381 1400 354.137 1400 321L1400 -22C1400 -55.1371 1426.86 -82 1460 -82V-82C1493.14 -82 1520 -55.1371 1520 -22L1520 321Z" fill="#77E0B5"/>
                        <rect x="1550" y="-361" width="98" height="659" rx="49" fill="#FCC8DF"/>
                        <rect x="1678" y="-510" width="56" height="659" rx="28" fill="#FCDC3D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="1920" height="381" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
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
                                            <Col sm={7} className="d-flex align-items-center"> 
                                                <h2 className="semi-50 c-tag-1">DENTARIO</h2>
                                            </Col>
                                            <Col sm={5} className="d-sm-block d-none text-right">
                                                    <Button className="btn-tag-2" onClick={() => setModalShow(true)}>
                                                        <img className="img-fluid pr-3" src={youtube} alt="youtube"/>
                                                        Watch
                                                    </Button>

                                                    <MyVerticallyCenteredModal
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                    />
                                            </Col>
                                            <Col>
                                                <div className="pt-4">
                                                    <p className="light-28">There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics. Bleaching methods use carbamide peroxide which reacts with water to form hydrogen peroxide loremis. There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics</p>
                                                </div>
                                                <ul className="pl-0">
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-1 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Teeth
                                                        </p>
                                                    </li>
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-1 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Oral
                                                        </p>
                                                    </li>
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-1 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Psychology
                                                        </p>
                                                    </li>
                                                    <li className="list-unstyled d-inline-block pr-4">
                                                        <p className="c-tag-1 medi-20">
                                                            <i className="fas fa-check pr-1"></i> Consultation
                                                        </p>
                                                    </li>
                                                </ul>
                                            </Col>

                                            <Col sm={12} className="d-sm-none d-block pt-3">
                                                    <Button className="btn-tag-2" onClick={() => setModalShow(true)}>
                                                        <img className="img-fluid pr-3" src={youtube} alt="youtube"/>
                                                        Watch
                                                    </Button>

                                                    <MyVerticallyCenteredModal
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="pt-5">
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