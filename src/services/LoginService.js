import http from 'http'

class LoginService {

    signIn(data) {
        return http.post('/user/signIn', data)
    }

}

export default new LoginService()