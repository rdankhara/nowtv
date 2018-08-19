import * as consts from './constants';
import * as actions from './actions';

it('creates an action to getMessages', ()=>{
    const expectedAction = {type: consts.GET_MESSSAGE};
    expect(actions.getMessageAction()).toEqual(expectedAction);
});

it ('creates an action for get message success', ()=> {
    const payload = [{messageId : 'abc', userId: 'a1'}];
    const expectedAction = {type : consts.GET_MESSAGE_SUCCESS, payload}

    expect(actions.getMessageSuccess(payload)).toEqual(expectedAction);
});

it ('creates an actions to indicate getMessageFailer', () => {
    const error = 'something failed';
    const expectedAction = {type: consts.GET_MESSAGE_FAILED, error};

    expect(actions.getMessageFailed(error)).toEqual(expectedAction);
});