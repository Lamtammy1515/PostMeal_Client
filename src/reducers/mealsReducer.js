export const mealsReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_MEALS":
            return action.payload
        case 'ADD_MEAL':
            return [...state, action.payload]
        case 'DELETE_MEAL':
            return [...state, action.payload]
        default:
            return state
    }
}