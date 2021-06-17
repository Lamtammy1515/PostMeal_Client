import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentsForm from './CommentsForm'
import Comments from './Comments'
import DeleteMeal from './DeleteMeal'

const MealsList = ({ meals }) => {
    console.log(meals)
        return (
            <div>

                {meals && meals.map(meal => 
                <ul><div key={meal.id}>
                   <blockquote> <u><h2>{meal.title} [{meal.meal_time}]</h2></u>{meal.description}<br/>
                    <br/>
                    <DeleteMeal mealId={meal.id} />
                    <CommentsForm mealId={meal.id}/>
                    <Comments mealId={meal.id}/></blockquote><br/>
                    </div></ul>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { meals: state.meals}
}

export default connect(mapStateToProps)(MealsList);