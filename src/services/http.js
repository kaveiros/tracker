import axios from 'axios'

export const httpClient = axios.create({
    baseURL: "http://localhost:4000",
    //baseURL: "https://project-tracker-api.herokuapp.com",
    headers:{"Content-Type": "application/json"}
})


export const httpClientForm = axios.create({
    baseURL: "http://localhost:4000",
    //baseURL: "https://project-tracker-api.herokuapp.com",
    headers: {
        "Content-Type": "multipart/form-data"
    }
})


