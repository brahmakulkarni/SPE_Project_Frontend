import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import {API_URL, ACCESS_TOKEN_NAME, userData, changeUserData} from '../constants/api-constants';
import { withRouter } from "react-router-dom";

// var allUsers = new Array();

// const viewInterests = userData.interests.map((interest) => {
//     return <div>{interest}</div>
// });



function Home(props) {
    var [allUsers,setAllUsers] = useState([]);

    useEffect(() => {
        localStorage.setItem('allUsers',allUsers);
    }, allUsers)

    const payload = {
        "email":userData.email,
    }

    axios.post(API_URL+"/similarity",payload)
        .then(function(response) {
            if (response.status === 200) {
                allUsers = response.data
                setAllUsers(response.data)
                console.log(response.data)
                props.showError(null)
            }
            else{
                props.showError("Some error ocurred");
                console.log("Some error ocurred")
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    function viewInterests(arr) {
        return arr.map((interest) => {
            return <div>{interest}</div>
        })
    }

    function view(arr) {
        return arr.map((user) => {
            return (
                <div className="profile-form hv-center">
                <form className="profile-enclosure">
                    <div className="formitems nameentry">
                        <label className="subtitles bg-primary">Name</label>
                        <div className="name-entry details">{user.name}</div>
                    </div>
                    <div className="formitems ageentry">
                        <label className="subtitles bg-primary">Age</label>
                        <div className="age-entry details">{user.age}</div>
                    </div>
                    <div className="formitems genderentry">
                        <label className="subtitles bg-primary">Gender</label>
                        <div className="gender-entry details">{user.gender}</div>
                    </div>
                    <div className="formitems emailentry">
                        <label className="subtitles bg-primary">Email Address</label>
                        <div className="email-entry details">{user.email}</div>
                    </div>
                    <div className="formitems interestsentry">
                        <label className="subtitles bg-primary">Interests</label>
                        <div className="interests-entry details">{viewInterests(user.interests)}</div>
                    </div>
                    <div className="formitems commoninterestsentry">
                        <label className="subtitles bg-primary">Common Interests</label>
                        <div className="interests-entry details">{viewInterests(user.common_interests)}</div>
                    </div>
                    <div className="formitems similarityentry">
                        <label className="subtitles bg-primary">Similarity Score</label>
                        <div className="email-entry details">{user.similarity_score}</div>
                    </div>
                </form>
                </div>
            )
        });
    }
    // function viewSimi(arr) {
    //     const len = arr.length
    //     for (var i = 0; i < len; i++) {
    //         <div>{arr[i]}</div>
    //     }
    // }
    return (
        <>
        <div className="disclaimer">You can see your similarity metrics with other users below</div>
        {view(allUsers)}
        </>
    )
}

export default withRouter(Home);