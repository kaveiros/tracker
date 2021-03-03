import {httpClient} from './http'

class SectorService {

    getAllSectors() {
        return httpClient.get('/sector/all/')
    }

    getSector(id){
        return httpClient.get("/sector" + id)
    }

    saveSector(data) {
        return httpClient.post("/sector/create",data)
    }

    updateSector(id, data) {
        return httpClient.put("/sector/update"+id, data)
    }

    deleteSector(id) {
        return httpClient.delete("/sector/delete" + id)
    }

}

export default new SectorService()