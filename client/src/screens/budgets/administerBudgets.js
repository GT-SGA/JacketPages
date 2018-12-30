import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/budgets/actions';
import billActions from '../../redux/bills/actions';
import orgActions from '../../redux/organizations/actions';

import LineItemTable from './components/lineItemTable';
import OrganizationsSelect from './components/organizationsSelect';

class AdministerBudgets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organization: {},
      fiscalYear: '',
      tier: '0',
    };

    this.onChangeOrganization = this.onChangeOrganization.bind(this);
    this.filterLineItems = this.filterLineItems.bind(this);
  }

  onChangeOrganization(organization) {
    this.setState({ organization });
  }

  onChangeLineItemAmount(item, amount) {
    this.setState({ [`amount_${item}`]: amount });
  }

  filterLineItems(category) {
    const { lineItems, bills } = this.props;
    return Object.values(lineItems).filter((item) => {
      const bill = bills[item.bill_id];
      return bill && (
        (bill.org_id === this.state.organization.id) && (!category || item.category === category)
      );
    });
  }

  render() {
    const { organizations } = this.props;
    return (
      <div id="middle_full">
        <div id="page_title">Budgets</div>
          <form action="/budgets/view" onsubmit="return validateForm()" id="BudgetViewForm" method="post" accept-charset="utf-8">
            <div style={{ display: 'none' }}>
              <input type="hidden" name="_method" value="POST"/>
            </div>
            <h1>Budget Totals</h1>
            <table className="listing">
              <tr>
                <td>Fiscal Year</td>
                <td>
                  <div className="input select">
                    <select
                      id="fiscalYear"
                      onChange={e => this.setState({ fiscalYear: e.target.value })}
                      value={this.state.fiscalYear}
                    >
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Total Amount Requested</td>
                <td>$73,592.37</td>
              </tr>
              <tr>
                <td>Total Requested Change</td>
                <td>$73,592.37</td>
              </tr>
              <tr>
                <td>Total Amount Allocated</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>Total Allocated Change</td>
                <td>$0.00</td>
              </tr>
            </table>
            <h1>Selected Organization(s)</h1>
            <div id="notification">Please save any changes before navigating to another page. Save button is located at the bottom of the page. Note that viewing all organization budget information will require several seconds of processing time before loading.</div>
            <table className="listing">
              <tr>
                <td>Tier</td>
                <td>
                  <div className="input select">
                    <select
                      onChange={e => this.setState({ tier: e.target.value })}
                      id="tier"
                      value={this.state.tier}
                    >
                      <option value="0">All</option>
                      <option value="1">I</option>
                      <option value="2">II</option>
                      <option value="3">III</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Organization</td>
                <td>
                  <div className="input select">
                    <OrganizationsSelect
                      organizations={organizations}
                      tier={this.state.tier}
                      onChange={this.onChangeOrganization}
                    />
                  </div>
                </td>
              </tr>
            </table>
            <h1>{`${this.state.organization.name} Budget`}</h1>
            <div id="org-accordion-0">
              <h3>{this.state.organization.name}</h3>
              <div style={{ padding: '0 0 0 0' }}>
                <div id="bli-accordion-00" style={{ padding: '0 0 0 0' }}>
                  <h3>OS&amp;E</h3>
                  <div style={{ padding: '0 0 0 0' }}>
                    <LineItemTable
                      lineItems={this.filterLineItems(1)}
                      onChangeAmount={this.onChangeLineItemAmount}
                    />
                  </div>
                </div>
                <div id="bli-accordion-01" style={{ padding: '0 0 0 0' }}>
                  <h3>Event/Activity</h3>
                  <div style={{ padding: '0 0 0 0' }}>
                    <LineItemTable
                      lineItems={this.filterLineItems(2)}
                      onChangeAmount={this.onChangeLineItemAmount}
                    />
                  </div>
                </div>
                <div id="bli-accordion-02" style={{ padding: '0 0 0 0' }}>
                  <h3>Personnel Services</h3>
                  <div style={{ padding: '0 0 0 0' }}>
                    <LineItemTable
                      lineItems={this.filterLineItems(3)}
                      onChangeAmount={this.onChangeLineItemAmount}
                    />
                  </div>
                </div>
                <div id="bli-accordion-02" style={{ padding: '0 0 0 0' }}>
                  <h3>Travel</h3>
                  <div style={{ padding: '0 0 0 0' }}>
                    <LineItemTable
                      lineItems={this.filterLineItems(4)}
                      onChangeAmount={this.onChangeLineItemAmount}
                    />
                  </div>
                </div>
                <div id="bli-accordion-02" style={{ padding: '0 0 0 0' }}>
                  <h3>Equipment</h3>
                  <div style={{ padding: '0 0 0 0' }}>
                    <LineItemTable
                      lineItems={this.filterLineItems(5)}
                      onChangeAmount={this.onChangeLineItemAmount}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
      </div>
    );
  }
}

AdministerBudgets.propTypes = {
  bills: PropTypes.shape.isRequired,
  lineItems: PropTypes.shape.isRequired,
  organizations: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = state => ({
  budgets: state.budgets.budgets,
  bills: state.bills.bills,
  lineItems: state.budgets.lineItems,
  organizations: state.organizations.organizations,
});

const mapDispatchToProps = dispatch => ({
  fetchLineItems: dispatch(actions.fetchLineItems()),
  fetchBills: dispatch(billActions.fetchBills()),
  fetchOrganizations: dispatch(orgActions.fetchOrganizations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdministerBudgets);
