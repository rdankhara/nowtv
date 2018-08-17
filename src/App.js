import React, { Component } from 'react';
import Messages from './containers/Messages';
import './App.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
