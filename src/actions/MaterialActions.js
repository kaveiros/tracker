import * as MaterialActions from '../actionTypes/MaterialTypes'
import axios from 'axios'

let config = {
    headers: {
        "Content-Type": "application/json"
    }
  }

export const saveMaterial = (material) => {

    return dispatch  => {
        //dispatch(setIsLoading());
        console.log("DISPATCH" + material)
        console.log(material)

        axios.post("http://localhost:4000/material/create", material, config)
            .then(response => {
                const invoices = response.data
                console.log("Created")
                console.log(invoices)
                //dispatch(setInvoices(invoices))

            }).catch(error => {
                console.log(error.payload)
                // dispatch(hasApiError(error.message))

            })

    }
}