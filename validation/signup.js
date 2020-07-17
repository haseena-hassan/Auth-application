const Validator = require("validator")
const isEmpty = require("is-empty")


module.exports = function validateSignupInput(data) {
    let errors = {}
    
    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : ""
    data.phone = !isEmpty(data.phone) ? data.phone : ""
    data.password = !isEmpty(data.password) ? data.password : ""
    data.password2 = !isEmpty(data.password2) ? data.password2 : ""
    

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    

    // Phone number checks
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "Phone number field is required"
    } else if (!Validator.isMobilePhone(data.phone) {
        errors.phone = "Phone is invalid"
    }

    
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required"
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters"
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match"
    }
    
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}