import React, { Component } from 'react'
import { connect } from 'react-redux'

import MealsContainer from '../components/MealsContainer'
import CommentsForm from '../components/CommentsForm'
import CommentsContainer from './CommentsContainer'

const MealsList = ({ meals }) => {
        return (
            <div>
                {meals.map(meal => 
                <ul><li key={meal.id}>
                    {meal.title} - {meal.meal_time} - {meal.description}
                    <br/><br/>
                    <CommentsContainer/>
                    </li></ul>)}
            </div>
        )
    }

    

const mapStateToProps = state => {
    return { meals: state.meals}
}

export default connect(mapStateToProps)(MealsList);