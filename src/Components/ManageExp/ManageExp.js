import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import beaches from '../../img/beaches.png';

const ManageExp = () => {
    const [allExperiences, setAllExperiences] = useState([]);
    useEffect(() => {
        const url = `https://glacial-springs-97945.herokuapp.com/all-experiences`
        fetch(url)
        .then(res => res.json())
        .then(data => setAllExperiences(data));
    }, [allExperiences])

    //Deleting
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete this experiences?');
        if(proceed) {
            const url = `https://glacial-springs-97945.herokuapp.com/cancel/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    document.getElementById('success1').style.display = 'block';
                    setAllExperiences(allExperiences);
                }else{
                    document.getElementById('error1').style.display = 'block';
                }
            });
        }
    }

    //Updating
    const handleUpdateOrder = id => {
        const proceed = window.confirm('Are you sure you want to approve this experiences?');
        if(proceed) {
            const url = `https://glacial-springs-97945.herokuapp.com/update/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(allExperiences)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    document.getElementById('success2').style.display = 'block';
                    setAllExperiences(allExperiences);
                }else{
                    document.getElementById('error2').style.display = 'block';
                }
            });
        }
    }

    return (
        <>
            <section className="orders" id="services">
                <Container className="c--custom">
                    <div className="service--title text-center">
                        <h2 className="bold--40"> <strong>Manage All Experiences</strong></h2>
                    </div>
                    <div className="text-center mb-3">
                        <p style={{color: 'green', display: 'none'}} id="success1">Successfully deleted your experiences!</p>
                        <p style={{color: 'red', display: 'none'}} id="error1">There is a problem deleting the experiences!</p>
                        <p style={{color: 'green', display: 'none'}} id="success2">Successfully Approved this experiences!</p>
                        <p style={{color: 'red', display: 'none'}} id="error2">There is a problem approving the experiences!</p>
                    </div>
                </Container>
                <Container className="c--custom--2 mt-5">
                    <div className="service--table">
                        <div className="card service--card">
                            <div className="card-body overflowX">
                            <div className="card--title">
                                    <Row>
                                        <Col sm={1} xs={4} className="text-center">
                                            <p className="bold--13">NO</p>
                                        </Col>
                                        <Col sm={3} xs={4} className="text-center">
                                            <p className="bold--13">Title</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                            <p className="bold--13">STATUS</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                            <p className="bold--13">CATEGORY</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block d-none">
                                            <p className="bold--13">APPROVE</p>
                                        </Col>
                                        <Col sm={2} xs={4} className="d-sm-block">
                                            <p className="bold--13">CANCEL</p>
                                        </Col>
                                    </Row>
                                </div>

                                {allExperiences.map((detail) => (
                                    <div className="card--data" data-aos="fade-left" data-aos-duration="1000">
                                        <div className="row mb-4">
                                            <Col sm={1} xs={4} className="profile">
                                                <div className="platform--icon mr-lg-4 mr-3">
                                                    <img src={beaches} alt="coinmarketcap-icon" className="img-fluid"/>
                                                </div>
                                            </Col>
                                            <Col sm={3} xs={4} className="d-flex align-items-center justify-content-center" id="heading-one">
                                                <div className="platform" id="accordion-one" data-toggle="collapse" data-target="#platform-one" aria-expanded="true" aria-controls="platform-one">
                                                    <p className="lit--22">{detail.title.slice(0, 20)}...</p>
                                                </div>
                                            </Col>
                                            <Col sm={2} xs={4} className="label">
                                                {
                                                    detail.status ? <p className="bold--14" id="label-one" style={{backgroundColor: 'red'}}>Pending</p> : <p className="bold--14" id="label-one">Approved</p>
                                                }
                                            </Col>
                                            <Col sm={2} xs={4} className="traffic">
                                                <p className="bold--18" id="traffic-one">{detail.category}</p>
                                            </Col>
                                            <Col sm={2} xs={4} className="price">
                                                {
                                                    detail.status ? <button className="lit--22" onClick={() => handleUpdateOrder(detail._id)}><span className="bold--18" id="price-one">Approve</span></button> : <button className="lit--22" disabled><span className="bold--18" id="price-one" style={{color: 'white'}}>N/A</span></button>
                                                }
                                            </Col>
                                            <Col sm={2} xs={4} className="store">
                                                <button className="bold--20" id="store-one" onClick={() => handleDeleteOrder(detail._id)}>Cancel</button>
                                            </Col>
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

export default ManageExp;