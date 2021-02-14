import http from './http'

class LoginService {

    signIn(data) {
         http.post('/user/signIn', data).then((response) => {
            console.log(response)
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data.token))
            }
            return response.data.token
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"))
    }

    signOut() {
        localStorage.removeItem("user")
    }

}

export default new LoginService()