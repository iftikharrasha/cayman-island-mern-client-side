import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../img/google.svg';
import preloader from '../../img/preloader.gif';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, signInWithGoogle, isLoading } = useAuth();
    const [newUser, setNewUser] = useState(false);
    const [passMatcher, setPassMather] = useState('');
    console.log('passMatcher:', passMatcher);

    const history = useHistory();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    const handleNormalAuth = (event) => {
        if(newUser && loginData.email && loginData.password && loginData.name){
            registerUser(loginData.email, loginData.password, loginData.name, location, history);
        }
        event.preventDefault();
    }

    //form validation part
    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        let isFormValid;

        if(field === 'name'){
            const regexName = /^[a-zA-Z ]{2,30}$/;
            const isNameOkay = regexName.test(value);
            const isNameLength = value.length > 4;
      
            isFormValid = isNameLength && isNameOkay;

            if(!isFormValid){
                const wrapper = document.getElementById('valid-icon-name');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-times-circle i-wrong" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }else{
                const wrapper = document.getElementById('valid-icon-name');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-check-circle i-right" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }
        }

        if(field === 'email'){
            const regexEm = /\S+@\S+\.\S+/;
            isFormValid = regexEm.test(value);

            if(!isFormValid){
                const wrapper = document.getElementById('valid-icon-email');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-times-circle i-wrong" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }else{
                const wrapper = document.getElementById('valid-icon-email');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-check-circle i-right" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }
        }
      
        if(field === 'password'){
            const regexPass = /\d{1}/;
            const isPassNumber = regexPass.test(value);
            const isPassLength = value.length > 5;
      
            isFormValid = isPassLength && isPassNumber;

            if(!isFormValid){
                const wrapper = document.getElementById('valid-icon-pass');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-times-circle i-wrong" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }else{
                setPassMather(value);
                const wrapper = document.getElementById('valid-icon-pass');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-check-circle i-right" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }
        }
      
        if(field === 're-password'){
            const regexPass = /\d{1}/;
            const isPassNumber = regexPass.test(value);
            const isPassLength = value.length > 5;
            console.log(value);
      
            isFormValid = isPassLength && isPassNumber && passMatcher === value;
            // console.log(isFormValid);

            if(!isFormValid){
                const wrapper = document.getElementById('valid-icon-re-pass');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-times-circle i-wrong" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }else{
                const wrapper = document.getElementById('valid-icon-re-pass');
                wrapper.innerHTML = '';
                const span = document.createElement('span');
                span.innerHTML = `
                    <i class="fas fa-check-circle i-right" aria-hidden="true"></i>
                `;
                wrapper.appendChild(span);
            }
        }
          
        if(isFormValid){
            const newUserInfo = {...loginData};
            newUserInfo[field] = value;
            setLoginData(newUserInfo);
            setNewUser(true);
        }
    }

    return (
        <>
            <section className="login">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-form bg-tag-1">
                        <div className="text-center">
                        <h2 className="mt-3 text-center reg-28">Create Your 
                            <b className="font-bold"> Account
                            </b>
                        </h2>
                        </div>

                            {
                                !isLoading && <form className="form" onSubmit={handleNormalAuth}>
                                        <div className="inputs my-4">
                                            <div className="input-field">
                                                <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit-14" type="text" name="name" onChange={handleOnBlur} placeholder="Enter Your Full Name" autoComplete="on" required/>
                                                <div className="input-icon">
                                                    <i className="fa fa-user-plus i-envelope" aria-hidden="true"></i>
                                                </div>
                                                {/* validation icon check */}
                                                <div className="input-field validation" id="valid-icon-name"></div>
                                            </div>
                                            <div className="input-field my-3">
                                                <input type="email" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit-14" name="email" onChange={handleOnBlur} placeholder="Enter Your email" autoComplete="on" required/>
                                                <div className="input-icon">
                                                    <i className="fa fa-envelope i-user" aria-hidden="true"></i>
                                                </div>
                                                {/* validation icon check */}
                                                <div className="input-field validation" id="valid-icon-email"></div>
                                            </div>
                                            <div className="input-field my-3">
                                                <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit-14" name="password" onChange={handleOnBlur} placeholder="Enter Password" autoComplete="on" required/>
                                                <div className="input-icon">
                                                    <i className="fa fa-key i-key" aria-hidden="true"></i>
                                                </div>
                                                {/* validation icon check */}
                                                <div className="input-field validation" id="valid-icon-pass"></div>
                                            </div>
                                            <div className="input-field my-3">
                                                <input type="password" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit-14" name="re-password" onChange={handleOnBlur} placeholder="Confirm Password" autoComplete="on" required/>
                                                <div className="input-icon">
                                                    <i className="fa fa-key i-key" aria-hidden="true"></i>
                                                </div>
                                                {/* validation icon check */}
                                                <div className="input-field validation" id="valid-icon-re-pass"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <button className="signin-btn">Create an account
                                            </button>
                                        </div>
                                        <div className="mt-4 text-center lit-14">Already have an account?
                                            <Link to="/login" className="ml-1 lit-14"><u>Login</u>
                                            </Link>
                                        </div>
                                    </form>
                            }

                            {
                                isLoading &&    <div className="loader">
                                                    <img src={preloader} alt={preloader} className="img-fluid"/>
                                                </div>
                            }
                    </div>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={4} className="offset-md-4">
                            <Row>
                                <Col md={12}>
                                    <div className="social-login d-block">
                                        <button onClick={handleGoogleSignIn}>
                                            <img src={google} alt="google"/>
                                            <span className="ml-2">Continue with Google</span> 
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
};

export default SignUp;