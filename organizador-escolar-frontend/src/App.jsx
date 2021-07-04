import React, {useState} from 'react'
import Routes from "./Routes"
import { makeStyles } from "@material-ui/core"


const App = _ =>{
    const classes = useStyles();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState()

    return(
        <div className={classes.App}>
            <Routes userInfo={userInfo} setUserInfo={setUserInfo} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    App: {
        height:"100vh"
    }
}));


export default App;