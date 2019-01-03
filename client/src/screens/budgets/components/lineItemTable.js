import React, { Component } from 'react';
import PropTypes from 'prop-types';

const itemRow = (item, onChangeAmount) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>$0.00</td>
    <td>$0.00</td>
    <td>{`$${item.amount}`}</td>
    <td><textarea onChange={e => onChangeAmount(item, e.target.value)} /></td>
    <td>$0.00</td>
    <td>$0.00</td>
    <td>$0.00</td>
    <td>$0.00</td>
    <td>$0.00</td>
    <td>$0.00</td>
    <td><button type="button">+</button></td>
    <td><button type="button">-</button></td>
  </tr>
);

class LineItemTable extends Component {
  render() {
    return (
      <table className="listing" id="lineItemTable">
        <tbody>
          <tr>
            <th style={{ width: '4%' }}>#</th>
            <th style={{ width: 350 }}>Name</th>
            <th>PY Req</th>
            <th>PY Alloc</th>
            <th>CY Req</th>
            <th>JFC</th>
            <th>UHRC</th>
            <th>GSSC</th>
            <th>UHR</th>
            <th>GSS</th>
            <th>CONF</th>
            <th>Final</th>
            <th />
            <th />
          </tr>
          {this.props.lineItems.map(i => itemRow(i, e => this.props.onChangeAmount(e)))}
        </tbody>
      </table>
    );
  }
}

LineItemTable.propTypes = {
  lineItems: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onChangeAmount: PropTypes.func.isRequired,
};

export default LineItemTable;
