import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.svg';

const SingleOffer = (props) => {
    const {img, title, id, desc} = props.offer;

    return (
        <>
            <div className="card--single" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" key={id}>
                <div className="card--img">
                    <img src={img} alt={id} className="img-fluid"/>
                </div>
                <h3 className="bold--22 my-4">{title}</h3>
                <p className="lit--16">{desc.slice(0, 100)} . . .</p>
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