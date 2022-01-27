import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleExp from '../SingleExp/SingleExp';

const Related = (props) => {
    const thisExp = props.experience;
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('https://glacial-springs-97945.herokuapp.com/all-offers')
        .then(res => res.json())
        .then(data => setExperiences(data));
    }, [])

    const relatedExp = experiences.filter(experience => experience.category === thisExp.category && experience._id !== props.id);
    console.log(relatedExp);
    return (
        <>
            <section className="offers py-5" id="offers">
                <Container className="c--custom">
                        <Row>
                            <Col md={12} className="mt-5">
                            {relatedExp.length === 0 ? <h2 className="bold--40"> <strong>No related blogs found!</strong></h2>
                            : <h2 className="bold--40"> <strong>You may also like:</strong></h2>    
                            } 
                            </Col>
                            <div className="offer--cards">
                                {relatedExp.map((experience) => (
                                    <SingleExp experience={experience} key={experience._id}/>
                                ))}

                            </div>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default Related;