import React from 'react';
import { connect } from 'react-redux'

import { deleteMeal } from '../actions/mealsActions';

class DeleteMeal extends React.Component {
    state = { 
       id:''
    }

    handleDeleteMeal = (e) => {
        e.preventDefault()    
        this.props.deleteMeal(this.state);
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