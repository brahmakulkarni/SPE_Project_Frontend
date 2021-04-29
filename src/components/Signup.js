import React, {useState} from 'react';
import axios from 'axios';
import './Signup.css';
import { withRouter } from "react-router-dom";
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/api-constants';

function Signup(props) {
    const [state, setState]= useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: null
    })

    const handleChange = (e) => {
        const {id,value} = e.target
        setState(prevState => ({
            ...prevState,[id] : value
        }))
    }

    const handleSelectChange = (e) => {
        const {_,value} = e.target
        const id = "gender"
        setState(prevState => ({
            ...prevState,[id] : value
        }));
        // console.log(state.gender)
        // console.log(state.name)
        // console.log(state.age)
        // console.log(state)
    }

    const redirectToHome = () => {
        this.props.updateTitle('Home')
        this.props.history.push('/home');
    }

    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/Login');
    }

    // const sendDetailsToServer = () => {
    //     if(state.name.length && state.age.length && state.gender.length && state.email.length && state.password.length) {
    //         props.showError(null);
    //         const payload={
    //             "email":state.email,
    //             "password":state.password,
    //         }
    //         axios.post(API_URL+'/user/register', payload)
    //             .then(function (response) {
    //                 if(response.status === 200){
    //                     setState(prevState => ({
    //                         ...prevState,
    //                         'successMessage' : 'Registration successful. Redirecting to home page..'
    //                     }))
    //                     localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
    //                     redirectToHome();
    //                     props.showError(null)
    //                 } else{
    //                     props.showError("Some error ocurred");
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });    
    //     } else {
    //         props.showError('Please enter valid username and password')    
    //     } 
    // }

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
        <div className="registration-form hv-center">
            {/* <nav class="navbar bg-primary">
                <div className="text-white">
                <span className="h3">Register</span>
                </div>
            </nav> */}
            <form className="regform">
                <div className="title bg-primary">
                    Sign Up
                </div>
                <div className = "form-items name-entry">
                    <label className="names">Name</label>
                    <input type = "name"
                           className = "form-control"
                           id = "name"
                           placeholder = "Enter name"
                           value = {state.name}
                           onChange={handleChange}
                    />
                </div>
                <div className = "form-items age-entry">
                    <label className="names">Age</label>
                    <input type = "age"
                           className = "form-control"
                           id = "age"
                           placeholder = "Enter age"
                           value = {state.age}
                           onChange={handleChange}
                    />
                </div>
                <div className = "form-items gender-entry">
                    <label className="names">Gender</label>
                    <br/>
                    <select className="dropdown" name={state.gender} value={state.gender} onChange={handleSelectChange}>            
                        <option value="" disabled defaultValue>Select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-items email-entry">
                    <label className="names">Email Address</label>
                    <input type="email"
                           className="form-control"
                           id = "email"
                           placeholder = "Enter email"
                           value = {state.email}
                           onChange = {handleChange}
                    />
                </div>
                <div className = "form-items password-entry">
                    <label className="names">Password</label>
                    <input type = "password"
                           className = "form-control"
                           id = "password"
                           placeholder = "Enter password"
                           value = {state.password}
                           onChange={handleChange}
                    />
                </div>
                <div className = "form-items confirm-password-entry">
                    <label className="names">Confirm Password</label>
                    <input type = "password"
                           className = "form-control"
                           id = "confirmPassword"
                           placeholder = "Confirm password"
                           value = {state.confirmPassword}
                           onChange={handleChange}
                    />
                </div>
                <button
                    type = "submit"
                    className = "btn btn-primary"
                    onClick = {handleClick}
                >
                    Signup
                </button>
                <div className="display-message" style={{display : state.successMessage ? 'block' : 'none'}} role="alert">
                    {state.successMessage}
                </div>
                <div className="toLogin">
                    <span> Have an account already? </span>
                    <span className="login-text" onClick={() => redirectToLogin()}> Click here to login </span>
                </div>
            </form>
        </div>
        </>
    )
}

export default withRouter(Signup);