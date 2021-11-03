import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import faq from '../../FakeData/faq.json';
import '../../img/plus.svg';
import '../../img/minus.svg';

const Faq = () => {
    let indexPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return (
        <>
            <section className="faq">
                <Container className="c_custom">
                                <Row className="pt-4">
                                    <Col md={12} className="text-center mt-5">
                                        <h2 className="bold--40"> <strong>Frequently Asked Questions</strong></h2>
                                        <p className="py-3 lit--20">Full range of travel service!</p>
                                    </Col>
                                </Row>

                                <Row className="pt-5">
                                    <Col lg={12} className="pb-5">
                                        <form>     
                                            { faq.map((tab, index) => (
                                                <div key={index}>
                                                    <h3>
                                                        <button id="faq-btn"
                                                            onClick={(e) => eventHandler(e, index)}
                                                            className={ active === index ? 'active' : 'inactive'}
                                                            aria-expanded={ active === index ? 'true' : 'false' }
                                                            aria-controls={ 'sect-' + indexCount(index) }
                                                            aria-disabled={ active === index ? 'true' : 'false' }
                                                            tabIndex={indexCount(index)}
                                                        >
                                                            <span className="title-wrapper bold--20">{tab.title}
                                                                <span className={ active === index  ? 'minus' : 'plus'}></span>
                                                            </span>  
                                                        </button>
                                                    </h3>
                                                    <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                                                            { tab.description }
                                                    </div>
                                                </div>
                                                ))
                                            }
                                        </form>
                                    </Col>
                                </Row>
                </Container>  
            </section>
        </>
    );
};

export default Faq;