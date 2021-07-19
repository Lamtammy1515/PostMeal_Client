import React from 'react'
import { connect } from 'react-redux'

const Comments = ({ comments, mealId }) => {
        return (
            <div>
                 {comments.filter(function(comment){
                     return comment.meal_id === mealId
                 }).map(c => 
                
                <ul><div key={c.id} >
                     ➟ {c.comment} <hr/>
                    <br/><br/>
                    </div></ul>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { comments: state.comments}
}


export default connect(mapStateToProps)(Comments);