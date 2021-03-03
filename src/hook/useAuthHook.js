import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import LoginService from "../services/LoginService";
import {useHistory} from "react-router-dom";
import {waringNotification} from "../views/common/Notifications";

const useAuthHook = () => {

    const warningMessage = "Η συνεδρία έληξε. Συνδεθείτε ξανά."

    const defaultUser = null
    const user = useState(()=> {
        try {
            const userData = localStorage.getItem('userData')
            const decoded = jwt_decode(userData)
            return userData? decoded: defaultUser
        }
        catch (err) {
            return defaultUser
        }
    })
    const history = useHistory();


    useEffect(()=>{
        console.log("Called")

        if (user[0]) {
            console.log(user[0].exp * 1000, Date.now())
            if (Date.now() >= user[0].exp * 1000) {
                LoginService.signOut()
                waringNotification(warningMessage)
                history.push("/login")
            }
        }
    })

    useEffect(()=>{
        //TO DO CHECK IF TOKEN VALID
        if(user[0]) {
            LoginService.checkTokenValidity(user[0].token)
        }
    })


    return {user}

}

export default useAuthHook
