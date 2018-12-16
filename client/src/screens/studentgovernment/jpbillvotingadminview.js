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
    this.startVoting = this.startVoting.bind(this);
    this.stopVoting = this.stopVoting.bind(this);
  }

  startVoting() {
    this.props.startBillVoting();
  }

  stopVoting() {
    this.props.stopBillVoting();
  }

  renderBillRow(bill) {
    return (
      <li><a>{bill.name}</a></li>
    );
  }

  renderBillView() {
    <p>Organization: {this.state.bill.organization}</p>
  }

  showResults() {
    var content = document.getElementById("voting-results");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  render() {
    console.log("results", this.props.results);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2>Bill View</h2>
            {this.renderBillView()}

            <div className="row">
              <div className="col d-flex justify-content-center">
                <button
                  className="btn btn-primary btn-block bill-voting-button"
                  type="button"
                  style={{ margin: 0 }}
                  onClick={this.startVoting}
                >
                  Begin Voting
                </button>
              </div>
              <div className="col d-flex justify-content-center">
                <button
                  className="btn btn-primary btn-block bill-voting-button"
                  type="button"
                  onClick={this.stopVoting}
                >
                  Stop Voting
                </button>
              </div>
              <div className="col d-flex justify-content-center">
                <button className="btn btn-primary btn-block bill-voting-button collapsible" type="button" onClick={this.showResults}>Show Results</button>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div id="voting-results">
                  <p style={{ marginTop: ".5rem" }}>Yeas: {this.props.results.yes}</p>
                  <p>Nays: {this.props.results.no}</p>
                  <p>Abstains: {this.props.results.abstain}</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col d-flex justify-content-end" style={{marginTop: 10}}>
                <button className="btn btn-primary bill-voting-button" type="button">Next</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

JPBillVotingAdminView.propTypes = {
  bills: PropTypes.array.isRequired,
  startBillVoting: PropTypes.func.isRequired,
  stopBillVoting: PropTypes.func.isRequired,
};

export default JPBillVotingAdminView;
