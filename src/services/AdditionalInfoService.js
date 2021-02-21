import http from "./http";

class AdditionalInfoService {

    saveAdditionalInfo(data) {
        return http.post('/aditional_info/save', data)
    }

}

export default new AdditionalInfoService()