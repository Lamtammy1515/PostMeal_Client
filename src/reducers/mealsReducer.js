export const mealsReducer = () => {
    switch(action.type) {
        case "FETCH_MEALS":
            return action.payload
        default:
            return state
    }
}