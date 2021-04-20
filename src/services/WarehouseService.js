import BaseService from "./BaseService";

 class WarehouseService extends BaseService {


    constructor() {
        super('/warehouse');
    }

}

export default new WarehouseService()

