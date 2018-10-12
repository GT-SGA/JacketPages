import React, { Component } from 'react';

class VotingUHRRepView extends Component {
  render() {
    return (
      <div>
        <div className="container border-bottom" style="max-width: none;">
            <div className="row">
                <div className="col">
                    <p style="margin: 0px;font-size: 30px;">JacketPages</p>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                    <p className="text-right" style="margin: 0px;">Logged in as: UHR Rep</p>
                </div>
            </div>
        </div>
        <div id="wrapper">
            <div id="sidebar-wrapper" style="background-color: rgb(238,178,17);">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand"> <a href="#" style="color: #212529;">Agenda</a></li>
                    <li> <a href="#" style="color: #b98700;">Bill 1</a></li>
                    <li> <a href="#" style="color: #212529;">Bill 2</a></li>
                    <li> <a href="#" style="color: #212529;">Bill 3</a></li>
                </ul>
            </div>
            <div className="page-content-wrapper">
                <div className="container-fluid"><a className="btn btn-link" role="button" href="#menu-toggle" id="menu-toggle"><i className="fa fa-bars"></i></a>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Bill 2</h2>
                            <h3>Organization:</h3>
                            <p>Information about bill<br />Info<br />Info<br />Info</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Vote:</h3>
                                    <div className="row">
                                        <div className="col d-flex justify-content-center"><button className="btn btn-primary btn-block" type="button" style="background-color: rgb(43,227,40);border: 0px;">Yea</button></div>
                                        <div className="col d-flex justify-content-center"><button className="btn btn-primary btn-block" type="button" style="background-color: #c9c9c9;border: 0px;">Abstain</button></div>
                                        <div className="col d-flex justify-content-center"><button className="btn btn-primary btn-block" type="button" style="background-color: rgb(224,46,34);border: 0px;">Nay</button></div>
                                    </div>
                                </div>
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

export default VotingUHRRepView;
