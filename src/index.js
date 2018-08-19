import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './reducers/reducerConfig';
import App from './App';
import ProviderRoot from './ProviderRoot';
import './index.css';

const app = (<Provider store={store} >
          <App />
          </Provider>);

ReactDOM.render(
  app,
  document.getElementById('root')
);
