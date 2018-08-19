import * as consts from './constants';

describe('reducx constants', ()=>{
    it('returns GET_MESSAGE', ()=> {
        expect(consts.GET_MESSSAGE).toBe('GET_MESSAGE');
    })

    it('returns GET_MESSAGE_SUCCESS', () =>{
        expect(consts.GET_MESSAGE_SUCCESS).toBe('GET_MESSAGE_SUCCESS');
    })

    it('returns GET_MESSAGE_FAILED', ()=>{
        expect(consts.GET_MESSAGE_FAILED).toBe('GET_MESSAGE_FAILED');
    })
})