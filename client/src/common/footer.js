import React from 'react';

const Footer = () => (
  <div id="footer">
    <div className="row clearfix">
      <div id="footer-utility-links">
        <ul className="menu gt-footer-utility-links">
          <li><a href="http://jacketpages.gatech.edu/">Campus Calendar</a></li>
          <li><a href="http://jacketpages.gatech.edu/pages/contact">Contact JacketPages</a></li>
          <li><a href="http://jacketpages.gatech.edu/pages/privacy_policy">Privacy Policy</a></li>
        </ul>
        <ul className="menu custom-links-included">
          <li><a href="http://www.gatech.edu/">Georgia Tech Main</a></li>
          <li><a href="http://www.studentaffairs.gatech.edu/">Student Affairs</a></li>
          <li><a href="http://www.sga.gatech.edu/">Student Government</a></li>
          <li><a href="http://www.involvement.gatech.edu/">Student Involvement</a></li>
        </ul>
      </div>
      <div id="footer-logo">
        <a href="http://jacketpages.gatech.edu/" rel="" title="Georgia Tech" style={{ marginRight: 4 }}>
          <img src="./img/sgalogogrey.png" alt="Georgia Tech" />
        </a>
        <p>© 2018 Georgia Tech Student Government Association</p>
      </div>
    </div>
  </div>
);

export default Footer;
