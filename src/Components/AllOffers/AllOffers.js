import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { offers } from '../../FakeData/offers';
import Pagination from '../Pagination/Pagination';
import SingleOffer from '../SingleOffer/SingleOffer';

const AllOffers = () => {
    const [offer, setOffer] = useState(offers);

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
                            <h2 className="bold--40"> <strong>All Offers</strong></h2>
                            <p className="py-3 lit--20">Choose a category that suits you. We got your back!</p>
                        </Col>
                    </Row>
                                        
                    <div className="offers">
                            <Row>
                                <Col sm={7} className="mx-auto">
                                    <form>
                                        <div className="inner-form">
                                            <div className="form-group">
                                                <span className="fa fa-search form-control-feedback" aria-hidden="true"></span>
                                                <input id="keyword" type="text" className="form-control fc-input" placeholder="SEARCH FOR OFFERS . . ." onChange={event => setSearchTerm(event.target.value)}/>
                                            </div>
                                        </div>
                                    </form>
                                </Col>  
                                <div className="offer--cards">
                                    {
                                        offer.filter(offer => {
                                            if(searchTerm == ""){
                                                return offer;
                                            }else if(offer.category.toLowerCase().includes(searchTerm.toLowerCase()) || offer.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                                return offer;
                                            }
                                        }).slice(pagination.start,pagination.end).map(offer =>
                                                <SingleOffer offer={offer} key={offer._id}/>
                                            )
                                    }
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={offer.length}></Pagination>
                                </Col>
                            </Row>
                    </div>
                </Container>  
            </section>
        </>
    );
};

export default AllOffers;