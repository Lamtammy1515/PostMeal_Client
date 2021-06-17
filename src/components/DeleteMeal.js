import React from 'react';
import { connect } from 'react-redux'

import { deleteMeal } from '../actions/mealsActions';

class DeleteMeal extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.mealId
        };
        this.handleDeleteMeal = this.handleDeleteMeal.bind(this)
      }
    

    handleDeleteMeal = (e) => {
        e.preventDefault()  
        this.props.deleteMeal(this.state, this.props.mealId);
        console.log(this.state)
    }

    render() {
        return (
        <div>
            <button onClick={this.handleDeleteMeal}>DELETE</button>
        </div>
        )
    }
}
export default connect(null, { deleteMeal })(DeleteMeal)