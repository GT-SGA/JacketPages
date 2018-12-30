import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BillsTable from '../bills/components/billstable';

class JPViewOrganization extends Component {
  constructor(props) {
    super(props);

    this.filterBills = this.filterBills.bind(this);
  }

  filterBills() {
    const { organization, bills } = this.props.location.state;

    return bills.filter(bill => bill.org_id === organization.id);
  }

  render() {
    const { organization } = this.props.location.state;
    return (
      <div id="content">
        <div className="clearfix">
          <div className="links left-nav" id="sidebar">
            <ul>
              <li>
                <Link to={{ pathname: '/editOrganization', state: { organization } }}>Edit Information</Link>
              </li>
              <li>
                <a href="/budgets/submit/27850">Submit Budget</a>
              </li>
              <li>
                <a href="/bills/ledger/27850">Finance Ledger</a>
              </li>
              <li>
                <a
                  href="/organizations/delete/27850"
                  style={{ color: 'red' }}
                  onClick="return confirm(&#039;Are you sure you want to delete A Cappella?&#039;);"
                >
                  Delete Organization
                </a>
              </li>
            </ul>
          </div>
          <div id="middle">
            <div id="page_title">{organization.name}</div>
            <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
              <div style={{ float: 'left', width: '50%' }} />
              <h1>Description</h1>
              <ul id="description">
                <li>Tier: III</li>
                <li>
                  OrgSync: <a href={organization.website}>{organization.website}</a>
                </li>
              </ul>
              <h1>Bills</h1>
              <BillsTable bills={this.filterBills()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JPViewOrganization.propTypes = {
  location: PropTypes.shape.isRequired,
};

export default JPViewOrganization;
