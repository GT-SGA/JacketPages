import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import logo from './logo.svg';

import store from './redux/store';

import Masthead from './common/masthead';
import Footer from './common/footer';

import Home from './screens/home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div id="masthead">
              <Masthead />
            </div>
            <div id="content">
              <div id="clearfix">
                <Route exact path="/" component={Home} />
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
