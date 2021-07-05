import React from 'react'
import { Route, BrowserRouter, Redirect} from 'react-router-dom'
import Login from './views/LoginRegister'
import AddClass from "./views/AddClass"
import Header from "./views/layout";


const Routes = props =>{
    const {isAuthenticated, setIsAuthenticated, setUserInfo} = props

    return(
        <BrowserRouter>
            <Route path="/" exact component={()=><Login setUserInfo={setUserInfo} autenticate={setIsAuthenticated}/>} />
            {
                isAuthenticated && <Route path="/organizador" exact component={()=> <Header logout={setIsAuthenticated}> <AddClass /> </Header>}/>
            }
            <Redirect to="/" />
        </BrowserRouter>


    )

}

export default Routes