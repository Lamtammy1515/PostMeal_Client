import { combineReducers } from 'redux'

import { mealsReducer } from './mealsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    meals: mealsReducer
})