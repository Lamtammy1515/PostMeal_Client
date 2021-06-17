export const mealsReducer = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case "FETCH_MEALS":
            return action.payload
        case 'ADD_MEAL':
            return [...state, action.payload]
        case 'DELETE_MEAL':
            console.log(state)
            console.log(action.payload)
            const meals = state.filter(meal => meal.id !== action.payload);
            return {meals};
        default:
            return state
    }
}
