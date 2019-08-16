import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 1000,
    headers: {}
});

export default api;