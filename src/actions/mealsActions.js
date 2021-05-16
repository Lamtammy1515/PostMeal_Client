// create an action that is going to fetch the meals from api

export const fetchMeals = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/meals')
    .then(resp => resp.json())
    .then(meals => dispatch({ type: 'FETCH_MEALS', payload: meals}))
    }
}

export const addMeal = meal => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/meals', {
        method: 'POST',
        body: JSON.stringify(meal),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(meal => dispatch({ type: 'ADD_MEAL', payload: meal}))
    }
}