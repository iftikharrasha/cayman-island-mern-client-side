import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
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

    const faq =  [
                {
                "title": "DO I NEED A VISA TO TRAVEL TO THE CAYMAN ISLANDS?",
                "description": "No. All visitors wishing to visit the Cook Islands will be issued a visitors permit on arrival into the Cook Islands, provided they meet the following entry requirements: All international passport holders must have a passport valid for a period of at least 6 months beyond their intended period of stay in the Cook Islands. This will allow you a stay of up to 31 days in the Cook Islands. "
                },
                {
                "title": "IS IT POSSIBLE TO EXTEND MY STAY IN THE CAYMAN ISLANDS?",
                "description": "Yes. Extensions may be granted on a monthly basis – for up to 6 months. All applications for extension must be made at least 2 weeks prior to departure. All visitors must have adequate financial means of supporting their extended stay. And confirmed booking/payments with the contact information of the accommodation provider for their intended stay."
                },
                {
                "title": "WHERE DO I GO IF I AM FEELING SICK ON RAROTONGA?",
                "description": "When on Rarotonga, visitors are encouraged to visit the Tupapa Outpatient for any medical assistance. Contact the Outpatient on: 00682 29110."
                },
                {
                "title": "CAN I DRIVE IN THE CAYMAN ISLANDS?",
                "description": "Yes. All visitors over the age of 16 are able to drive in the Cook Islands. Provided they have a current driver’s license from their home country or have obtained a Cook Islands visitors license."
                },
                {
                "title": "WHAT TIMEZONE IS USED IN THE CAYMAN ISLANDS?",
                "description": "CAYMAN Islands’ time is GMT-10 hours. Do your calculation before arrival, as booking accommodation to start a day too late is a common mistake."
                }
            ]

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