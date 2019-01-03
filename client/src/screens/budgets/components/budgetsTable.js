import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const budgetRow = (budget, organizations) => {
  let org = {};
  organizations.forEach((organization) => {
    if (organization.id === budget.org_id) { org = organization; }
  });
  return org && (
    <tr>
      <td>
        <Link to={{ pathname: '/viewOrganization', state: { organization: org } }}>{org.name}</Link>
      </td>
      <td>{budget.state}</td>
      <td>{budget.last_mod_date}</td>
    </tr>
  );
};

class BudgetsTable extends Component {
  render() {
    const { budgets, organizations } = this.props;

    return (
      <table className="listing">
        <tbody>
          <tr className="links">
            <th>
              <a href="/budgets/index/sort:Organization.name/direction:asc">Organization Name</a>
            </th>
            <th>
              <a href="/budgets/index/sort:Budget.state/direction:asc">State</a>
            </th>
            <th>
              <a href="/budgets/index/sort:Budget.last_mod_date/direction:asc">Submit Date</a>
            </th>
          </tr>
          {budgets.map(b => budgetRow(b, organizations))}
        </tbody>
      </table>
    );
  }
}

BudgetsTable.propTypes = {
  budgets: PropTypes.arrayOf(PropTypes.shape).isRequired,
  organizations: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default BudgetsTable;
