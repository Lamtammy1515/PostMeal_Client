import React, { Component } from 'react'
import { connect } from 'react-redux'


const Comments = ({ comments, mealId }) => {
        return (
            <div>
                 {comments.filter(function(comment){
                     return comment.meal_id === mealId
                 }).map(c => 
                
                <ul><li key={c.id}>
                    {c.comment}
                    <br/><br/>
                    </li></ul>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { comments: state.comments}
}


export default connect(mapStateToProps)(Comments);