class TokenService {

    getCurrentUser() {
        const userData = JSON.parse(localStorage.getItem("userData"))
        if (userData) {
            return userData.token
        }
        return null
    }

    removeCurrentUser() {
        localStorage.removeItem("userData")
    }

}

export default new TokenService()
