import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleExp from '../SingleExp/SingleExp';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;

    useEffect(() => {
        fetch(`https://glacial-springs-97945.herokuapp.com/all-experiences-with-page?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setExperiences(data.offers);
            const count = data.count;
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber);
        });
    }, [page])

    return (
        <>
            <section className="offers py-5" id="offers">
                <Container className="c--custom">
                        <Row>
                            <Col md={12} className="text-center mt-5">
                                <h2 className="bold--40"> <strong>Travel Experiences</strong></h2>
                            </Col>
                            <div className="offer--cards">
                                {experiences.map((experience) => (
                                    <SingleExp experience={experience} key={experience._id}/>
                                ))}
                            </div>
                        </Row>
                </Container>

                <div className="d-flex justify-content-center pt-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination page-ul">

                            {
                                
                                [...Array(pageCount).keys()].map(number => (
                                    <li className={`page-item prev pageNumber ${number === page ? "active" : ''}`} key={number+1}>
                                        <a className="page-link" onClick={() => setPage(number)}>{number+1}</a>
                                    </li>
                                ))
                            }
                        
                    </ul>
                    </nav>
                </div>
            </section>
        </>
    );
};

export default Experiences;