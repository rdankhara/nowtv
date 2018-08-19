import messageReducer from './messageReducer';
import * as consts from './constants';

describe('Message Reducer', ()=> {
    
    it('should return empty state when state is undefined and type is GET_MESSAGE', ()=>{
        const actual = messageReducer(undefined, {type: consts.GET_MESSSAGE});
        expect(Array.isArray(actual)).toBe(true);
    })

    it('should return payload as state when type is GET_MESSAGE', ()=>{
        const payload = [{messageId: '', userId: '', fullName:''}];
        const action = {type: consts.GET_MESSSAGE, payload:payload};
        const actual = messageReducer(undefined, action);
        expect(Array.isArray(actual)).toBe(true);
        expect(actual[0].hasOwnProperty("messageId")).toBe(true);
        expect(actual[0].hasOwnProperty("userId")).toBe(true);
        expect(actual[0].hasOwnProperty("fullName")).toBe(true);
    })    
});