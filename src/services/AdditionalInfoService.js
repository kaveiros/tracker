import {httpClient, httpClientForm} from "./http";


class AdditionalInfoService {

    saveAdditionalInfo(data) {
        return httpClientForm.post('/additionalInfo/create', data)
    }

    downloadFile(data) {
        return httpClient.post('/additionalInfo/download-file', data)
    }

    searchAdditionalInfos(data, page) {
        return httpClient.get('/additionalInfo/all/'+page, data)
    }

}

export default new AdditionalInfoService()