import axios from 'axios';

const ENV_BASE_URL = process.env.REACT_APP_HOME_API_URL || 'http://localhost:8080/v2';

console.log("var value", ENV_BASE_URL);

export default axios.create({
    baseURL: ENV_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});