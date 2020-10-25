import * as MaterialActions from './AppActions/MaterialActions'

export const saveMaterial = (material) =>{

    return dispatch => {
        //dispatch(setIsLoading());
     
         axios.post(baseUrl + "invoice/create", payment)
         .then(response => {
             const invoices = response.data
             console.log("Created")
             console.log(invoices)
             //dispatch(setInvoices(invoices))
     
         }).catch(error=> {
             console.log(error)
            // dispatch(hasApiError(error.message))
     
         })   

}

export const openDrawer = () =>{

    return {
        type: ACTIONS.OPEN_DRAWER
    }

}

export const closeDrawer = () =>{

    return {
        type: ACTIONS.CLOSE_DRAWER
    }

}