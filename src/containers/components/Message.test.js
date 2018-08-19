import React from 'react';
import Message from './Message';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe ('Message' , ()=>{
    let message ;
    
    beforeEach(()=> {
        message = shallow(<Message />);
    });

    it ('creates message component', ()=> {
        expect(message).toMatchSnapshot();
        expect(message.find('article')).not.toBeNull();
    });

    it('renders name correctly', ()=> {
        const props = {fullName :'Jack Richer'};
        message.setProps(props);

        const fullName = message.find('.fullName');
        expect(fullName).not.toBeNull();
        expect(fullName.text()).toBe('Jack Richer');
    });

    it('renders avatar correctly', ()=> {
        const avatar = 'http://dummyimage.com/100x100.jpg/dddddd/000000';
        const props = {avatar };
        message.setProps(props);

        const avatarEl = message.find('.avatar');
        expect(avatarEl).not.toBeNull();
        expect(avatarEl.prop('src')).toBe(avatar);
    });

    it('renders message correctly', ()=> {
        const msg = 'this is message';
        const props = {message : msg };
        message.setProps(props);

        const messageEl = message.find('.message');
        expect(messageEl).not.toBeNull();
        expect(messageEl.text()).toBe(msg);
    });    

    it('renders email correctly', ()=> {
        const email = 'abc@xyz.com';
        const props = {email};
        message.setProps(props);

        const emailEl = message.find('.tooltiptext');
        expect(emailEl).not.toBeNull();
        expect(emailEl.text()).toBe(email);
    });    

    it('renders timestamp correctly', ()=> {
        const timestamp = new Date('2017-02-09T04:27:38Z');
        const props = {timestamp};
        message.setProps(props);

        const timeEl = message.find('.timestamp');
        expect(timeEl).not.toBeNull();
        expect(timeEl.text()).toBe("Thu Feb 09 2017");
    });    
});