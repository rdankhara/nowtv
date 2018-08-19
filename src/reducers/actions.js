import * as consts from './constants';

export const getMessageAction = () => {
    return {type: consts.GET_MESSSAGE};
};

export const getMessageSuccess = (payload) => {
    return {type: consts.GET_MESSAGE_SUCCESS, payload};
}

export const getMessageFailed = (error) => {
    return {type: consts.GET_MESSAGE_FAILED, error};
}