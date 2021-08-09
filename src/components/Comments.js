import React from 'react'
import { connect } from 'react-redux'
import DeleteComment from './DeleteComment'
import LikeButton from './LikeButton'

const Comments = ({ comments, mealId }) => {

        return (
            <div>
                 {comments.filter(function(comment){
                     return comment.meal_id === mealId
                 }).map(c => 
                
                <ul><div key={c.id} className="borded">
                      ➥ {c.comment} 
                    <DeleteComment commentId = {c.id}/>
                    <LikeButton />
                    </div></ul>)}
            </div>
        )
    }


const mapStateToProps = state => {
    return { comments: state.comments}
}

export default connect(mapStateToProps)(Comments);