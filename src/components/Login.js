import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/api-constants';
import { withRouter } from "react-router-dom";

function Login(props) {
    const [state,setState] = useState({
        email: "",
        password: "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id,value} = e.target
        setState(prevState => ({
            ...prevState,[id] : value
        }))
    }

    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/Home');
    }

    const redirectToSignUp = () => {
        props.updateTitle('SignUp')
        props.history.push('/Signup');
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            // sendDetailsToServer()
            console.log(state)
        }
        else {
            props.showError('Passwords do not match');
        }
    }

    return (
        <>
        <div className="login-form hv-center">
            <form className="loginform">
                <div className="title bg-primary">
                    Login
                </div>
                <div className="form-items email-entry">
                    <label className="labels">Email</label>
                    <input type = "email"
                           className="form-control"
                           id="email"
                           placeholder="Enter email"
                           value={state.email}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-items password-entry">
                    <label className="labels">Password</label>
                    <input type = "password"
                           className="form-control"
                           id="password"
                           placeholder="Enter password"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>
                <button
                    type = "submit"
                    className = "btn btn-primary"
                    onClick = {handleClick}
                >
                    Login
                </button>
                <div className="display-message" style={{display : state.successMessage ? 'block' : 'none'}} role="alert">
                    {state.successMessage}
                </div>
                <div className="toSignUp">
                    <span> Don't have an account yet? </span>
                    <span className="signup-text" onClick={redirectToSignUp}> Click here to Sign Up </span>
                </div>
            </form>
        </div>
        </>
    )
}

export default withRouter(Login);