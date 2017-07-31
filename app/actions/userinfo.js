import * as actionTypes from '../constants/userinfo'
import {CITYNAME} from '../config/LocalStoreKey'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

export function update(data) {
    return {
        type: CITYNAME,
        data
    }
}

export function getCity(data) {
    return {
        type: 'test',
        data
    }
}