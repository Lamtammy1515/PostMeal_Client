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
    console.log(e)
    this.props.addComment(this.state)
}

    render() {
        return (
            <div class="comment-form">
            <form onSubmit={this.handleSubmit}>
                <label>ADD COMMENT BELOW:</label><br/>
                <textarea placeholder="What are your thoughts?" type='text' value={this.state.comment} onChange={this.handleChange} name='comment'/>
                <input type='submit' value='Post' /><br/>
            </form>
            </div>
        )
    }

    
}
export default connect(null, { addComment })(CommentsForm);