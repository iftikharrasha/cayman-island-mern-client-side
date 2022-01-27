import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import moment from 'moment';
import useAuth from '../../hooks/useAuth';
import Related from '../Related/Related';

const ExpDetails = () => {
    const { orderId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [experience, setExperience] = useState([]);
    const { loggedInUser } = useAuth();

    useEffect(() => {
        const url = `https://glacial-springs-97945.herokuapp.com/exp-details/${orderId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setExperience(data));
    }, [orderId])

    useEffect(() => {
        const url = `https://glacial-springs-97945.herokuapp.com/reviews/${orderId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])

    //review system
    const ratingCount = {
        size: 0,
        count: 5,
        color: "black",
        activeColor: "red",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setRating(newValue);
        }
    };

    const commentRef = useRef();
    const date = new Date().toISOString();
    const author = loggedInUser.name;
    const img = loggedInUser.photo;

    const handleReview = (e) => {
        const comment = commentRef.current.value;
        const status = 'verified';

        const newReview = { orderId, author, img, comment, rating, status, date };
        fetch('https://glacial-springs-97945.herokuapp.com/add-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                document.getElementById('success').style.display = 'block';
                e.target.reset();
            }else{
                document.getElementById('error').style.display = 'block';
            }
        })
        e.preventDefault();
    }

    return (
        <>
            <section className="hero page pb-5" id="home" style={{minHeight: "auto"}}>
                <Container className="c--custom">
                    <Row className="py-5">
                        <Col md={12} className="text-center">
                                <h2 className="bold--30">{experience.title}</h2>
                        </Col>
                    </Row>
                </Container>
                <Container className="c--custom">
                    <div className="hero--top page--top">
                        <Row className="overflowX">
                            <Col md={6} className="pt-lg-0 pt-5 text-lg-left text-center mb-5">
                                <img className="img-fluid banner" src={experience.img} alt={experience.key}/>
                            </Col>

                            <Col md={6}>
                                <h4 className="lit--16">{experience.desc}</h4>
                                <Row className=" mt-5">
                                    <Col lg={6}>
                                        <p className="mt-1 bold--16">Date Posted:{experience.date}</p> 
                                        <p className="my-1 mb-4 lit--16">Category: {experience.category}</p>
                                    </Col>

                                    <Col lg={6}>
                                        <p className="mt-4 bold--16">Price Starting from:</p> 
                                        <h5 className="lit--16">{experience.price}$/Night</h5>
                                    </Col>
                                    
                                    <Col lg={6}>
                                        <p className="mt-4 bold--16">Location:</p> 
                                        <h5 className="lit--16">{experience.location}</h5>
                                    </Col>
                                    
                                    <Col loggedInUser={6}>
                                        <p className="mt-4 bold--16">Added by:</p> 
                                        <h5 className="lit--16">{experience.addedBy}</h5>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={12}>
                                <h3 className="my-4 bold--30">Reviews: {reviews.length}</h3> 
                                {reviews.map((review) => (
                                    <div className="comment__card" key={review._id}>
                                        <div className="comment__item">
                                            <div className="comment__desc">
                                                <div className="desc__top">
                                                    <div className="comment__img">
                                                        <img src={review.img} alt={review.name}/>
                                                    </div>
                                                    <div>
                                                        <span className="reg--24 user">{review.author}</span>
                                                        <span className="verified">{review.status}</span>
                                                        <div className="story-rating">
                                                            <ReactStars {...ratingCount} value={review.rating} edit={false}/>
                                                            <span className="reg--18 time">{moment(review.date).fromNow()}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <p>{review.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="login comment pt-0">
                <div className="text-center mb-3">
                    <p style={{color: 'green', display: 'none'}} id="success">Successfully added your review!</p>
                    <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding the review!</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-form bg-tag-1">
                        <div className="text-center">
                            <h2 className="mt-3 text-center reg-28">Drop a review
                            </h2>
                        </div>
                        <form className="form" onSubmit={handleReview}>
                            <div className="inputs my-4">
                                <div className="input-field">
                                    <textarea ref={commentRef} rows="3" cols="40" className="reg--24" required placeholder="Write your review here . . ."></textarea>
                                    <span className="story-rating">
                                        <h3 className="reg--24">Select your Rating:</h3>
                                        <ReactStars {...ratingCount} />
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="signin-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Related experience={experience} id={experience._id} key={experience._id}/>
        </>
    );
};

export default ExpDetails;