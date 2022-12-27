import React, { useReducer, useContext } from 'react';
import TextField from '@mui/material/TextField';
import style from '../dashboardscreens/signup.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import reducerSignup from './reducer/reducersignup';
import { apicallPost } from '../../axios';
import apiurl from "../../apis_url"
import Loader from '../layout/loader';
import LoaderContext from '../../context/loadercontext';

const initialState = {
    fullname: { value: '', nameerror: "", shownameerror: false },
    email: { value: '', emailerror: "", showemailerror: false },
    password: { value: '', passworderror: "", showpassworderror: false },
    confirmpassword: { value: '', confirmpassworderror: "", showconfirmpassworderror: false },
}

function Signup() {
    const { loading } = useContext(LoaderContext)
    const [state, dispatch] = useReducer(reducerSignup, initialState)

    const signupHandler = async (e) => {
        e.preventDefault();

        const data = {
            fullName: state.fullname.value,
            email: state.email.value,
            password: state.password.value,
            confirmPassword: state.confirmpassword.value,
        }

        try {
            const resp = await apicallPost(apiurl.SIGNUP, data);
        }
        catch (error) {
            
        }
    }

    return (
        <>
            {loading ? <Loader /> :
                <div className={style.signuppage}>
                    <h3 className={style.signuppage_title}>Signup</h3>
                    <div className={style.signuppage_inner}>
                        <Box
                            component="form"
                            autoComplete="off"
                            className={style.signup_form}

                        >
                            <TextField className={style.signup_field} id="standard-basic" label="Full Name" variant="standard"
                                value={state.fullname.value}
                                onChange={e => { dispatch({ type: 'fullname', payload: e.target.value, shownameerror: false }) }}
                            />
                            {state.fullname.shownameerror ?
                                <div class={style.error}>
                                    <p>{state.fullname.nameerror}</p></div>
                                : ""
                            }
                            <TextField className={style.signup_field} id="standard-basic" label="Email" variant="standard" type="email"
                                value={state.email.value}
                                onChange={e => { dispatch({ type: 'email', payload: e.target.value, error: "", showerror: false }) }}
                            />
                            {state.email.showemailerror ?
                                <div class={style.error}>
                                    <p>{state.email.emailerror}</p></div>
                                : ""
                            }

                            <TextField className={style.signup_field} id="standard-basic" label="Password" variant="standard"
                                value={state.password.value}
                                onChange={e => { dispatch({ type: 'password', payload: e.target.value, passworderror: false }) }}
                            />

                            {state.password.showpassworderror ?
                                <div class={style.error}>
                                    <p>{state.password.passworderror}</p></div>
                                : ""
                            }

                            <TextField className={style.signup_field} id="standard-basic" label="Confirm Password" variant="standard"
                                value={state.confirmpassword.value}
                                onChange={e => { dispatch({ type: 'confirmpassword', payload: e.target.value, confirmpassworderror: false }) }}
                            />
                            {state.confirmpassword.showconfirmpassworderror ?
                                <div class={style.error}>
                                    <p>{state.confirmpassword.confirmpassworderror}</p></div>
                                : ""
                            }
                            <Button onClick={signupHandler} variant="outlined">Signup</Button>
                        </Box>
                    </div>
                </div>
            }
        </>
    )
}

export default Signup