import {httpClient} from './http'

class EmployeeService {

    saveEmployee(data) {
        return httpClient.post('/employee/create',data)
    }

    /**
     * Search for employees.
     * @param data
     * @param page
     * @returns employees
     */
    searchEmployees(data, page) {
        return httpClient.post('/employee/search/'+page, data)
    }

    deleteEmployee(data) {
        return httpClient.delete("/employee/delete", data)
    }

    getAll(){
        return httpClient.get("/employee/all")
    }

}

export default new EmployeeService()
