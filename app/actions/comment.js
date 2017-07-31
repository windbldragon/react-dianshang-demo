import * as actionTypes from '../constants/comment'

export function add(data) {
    return{
        type: actionTypes.USER_COMMENT_ADD,
        data
    }
}

export function update(data) {
    return {
        type:actionTypes.USER_COMMENT_UPDATE,
        data
    }
}