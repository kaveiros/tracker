import {httpClient} from './http'

class LoginService {

    signIn(data) {
         return httpClient.post('/user/signIn', data)
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("userData"))
    }

    signOut() {
        localStorage.removeItem("userData")
    }

}

export default new LoginService()