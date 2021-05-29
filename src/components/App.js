import React from 'react';

import Router from './Router'
import MealsContainer from './MealsContainer'
import CommentsContainer from './CommentsContainer';
import './App.css';

const App = () => {
    return (
        <div>
             <h1 className="Color">POST-MEAL</h1>
             <hr/>
            <MealsContainer/>
            <CommentsContainer/>
           <Router />
        </div>
    )
}

export default App;