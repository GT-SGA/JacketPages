import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import Masthead from './common/masthead';
import Toolbar from './common/toolbar';
import Footer from './common/footer';
import Home from './screens/home';
import './App.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <div id="masthead">
          <Masthead />
        </div>
        <Route path="/" component={Home} />
        <Footer />
      </div>
    );
  }
}

const App = () => (
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
);

export default App;
