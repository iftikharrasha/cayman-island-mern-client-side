import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '../Pagination/Pagination';
import SingleExp from '../SingleExp/SingleExp';

const AllExp = () => {
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('https://glacial-springs-97945.herokuapp.com/all-offers')
        .then(res => res.json())
        .then(data => setExperiences(data));
    }, [])

    const [searchTerm, setSearchTerm] = useState('');

    const [showPerPage, setShowPerPage] = useState(9);

    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({start:start, end:end});
    };

    return (
        <>
            <section className="allOffers pb-2">
                <Container className="c--custom">
                    <Row className="pt-5">
                        <Col md={12} className="text-center">
                            <h2 className="bold--40 mb-4"> <strong>Explore Experiences</strong></h2>
                        </Col>
                    </Row>
                                        
                    <div className="offers">
                            <Row>
                                <Col sm={7} className="mx-auto">
                                    <form>
                                        <div className="inner-form">
                                            <div className="form-group">
                                                <span className="fa fa-search form-control-feedback" aria-hidden="true"></span>
                                                <input id="keyword" type="text" className="form-control fc-input" placeholder="SEARCH FOR MORE . . ." onChange={event => setSearchTerm(event.target.value)}/>
                                            </div>
                                        </div>
                                    </form>
                                </Col>  
                                <div className="offer--cards">
                                    {
                                        experiences.filter(experience => {
                                            if(searchTerm == ""){
                                                return experience;
                                            }else if(experience.category.toLowerCase().includes(searchTerm.toLowerCase()) || experience.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                                return experience;
                                            }
                                        }).slice(pagination.start,pagination.end).map(experience =>
                                                <SingleExp experience={experience} key={experience._id}/>
                                            )
                                    }
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={experiences.length}></Pagination>
                                </Col>
                            </Row>
                    </div>
                </Container>  
            </section>
        </>
    );
};

export default AllExp;