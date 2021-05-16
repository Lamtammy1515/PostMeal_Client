import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addMeal } from '../actions/mealsActions'

class MealsForm extends Component {

    state = { 
        title: '',
        description: '',
        meal_time: '',
        //user_id: ''
    }

handleChange = e => {
    const { name, value } = e.target

    this.setState({
        [name]: value
    })
}

handleSubmit = e => {
    e.preventDefault()
    let obj = {
        title: this.state.title,
        meal_time: this.state.meal_time,
        description: this.state.description
      }
    this.props.addMeal(obj)
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
                <br/>
                <label>Meal Time:</label>
                <input type='text' value={this.state.meal_time} onChange={this.handleChange} name='meal_time'/>
                <br/>
                <label>Description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name='description'/>
                <br/>
                <input type='submit' value='Create Post-Meal' />

            </form>
        )
    }

    
}
export default connect(null, { addMeal })(MealsForm);