import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// import logo from './logo.svg';

import Masthead from './common/masthead';
import Footer from './common/footer';

import Home from './screens/home';
import SGAPeople from './screens/studentgovernment/sgapeople';

import Users from './screens/users/users';
import UsersAdd from './screens/users/usersadd';
import UsersEdit from './screens/users/usersedit';

import JPBills from './screens/bills/jpbills';
import JPBillVoting from './screens/studentgovernment/jpbillvoting';
import JPCreateBill from './screens/bills/jpcreatebill';
import JPViewBill from './screens/bills/jpviewbill';

import JPOrganizations from './screens/studentgovernment/jporganizations';
import JPAddOrganization from './screens/studentgovernment/jpaddorganization';
import JPViewOrganization from './screens/studentgovernment/jpvieworganization';
import JPEditOrganization from './screens/studentgovernment/jpeditorganization';

import SubmittedBudgets from './screens/budgets/submittedBudgets';
import AdministerBudgets from './screens/budgets/administerBudgets';

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
                <Route exact path="/create_bill" component={JPCreateBill} />
                <Route path="/viewBill" component={JPViewBill} />
                <Route exact path="/sgapeople" component={SGAPeople} />
                <Route path="/addSGAMember" component={UsersAdd} />
                <Route exact path="/users" component={Users} />
                <Route path="/addUser" component={UsersAdd} />
                <Route path="/editUser" component={UsersEdit} />
                <Route path="/organizations" component={JPOrganizations} />
                <Route path="/addOrganization" component={JPAddOrganization} />
                <Route path="/viewOrganization" component={JPViewOrganization} />
                <Route path="/editOrganization" component={JPEditOrganization} />
                <Route path="/budgetSubmissions" component={SubmittedBudgets} />
                <Route path="/administerBudgets" component={AdministerBudgets} />
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
