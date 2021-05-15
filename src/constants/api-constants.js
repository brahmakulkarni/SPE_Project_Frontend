export const API_URL = "http://localhost:8000";
export const ACCESS_TOKEN_NAME = 'login_access_token';

let userData = null
function changeUserData(data) {
    userData = data
}
export {userData,changeUserData}