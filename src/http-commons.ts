import axios from 'axios';

const ENV_BASE_URL = process.env.NODE_ENV === "production" ? process.env.REACT_APP_HOME_API_URL : "http://local.com";

console.log("Node Environment: ",process.env.NODE_ENV);
console.log("var value", ENV_BASE_URL);

export default axios.create({
    baseURL: ENV_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});