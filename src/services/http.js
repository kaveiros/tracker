import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:4000",
    //baseURL: "https://project-tracker-api.herokuapp.com",
    headers:{"Content-Type": "application/json"}
})