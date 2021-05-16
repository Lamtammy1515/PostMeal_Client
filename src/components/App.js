import React from 'react';

import Router from './Router'
import MealsContainer from './MealsContainer'
import { mealsReducer } from '../reducers/mealsReducer';

const App = () => {
    return (
        <div>
            <MealsContainer/>
           <Router />
        </div>
    )
}

export default App;