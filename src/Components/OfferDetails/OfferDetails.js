import React from 'react';
import { useParams } from 'react-router';
import { offers } from '../../FakeData/offers';
import { Container, Row, Col } from 'react-bootstrap';

const OfferDetails = (props) => {
    const { orderId } = useParams();
    const orderDetail = offers.find(offer => offer.id == orderId);
    const {id, category, title, img, icon, key} = orderDetail;

    return (
        <>
            <section className="hero page" id="home">
                <Container className="c--custom">
                    <Row className="py-5">
                        <Col md={12} className="text-center">
                            <h2 className="bold--40"> <strong>Offers Details</strong></h2>
                        </Col>
                    </Row>
                </Container>
                <Container className="c--custom">
                    <div className="hero--top page--top">
                        <Row className="overflowX">
                            <Col lg={6} className="order-lg-1 order-2 pt-lg-0 pt-5 text-lg-left text-center" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <img className="img-fluid banner" src={img} alt={key}/>
                            </Col>
                            <Col lg={6} className="order-lg-2 order-1" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <h1 className="bold--30">{title}</h1>
                                <h2 className="my-4 bold--30">{category}</h2>
                                <h4 className="lit--16">
                                    {category}
                                </h4>
                                <p className="mt-4 bold--16">{category}</p> 
                                <h4 className="lit--16">
                                {category}
                                </h4>
                                <p className="mt-4 my-3 bold--16">{category}</p>
                                <h4 className="lit--16">{category}</h4>
                                <p className="mt-5 lit--12">TAGS: BSC Token Marketing, Buy CoinHunt Upvote, Buy CoinHunt Upvotes, Buy CoinHunt Vote, Buy CoinHunt Votes, Buy CoinHunt.cc Upvote, Buy CoinHunt.cc Upvotes, Buy CoinHunt.cc Vote, Buy CoinHunt.cc Votes, Coin Hunt, Coin Upvotes, Coinhunt, Coinhunt All Time, Coinhunt All Time Trending, Coinhunt Today, Coinhunt Today Trending, Coinhunt Upvotes, Coinhunt Votes, Coinhunt.cc, Coinhunt.cc Upvotes, Coinhunt.cc Votes, CoinHunt Upvote Service, BSC Token Marketing, ERC Token Marketing, RankedUp.io Marketing, Ranked Up Marketing, Rankedup Marketing, Rank Up Marketing, Rankup Marketing, Token Marketing, Token Promoter, Token Promoters, Token Promotion, Token Promotions, Token Upvotes, Token Trending</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default OfferDetails;