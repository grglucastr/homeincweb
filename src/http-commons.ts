import axios from 'axios';

const prod_url = "http://172.17.0.3:8080/v2/";
const ENV_BASE_URL = process.env.NODE_ENV === "production" ? prod_url : "http://local.com";

console.log("Node Environment: ",process.env.NODE_ENV);
console.log("var value", ENV_BASE_URL);

export default axios.create({
    baseURL: ENV_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});