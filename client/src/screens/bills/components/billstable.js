import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BillsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 0,
      num: 0,
      category: 0,
      status: 0,
      date: 0,
    };

    this.sort = this.sort.bind(this);
  }

  sort(e) {
    if (this.state[`${e.value}`] === 1) {
      this.props[`sort${e.value.capitalize}`](-1);
    } else {
      this.props[`sort${e.value.capitalize}`](1);
    }
  }

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
        </tbody>
      </table>
    );
  }
};

BillsTable.propTypes = {
  bills: PropTypes.array.isRequired,
  sortTitle: PropTypes.func.isRequired,
  sortNum: PropTypes.func.isRequired,
  sortCategory: PropTypes.func.isRequired,
  sortStatus: PropTypes.func.isRequired,
  sortDate: PropTypes.func.isRequired,
};

export default BillsTable;
