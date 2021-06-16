import './App.css'
import React, {useState} from 'react'
import Login from "./views/LoginRegister"
import AddClass from "./views/AddClass"
import Header from "./views/layout";


const App = _ =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <div className="App">
            {
                !isAuthenticated ? <Login autenticate={setIsAuthenticated}/> : 
                <Header logout={setIsAuthenticated}>
                    <AddClass />
                </Header>
            }
        </div>
    )
}


export default App;