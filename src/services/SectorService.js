import http from 'http'

class SectorService {

    getAllSectors() {
        return null
    }

    getSector(id){
        return http.get("/sector" + id)
    }

    saveSector(data) {
        return http.post("/sector/create",data)
    }

    updateSector(id, data) {
        return http.put("/sector/update"+id, data)
    }

    deleteSector(id) {
        return http.delete("/sector/delete" + id)
    }

}

export default new SectorService()