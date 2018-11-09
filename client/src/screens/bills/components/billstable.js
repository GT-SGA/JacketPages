import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const billRow = bill => (
  <tr>
    <td>{bill.title}</td>
    <td>{bill.num}</td>
    <td>{bill.category}</td>
    <td>{(() => {
      switch(bill.status) {
        case 1:
          return "Created";
          break;
        case 2:
          return "Awaiting Author";
          break;
        case 3:
          return "Authored";
          break;
        case 4:
          return "Agenda";
          break;
        case 5:
          return "Conference";
          break;
        case 6:
          return "Passed";
          break;
        case 7:
          return "Failed";
          break;
        case 8:
          return "Tabled";
          break;
      }
    })()}
    </td>
    <td>{bill.date}</td>
  </tr>
);

const itemLimit = 50;

class BillsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0
    };

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleBreakClick = this.handleBreakClick.bind(this);
  }

  handleBreakClick() {
  }

  handlePageClick(page) {
    let selected = page.selected;
    let offset = Math.ceil(selected * itemLimit);

    this.setState({
      offset: offset
    });
  }

  render() {
    const { bills } = this.props;
    const billsToDisplay = bills.slice(
      this.state.offset,
      this.state.offset + itemLimit
    );

    return (
      <div>
        <table className="listing">
          <tbody id="billtable">
            <tr className="links">
              <th onClick={this.sort} value="title">Title</th>
              <th onClick={this.sort} value="num">Number</th>
              <th onClick={this.sort} value="category">Category</th>
              <th onClick={this.sort} value="status">Status</th>
              <th onClick={this.sort} value="date">Submit Date</th>
            </tr>
            {billsToDisplay.map(bill => billRow(bill))}
          </tbody>
        </table>

        <div ref="pagination">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={<span onClick={this.handleBreakClick}>...</span>}
            pageCount={bills.length / itemLimit}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>

        <div>
          Showing {billsToDisplay.length} records out of {bills.length} total,
          starting on record {this.state.offset + 1}, ending on {this.state.offset + billsToDisplay.length}
        </div>
      </div>
    );
  }
}

BillsTable.propTypes = {
  bills: PropTypes.array.isRequired,
};

export default BillsTable;
