// create an action that is going to fetch the meals from api

export const fetchMeals = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/meals')
    .then(resp => resp.json())
    .then(meals => dispatch({ type: 'FETCH_MEALS', payload: meals}))
    }
}

export const addMeal = meal => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/meals',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(meal)
    })
    .then(resp => resp.json())
    .then(meal => dispatch({ type: 'ADD_MEAL', payload: meal}))
    }
}

export const deleteMeal = (meal) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/meals/${meal.id}`,
        {method: 'DELETE'})
        .then(resp => resp.json())
        .then(meal => {
            dispatch({ type: 'DELETE_MEAL', payload: meal})
        })
        .then(console.log('Deleted'))
    }

}

