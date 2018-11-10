import * as consts from './constants';

const initialState = {
    isFetching: false,
    messages: []
};

//Todo: extract method to clone object with modified state
export const messageReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case consts.GET_MESSAGE_INIT:
            newState = Object.assign({}, state, {isFetching: true});
            break;
        case consts.GET_MESSAGE_SUCCESS:
            newState = Object.assign({}, state, {
                isFetching : false,
                messages : action.payload
            });
            break;
        default:
            newState = state;
    }
    return newState;
};

export default messageReducer;