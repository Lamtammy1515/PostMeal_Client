export const mealsReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_MEALS":
            return action.payload
        default:
            return state
    }
}