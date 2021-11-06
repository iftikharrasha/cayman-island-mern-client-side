import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { orders } from '../../FakeData/orders';
import beaches from '../../img/beaches.png';

const MyOrders = () => {
    const { orderOwner } = useParams();
    const orderDetail = orders.filter(order => order.token === orderOwner);
    console.log(orderDetail);
    // const {id, category, icon, token, price, status} = orderDetail;

    // function toggleOnMobile(idName){
    //     $("#toggleIcon-" + idName).toggleClass("fa-minus fa-plus");

    //     const platform = document.getElementById("platform-" + idName);
    //     platform.innerHTML = ' ';
    //     const platformDiv = document.createElement('div');
    //     const label = document.getElementById("label-" + idName).innerText;
    //     const traffic = document.getElementById("traffic-" + idName).innerText;
    //     const price = document.getElementById("price-" + idName).innerText;
    //     const store = document.getElementById("store-" + idName).href;
    //     platformDiv.className = 'row inserted';

    //     platformDiv.innerHTML =  `
    //     <div class="col">
    //         <div class="row">
    //             <div class="col-12 d-flex justify-content-between align-items-center">
    //                 <div class="headlines">
    //                     <p class="bold--13">LABEL</p>
    //                 </div>
    //                 <div class="label">
    //                     <p class="bold--14">${label}</p>
    //                 </div>
    //             </div>

    //             <div class="col-12 d-flex justify-content-between align-items-center">
    //                 <div class="headlines">
    //                     <p class="bold--13">TRAFFIC INDEX</p>
    //                 </div>
    //                 <div class="traffic">
    //                     <p class="bold--18">${traffic}</p>
    //                 </div>
    //             </div>

    //             <div class="col-12 d-flex justify-content-between align-items-center">
    //                 <div class="headlines">
    //                     <p class="bold--13">PRICING EQUIVALENT IN DOLLARS</p>
    //                 </div>
    //                 <div class="price">
    //                     <p class="lit--22">Starting from <span class="bold--18 pl-3">${price}</span></p>
    //                 </div>
    //             </div>

    //             <div class="col-12 d-flex justify-content-between align-items-center">
    //                 <div class="headlines">
    //                     <p class="bold--13">STORE</p>
    //                 </div>
    //                 <div class="col-6">
    //                     <div class="store">
    //                         <a href="${store}" class="bold--20">ORDER NOW</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    //     platform.appendChild(platformDiv);
    // }

    return (
        <>
            <section className="orders" id="services">
                <Container className="c--custom">
                    <div className="service--title text-center">
                        <h2 className="bold--40"> <strong>Your Orders</strong></h2>
                        <p className="py-3 lit--20">Choose a category that suits you. We got your back!</p>
                    </div>
                </Container>
                <Container className="c--custom--2 mt-5">
                    <div className="service--table">
                        <div className="card service--card">
                            <div className="card-body overflowX">
                                <div className="card--title">
                                    <Row>
                                        <Col sm={1} xs={4} className="text-center">
                                            <p className="bold--13">BY</p>
                                        </Col>
                                        <Col sm={3} xs={4} className="text-center">
                                            <p className="bold--13">ORDER TOKEN</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                            <p className="bold--13">STATUS</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                            <p className="bold--13">Category</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                            <p className="bold--13">PRICING STARTING FROM</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block">
                                            <p className="bold--13">ACTION</p>
                                        </Col>
                                    </Row>
                                </div>

                                {orderDetail.map((detail) => (
                                    <div className="card--data" data-aos="fade-left" data-aos-duration="1000">
                                        <div className="row mb-4">
                                            <Col sm={1} xs={4} className="profile">
                                                <div className="platform--icon mr-lg-4 mr-3">
                                                    <img src={beaches} alt="coinmarketcap-icon" className="img-fluid"/>
                                                </div>
                                            </Col>
                                            <Col sm={3} xs={4} className="d-flex align-items-center justify-content-center" id="heading-one">
                                                <div className="platform" id="accordion-one" data-toggle="collapse" data-target="#platform-one" aria-expanded="true" aria-controls="platform-one">
                                                    <p className="lit--22">{detail.token.slice(0, 10)}</p>
                                                    {/* <span className="platform--toggle fa-stack fa-sm d-sm-none d-block">
                                                        <i className="fas fa-circle fa-stack-2x"></i>
                                                        <i className="fas fa-plus fa-stack-1x fa-inverse text-white" id="toggleIcon-one"></i>
                                                    </span> */}
                                                </div>
                                            </Col>
                                            <Col sm={2} xs={4} className="label">
                                                <p className="bold--14" id="label-one">{detail.status}</p>
                                            </Col>
                                            <Col sm={2} xs={4} className="traffic">
                                                <p className="bold--18" id="traffic-one">{detail.category}</p>
                                            </Col>
                                            <Col sm={2} xs={4} className="price">
                                                <p className="lit--22"><span className="bold--18" id="price-one">{detail.price} USD</span></p>
                                            </Col>
                                            <Col sm={2} xs={4} className="store">
                                                <Link to="/cancel" className="bold--20" id="store-one">Cancel</Link>
                                            </Col>
                                            {/* <Col id="platform-one" className="collapse" aria-labelledby="heading-one" data-parent="#accordion">
                                                
                                            </Col> */}
                                        </div>
                                    </div>
                                ))}

                                
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default MyOrders;