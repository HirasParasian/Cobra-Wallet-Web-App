import { combineReducers } from 'redux'
import auth from './auth'
import signup from './signup'
import code from './code'
import user from './user'

const rootReducer = combineReducers({
    auth,
    signup,
    code,
    user,
})

export default rootReducer