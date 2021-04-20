import BaseService from "./BaseService";

class SectorService extends BaseService{

    constructor() {
        super('/sector');
    }

}

export default new SectorService()
