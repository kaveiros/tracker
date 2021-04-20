import BaseService from "./BaseService";

class SectionService extends BaseService {

    constructor() {
        super('/section');
    }
}

export default new SectionService()
