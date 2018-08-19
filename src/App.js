import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Messages from './containers/Messages';
import {appState} from './reducers/reducerConfig';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={appState}>
        <article>
          <header>
            <h1>
              Hello Robin!
            </h1>
          </header>
          <main>
            <Messages />
          </main>
        </article>
      </Provider>
    );
  }
}

export default App;
