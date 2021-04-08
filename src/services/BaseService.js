import {httpClient} from "./http";

export default class BaseService {

    constructor(url) {
        this.url = url
    }


    save(data) {
        return httpClient.post(`${this.url}/create`, data)
    }

    search(data, page) {
        return httpClient.post(`${this.url}/search/`+page, data)
    }

    delete(data) {
        return httpClient.delete(`${this.url}/delete`, data)
    }

    getAll() {
        return httpClient.get(`${this.url}/all`)
    }

    update(data) {
        return httpClient.post(`${this.url}/update`,data)
    }

}
