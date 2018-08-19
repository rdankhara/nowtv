import * as consts from './constants';

const messageReducer = (state = [], action) => {
    let newState;
    switch(action.type){
        case consts.GET_MESSSAGE:
            newState = action.payload || state;
            break;
        default:
            newState = state;
    }
    return newState;
};

export default messageReducer;