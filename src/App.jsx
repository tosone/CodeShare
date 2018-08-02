import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Signin from './pages/Signin';
import Banner from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Banner />
          <div>
            <Link to="/about">about</Link>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit
              <code>src/App.js</code>
                and save to reload.
            </p>
            </div>

            <div><Route exact="exact" path="/about" component={Signin} /></div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
