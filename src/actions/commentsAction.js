export const fetchComments = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/comments')
    .then(resp => resp.json())
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
    }
}


export const addComment = (commentInput) => {

    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify(commentInput)
    }


    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/comments', obj)
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_COMMENT', comment: data })
        })
    }

}


