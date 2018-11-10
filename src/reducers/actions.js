import * as consts from './constants';

export const getMessageAction = () => ({type: consts.GET_MESSSAGE});

export const getMessageSuccess = (payload) => ({
   type: consts.GET_MESSAGE_SUCCESS, payload
});

export const getMessageFailed = (error) => ({
    type: consts.GET_MESSAGE_FAILED, error
});
