const initialState = [];
import * as actionTypes from '../constants/comment'

export default function comment(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_COMMENT_ADD:
            state.push(action.data);
            return state;
        case actionTypes.USER_COMMENT_UPDATE:
            if(state.length>0){
                state.some((item)=>{
                    if (item.title === action.data.title) {
                        item.comment = action.data.comment;
                        item.stars=action.data.stars;
                        return true;
                    }
                })
            }
            return state;
        default:
            return state;
    }
}

