import React from 'react';

import Router from './Router'
import MealsContainer from './MealsContainer'
import CommentsContainer from './CommentsContainer';


const App = () => {
    return (
        <div>
             <h1>POST-MEAL</h1>
             <hr/>
            <MealsContainer/>
            <CommentsContainer/>
           <Router />
        </div>
    )
}

export default App;