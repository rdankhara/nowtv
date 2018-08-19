import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import appState from './reducers/reducerConfig';
import './index.css';

const app = (
  <Provider store={appState}>
    <App />
  </Provider>
);


ReactDOM.render(
  app,
  document.getElementById('root')
);
