import React from 'react'
import { connect } from 'react-redux'
import DeleteComment from './DeleteComment'
import LikeButton from './LikeButton'
import { fetchComments } from "../actions/commentsAction"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const Comments = ({ comments, mealId }) => {
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(fetchComments())
        }, [dispatch])

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

export default connect(mapStateToProps, { fetchComments })(Comments);