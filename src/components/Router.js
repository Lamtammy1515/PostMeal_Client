import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import MealsList from '../components/MealsList'
import About from '../components/About'

const Router = () => {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/meals' component={MealsList} />
            </Switch>
        )
    }

export default Router;