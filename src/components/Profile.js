import React, {useState} from 'react';
import axios from 'axios';
import "./Profile.css";
import { withRouter } from "react-router-dom";
import Select from "react-select";
import {API_URL, ACCESS_TOKEN_NAME, userData, changeUserData} from '../constants/api-constants';
// import { Tile } from 'react-native-elements';

// const details = {
//     name: "Brahma",
//     age:"22",
//     gender:"male",
//     email:"brahmakulkarni99@gmail.com",
//     interests: ["Anime", "Singing"]
// };
// const userData = localStorage.getItem(ACCESS_TOKEN_NAME)
console.log(userData)
// const viewInterests = userData.interests.map((interest) => {
//     return <div>{interest}</div>
// });

function Profile(props) {
    // const userData = localStorage.getItem(ACCESS_TOKEN_NAME);
    
    return (
        <>
        <div className="profile-form hv-center">
            {/* <div className="profile-enclosure">
                Your Details
                <div className="name borders">Name <div>{details.name}</div></div>
                <div className="age borders">Age <div>{details.age}</div></div>
                <div className="gender borders">Gender <div>{details.gender}</div></div>
                <div className="email borders">Email Address <div>{details.email}</div></div>
                <div className="interests borders">
                    Interests 
                    <ul>
                        {viewInterests}
                    </ul>
                </div>
            </div> */}
            <form className="profile-enclosure">
                <div className="title bg-primary">
                    Your Details
                </div>
                <div className="formitems nameentry">
                    <label className="subtitles bg-primary">Name</label>
                    <div className="name-entry details">{userData.name}</div>
                </div>
                <div className="formitems ageentry">
                    <label className="subtitles bg-primary">Age</label>
                    <div className="age-entry details">{userData.age}</div>
                </div>
                <div className="formitems genderentry">
                    <label className="subtitles bg-primary">Gender</label>
                    <div className="gender-entry details">{userData.gender}</div>
                </div>
                <div className="formitems emailentry">
                    <label className="subtitles bg-primary">Email Address</label>
                    <div className="email-entry details">{userData.email}</div>
                </div>
                {/* <div className="formitems interestsentry">
                    <label className="subtitles bg-primary">Interests</label>
                    <div className="interests-entry details">{viewInterests}</div>
                </div> */}
            </form>
        </div>
        <div className="button">Button</div>
        </>
    )
}

export default withRouter(Profile);