import React, {useState} from 'react';
import axios from 'axios';
import "./Editprofile.css";
import { withRouter } from "react-router-dom";
import Select from "react-select";
import {API_URL, ACCESS_TOKEN_NAME} from '../constants/api-constants';

function Editprofile(props) {
    const [state, setState]= useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        interests: [],
        successMessage: null
    });

    const options = [
        { label: "Singing", value: "singing" },
        { label: "Dancing", value: "dancing" },
        { label: "Anime", value: "anime" },
        { label: "Action movies", value: "action" },
        { label: "Travelling", value: "travelling" },
        { label: "Technology", value: "technology" },
        { label: "Politics", value: "politics" }
    ];

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
    }

    const handleMultiSelectChange = (e) => {
        const id = "interests"
        setState(prevState => ({
            ...prevState,[id] : e
        }))
        console.log(state.interests)
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
                    Edit Details
                </div>
                <div className = "form-items name-entry">
                    <label className="names bg-primary">Name</label>
                    <input type = "name"
                           className = "form-control"
                           id = "name"
                           placeholder = "Enter name"
                           value = {state.name}
                           onChange={handleChange}
                    />
                </div>
                <div className = "form-items age-entry">
                    <label className="names bg-primary">Age</label>
                    <input type = "age"
                           className = "form-control"
                           id = "age"
                           placeholder = "Enter age"
                           value = {state.age}
                           onChange={handleChange}
                    />
                </div>
                <div className = "form-items gender-entry">
                    <label className="names bg-primary">Gender</label>
                    <br/>
                    <select className="dropdown" name={state.gender} value={state.gender} onChange={handleSelectChange}>            
                        <option value="" disabled defaultValue>Select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-items email-entry">
                    <label className="names bg-primary">Email Address</label>
                    <input type="email"
                           className="form-control"
                           id = "email"
                           placeholder = "Enter email"
                           value = {state.email}
                           onChange = {handleChange}
                    />
                </div>
                <div className = "form-items password-entry">
                    <label className="names bg-primary">Password</label>
                    <input type = "password"
                           className = "form-control"
                           id = "password"
                           placeholder = "Enter password"
                           value = {state.password}
                           onChange={handleChange}
                    />
                </div>
                <div className = "form-items confirm-password-entry">
                    <label className="names bg-primary">Confirm Password</label>
                    <input type = "password"
                           className = "form-control"
                           id = "confirmPassword"
                           placeholder = "Confirm password"
                           value = {state.confirmPassword}
                           onChange={handleChange}
                    />
                </div>
                <div className = "form-items interests-entry">
                    <label className="names bg-primary">Select your interests</label>
                    <Select
                        isMulti
                        options={options}
                        name={state.interests}
                        value={state.interests}
                        onChange={handleMultiSelectChange}
                    />
                </div>
                <button
                    type = "submit"
                    className = "btn btn-primary"
                    // onClick = {handleClick}
                    // onClick={() => {console.log("Yessssirr")}}
                >
                    Make Changes
                </button>
                <div className="display-message" style={{display : state.successMessage ? 'block' : 'none'}} role="alert">
                    {state.successMessage}
                </div>
            </form>
        </div>
        </>
    )
}

export default withRouter(Editprofile);