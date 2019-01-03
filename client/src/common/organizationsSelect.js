import React, { Component } from 'react';
import PropTypes from 'prop-types';

const orgRow = org => (
  <option value={org.id}>{org.name}</option>
);

class OrganizationsSelect extends Component {
  constructor(props) {
    super(props);

    this.filterOrgs = this.filterOrgs.bind(this);
  }

  filterOrgs() {
    const organizations = Object.values(this.props.organizations);
    return organizations.filter(org => (
      String(org.tier) === String(this.props.tier) || String(this.props.tier) === '0'
    ));
  }

  render() {
    return (
      <select onChange={e => this.props.onChange(e.target.value)} id="budgetOrgSelect">
        <option value="0">All</option>
        {this.filterOrgs().map(org => orgRow(org))}
      </select>
    );
  }
}

OrganizationsSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  tier: PropTypes.string.isRequired,
  organizations: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default OrganizationsSelect;
