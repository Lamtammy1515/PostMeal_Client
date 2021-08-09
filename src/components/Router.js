import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import MealsList from '../components/MealsList'
import About from '../components/About'
import Comments from './Comments'

const Router = () => {
        return (
            <Switch>
                <Route exact path='/api/v1/' component={Home} />
                <Route path='/api/v1/about' component={About} />
                <Route path='/api/v1/meals' component={MealsList} />
                <Route path='/api/v1/comments' component={Comments}/>
            </Switch>
        )
    }

export default Router;