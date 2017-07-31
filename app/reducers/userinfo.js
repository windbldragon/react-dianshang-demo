import * as actionTypes from '../constants/userinfo'
import {CITYNAME} from '../config/LocalStoreKey'

const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.data;
        case CITYNAME:
            return action.data;
        default:
            return state
    }
}