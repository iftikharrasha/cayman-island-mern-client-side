import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <>
            <section className="hero" id="home">
                <Container className="c--custom">
                    <Row>
                        <Col>
                            <div className="hero--top">
                                <div className="top">
                                    <h1 className="text-center bold--55" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true">Find your paradise in <br /> <span>Cayman Island</span></h1>
                                    <p className="text-center mt-2 bold--24" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" data-aos-once="true">Let’s start your journey with us, your dream will come true!</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;