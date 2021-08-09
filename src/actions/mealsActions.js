//create action that fetches meals from API 
export const fetchMeals = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/meals')
    .then(resp => resp.json())
    .then(meals => dispatch({ type: 'FETCH_MEALS', payload: meals}))
    }
}

//action that creates a meal  
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

//create action that deletes a meal from API 
export const deleteMeal = (meal) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/meals/${meal.id}`,
        {method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(meal)
    })
        .then(resp => resp.json())
        .then(console.log('deleted'))
        .then(meal => {
            dispatch({ type: 'DELETE_MEAL', payload: meal})
        })
    }
}

