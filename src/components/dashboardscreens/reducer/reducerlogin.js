function reducerLogin(state, action = { type: "", payload: null }) {
    switch (action.type) {
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
        default: {
            return state
        }
    }
}

export default reducerLogin