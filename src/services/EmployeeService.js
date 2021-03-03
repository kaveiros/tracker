import {httpClient} from './http'

class EmployeeService {

    saveEmployee(data) {
        return httpClient.post('/employee/create',data)
    }

    searchEmployees(data, page) {
        return httpClient.post('/employee/search/'+page, data)
    }

    deleteEmployee(data) {
        return httpClient.delete("/employee/delete", data)
    }

}

export default new EmployeeService()