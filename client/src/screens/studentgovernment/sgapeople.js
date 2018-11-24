import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/studentgovernment/actions';

import PeopleTable from './components/peopletable';

class SGAPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: this.props.SGA.sga_people,
    };
  }

  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div className="links left-nav" id="sidebar">
            <ul>
              <li><a href="./sgapeoplesearch.html">Add SGA Member</a></li>
            </ul>
          </div>
          <div id="middle">
            <div id="page_title">SGA Records</div>
            <div id="alphabet">
              <div id="leftHalf">
                <form action="/sga_people" id="SgaPersonIndexForm" method="post" acceptCharset="utf-8">
                  <div style={{ display: "none" }}><input type="hidden" name="_method" value="POST" /></div>
                  <div className="input text">
                    <label htmlFor="search" style={{ display: "inline" }}>Search</label>
                    <input name="data[SgaPerson][keyword]" id="search" width="80%" type="text" />
                  </div>
                </form>
              </div>
              <div id="rightHalf">
                <ul>
                  <li>
                    <a href="/sga_people/index/a">A</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/b">B</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/c">C</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/d">D</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/e">E</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/f">F</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/g">G</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/h">H</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/i">I</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/j">J</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/k">K</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/l">L</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/m">M</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/n">N</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/o">O</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/p">P</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/q">Q</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/r">R</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/s">S</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/t">T</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/u">U</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/v">V</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/w">W</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/x">X</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/y">Y</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people/index/z">Z</a>&nbsp;</li>
                  <li>
                    <a href="/sga_people">ALL</a> </li>
                </ul>
              </div>
            </div>
            <div id="accordion" className="ui-accordion ui-widget ui-helper-reset" role="tablist">
              <a href="#" className="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-accordion-icons" role="tab" id="ui-accordion-accordion-header-0" aria-controls="ui-accordion-accordion-panel-0" aria-selected="false" aria-expanded="false" tabIndex="0">
                <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
                Filters
              </a>
              <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="ui-accordion-accordion-panel-0" aria-labelledby="ui-accordion-accordion-header-0" role="tabpanel" aria-hidden="true" style={{ display: "none" }}>
                <div style={{ float: "left", width: "45%" }}>
                  <ul>
                    <div className="input select">
                      <label htmlFor="SgaPersonHouse">House</label>
                      <select name="data[SgaPerson][house]" id="SgaPersonHouse">
                        <option value="all" selected="selected">All</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                      </select>
                    </div>
                    <div className="input select">
                      <label htmlFor="SgaPersonDepartment">Department</label>
                      <select name="data[SgaPerson][department]" id="SgaPersonDepartment">
                        <option value="all" selected="selected">All</option>
                        <option value="AE">AE</option>
                        <option value="Aerospace">Aerospace</option>
                        <option value="Aerospace ">Aerospace </option>
                        <option value="Aerospace Engineering">Aerospace Engineering</option>
                        <option value="Aerospace Engineering Representative">Aerospace Engineering Representative</option>
                        <option value="Aerospace Engineering Representative ">Aerospace Engineering Representative </option>
                        <option value="Applied Physiology">Applied Physiology</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Architecture and City Planning">Architecture and City Planning</option>
                        <option value="Architecture Representative">Architecture Representative</option>
                        <option value="At Large Senator (Business)">At Large Senator (Business)</option>
                        <option value="At Large Senator (Mechanical Engineering)">At Large Senator (Mechanical Engineering)</option>
                        <option value="At- Large / ChBE">At- Large / ChBE</option>
                        <option value="Athletic Association Representative">Athletic Association Representative</option>
                        <option value="Athletics Representative">Athletics Representative</option>
                        <option value="Bioengineering">Bioengineering</option>
                        <option value="Biology">Biology</option>
                        <option value="Biology  Representative">Biology  Representative</option>
                        <option value="Biology and Applied Physiology">Biology and Applied Physiology</option>
                        <option value="Biology Representative">Biology Representative</option>
                        <option value="Biomedical Engineering">Biomedical Engineering</option>
                        <option value="Biomedical Engineering Rep">Biomedical Engineering Rep</option>
                        <option value="Biomedical Engineering Representative">Biomedical Engineering Representative</option>
                        <option value="BME">BME</option>
                        <option value="BME  Representative">BME  Representative</option>
                        <option value="Building Construction">Building Construction</option>
                        <option value="Building Construction Representative">Building Construction Representative</option>
                        <option value="Business">Business</option>
                        <option value="Business Representative">Business Representative</option>
                        <option value="CE Representative">CE Representative</option>
                        <option value="CEE">CEE</option>
                        <option value="ChBE">ChBE</option>
                        <option value="ChBE Representative">ChBE Representative</option>
                        <option value="Chemical &amp; Biomolecular Engineering">Chemical &amp;amp; Biomolecular Engineering</option>
                        <option value="Chemical &amp; Biomolecular Engineering Representative">Chemical &amp;amp; Biomolecular Engineering Representative</option>
                        <option value="Chemical and Biomolecular Eng Representative">Chemical and Biomolecular Eng Representative</option>
                        <option value="Chemical and Biomolecular Eng. Representative">Chemical and Biomolecular Eng. Representative</option>
                        <option value="Chemical and Biomolecular Engineeering">Chemical and Biomolecular Engineeering</option>
                        <option value="Chemical and Biomolecular Engineering">Chemical and Biomolecular Engineering</option>
                        <option value="Chemical and Biomolecular Engineering Representati">Chemical and Biomolecular Engineering Representati</option>
                        <option value="Chemical and Biomolecular Representative">Chemical and Biomolecular Representative</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                        <option value="Chemical Engineering Representative">Chemical Engineering Representative</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Chemistry  Representative">Chemistry  Representative</option>
                        <option value="Chemistry &amp; Biochemistry">Chemistry &amp;amp; Biochemistry</option>
                        <option value="Chemistry &amp; Biochemistry Representative">Chemistry &amp;amp; Biochemistry Representative</option>
                        <option value="Chemistry and Biochemistry">Chemistry and Biochemistry</option>
                        <option value="Chemistry Representative">Chemistry Representative</option>
                        <option value="City and Regional Planning">City and Regional Planning</option>
                        <option value="Civil &amp; Environmental Engineering">Civil &amp;amp; Environmental Engineering</option>
                        <option value="Civil and Environmental Engineering">Civil and Environmental Engineering</option>
                        <option value="Civil and Environmental Engineering Representative">Civil and Environmental Engineering Representative</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Civil Engineering Representative">Civil Engineering Representative</option>
                        <option value="Co-Op Representative">Co-Op Representative</option>
                        <option value="Co-op Representative">Co-op Representative</option>
                        <option value="College of Business">College of Business</option>
                        <option value="College of Business Representative">College of Business Representative</option>
                        <option value="College of Computing">College of Computing</option>
                        <option value="College of Computing Rep">College of Computing Rep</option>
                        <option value="College of Computing Representative">College of Computing Representative</option>
                        <option value="Computational Science and Engineering">Computational Science and Engineering</option>
                        <option value="Computer Engineering Rep">Computer Engineering Rep</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Coop Representative">Coop Representative</option>
                        <option value="CS">CS</option>
                        <option value="Director of Information Technology">Director of Information Technology</option>
                        <option value="Director of Internal Affairs">Director of Internal Affairs</option>
                        <option value="Earth and Atmospheric Science">Earth and Atmospheric Science</option>
                        <option value="Earth and Atmospheric Sciences">Earth and Atmospheric Sciences</option>
                        <option value="Earth and Atmospheric Sciences Representative">Earth and Atmospheric Sciences Representative</option>
                        <option value="EAS">EAS</option>
                        <option value="EAS Representative">EAS Representative</option>
                        <option value="ECE">ECE</option>
                        <option value="ECE Representative">ECE Representative</option>
                        <option value="Econ Rep">Econ Rep</option>
                        <option value="Economics">Economics</option>
                        <option value="Economics Representative">Economics Representative</option>
                        <option value="Electrical and Computer Engineering">Electrical and Computer Engineering</option>
                        <option value="Electrical and Computer Engineering Representative">Electrical and Computer Engineering Representative</option>
                        <option value="Electrical and Computer Engineering&nbsp;">Electrical and Computer Engineering&amp;nbsp;</option>
                        <option value="Electrical and Computer Engineering&nbsp;Representativ">Electrical and Computer Engineering&amp;nbsp;Representativ</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Electrical Engineering Rep">Electrical Engineering Rep</option>
                        <option value="Electrical Engineering Representative">Electrical Engineering Representative</option>
                        <option value="Executive Vice President">Executive Vice President</option>
                        <option value="Freshman Class Representative">Freshman Class Representative</option>
                        <option value="Freshman Representative">Freshman Representative</option>
                        <option value="Graduate President">Graduate President</option>
                        <option value="Graduate SGA President 2017-2018">Graduate SGA President 2017-2018</option>
                        <option value="Graduate SGA Vice President 2017-2018">Graduate SGA Vice President 2017-2018</option>
                        <option value="Graduate Student President">Graduate Student President</option>
                        <option value="Graduate Student Senate Chairman">Graduate Student Senate Chairman</option>
                        <option value="Graduate Student Vice President">Graduate Student Vice President</option>
                        <option value="History and Sociology">History and Sociology</option>
                        <option value="History and Sociology Representative">History and Sociology Representative</option>
                        <option value="HTS Representative">HTS Representative</option>
                        <option value="Industrial &amp; Systems Engineering">Industrial &amp;amp; Systems Engineering</option>
                        <option value="Industrial &amp; Systems Engineering Representative">Industrial &amp;amp; Systems Engineering Representative</option>
                        <option value="Industrial and Systems Engineering">Industrial and Systems Engineering</option>
                        <option value="Industrial and Systems Engineering Representative">Industrial and Systems Engineering Representative</option>
                        <option value="Industrial Design">Industrial Design</option>
                        <option value="Industrial Design Representative">Industrial Design Representative</option>
                        <option value="INTA">INTA</option>
                        <option value="INTA  Representative">INTA  Representative</option>
                        <option value="INTA Representative">INTA Representative</option>
                        <option value="International Affairs">International Affairs</option>
                        <option value="International Affairs Representative">International Affairs Representative</option>
                        <option value="ISyE">ISyE</option>
                        <option value="ISYE">ISYE</option>
                        <option value="ISyE Rep">ISyE Rep</option>
                        <option value="ISyE Representative">ISyE Representative</option>
                        <option value="ISYE Representative">ISYE Representative</option>
                        <option value="IT Specialist">IT Specialist</option>
                        <option value="Junior Class Representative">Junior Class Representative</option>
                        <option value="Junior Rep">Junior Rep</option>
                        <option value="Junior Representative">Junior Representative</option>
                        <option value="Literature, Media, &amp; Communications Representative">Literature, Media, &amp;amp; Communications Representative</option>
                        <option value="Literature, Media, and Communication Rep">Literature, Media, and Communication Rep</option>
                        <option value="LMC">LMC</option>
                        <option value="Management">Management</option>
                        <option value="Management Representative">Management Representative</option>
                        <option value="Material Science Engineering Representative">Material Science Engineering Representative</option>
                        <option value="Materials Science">Materials Science</option>
                        <option value="Materials Science &amp; Engineering Representative">Materials Science &amp;amp; Engineering Representative</option>
                        <option value="Materials Science and Engineering">Materials Science and Engineering</option>
                        <option value="Materials Science and Engineering Representative">Materials Science and Engineering Representative</option>
                        <option value="Math">Math</option>
                        <option value="Math  Representative">Math  Representative</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Mathematics Representative">Mathematics Representative</option>
                        <option value="ME">ME</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Mechanical Engineering Representative">Mechanical Engineering Representative</option>
                        <option value="Medical Physics ">Medical Physics </option>
                        <option value="Member at Large">Member at Large</option>
                        <option value="Member at Large Representative">Member at Large Representative</option>
                        <option value="Member-At-Large">Member-At-Large</option>
                        <option value="Modern Languages Representative">Modern Languages Representative</option>
                        <option value="MSE">MSE</option>
                        <option value="MSE Representative">MSE Representative</option>
                        <option value="Music">Music</option>
                        <option value="Music Representative">Music Representative</option>
                        <option value="Music Technology">Music Technology</option>
                        <option value="Music Technology Representative">Music Technology Representative</option>
                        <option value="NRE Representative">NRE Representative</option>
                        <option value="Nuclear Engineering">Nuclear Engineering</option>
                        <option value="Online Masters in Computer Science">Online Masters in Computer Science</option>
                        <option value="Other Computing Discipline">Other Computing Discipline</option>
                        <option value="Physics">Physics</option>
                        <option value="Physics Representative">Physics Representative</option>
                        <option value="Polymer and Fiber Eng. Representative">Polymer and Fiber Eng. Representative</option>
                        <option value="President">President</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Psychology Representative">Psychology Representative</option>
                        <option value="PTFE Representative">PTFE Representative</option>
                        <option value="Public Policy">Public Policy</option>
                        <option value="Public Policy Representative">Public Policy Representative</option>
                        <option value="Quantitative &amp; Computational Finance">Quantitative &amp;amp; Computational Finance</option>
                        <option value="Robotics/Mechanical Engineering">Robotics/Mechanical Engineering</option>
                        <option value="School of Aerospace Engineering">School of Aerospace Engineering</option>
                        <option value="School of Architecture">School of Architecture</option>
                        <option value="School of EAS">School of EAS</option>
                        <option value="School of History, Technology, and Society">School of History, Technology, and Society</option>
                        <option value="School of Industrial &amp; Systems Engineering">School of Industrial &amp;amp; Systems Engineering</option>
                        <option value="School of Industrial Design">School of Industrial Design</option>
                        <option value="School of International Affairs">School of International Affairs</option>
                        <option value="School of Literature, Media, and Communication">School of Literature, Media, and Communication</option>
                        <option value="School of Mechanical Engineering">School of Mechanical Engineering</option>
                        <option value="School of Modern Languages">School of Modern Languages</option>
                        <option value="School of Music Representative">School of Music Representative</option>
                        <option value="School of Psychology">School of Psychology</option>
                        <option value="Secretary">Secretary</option>
                        <option value="Senior Class Representative">Senior Class Representative</option>
                        <option value="Senior Representative">Senior Representative</option>
                        <option value="SGA Office">SGA Office</option>
                        <option value="Something">Something</option>
                        <option value="Sophmore Class Representative">Sophmore Class Representative</option>
                        <option value="Sophomore Class President">Sophomore Class President</option>
                        <option value="Sophomore Class Representative">Sophomore Class Representative</option>
                        <option value="Sophomore Representative">Sophomore Representative</option>
                        <option value="Speaker of the House">Speaker of the House</option>
                        <option value="Student Athlete Representative">Student Athlete Representative</option>
                        <option value="Undergraduate President">Undergraduate President</option>
                        <option value="Undergraduate Student Body President">Undergraduate Student Body President</option>
                        <option value="Vice President of External Affairs">Vice President of External Affairs</option>
                        <option value="Vice President of Finance">Vice President of Finance</option>
                        <option value="Vice President of Information Technology">Vice President of Information Technology</option>
                      </select>
                    </div>
                  </ul>
                </div>
                <div style={{ float: "right", width: "45%" }}>
                  <div className="input select">
                    <label htmlFor="SgaPersonStatus">Status</label>
                    <select name="data[SgaPerson][status]" id="SgaPersonStatus">
                      <option value="all" selected="selected">All</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <br />
                  <div className="submit" style={{ display: "inline-block" }}><input type="submit" value="Submit" /></div>
                  <div className="submit" style={{ display: "inline-block" }}><input name="submit" type="submit" value="Clear" /></div>
                </div>
                <div style={{ clear: "both" }}></div>
              </div>
            </div>
            <div id="forupdate">
              <PeopleTable people={this.props.SGA.sga_people} users={this.props.SGA.users}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  SGA: state.studentgovernment,
});

const mapDispatchToProps = dispatch => ({
  fetchSGAPeople: dispatch(actions.fetchSGAPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SGAPeople);