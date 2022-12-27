function reducerSignup(state, action = { type: "", payload: null }) {
    switch (action.type) {
        case 'fullname': {
            if (action.payload.length == 0) {
            return {
                ...state, fullname: {
                    value: action.payload,
                    shownameerror: true,
                    nameerror: "Please Enter Your Full Name"
                }
            }
               } else{
                return {
                    ...state, fullname: {
                        value: action.payload
                    }
                }
               } 
             }
        case 'email': {
            const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (action.payload.match(isValidEmail)) {
                return {
                    ...state, email: {
                        value: action.payload,
                    }
                }
            } else {
                return {
                    ...state, email: {
                        value: action.payload,
                        showemailerror: true,
                        emailerror: "Please Enter a Valid Email"
                    }
                }
            }
        }
        case 'password': {
            if (action.payload.length < 3) {
                return {
                    ...state, password: {
                        value: action.payload,
                        showpassworderror: true,
                        passworderror: "Please Enter Password"
                    }
                }
            } else {
                return {
                    ...state, password: {
                        value: action.payload
                    }
                }

            }
        }
        case 'confirmpassword': {
            if (action.payload != state.password.value) {
                return {
                    ...state, confirmpassword: {
                        value: action.payload,
                        showconfirmpassworderror: true,
                        confirmpassworderror: "Password and ConfirmPassword does not match"
                    }
                }
            }
            else {
                return {
                    ...state, confirmpassword: {
                        value: action.payload,
                        confirmpassworderror : null
                    }
                }
            }
        }

        default: {
            return state
        }
    }
}

export default reducerSignup