import axios from 'axios'
import TokenService from "./TokenService";

/**
 * Http client for sending json data.
 * @type {AxiosInstance}
 */
export const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers:{"Content-Type": "application/json",
        "Authorization": "Bearer " + TokenService.getCurrentUser()
    }
})

/**
 * Http client for submitting forms.
 * @type {AxiosInstance}
 */
export const httpClientForm = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + TokenService.getCurrentUser()
    }
})
