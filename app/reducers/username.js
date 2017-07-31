const initialState = {};

export default function username(state=initialState,action) {
    switch(action.type){
        case 'username':
            return action.data;
        default:
            return state
    }
}