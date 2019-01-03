import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const billRow = (bill, users, sgaPeople, billAuthors) => {
  const auth = billAuthors[bill.auth_id];
  const gAuthor = auth && sgaPeople[auth.grad_auth_id];
  const uAuthor = auth && sgaPeople[auth.undr_auth_id];
  const fullBill = gAuthor && uAuthor && Object.assign({}, bill, {
    authors: {
      gradAuthor: users[gAuthor.user_id],
      ugAuthor: users[uAuthor.user_id],
    },
    submitter: users[bill.submitter],
  });
  return fullBill && (
    <tr>
      <td><Link to={{ pathname: '/viewBill', state: { bill: fullBill } }}>{bill.title}</Link></td>
      <td>{bill.num}</td>
      <td>{bill.category}</td>
      <td>
        {(
          () => {
            switch (bill.status) {
              case 1:
                return 'Created';
              case 2:
                return 'Awaiting Author';
              case 3:
                return 'Authored';
              case 4:
                return 'Agenda';
              case 5:
                return 'Conference';
              case 6:
                return 'Passed';
              case 7:
                return 'Failed';
              case 8:
                return 'Tabled';
              default: return '';
            }
          }
        )}
      </td>
      <td>{bill.date}</td>
    </tr>
  );
};

const itemLimit = 50;

class BillsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(page) {
    const { selected } = page;
    const offset = Math.ceil(selected * itemLimit);

    this.setState({ offset });
  }

  render() {
    const bills = Object.values(this.props.bills);

    const billsToDisplay = bills.slice(
      this.state.offset,
      this.state.offset + itemLimit,
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
            {billsToDisplay.map(bill => (
              billRow(bill, this.props.users, this.props.sga_people, this.props.billAuthors)
            ))}
          </tbody>
        </table>

        <div id="pagination">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel={<div>...</div>}
            pageCount={bills.length / itemLimit}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>

        <div>
          {`Showing ${billsToDisplay.length} records out of ${bills.length} total,
          starting on record ${this.state.offset + 1}, ending on ${this.state.offset + billsToDisplay.length}`}
        </div>
      </div>
    );
  }
}

BillsTable.propTypes = {
  bills: PropTypes.shape.isRequired,
  billAuthors: PropTypes.shape.isRequired,
  users: PropTypes.shape.isRequired,
  sga_people: PropTypes.shape.isRequired,
};

export default BillsTable;
