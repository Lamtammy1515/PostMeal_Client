import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMeals } from '../actions/mealsActions'
import MealsForm from './MealsForm'
import MealsList from './MealsList'

class MealsContainer extends Component {

    componentDidMount() {
        this.props.fetchMeals()
    }

    render() {
        return (
            <div>
                Meals Container
                <MealsForm/>
            </div>
        )
    }
}
export default connect(null, { fetchMeals })(MealsContainer);