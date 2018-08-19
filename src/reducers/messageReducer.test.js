import messageReducer from './messageReducer';
import * as consts from './constants';

describe('Message Reducer', ()=> {
    const initialState = {isFetching : false, messages : []};
    it('should return isFetching true when type is GET_MESSAGE_INIT', ()=>{
        const actual = messageReducer(initialState, {type: consts.GET_MESSAGE_INIT});
        expect(actual.isFetching).toBe(true);
    })

    it('should return payload as state when type is GET_MESSAGE_SUCCESS', ()=>{
        const payload = [{messageId: '', userId: '', fullName:''}];
        const action = {type: consts.GET_MESSAGE_SUCCESS, payload:payload};
        
        const actual = messageReducer(initialState, action);
        expect(actual.isFetching).toBe(false);
        expect(actual.messages[0].hasOwnProperty("messageId")).toBe(true);
        expect(actual.messages[0].hasOwnProperty("userId")).toBe(true);
        expect(actual.messages[0].hasOwnProperty("fullName")).toBe(true);
    })    
});