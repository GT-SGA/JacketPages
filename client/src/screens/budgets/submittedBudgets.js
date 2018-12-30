import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/budgets/actions';
import orgActions from '../../redux/organizations/actions';

import BudgetsTable from './components/budgetsTable';

class SubmittedBudgets extends Component {
  render() {
    const { organizations, budgets } = this.props;
    return (
      <div>
        <div className="links left-nav" id="sidebar">
          <ul>
            <li>
              <a href="/TimeboundResources/add">Edit Budget Window</a>
            </li>
            <li>
              <a href="/budgets/budgetExport">Budget Export</a>
            </li>
          </ul>
        </div>

        <div id="middle">
          <div id="page_title">FY 2020 Budgets</div>
          <BudgetsTable budgets={budgets} organizations={organizations} />
        </div>
      </div>
    );
  }
}

SubmittedBudgets.propTypes = {
  budgets: PropTypes.arrayOf(PropTypes.shape).isRequired,
  organizations: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = state => ({
  budgets: state.budgets.budgets,
  organizations: state.organizations.organizations,
});

const mapDispatchToProps = dispatch => ({
  fetchBudgets: dispatch(actions.fetchBudgets()),
  fetchOrganizations: dispatch(orgActions.fetchOrganizations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmittedBudgets);
