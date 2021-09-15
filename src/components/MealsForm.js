import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addMeal } from '../actions/mealsActions'

class MealsForm extends Component {

    state = { 
        title: '',
        description: '',
        meal_time: '',
        id: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addMeal(this.state)
    }

    render() {
        return (
            <div><u><h2>Create Meal Post Below</h2></u> 
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label><br/>
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
                <br/>
                <label>Meal Time:</label><br/>
                <input type='text' value={this.state.meal_time} onChange={this.handleChange} name='meal_time'/>
                <br/>
                <label>Description:</label><br/>
                <textarea placeholder="Description of meal..." type='text' value={this.state.description} onChange={this.handleChange} name='description'/>
                <br/>
                <input type='submit' value='Create Post-Meal' class="create"/><br/><br/><br/>
            </form></div>
        )
    }
}

export default connect(null, { addMeal })(MealsForm);