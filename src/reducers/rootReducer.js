import { combineReducers } from 'redux'

import { mealsReducer } from './mealsReducer'
import { commentsReducer } from './commentsReducer'

export const rootReducer = combineReducers({
    meals: mealsReducer,
    comments: commentsReducer
})