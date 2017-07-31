const initialState = [];
import * as actionTypes from '../constants/comment'

export default function comment(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_COMMENT_ADD:
            state.push(action.data);
            return state;
        case actionTypes.USER_COMMENT_UPDATE:
            for (let i = 0; i < state.length; i++) {
                let item = state[i];
                if (item.title === action.data.title) {
                    item.comment = action.data.comment
                }
            }
            return state;
        default:
            return state;
    }
}

