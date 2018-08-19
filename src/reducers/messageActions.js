import * as actions from './actions';
import {getChatMessages} from '../service';

export const getMessagesAsync = () => {
    
    return dispatch => {

        dispatch(actions.getMessageAction());

        return getChatMessages()
        .then(data => {
            dispatch(actions.getMessageSuccess(data));
        })
        .catch(e => {
            dispatch(actions.getMessageFailed(e.message));
        });
    };
};