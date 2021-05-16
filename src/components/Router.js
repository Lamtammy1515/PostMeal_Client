import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import MealsContainer from '../components/MealsContainer'
import About from '../components/About'

const Router = () => {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/meals' component={MealsContainer} />
            </Switch>
        )
    }

export default Router;