import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.svg';

const SingleOffer = (props) => {
    const {icon, title, id} = props.offer;

    return (
        <>
            <div className="card--single" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" key={id}>
                <div className="card--img">
                    <img src={icon} alt={icon} className="img-fluid"/>
                </div>
                <h3 className="bold--22 my-4">{title}</h3>
                <p className="lit--16">Our most popular service. Clients can appear on both "Today" and "All Time" rankings.
                </p>
                <button className="btn bold--22">
                    <Link to={"/place-order/"+id}>
                        Order Now
                        <span>
                            <img src={arrow} alt="arrow" className="img-fluid pl-2"/>
                        </span>
                    </Link>
                </button>
            </div>
        </>
    );
};

export default SingleOffer;