import React, { Component } from 'react';

class Masthead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      user: true,
    };
  }

  render() {
    return (
      <div id="masthead">
        <div id="identity" class="clearfix">
          <div id="identity-wrapper">
            <h1 id="gt-logo">
              <a href="http://gatech.edu/" rel="" title="Georgia Tech">
                <img src="./img/logo-gt.png" alt="Georgia Tech" />
              </a>
            </h1>
            <h2 id="jp-logo">
              <a href="http://jacketpages.gatech.edu/" rel="" title="JacketPages">
                <img src="./img/jacketpages.png" alt="Jacket Pages" />
              </a>
            </h2>
          </div>
        </div>
        <div id="primary-menus">
          <div id="primary-menus-wrapper" class="clearfix">
            <a id="primary-menus-toggle" class="hide-for-desktop"><span>Menu</span></a>
            <div id="primary-menus-off-canvas" class="off-canvas">
              <a id="primary-menus-close" class="hide-for-desktop"><span>Close</span></a>
              <div id="utility">
                <div class="row clearfix">
                  <div id="utility-links">
                    <ul class="menu">
                      <li class="mothership ulink"><a href="http://www.gatech.edu/">Georgia Tech Home</a></li>
                      <li class="campus-map ulink"><a href="http://www.map.gatech.edu/">Map</a></li>
                      <li class="directories ulink"><a href="http://www.gatech.edu/directory">Directory</a></li>
                      <li class="offices ulink"><a href="http://www.gatech.edu/departments">Offices</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="nav">
                <div id="main-menu-wrapper">
                  <ul class="menu">
                    <li class="expanded first"></li>
                    <li class="expanded"></li>
                    <AccountTab user={this.state.user}/>
                    <li class="expanded"></li>
                    <li class="expanded">
                      <a href="organizations.html"><span>Organizations</span></a>
                    </li>
                    <li class="expanded"></li>
                    <li class="expanded">
                      <a href="sgapeople.html"><span>Student Government</span></a>
                      <ul class="menu">
                        <li class="leaf first">
                          {/* TODO: Change this to a relative link to /sgapeople */}
                            <a href="http://jacketpages.gatech.edu/sga_people">View SGA Members</a>
                        </li>
                      </ul>
                    </li>
                    <li class="expanded"></li>
                    <li class="expanded">
                      <a href="/bills"><span>Bills</span></a>
                      <ul class="menu">
                        <li class="leaf first">
                            <a href="http://jacketpages.gatech.edu/bills/add">Submit Bill</a>
                        </li>
                        <li class="leaf">
                            <a href="http://jacketpages.gatech.edu/bills/my_bills">View My Bills</a>
                        </li>
                        <li class="leaf last">
                            <a href="/bills">View All Bills</a>
                        </li>
                        </ul>
                      </li>
                    <li class="expanded"></li>
                    <li class="expanded">
                      <a href="http://localhost:3000/help"><span>Help</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const AccountTab = (props) => {
  if (props.user) {
    return (
      <li class="expanded">
          <a href="http://jacketpages.gatech.edu/users/view/22053"><span>My Account</span></a>
          <ul class="menu">
              <li class="leaf first">
                  <a href="http://jacketpages.gatech.edu/users/view/22053">Account Profile</a>
              </li>
              <li class="leaf">
                  <a href="http://jacketpages.gatech.edu/users/logout">Logout</a>
              </li>
              <li class="leaf last">
                  <a href="http://jacketpages.gatech.edu/">JacketPages Home</a>
              </li>
          </ul>
      </li>
    );
  } else {
    return (
      <li class="expanded">
        <a href="#"><span>Login</span></a>
      </li>
    );
  }
}

export default Masthead;
