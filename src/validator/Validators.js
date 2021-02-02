import validator from 'validator'
export const VALIDATOR_REQUIRED = 'VALIDATOR_REQUIRED'
export const VALIDATOR_NUMERIC = 'VALIDATOR_NUMERIC'

export const validate = (value, ...validatorTypes)=>{
    let isValid = true
    for(let validatorType of validatorTypes) {
        console.log(validatorType)
        if(validatorType == VALIDATOR_REQUIRED) {
            isValid = isValid && validator.isEmpty(value)
        }
    }
    return isValid
}