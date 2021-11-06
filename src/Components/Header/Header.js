import React, { useContext } from 'react';
import logo from '../../img/cayman.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import firebase from "firebase/compat/app";

import {UserContext} from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
          localStorage.removeItem('token');
          localStorage.removeItem('uid');
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            tokenId: '',
            success: false,
            error: ''
          }
          setLoggedInUser(signedOutUser);
        }).catch((error) => {
            console.log(error);
        });
      }

    return (
        <>
            <header className="header py-4">
                <div className="header--nav">
                    <Navbar collapseOnSelect expand="lg">
                        <Container className="c--custom">
                            <Navbar.Brand as={Link} to="/" className="brand">
                                <img
                                    src={logo}
                                    width="100%"
                                    height="100%"
                                    className="d-inline-block align-top"
                                    alt="logo"
                                    id="brand"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-lg-auto medi--20 menu">
                                    <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/all-offers">All Offers</Nav.Link>
                                    { loggedInUser.isSignedIn ? <Nav.Link className="mr-lg-4 bold--17" as={Link} to={/all-orders/+loggedInUser.tokenId}>All Orders</Nav.Link>
                                     : <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/login">All Orders</Nav.Link>}
                                    
                                    <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/about">About</Nav.Link>
                                    {
                                    loggedInUser.isSignedIn ? <Dropdown>
                                                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center mr-lg-4">
                                                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Link to="/ride-search" className="dropdown-item lit--16">Find Ride</Link>
                                                                    <Link to="/ride-search" className="dropdown-item lit--16">Find Ride</Link>
                                                                    <Link to="/ride-search" className="dropdown-item lit--16">Find Ride</Link>
                                                                </Dropdown.Menu>
                                                            </Dropdown> :
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center mr-lg-4">
                                                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <p to="/ride-search" className="dropdown-item lit--16">Your Cart is Empty! <br /> Please login.</p>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                    }
                                    {
                                    loggedInUser.isSignedIn ? <Dropdown>
                                                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                                                    <span className="avatar mr-2">
                                                                        <img alt={loggedInUser.name} src={loggedInUser.photo}/>
                                                                    </span>
                                                                    <span className="mb-0 bold--17">{loggedInUser.name}</span>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Link to={`/my-orders/${loggedInUser.tokenId}`} className="dropdown-item lit--16">Manage My Orders</Link>
                                                                    <Link to={`/add-offers/${loggedInUser.tokenId}`} className="dropdown-item lit--16">Add Offers</Link>
                                                                    <Link to="/" className="dropdown-item lit--16" onClick={handleSignOut}>Sign Out</Link>
                                                                </Dropdown.Menu>
                                                            </Dropdown> : 
                                                            <Link to="/login" className="btn-tag-1 bold--16"><i className="fa fa fa-user"></i><span className="ml-2">Login</span></Link>
                                    }
                                    
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </header>
        </>
    );
};

export default Header;