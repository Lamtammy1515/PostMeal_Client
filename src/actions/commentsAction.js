
export const fetchComments = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/comments')
    .then(resp => resp.json())
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
    }
}


export const addComment = (comment, mealId) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({comment, meal_id: mealId})
    })
    .then(resp => resp.json())   
    .then(comment => dispatch({ type: 'ADD_COMMENT', payload: comment}))
    }
}



