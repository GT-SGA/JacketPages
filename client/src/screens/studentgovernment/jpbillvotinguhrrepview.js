import React, { Component } from 'react';

import '../../assets/css/jpbillvoting.css';

class JPBillVotingUHRRepView extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-lg-9">
              <h2>Bill 2</h2>
              <h3>Organization:</h3>
              <p>Information about bill<br />Info<br />Info<br />Info</p>
              <div className="row">
                  <div className="col">
                      <h3>Vote:</h3>
                      <div className="row">
                          <div className="col d-flex justify-content-center"><button className="btn btn-primary btn-block" type="button" style={{backgroundColor: "rgb(43,227,40)", border: 0}}>Yea</button></div>
                          <div className="col d-flex justify-content-center"><button className="btn btn-primary btn-block" type="button" style={{backgroundColor: "#c9c9c9", border: 0}}>Abstain</button></div>
                          <div className="col d-flex justify-content-center"><button className="btn btn-primary btn-block" type="button" style={{backgroundColor: "rgb(224,46,34)", border: 0}}>Nay</button></div>
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
