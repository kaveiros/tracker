import BaseService from "./BaseService";
import {httpClient} from "./http";

class UserService extends BaseService {

    constructor() {
        super('/user');
    }

    setRole(data) {
        return httpClient.post("/user/setRole", data)
    }

}

export default new UserService()