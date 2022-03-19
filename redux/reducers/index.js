import { combineReducers } from 'redux'
import auth from './auth'
import signup from './signup'
import code from './code'

const rootReducer = combineReducers({
    auth,
    signup,
    code,
})

export default rootReducer