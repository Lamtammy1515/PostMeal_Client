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
            return state.filter(meal => meal.id !== +action.payload.id);
        default:
            return state
    }
}
