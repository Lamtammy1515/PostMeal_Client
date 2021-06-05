import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentsForm from './CommentsForm'
import Comments from './Comments'
import DeleteMeal from './DeleteMeal'

const MealsList = ({ meals }) => {

        return (
            <div>
                {meals.map(meal => 
                <ul><li key={meal.id}>
                    <h2>{meal.title} [{meal.meal_time}]</h2>-{meal.description}<br/>
                    <br/>
                    <DeleteMeal mealId={meal.id}/>
                    <CommentsForm mealId={meal.id}/>
                    <Comments mealId={meal.id}/>
                    </li></ul>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { meals: state.meals}
}

export default connect(mapStateToProps)(MealsList);