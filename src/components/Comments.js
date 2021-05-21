import React, { Component } from 'react'
import { connect } from 'react-redux'

const Comments = ({ comments }) => {
        return (
            <div>
                 {comments.map(comment => 
                <ul><li key={comment.id}>
                    {comment.comment}
                    <br/><br/>
                    </li></ul>)}
            </div>
        )
    }

    

const mapStateToProps = state => {
    return { comments: state.comments}
}

export default connect(mapStateToProps)(Comments);