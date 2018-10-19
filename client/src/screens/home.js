import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="middle_full">
        <div id="page_title">Welcome to JacketPages</div>
        <p>JacketPages serves as the Student Government Association bills system for financial allocations to student organizations and resolutions to represent the student opinion. If you are looking for organization information, please visit the Georgia Tech Orgsync! JacketPages will continue to be updated more over the next few weeks!</p>
        <h1>SGA Finance Resources</h1>
        <div style={{margin: 'auto', width: "85%", paddingTop: 10}}>
          <div id="root">
            <iframe src="http://sgafinance.atspace.cc/" width="100%" height="100%"></iframe>
          </div>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Home;
