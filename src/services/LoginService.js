import {httpClient} from './http'

class LoginService {

    async signIn(data) {
        return httpClient.post('/user/signIn', data)
    }

    getCurrentUser() {
        const userData = JSON.parse(localStorage.getItem("userData"))
        if (userData) {
            return userData.token
        }
        return null
    }

    signOut() {
        localStorage.removeItem("userData")
    }

    checkTokenValidity(token) {
        //TO DO
    }

}

export default new LoginService()
