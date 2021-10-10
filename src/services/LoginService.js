import {httpClient} from './http'
import TokenService from "./TokenService";

class LoginService {

    async signIn(data) {
        return httpClient.post('/user/signIn', data)
    }



    signOut() {
       TokenService.removeCurrentUser()
    }

    checkTokenValidity(token) {
        //TO DO
    }

}

export default new LoginService()
