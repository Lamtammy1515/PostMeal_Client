import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchComments } from '../actions/commentsAction'
import CommentsForm from './CommentsForm'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
                <CommentsForm/>
            </div>
        )
    }
  }

export default connect(null, { fetchComments })(CommentsContainer);
