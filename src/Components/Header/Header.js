import { React } from 'react';
import logo from '../../img/cayman.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { loggedInUser, logoutUser } = useAuth();

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
                                    <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/explore">Explore More</Nav.Link>
                                    { loggedInUser.isSignedIn ? <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/all-orders">Dashboard</Nav.Link>
                                     : <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/login">All Orders</Nav.Link>}
                                    
                                    <Nav.Link className="mr-lg-4 bold--17" as={Link} to="/about">About</Nav.Link>
                                    {
                                    loggedInUser.isSignedIn ? <Dropdown>
                                                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                                                    <span className="avatar mr-2">
                                                                        <img alt={loggedInUser.name} src={loggedInUser.photo}/>
                                                                    </span>
                                                                    <span className="mb-0 bold--17">{loggedInUser.name}</span>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Link to={`/my-orders/${loggedInUser.tokenId}`} className="dropdown-item lit--16">Manage Profile</Link>
                                                                    <Link to={`/add-experience/${loggedInUser.name}`} className="dropdown-item lit--16">Share Experience</Link>
                                                                    <Link to="/" className="dropdown-item lit--16" onClick={logoutUser}>Sign Out</Link>
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