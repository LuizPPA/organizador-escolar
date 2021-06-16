import './Login.css'
import React, { useState, useEffect } from 'react'
import {Button, InputAdornment, makeStyles, TextField} from "@material-ui/core"
import {Mail, User, Lock} from 'react-feather';

const useStyles = makeStyles((theme) => ({
    input: {
        marginTop: '8px',
        backgroundColor: 'white',
    },
    btn:{
        marginTop: '8px',
    },
}));

const Login = (props) =>{
    const {autenticate} = props

    const classes = useStyles();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState(null);
    const [registerLogin, setRegisterLogin] = useState(true);

    useEffect(() => {
        setLogin("");
        setPassword(null);
        setEmail("");
        setPasswordConfirm(null);
    },[registerLogin]);

    const handleAutenticate = () => {
        if(!registerLogin){
            //l;ogica de cadastro
            return;
        }
        autenticate && autenticate(true);
    }

    return (
        <div className="Login">
            
            <h2><b>Organizador</b> Escolar</h2>
            <form className="form" noValidate autoComplete="off">
                <p>Bem vindo!</p>
                <TextField
                    className={classes.input}
                    required
                    id="outlined-required"
                    label="Usuario"
                    variant="outlined"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <User size={16} />
                          </InputAdornment>
                        ),
                    }}
                />

                {!registerLogin && 
                    <TextField
                        className={classes.input}
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail size={16} />
                              </InputAdornment>
                            ),
                        }}
                    />
                }

                <TextField
                    required
                    className={classes.input}
                    id="outlined-password-input"
                    label="Senha"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock size={16} />
                          </InputAdornment>
                        ),
                    }}
                />

                {!registerLogin && 
                    <TextField
                        className={classes.input}
                        required
                        id="outlined-password-input"
                        label="Confirmar Senha"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock size={16} />
                              </InputAdornment>
                            ),
                        }}
                    />
                }
                 <Button onClick={() => handleAutenticate()}className={classes.btn} variant="contained" color="primary">{registerLogin ? "Logar" : "Registrar"}</Button>

                <a onClick={ () => setRegisterLogin(!registerLogin)}>{registerLogin ? 'Novo Usuario? Se cadastre' : 'Já tem Cadastro? Clique aqui para Logar'}</a>
            </form>
        </div>
    )
}

export default Login