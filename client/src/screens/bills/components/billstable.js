import React, { Component } from 'react';
import PropTypes from 'prop-types';

const billRow = bill => (
  <tr>
    <td>{bill.title}</td>
    <td>{bill.num}</td>
    <td>{bill.category}</td>
    <td>{bill.status}</td>
    <td>{bill.date}</td>
  </tr>
);

class BillsTable extends Component {
  render() {
    const { bills } = this.props;

    return (
      <table className="listing">
        <tbody id="billtable">
          <tr className="links">
            <th onClick={this.sort} value="title">Title</th>
            <th onClick={this.sort} value="num">Number</th>
            <th onClick={this.sort} value="category">Category</th>
            <th onClick={this.sort} value="status">Status</th>
            <th onClick={this.sort} value="date">Submit Date</th>
          </tr>
          {/* TODO: add pagination */}
          {bills.map(bill => billRow(bill))}
        </tbody>
      </table>
    );
  }
}

BillsTable.propTypes = {
  bills: PropTypes.array.isRequired,
};

export default BillsTable;
