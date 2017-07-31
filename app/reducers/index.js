import { combineReducers } from 'redux'
import userinfo from './userinfo'
import username from './username'
import store from './store'
import comment from './comment'

export default combineReducers({
    userinfo:userinfo,
    username:username,
    store:store,
    comment:comment
})