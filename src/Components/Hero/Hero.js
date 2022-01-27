import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Hero = () => {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <>
            <section className="hero" id="home">
                <Container className="c--custom">
                    <Row>
                        <Col>
                            <div className="hero--top">
                                <div className="top">
                                    <Slider {...settings}>
                                        <div>
                                            <h1 className="text-center bold--55" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true">Find your paradise in <br /> <span>Cayman Island</span></h1>
                                            <p className="text-center mt-2 bold--24" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" data-aos-once="true">Let’s start your journey with us, your dream will come true! Become an ambassador of the Cayman Islands, enjoy holiday.</p>
                                        </div>
                                        <div>
                                            <h1 className="text-center bold--55" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true">Global Citizen <br /> <span>Concierge</span></h1>
                                            <p className="text-center mt-2 bold--24" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" data-aos-once="true">Apply to become a Global Citizen and trade in your WFH routine for sun, sand, sea and safety in Cayman for up to two yea</p>
                                        </div>
                                        <div>
                                            <h1 className="text-center bold--55" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true">Write Your <br /> <span>Cayman Story</span></h1>
                                            <p className="text-center mt-2 bold--24" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" data-aos-once="true">Here, you can pamper your body, relax your mind and soothe your soul while on vacation. Reference our Wellness Guide here.</p>
                                        </div>
                                    </Slider>
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