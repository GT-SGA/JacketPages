import React, { Component } from 'react';

import '../../assets/css/jpbillvoting.css';

const BillInfo = props => props.currentBill && (
  <div>
    <h2>{props.currentBill.title}</h2>
    <h3>Organization:</h3>
    <h3>Description</h3>
    <p>{props.currentBill.description}</p>
  </div>
)

class JPBillVotingUHRRepView extends Component {
  render() {
    console.log(this.props.currentBill);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <BillInfo currentBill={this.props.currentBill} />
            <div className="row">
              <div className="col">
                <h3>Vote:</h3>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-block"
                      type="button"
                      style={{ backgroundColor: 'rgb(43,227,40)', border: 0 }}
                      onClick={() => this.props.vote('YES')}
                    >
                      Yea
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-block"
                      type="button"
                      style={{ backgroundColor: '#c9c9c9', border: 0 }}
                      onClick={() => this.props.vote('ABSTAIN')}
                    >
                      Abstain
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-block"
                      type="button"
                      style={{ backgroundColor: 'rgb(224,46,34)', border: 0 }}
                      onClick={() => this.props.vote('ABSTAIN')}
                    >
                      Nay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JPBillVotingUHRRepView;
