import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addMeal } from '../actions/mealsActions'

class MealsForm extends Component {

    state = { 
        title: '',
        description: '',
        meal_time: ''
    }

handleChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

handleSubmit = e => {
    alert("New Meal Post Updated!")
    e.preventDefault()
    console.log(e)
    this.props.addMeal(this.state)
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