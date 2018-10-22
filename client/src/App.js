import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import logo from './logo.svg';

import Masthead from './common/masthead';
import Footer from './common/footer';

import Home from './screens/home';
import JPBills from './screens/bills/jpbills';
import SGAPeople from './screens/sgapeople';
import JPBillVoting from './screens/jpbillvoting';
import JPCreateBill from './screens/bills/jpcreatebill';

import './App.css';

import store from './redux/store';

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
                <Route path="/bills" component={JPBills} />
                <Route exact path="/bill_voting" component={JPBillVoting} />
                <Route exact path="/sgapeople" component={SGAPeople} />
                <Route exact path="/create_bill" component={JPCreateBill} />
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
