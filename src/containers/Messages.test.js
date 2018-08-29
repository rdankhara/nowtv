import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Messages from './Messages';

configure({adapter: new Adapter()});

describe('Messages component', ()=>{
    let messages ;
    const createMockStore = configureMockStore([thunk]);
    const message = {messages: [{messageId: 'mid', userId: 'uid', email: 'em'}], isFetching: false};
    const mockStore = createMockStore({message});
    
        beforeEach(()=> {
        messages = shallow(<Messages store={mockStore} />);
    })

    it ('creates messages component', () =>{
        expect(messages).toMatchSnapshot();
    });
});