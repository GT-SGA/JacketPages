import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import logo from './logo.svg';

import Masthead from './common/masthead';
import Footer from './common/footer';

import Home from './screens/home';
import SGAPeople from './screens/sgapeople'
import JPBillVoting from './screens/jpbillvoting';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div id="masthead">
        <Masthead />
      </div>
      <div id="content">
        <div id="clearfix">
          <Route exact path="/" component={Home} />
          <Route exact path="/bill_voting" component={JPBillVoting} />
          <Route exact path="/sgapeople" component={SGAPeople} />
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
