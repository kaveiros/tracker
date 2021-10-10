import validator from 'validator'
export const VALIDATOR_REQUIRED = 'VALIDATOR_REQUIRED'
export const VALIDATOR_NUMERIC = 'VALIDATOR_NUMERIC'

export const validate = (value, ...validatorTypes)=>{
    let isValid = true
    for(let validatorType of validatorTypes) {
        //console.log(validatorType)
        if(validatorType[0] === VALIDATOR_REQUIRED) {
            isValid = isValid && validator.isEmpty(value)
        }
        if (validatorType[0] === VALIDATOR_NUMERIC){
            isValid = isValid && !validator.isNumeric(value)
        }
    }
    return isValid
}


export const checkEmptyProperties = (obj) => {
    for (var key in obj) {
        if (obj[key] !== null && obj[key] !== "")
            return false;
    }
    return true;
}

export const hasErrors = (obj) => {
    for (var key in obj) {
        if (obj[key] === 'unknown' || obj[key] === false)
            return false;
    }
    return true;
}
