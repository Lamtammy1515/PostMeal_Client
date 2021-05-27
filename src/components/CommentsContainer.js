import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchComments } from '../actions/commentsAction'


class CommentsContainer extends Component {
    state = {
        comment: ''
      }
      
    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
            </div>
        )
    }
  }

export default connect(null, { fetchComments })(CommentsContainer);
