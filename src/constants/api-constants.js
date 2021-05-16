export const API_URL = "http://localhost:8000";
export const ACCESS_TOKEN_NAME = 'login_access_token';

let userData = null
function changeUserData(data) {
    userData = data
}
export {userData,changeUserData}

export const options = [
    { label: "Singing", value: "singing" },
    { label: "Dancing", value: "dancing" },
    { label: "Anime", value: "anime" },
    { label: "Action movies", value: "action" },
    { label: "Travelling", value: "travelling" },
    { label: "Technology", value: "technology" },
    { label: "Painting", value: "painting" },
    { label: "Computer Vision", value: "computer vision" },
    { label: "Dogs", value: "dogs" },
    { label: "Writings", value: "Writings" },
    { label: "Politics", value: "politics" }
];