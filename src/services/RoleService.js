import BaseService from "./BaseService";

class RoleService extends BaseService {

    constructor() {
        super('/role');
    }

}

export default new RoleService();
