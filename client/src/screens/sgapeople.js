import React, { Component } from 'react';

class SGAPeople extends Component {
  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div className="ui-overlay" id="help" style={{ display: "none" }}>
            <div className="ui-widget-overlay"></div>
            <div className="ui-corner-all" id="overlay" style={{ width: "100%", height: 600, position: "absolute", overflowY: "scroll", marginTop: 10 }}>
              <button onclick="closeHelp()" style={{ float: "right" }} type="submit">X</button>
              <div className="helppage" style={{ marginLeft: 10, marginRight: 10 }}>
                <h1>Submitting SGA Bills</h1>
                <h2>Introduction</h2>
                <p>The following will help you to prepare and to learn the process that is required to obtain funding from, or pass a resolution with, the Student Government Association (SGA) at Georgia Tech.<br /> The Student Government’s legislative structure consists of a body of undergraduate students (Undergraduate House of Representatives or UHR) and of a body of graduate students (Graduate Student Senate or GSS). The passing of a “joint” bill requires consideration of a bill in each body and is subject to passing by an “enactment ratio.” Mostly all financial requests by student organizations will be classified as a joint bill. The enactment ratio is a mathematical calculation to determine whether a bill passes both bodies of SGA. It ensures that undergraduate and graduates are represented proportionally since undergraduates represent more of the student body and contribute more money to SGA from the Student Activity Fee.<br /> The money that SGA allocates to organizations comes from the “Student Activity Fee” line that shows up on the tuition and fee assessment paid by each student every semester. This money is then budgeted to many different organizations with the Student Center and the Campus Recreation Center receiving approximately 70% of that budget. At the end of the year, the money that has not been spent is placed into several accounts that can then be allocated to different groups for special one-time items. Student Government has a set of policies and priorities that it follows with regards to funding requests.<br /> Please keep in mind that SGA has a set amount of money that it can spend in one year. SGA attempts to wisely spend that set of money on the organizations with most demonstrated need and on those bills that will benefit the majority of campus. Not every request will end in success.</p>
                <h2>The Process</h2>
                <p>The process begins with a student organization that needs additional funding for an event and turns to SGA for financial assistance. SGA should serve as the organization’s last resort after all other funding options have been exhausted. Next, the organization will contact an undergraduate Representative and a graduate Senator of SGA and ask those members to author their bill. A complete list of senators and representatives can be found at <a href="http://jacketpages.gatech.edu/sga_people">http://jacketpages.gatech.edu/sga_people</a>. A bill form (further explained in “How to Submit an SGA Bill”) requesting general information about the organization or student will be completed and a bill will be drafted to include the organization’s idea for an event and an itemized list of requested items.<br /> If the bill is submitted and reviewed by the authors by 8am on Monday, the bill will appear in New Business on the agenda at the SGA meeting that following Tuesday. The Joint Finance Committee (JFC) will review the bill at its weekly meeting that Thursday; a representative from the organization will be invited to the meeting to speak on behalf of the organization. The Joint Finance Committee will suggest changes based on SGA funding policies (a copy of JFC Policy can be found in the back of this binder). The next Tuesday, the bill will move into Old Business where it will be discussed and voted on. After both legislative bodies discuss the bill and the enactment ratio is reached, the funds will be allocated to the organization. Please see the policy of the Student Organization Finance Office (in the back of this binder) for information on reimbursements and purchases.</p>
                <p style={{ fontStyle: "italic", fontWeight: "bold" }}>Be sure to begin working on bills for events and activities at least four (4) weeks before the event!
                </p>
                <h2>Step by Step Process Checklist:</h2>
                <ul style={{ paddingLeft: 40 }}>
                  <li>Before contacting a potential author, draft your bill with itemized costs according to the Joint Finance Committee policy, available at <a href="http://sga.gatech.edu/JFC">http://sga.gatech.edu/JFC</a>.</li>
                  <li>Find authors, both an undergraduate and a graduate. A complete list of representatives and senators can be found at <a href="http://jacketpages.gatech.edu/sga_people">http://jacketpages.gatech.edu/sga_people</a>. Be sure to include your bill and extra information when making contact.</li>
                  <li>Bills must be submitted and reviewed by both authors online by 8am on Monday in order for them to be placed in New Business on Tuesday.</li>
                  <li>After appearing in New Business, the bill submitted or a representative from the organization will need to attend a meeting with the Joint Finance Committee (an invitation will be sent to the bill submitter)</li>
                  <li>After the meeting with the JFC has been attended and the JFC has made their recommendations, the bill will move to Old Business and be voted on the following week. Note: this is one week after that bill was in New Business.</li>
                  <li>You should attend the meeting when your bill appears on the agenda in Old Business. This includes the Graduate Student Senate meeting at 11am on Tuesdays and the Undergraduate House of Representatives meetings at 7pm on Tuesdays, both in the Student Services Building (Flag Building), room 117. You will be asked to present the bill to the body or answer questions from senators/representatives.</li>
                  <li>If your bill passes, please see the policy of the Student Organization Finance Office about reimbursements and purchases. It if fails, you will have the opportunity to revise and resubmit.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="links left-nav" id="sidebar">
            <ul>
              <li><a href="./sgapeoplesearch.html">Add SGA Member</a></li>
            </ul>
          </div>
          <div id="middle">
            <div id="page_title">SGA Records</div>

            <div id="alphabet">
              <div id="leftHalf">
                <form action="/sga_people" id="SgaPersonIndexForm" method="post" accept-charset="utf-8">
                  <div style={{ display: "none" }}><input type="hidden" name="_method" value="POST" /></div>
                  <div className="input text"><label for="search" style={{ display: "inline" }}>Search</label><input name="data[SgaPerson][keyword]" id="search" width="80%" type="text" /></div>
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
              <a href="#" className="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-accordion-icons" role="tab" id="ui-accordion-accordion-header-0" aria-controls="ui-accordion-accordion-panel-0" aria-selected="false" aria-expanded="false" tabindex="0"><span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>Filters</a>
              <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="ui-accordion-accordion-panel-0" aria-labelledby="ui-accordion-accordion-header-0" role="tabpanel" aria-hidden="true" style={{ display: "none" }}>
                <div style={{ float: "left", width: "45%" }}>
                  <ul>
                    <div className="input select"><label for="SgaPersonHouse">House</label><select name="data[SgaPerson][house]" id="SgaPersonHouse">
  <option value="all" selected="selected">All</option>
  <option value="undergraduate">Undergraduate</option>
  <option value="graduate">Graduate</option>
  </select></div>
                    <div className="input select"><label for="SgaPersonDepartment">Department</label><select name="data[SgaPerson][department]" id="SgaPersonDepartment">
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
  </select></div>
                  </ul>
                </div>
                          <div style={{ float: "right", width: "45%" }}>
                              <div className="input select"><label for="SgaPersonStatus">Status</label><select name="data[SgaPerson][status]" id="SgaPersonStatus">
  <option value="all" selected="selected">All</option>
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
  </select></div><br />
                              <div className="submit" style={{ display: "inline-block" }}><input type="submit" value="Submit" /></div>
                              <div className="submit" style={{ display: "inline-block" }}><input name="submit" type="submit" value="Clear" /></div>
                          </div>
                          <div style={{ clear: "both" }}></div>
                      </div>
                  </div>

                  <div id="forupdate">
                      <table className="listing" id="table">
                          <th>Name</th>
                          <th>House</th>
                          <th>Department</th>
                          <th>Status</th>
                          <th></th>
                      </table>
  {/* <!--
                      <div className="paging">
                          <span className="disabled">&lt;&lt; previous</span> |
                          <span className="current">1</span> | <span><a href="/sga_people/index/page:2/sort:SgaPerson.status/direction:ASC" id="link-1014622121">2</a></span> | <span><a href="/sga_people/index/page:3/sort:SgaPerson.status/direction:ASC" id="link-1357168111">3</a></span> | <span><a href="/sga_people/index/page:4/sort:SgaPerson.status/direction:ASC" id="link-888091751">4</a></span> | <span><a href="/sga_people/index/page:5/sort:SgaPerson.status/direction:ASC" id="link-379935715">5</a></span> | <span><a href="/sga_people/index/page:6/sort:SgaPerson.status/direction:ASC" id="link-1025615170">6</a></span> | <span><a href="/sga_people/index/page:7/sort:SgaPerson.status/direction:ASC" id="link-914385852">7</a></span> | <span><a href="/sga_people/index/page:8/sort:SgaPerson.status/direction:ASC" id="link-698445193">8</a></span> | <span><a href="/sga_people/index/page:9/sort:SgaPerson.status/direction:ASC" id="link-77138752">9</a></span> |
                          <span className="next"><a href="/sga_people/index/page:2/sort:SgaPerson.status/direction:ASC" id="link-1794877457" rel="next">next &gt;&gt;</a></span> <br />
                          <br /> Page 1 of 37, showing 20 records out of 733 total, starting on record 1, ending on 20
                          <script type="text/javascript">
                              //<![CDATA[
                              $(document).ready(function() {
                                  $("#link-245177205").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/sort:name\/direction:asc"
                                      });
                                      return false;
                                  });
                                  $("#link-1823610090").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/sort:house\/direction:asc"
                                      });
                                      return false;
                                  });
                                  $("#link-2120733716").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/sort:department\/direction:asc"
                                      });
                                      return false;
                                  });
                                  $("#link-1014622121").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:2\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-1357168111").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:3\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-888091751").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:4\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-379935715").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:5\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-1025615170").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:6\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-914385852").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:7\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-698445193").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:8\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-77138752").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:9\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                                  $("#link-1794877457").bind("click", function(event) {
                                      $.ajax({
                                          beforeSend: function(XMLHttpRequest) {
                                              $("#listing").fadeOut();
                                          },
                                          complete: function(XMLHttpRequest, textStatus) {
                                              $("#listing").fadeIn();
                                          },
                                          dataType: "html",
                                          evalScripts: true,
                                          indicator: "#indicator",
                                          success: function(data, textStatus) {
                                              $("#forupdate").html(data);
                                          },
                                          url: "\/sga_people\/index\/page:2\/sort:SgaPerson.status\/direction:ASC"
                                      });
                                      return false;
                                  });
                              });
                              //]]>
                          </script>
                      </div>
  --> */}
                  </div>
                  {/* <script>
                      $(function() {
                          $("#accordion").accordion({
                              collapsible: true,
                              heightStyle: "content",
                              active: false
                          });
                      });
                  </script> */}
              </div>
          </div>
      </div>
    );
  }
}

export default SGAPeople;
