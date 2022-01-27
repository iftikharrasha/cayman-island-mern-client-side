import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import home from '../../img/home.svg';
import account from '../../img/account.svg';
import shops from '../../img/shops.svg';
import products from '../../img/products.svg';
import services from '../../img/services.svg';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
    const { admin, loggedInUser } = useAuth();
    return (
        <>
            <nav className="sidenav">
                <div className="navbar-inner">
                    <ul className="navbar-nav">
                        <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to="/dashboard">
                                <img src={home} alt={home} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">Dashboard
                                </span>
                            </Link>
                        </li>

                        {admin &&  <li className="nav-item py-2 px-4">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                                <span className="nav-link">
                                                    <img src={products} alt={products} className="img-fluid mb-1"/>
                                                    <span className="nav-link-text px-2">Experiences
                                                    </span>
                                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Link className="nav-link" to="/manage-experiences">
                                                    <span className="nav-link-text px-2">All Experiences</span>
                                                </Link>
                                                <Link className="nav-link" to={`/add-experience/${(loggedInUser.name.toLowerCase().split(' '))[0]}`}>
                                                    <span className="nav-link-text px-2">Add Experiences</span>
                                                </Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                        }

                        {!admin && <li className="nav-item py-2 px-4">
                                    <Link className="nav-link" to={`/add-experience/${(loggedInUser.name.toLowerCase().split(' '))[0]}`}>
                                        <img src={services} alt={services} className="img-fluid mb-1"/>
                                        <span className="nav-link-text px-2">Add Experience</span>
                                    </Link>
                                </li>
                        }

                        {admin && <li className="nav-item py-2 px-4">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                    <span className="nav-link" to="/">
                                        <img src={account} alt={account} className="img-fluid mb-1"/>
                                        <span className="nav-link-text px-2">Users
                                        </span>
                                    </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link className="nav-link" to="/all-users">
                                        <span className="nav-link-text px-2">All Users</span>
                                    </Link>
                                    <Link className="nav-link" to="/add-admin">
                                        <span className="nav-link-text px-2">Add Admin</span>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li> }
                        {!admin && 
                            <li className="nav-item py-2 px-4">
                            <Link className="nav-link" to={`/my-posts/${(loggedInUser.name.toLowerCase().split(' '))[0]}`}>
                                <img src={shops} alt={shops} className="img-fluid mb-1"/>
                                <span className="nav-link-text px-2">My Posts
                                </span>
                            </Link>
                        </li> }
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;