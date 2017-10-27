import { combineReducers } from 'redux'
import userinfo from './userinfo'
import username from './username'
import store from './store'
import comment from './comment'
import huoyingDetail from './huoyingDetail'

export default combineReducers({
    userinfo:userinfo,
    username:username,
    store:store,
    comment:comment,
    huoyingDetail:huoyingDetail,
})