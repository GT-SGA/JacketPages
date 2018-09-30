import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import Masthead from './common/masthead';
import Footer from './common/footer';
import Home from './screens/home';
import JPBills from './screens/bills/jpbills';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="masthead">
            <Masthead />
          </div>
          <div id="content">
            <div id="clearfix">
              <Route exact path="/" component={Home} />
              <Route path="/bills" component={JPBills} />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
