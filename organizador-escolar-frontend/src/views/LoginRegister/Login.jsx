import React, { useState, useEffect } from 'react'
import {Button, InputAdornment, makeStyles, TextField } from "@material-ui/core"
import { Alert } from '@material-ui/lab';
import {Smile, User, Lock} from 'react-feather';
import api from '../../requests/api';
import { useHistory } from 'react-router';


const Login = (props) =>{
    const {autenticate, setUserInfo} = props

    const classes = useStyles();
    const history = useHistory()

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [registerLogin, setRegisterLogin] = useState(true);
    const [loading, setLoading] = useState(false)

    const [errorLogin, setErrorLogin] = useState(false)
    const [errorRegister, setErrorRegister] = useState(false)
    const [sucessRegister, setSucessRegister] = useState(false)

    useEffect(() => {
        setLogin("");
        setPassword("");
        setName("");
        setPasswordConfirm("");
        setErrorRegister(false);
        setErrorLogin(false);
        setSucessRegister(false);
    },[registerLogin]);


    const handleAutenticate = () => {
        setErrorRegister(false);
        setSucessRegister(false);
        if(!registerLogin){
            setLoading(true)
            api.post("/user/create", {name: name, login:login, password:password})
                .then( (response)=> {
                    setLoading(false)
                    setSucessRegister(true)
                    
                } )
                .catch( (response) => {
                    setErrorRegister(true)
                    setLoading(false)
                } )
            
            return;
        }else{
            setLoading(true)
            api.post("/user/login", {login:login, password:password})
                .then( (response)=> {
                    setUserInfo(response)
                    setLoading(false)
                    autenticate && autenticate(true);
                    history.push("/organizador")
                } )
                .catch( () => {                
                    setErrorLogin(true)
                    setLoading(false)
                })
        }


    }

    return (
        <div className={classes.Login}>
            
            <h2><b>Organizador</b> Escolar</h2>
            <div className={classes.form}>
                <p>Bem vindo!</p>
                <TextField
                    className={classes.input}
                    required
                    id="outlined-required"
                    label="Usuario"
                    variant="outlined"
                    value={login}
                    onChange={e => {setLogin(e.target.value)
                        setErrorLogin(false)
                        setSucessRegister(false)
                        setErrorRegister(false)
                    }}
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
                        label="Nome"
                        variant="outlined"
                        value={name}
                        onChange={e => {setName(e.target.value)
                            setSucessRegister(false)
                            setErrorRegister(false)
                        }}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Smile size={16} />
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
                    onChange={e => {setPassword(e.target.value)
                        setErrorLogin(false)
                        setSucessRegister(false)
                        setErrorRegister(false)
                    }}
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
                        onChange={e => {setPasswordConfirm(e.target.value)
                            setSucessRegister(false)
                            setErrorRegister(false)
                        }}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock size={16} />
                              </InputAdornment>
                            ),
                        }}
                    />
                }
                <Button disabled={loading} onClick={() => handleAutenticate()}className={classes.btn} variant="contained" color="primary">{registerLogin ? "Logar" : "Registrar"}</Button>
                
                {
                    errorLogin && <Alert className={classes.btn} variant="filled" severity="error">Erro ao fazer login</Alert>
                }

                {
                    errorRegister && <Alert className={classes.btn} variant="filled" severity="error">Erro ao fazer registro</Alert>           
                }

                {
                    sucessRegister && <Alert className={classes.btn} variant="filled" severity="success">Sucesso ao se registrar</Alert>
                }

                <a className={classes.link} onClick={ () => setRegisterLogin(!registerLogin)}>{registerLogin ? 'Novo Usuario? Se cadastre' : 'Já tem Cadastro? Clique aqui para Logar'}</a>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    input: {
        marginTop: '8px',
        backgroundColor: 'white',
    },
    btn:{
        marginTop: '8px',
    },
    Login:{
        display:"flex",
        height:"100%",
        justifyContent: "center",
        textAlign:"center",
        flexDirection:"column",
        alignItems:"center"
    },
    form:{
        padding: "16px 0px",
        width: "40vw",
        borderRadius: "8px",
        display:"flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#eee"
    },
    link:{
        marginTop: "8px",
        color:"#0000EE",
        textDecoration: "underline",
        '&:hover': {
            cursor: "pointer",
            textDecoration: "none"
         },
    }
}));


export default Login