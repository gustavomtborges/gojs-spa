import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gif from './img/great-job.webp';

class Gif extends Component {
  render() {
    return (
      <main className="main">
        <img src={gif} alt="Great Job"/>
        <Link className="link" to="/">Voltar</Link>
      </main>
    );
  }
}

export default Gif;
