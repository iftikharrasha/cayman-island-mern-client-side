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
import AddExp from './Components/AddExp/AddExp.js';
import Footer from './Components/Footer/Footer.js';
import AuthProvider from './contexts/AuthProvider/AuthProvider.js';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.js';
import Home from './Pages/Home/Home.js';
import Signin from './Pages/Login/Signin.js';
import Signup from './Pages/Signup/Signup.js';
import About from './Pages/About/About.js';
import NotFound from './Pages/NotFound/NotFound.js';
import Explore from './Pages/Explore/Explore.js';
import ExpDetails from './Components/ExpDetails/ExpDetails.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sass/style.css';

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
                                    <Signin/>
                                </Route>
                                <Route path="/signup">
                                    <Signup/>
                                </Route>
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/explore">
                                    <Explore/>
                                </Route>
                                <PrivateRoute path="/blog-details/:orderId">
                                    <Header/>
                                    <ExpDetails/>
                                    <Footer/>
                                </PrivateRoute>
                                <PrivateRoute path="/add-experience/:addedBy">
                                    <Header/>
                                    <AddExp/>
                                    <Footer/>
                                </PrivateRoute>
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
