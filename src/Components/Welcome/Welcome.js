import React from 'react';
import useAuth from '../../hooks/useAuth';
import welcome from '../../img/welcome.png';

const Welcome = () => {
    const { loggedInUser } = useAuth();

    return (
        <>
            <div className="main-content">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-12">
                                <h4 className="reg-bod-56 pb-4">Welcome {loggedInUser.name},</h4>
                            </div>
                            <div className="col-md-12">
                                <div className="welcome-banner">
                                    <div className="card">
                                        <div className="row align-items-center">
                                            <div className="col-sm-8 pt-lg-4">
                                                <div className="card-body text-xs-center">
                                                    <h5 className="card-title reg-bod-24">Let’s get started!</h5>
                                                    <p className="reg-22">Here you can check manage posts, add posts and more all from this central dashboard.</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <img className="img-fluid" src={welcome} alt={welcome}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;