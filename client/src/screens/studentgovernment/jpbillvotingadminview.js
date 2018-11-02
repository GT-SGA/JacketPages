import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/jpbillvoting.css';

class JPBillVotingAdminView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bills: this.props.bills,
      bill: {},
    };

    this.renderBillRow = this.renderBillRow.bind(this);
    this.renderBillView = this.renderBillView.bind(this);
  }

  renderBillRow(bill) {
    return (
      <li><a>{bill.name}</a></li>
    );
  }

  renderBillView() {
    <p>Organization: {this.state.bill.organization}</p>
  }

  render() {
    return (
      <div>
        <div className="page-content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 style={{fontStyle: 'normal', fontWeight: 'bold'}}>JacketPages</h1>
              </div>
              <div className="col-lg-4">
                <p>Logged in as: Admin</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <a className="btn btn-link" role="button" href="#menu-toggle" id="menu-toggle">
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div className="col-lg-9 col-xl-9 offset-lg-0">
            <h1>Bill View</h1>
            {this.renderBillView()}
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <button className="btn btn-primary bill-voting-button" type="button" style={{ margin: 0 }}>Begin Voting</button>
            </div>
            <div className="col d-flex justify-content-center">
              <button className="btn btn-primary bill-voting-button" type="button">Stop Voting</button>
            </div>
            <div className="col d-flex justify-content-center">
              <button className="btn btn-primary bill-voting-button" type="button">Show Res</button>
            </div>
          </div>
          <div className="col-lg-9 offset-lg-2 d-flex justify-content-end">
            <button className="btn btn-primary bill-voting-button" type="button">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

JPBillVotingAdminView.propTypes = {
  bills: PropTypes.array.isRequired,
};

export default JPBillVotingAdminView;
