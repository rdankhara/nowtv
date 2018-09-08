import React from 'react';
import {Provider} from 'react-redux';
import {appState} from './reducers/reducerConfig';

const Root = ({children}) => {
   return (
    <Provider store={appState}>
        {children}
    </Provider>
    );
};

export default Root;