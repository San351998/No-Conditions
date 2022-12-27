import React, { useReducer } from 'react';
import TextField from '@mui/material/TextField'
import style from '../dashboardscreens/login.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import reducerLogin from './reducer/reducerlogin';
import axios from 'axios';

const initialState = {
    email: { value: '', emailerror: "", showemailerror: false },
    password: { value: '', passworderror: "", showpassworderror: false },
}

function Login() {

    const [state, dispatch] = useReducer(reducerLogin, initialState)


    const loginHandler = async (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className={style.loginpage}>
                <h3 className={style.loginpage_title}>Login</h3>
                <div className={style.loginpage_inner}>
                    <Box
                        component="form"
                        autoComplete="off"
                        className={style.login_form}

                    >
                        <TextField className={style.login_field} id="standard-basic" label="Email" variant="standard" type="email"
                            value={state.email.value}
                            onChange={e => { dispatch({ type: 'email', payload: e.target.value, error: "", showerror: false }) }}
                        />
                        {state.email.showemailerror ?
                            <div class={style.error}>
                                <p>{state.email.emailerror}</p></div>
                            : ""
                        }
                        <TextField className={style.login_field} id="standard-basic" label="Password" variant="standard"
                            value={state.password.value}
                            onChange={e => { dispatch({ type: 'password', payload: e.target.value, passworderror: false }) }}
                        />

                        {state.password.showpassworderror ?
                            <div class={style.error}>
                                <p>{state.password.passworderror}</p></div>
                            : ""
                        }

                        <Button onClick={loginHandler} variant="outlined">Login</Button>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Login