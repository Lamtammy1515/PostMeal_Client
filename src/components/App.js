import React from 'react';
import Router from './Router'
import './App.css';
import {Link} from "react-router-dom"


const App = () => {
    return (
        <div>
            <center>
            <button class="button button2"><h3><Link to="/api/v1/">HOME</Link></h3></button>
            <button class="button button2"><h3><Link to="/api/v1/meals">CREATE MEAL POST</Link></h3></button>
            <button class="button button2"><h3><Link to="/api/v1/about">ABOUT</Link></h3></button>     
            
            <h1 className="Color">✎POST-MEAL</h1><hr/>
             
            <Router />
            </center>
        </div>
    )
}

export default App;