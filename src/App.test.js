import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from './app';

configure({adapter: new Adapter()});

describe('App', ()=>{
    const app = shallow(<App/>);

    it('renders App component correctly', ()=> {
        expect(app).toMatchSnapshot();
    });

    it('contains a Messages component', () => {
        expect(app.find('Connect(Messages)').exists()).toBe(true);
    });
});
