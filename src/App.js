import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './login'
import UserProfile from './user'

function App(props){
return(
    <BrowserRouter>
    <div>
        <Route path='/'component={Login}/>
        <Route path='/'component={UserProfile}/>
    </div>
    </BrowserRouter>
);
}
export default App