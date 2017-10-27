const initialState = {};

export default function huoyingDetail(state = initialState, action) {
    switch (action.type) {
        case 'HUOYING_ADD':
            return action.data;
        case 'HUOYING_UPDATE':
            if(action.data.people!=state.people){
                return action.data
            }else {
                alert('没有变化');
                return state;
            }
        default:
            return state;
    }
}