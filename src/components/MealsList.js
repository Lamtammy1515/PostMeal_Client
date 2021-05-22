import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentsForm from './CommentsForm'
import Comments from './Comments'

const MealsList = ({ meals }) => {
        return (
            <div>
                {meals.map(meal => 
                <ul><li key={meal.id}>
                    {meal.title} - {meal.meal_time} <br/> {meal.description}
                    <br/><br/>
                    <CommentsForm/>
                    <Comments/>
                    </li></ul>)}
            </div>
        )
    }

    

const mapStateToProps = state => {
    return { meals: state.meals}
}

export default connect(mapStateToProps)(MealsList);