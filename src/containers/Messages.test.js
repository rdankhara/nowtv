import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Messages from './Messages';

configure({adapter: new Adapter()});

describe('Messages component', ()=>{
    let messages ;

    beforeEach(()=> {
        messages = shallow(<Messages />);
    })

    it ('creates messages component', () =>{
        expect(messages).toMatchSnapshot();
    });
});