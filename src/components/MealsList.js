import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

import CommentsForm from './CommentsForm'
import Comments from './Comments'
import DeleteMeal from './DeleteMeal'
import MealsContainer from './MealsContainer'
import CommentsContainer from './CommentsContainer'
import SingleMeal from './SingleMeal'

const MealsList = ({ meals }) => {
        return (
            <div>
                <MealsContainer/>
                <CommentsContainer/>
                {meals && meals.map(meal => 
                <ul><div key={meal.id}>
                   <blockquote> <u><h2>{meal.title} [{meal.meal_time}]</h2></u>{meal.description}<br/>
                    <br/>
                    <Link to={{ pathname: `/api/v1/meals/${meal.id}`}}>View Details</Link>
                    
                    <DeleteMeal mealId={meal.id} />
                    <CommentsForm mealId={meal.id}/>
                    <Comments mealId={meal.id}/></blockquote>
                    </div></ul>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { meals: state.meals}
}

export default connect(mapStateToProps)(MealsList);