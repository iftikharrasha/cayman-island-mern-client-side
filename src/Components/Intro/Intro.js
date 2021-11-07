import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import play from '../../img/play-button.svg';
import intro_thumb from '../../img/intro-thumb.jpg';

const Intro = () => {
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
                Cayman Island
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/OUB9wx4rylk" id="video"  allowFullScreen="always" allow="autoplay"></iframe>
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
            <section className="intro py-5" id="intro">
                <Container className="c--custom">
                        <Row>
                            <Col className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Island Promo</strong></h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="overflowX">
                                    <div className="thumb--video text-center mt-5" data-aos="fade-left" data-aos-duration="1500">
                                        <Button className="video--button" onClick={() => setModalShow(true)}> 
                                            <span className="play--button">
                                                <img src={play} alt="Image" className="img-fluid"/>
                                            </span>
                                            <img src={intro_thumb} alt="intro" className="img-fluid"/>
                                        </Button>
                                    </div>
                                </div>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </Col>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Intro;