import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addComment } from '../actions/commentsAction'

class CommentsForm extends Component {

    state = { 
        comment:''
    }

handleChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

handleSubmit = e => {
    alert("New Comment Post!")
    e.preventDefault()
    console.log(e)
    this.props.addComment(this.state)
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Comment:</label>
                <input type='text' value={this.state.comment} onChange={this.handleChange} name='comment'/>
                <br/>
                <input type='submit' value='Post' />
            </form>
        )
    }

    
}
export default connect(null, { addComment })(CommentsForm);