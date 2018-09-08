import * as actions from './actions';
import {getChatMessages} from '../service';

export const getMessagesAsync =  () => {
    
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