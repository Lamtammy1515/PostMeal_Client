import React from 'react';

import Router from './Router'
import MealsContainer from './MealsContainer'
import CommentsContainer from './CommentsContainer';

const App = () => {
    return (
        <div>
            <MealsContainer/>
           <Router />
        </div>
    )
}

export default App;