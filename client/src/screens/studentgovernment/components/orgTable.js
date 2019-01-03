import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const orgRow = (org, bills) => (
  <tr>
    <td>
      <Link to={{ pathname: '/viewOrganization', state: { organization: org, bills } }}>{org.name}</Link>
    </td>
    <td><a href={org.website}>{org.website}</a></td>
  </tr>
);

class OrgTable extends Component {
  render() {
    const { organizations, bills } = this.props;

    return (
      <table className="listing" id="peopletable">
        <thead>
          <tr className="links">
            <th onClick={this.sort} value="title">Name</th>
            <th onClick={this.sort} value="website">Website</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: add pagination */}
          {Object.values(organizations).map(p => orgRow(p, bills))}
        </tbody>
      </table>
    );
  }
}

OrgTable.propTypes = {
  organizations: PropTypes.arrayOf(PropTypes.shape).isRequired,
  bills: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default OrgTable;
