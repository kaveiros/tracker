import http from './http'

class LoginService {

    signIn(data) {
         return http.post('/user/signIn', data)
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"))
    }

    signOut() {
        localStorage.removeItem("user")
    }

}

export default new LoginService()