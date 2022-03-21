import { combineReducers } from 'redux'
import auth from './auth'
import signup from './signup'
import code from './code'
import user from './user'
import transactions from './transactions'

const rootReducer = combineReducers({
    auth,
    signup,
    code,
    user,
    transactions,
})

export default rootReducer