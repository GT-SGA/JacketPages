import React, { Component } from 'react';
import PropTypes from 'prop-types';

const userRow = user => (
  <tr>
    <td>{`${user.first_name} ${user.last_name}`}</td>
    <td>{user.email}</td>
    <td>{user.gt_user_name}</td>
    <td>{user.level}</td>
  </tr>
);

class UserTable extends Component {
  render() {
    const { users } = this.props;

    return (
      <table className="listing" id="usertable">
        <thead>
          <tr className="links">
            <th onClick={this.sort} value="name">Name</th>
            <th onClick={this.sort} value="email">Email</th>
            <th onClick={this.sort} value="gt_user_name">GT Username</th>
            <th onClick={this.sort} value="level">Level</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: add pagination */}
          {users.map(user => userRow(user))}
        </tbody>
      </table>
    );
  }
}

UserTable.propTypes = {
  users: PropTypes.shape.isRequired,
};

export default UserTable;
