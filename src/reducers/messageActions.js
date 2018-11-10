import * as actions from './actions';
import {getChatMessages} from '../service';

//classic way function returning function
export const getMessagesAsyncClassic =  () => {
    
    return async dispatch => {

        dispatch(actions.getMessageAction());

        try {
            const data = await getChatMessages();
            dispatch(actions.getMessageSuccess(data));
        } catch (error) {
            dispatch(actions.getMessageFailed(error.message));
        }
    };
};

//chaining function return function using arrow function
export const getMessagesAsync =  () => async dispatch => {
    dispatch(actions.getMessageAction());
    try {
        const data = await getChatMessages();
        dispatch(actions.getMessageSuccess(data));
    } catch (error) {
        dispatch(actions.getMessageFailed(error.message));
    }
};