import React, {useState} from 'react';
import axios from 'axios';
import "./Signup.css";
import { withRouter } from "react-router-dom";
import {API_URL, ACCESS_TOKEN_NAME} from '../constants/api-constants';

// const axios = require('axios');

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
        props.updateTitle('Home')
        props.history.push('/Home');
    }

    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/Login');
    }

    const sendDetailsToServer = () => {
        if(state.name.length && state.age.length && state.gender.length && state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "name":state.name,
                "age":state.age,
                "gender":state.gender,
                "email":state.email,
                "password":state.password,
                "confirmPassword":state.confirmPassword,
            }
            axios.post('http://aa55877066ca.ngrok.io/user',payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        console.log(response.data.token)
                        redirectToHome();
                        props.showError(null)
                        // console.log(response)
                    } else{
                        props.showError("Some error ocurred");
                        console.log("Some error ocurred")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
            console.log("Please enter valid username and password")
        } 
        // console.log(localStorage.getItem(ACCESS_TOKEN_NAME))
        // axios.get('http://192.168.42.90:8000/getAllUsers')
        //         .then(function (response) {
        //             console.log("inside then")
        //             if(response.status === 200){
        //                 setState(prevState => ({
        //                     ...prevState,
        //                     'successMessage' : 'Registration successful. Redirecting to home page..'
        //                 }))
        //                 localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
        //                 redirectToHome();
        //                 props.showError(null)
        //                 // console.log(response)
        //             } else{
        //                 props.showError("Some error ocurred");
        //                 console.log("Some error ocurred")
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // axios.get('http://f3be6ad93b02.ngrok.io/getAllUsers').then(response => console.log(response.data))
    }

    // {headers: {'Access-Control-Allow-Origin': 'http://f3be6ad93b02.ngrok.io','Access-Control-Allow-Methods':'PUT, DELETE, GET'}}

    const handleClick = () => {
        // e.preventDefault();
        // if (state.password === state.confirmPassword) {
        //     sendDetailsToServer()
        //     // console.log(state)
        // }
        // else {
        //     props.showError('Passwords do not match');
        // }
        sendDetailsToServer()
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
                    // onClick = {handleClick}
                    onClick={() => {console.log("Yessssirr")}}
                >
                    Signup
                </button>
                <div className="display-message" style={{display : state.successMessage ? 'block' : 'none'}} role="alert">
                    {state.successMessage}
                </div>
                <div className="toLogin">
                    <span> Have an account already? </span>
                    <span className="login-text" onClick={() => handleClick()}> Click here to login </span>
                </div>
            </form>
        </div>
        </>
    )
}

export default withRouter(Signup);