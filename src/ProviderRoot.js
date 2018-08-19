import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './reducers/reducerConfig';
import App from './App';

class ProviderRoot extends Component {

    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
};

export default ProviderRoot;