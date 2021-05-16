import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';
import {API_URL, ACCESS_TOKEN_NAME, userData, changeUserData} from '../constants/api-constants';
import { withRouter } from "react-router-dom";

var allUsers = null;

// const viewInterests = userData.interests.map((interest) => {
//     return <div>{interest}</div>
// });

function view(arr) {
    return arr.map((interest) => {
        return <div>{interest}</div>
    });
}

function Home(props) {
    // const payload = {
    //     "email":userData.email,
    // }
    // axios.post(API_URL+"/similarity",payload)
    //     .then(function(response) {
    //         if (response.status === 200) {
    //             allUsers = response.data;
    //             console.log(allUsers)
    //             props.showError(null)
    //         }
    //         else{
    //             props.showError("Some error ocurred");
    //             console.log("Some error ocurred")
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // // function viewSimi(arr) {
    // //     const len = arr.length
    // //     for (var i = 0; i < len; i++) {
    // //         <div>{arr[i]}</div>
    // //     }
    // // }
    return (
        <>
        </>
    )
}

export default withRouter(Home);