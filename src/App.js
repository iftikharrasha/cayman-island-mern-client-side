import { React, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import jwt_decode from "jwt-decode";
import Header from './Components/Header/Header.js';
import Hero from './Components/Hero/Hero.js';
import Services from './Components/Services/Services.js';
import Offers from './Components/Offers/Offers.js';
import Intro from './Components/Intro/Intro.js';
import Orders from './Components/Orders/Orders.js';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Footer from './Components/Footer/Footer.js';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound.js';
import Faq from './Components/Faq/Faq.js';
import About from './Components/About/About.js';

import ServiceSearch from './Components/ServiceSearch/ServiceSearch.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sass/style.css';
import AllOffers from './Components/AllOffers/AllOffers.js';

export const UserContext = createContext();

function App() {
    const getDecodedUser = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return {
                isSignedIn: false,
                email: '',
                name: '',
                photo: '',
                success: false,
                error: ''
            };
        }
        const {name, email, picture} = jwt_decode(token);
        const decodedUser = {
            isSignedIn: true,
            email: email,
            photo: picture,
            success: true,
            name: (name.split(' '))[0]
        }
        return decodedUser;
    }

    const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());

    return (
        <div className="App">

            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <ScrollToTop>
                        <Route render={({location}) => (
                                    <Switch location={location}>
                                        <Route exact path="/">
                                            <Header/>
                                            <Hero/>
                                            <Services/>
                                            <Offers/>
                                            <Intro/>
                                            <Faq></Faq>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/home">
                                            <Header/>
                                            <Hero/>
                                            <Services/>
                                            <Offers/>
                                            <Intro/>
                                            <Faq></Faq>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/login">
                                            <Header/>
                                            <Login></Login>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/signup">
                                            <Header/>
                                            <SignUp></SignUp>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/about">
                                            <Header/>
                                            <About></About>
                                            <Footer></Footer>
                                        </Route>
                                        <Route path="/all-offers">
                                            <Header/>
                                            <AllOffers/>
                                            <Footer></Footer>
                                        </Route>
                                        <PrivateRoute path="/orders/:orderOwner">
                                            <Header/>
                                            <Orders/>
                                            <Footer></Footer>
                                        </PrivateRoute>
                                        <PrivateRoute path="/place-order/:orderId">
                                            <Header/>
                                            <PlaceOrder/>
                                            <Footer></Footer>
                                        </PrivateRoute>
                                        <Route path="*">
                                            <NotFound></NotFound>
                                        </Route>
                                    </Switch>
                        )} />
                    </ScrollToTop>
                </Router>
            </UserContext.Provider>

        </div>
    );
    }

export default App;
