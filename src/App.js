import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import Header from './Components/Header/Header.js';
import MyOrders from './Components/MyOrders/MyOrders.js';
import AllOrders from './Components/AllOrders/AllOrders.js';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder.js';
import AddOffer from './Components/AddOffer/AddOffer.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Footer from './Components/Footer/Footer.js';
import NotFound from './Components/NotFound/NotFound.js';
import About from './Components/About/About.js';
import AllOffers from './Components/AllOffers/AllOffers.js';
import AuthProvider from './contexts/AuthProvider/AuthProvider.js';
import Home from './Pages/Home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sass/style.css';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.js';

function App() {
    return (
        <div className="App">

            <AuthProvider>
                <Router>
                    <ScrollToTop>
                        <Route render={({location}) => (
                            <Switch location={location}>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/home">
                                    <Home/>
                                </Route>
                                <Route path="/login">
                                    <Header/>
                                    <Login/>
                                    <Footer/>
                                </Route>
                                <Route path="/signup">
                                    <Header/>
                                    <SignUp/>
                                    <Footer/>
                                </Route>
                                <Route path="/about">
                                    <Header/>
                                    <About/>
                                    <Footer/>
                                </Route>
                                <Route path="/all-offers">
                                    <Header/>
                                    <AllOffers/>
                                    <Footer/>
                                </Route>
                                <PrivateRoute path="/all-orders">
                                    <Header/>
                                    <AllOrders/>
                                    <Footer/>
                                </PrivateRoute>
                                <PrivateRoute path="/my-orders/:orderOwner">
                                    <Header/>
                                    <MyOrders/>
                                    <Footer/>
                                </PrivateRoute>
                                <PrivateRoute path="/place-order/:orderId">
                                    <Header/>
                                    <PlaceOrder/>
                                    <Footer/>
                                </PrivateRoute>
                                <PrivateRoute path="/add-offers/:addedBy">
                                    <Header/>
                                    <AddOffer/>
                                    <Footer/>
                                </PrivateRoute>
                                <Route path="*">
                                    <NotFound/>
                                </Route>
                            </Switch>
                        )} />
                    </ScrollToTop>
                </Router>
            </AuthProvider>
        </div>
    );
    }

export default App;
