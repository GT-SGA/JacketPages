import React, { Component } from 'react';
import PropTypes from 'prop-types';

const peopleRow = person => (
  <tr>
    <td>{person.name}</td>
    <td>{person.house}</td>
    <td>{person.department}</td>
    <td>{person.status}</td>
  </tr>
);

class PeopleTable extends Component {
  render() {
    const { people } = this.props;

    return (
      <table className="listing" id="peopletable">
        <thead>
          <tr className="links">
            <th onClick={this.sort} value="title">Name</th>
            <th onClick={this.sort} value="num">House</th>
            <th onClick={this.sort} value="category">Department</th>
            <th onClick={this.sort} value="status">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: add pagination */}
          {people.map(p => peopleRow(p))}
        </tbody>
      </table>
    );
  }
}

PeopleTable.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleTable;
