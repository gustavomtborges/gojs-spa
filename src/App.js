import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="title">Home</h1>
        <Link className="link" to="/gif">gif</Link>
      </main>
    );
  }
}

export default App;
