import React, { Component } from 'react';

class VotingUHRRepView extends Component {
  render() {
    return (
      <div>
        <div className="container border-bottom">
            <div className="row">
                <div className="col">
                    <p style={{margin: 0, fontSize: 30}}>JacketPages</p>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                    <p className="text-right" style={{margin: 0}}>Logged in as: UHR Rep</p>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 offset-lg-0 border-right">
                        <h2>Agenda</h2>
                        <ul className="list-unstyled">
                            <li style={{color: "rgb(187,187,187)", padding: 5}}>
                              <a href="#">Bill 1</a>
                            </li>
                            <li style={{backgroundColor: "#e9e9e9", padding: 5}}>
                              <a href="#">Bill 2</a>
                            </li>
                            <li style={{padding: 5}}>
                              <a href="#">Bill 3</a>
                            </li>
                            <li style={{padding: 5}}>
                              <a href="#">Bill 4</a>
                            </li>
                        </ul>
                    </div>
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
        </div>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </div>
    );
  }
}

export default VotingUHRRepView;
