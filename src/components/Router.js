import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import MealsList from '../components/MealsList'
import About from '../components/About'
import Comments from './Comments'

const Router = () => {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/meals' component={MealsList} />
                <Route path='/comments' component={Comments}/>
            </Switch>
        )
    }

export default Router;