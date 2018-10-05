import React, { Component } from 'react';

class UsersAdd extends Component {
  render() {
    return (
      <div id="content">
          <div className="clearfix">
              <div className="ui-overlay" id="help" style="display:none;">
                  <div className="ui-widget-overlay"></div>
                  <div className="ui-corner-all" id="overlay" style="width: 100%; height: 600px; position: absolute;overflow-y:scroll; margin-top:10px;">
                      <button onclick="closeHelp()" style="float:right;" type="submit">X</button>
                      <div className="helppage" style="margin-left: 10px; margin-right:10px;">
                          <h1>Submitting SGA Bills</h1>
                          <h2>Introduction</h2>
                          <p>The following will help you to prepare and to learn the process that is required to obtain funding from, or pass a resolution with, the Student Government Association (SGA) at Georgia Tech.<br/> The Student Government’s legislative structure consists of a body of undergraduate students (Undergraduate House of Representatives or UHR) and of a body of graduate students (Graduate Student Senate or GSS). The passing of a “joint” bill requires consideration of a bill in each body and is subject to passing by an “enactment ratio.” Mostly all financial requests by student organizations will be classified as a joint bill. The enactment ratio is a mathematical calculation to determine whether a bill passes both bodies of SGA. It ensures that undergraduate and graduates are represented proportionally since undergraduates represent more of the student body and contribute more money to SGA from the Student Activity Fee.<br/> The money that SGA allocates to organizations comes from the “Student Activity Fee” line that shows up on the tuition and fee assessment paid by each student every semester. This money is then budgeted to many different organizations with the Student Center and the Campus Recreation Center receiving approximately 70% of that budget. At the end of the year, the money that has not been spent is placed into several accounts that can then be allocated to different groups for special one-time items. Student Government has a set of policies and priorities that it follows with regards to funding requests.<br/> Please keep in mind that SGA has a set amount of money that it can spend in one year. SGA attempts to wisely spend that set of money on the organizations with most demonstrated need and on those bills that will benefit the majority of campus. Not every request will end in success.</p>
                          <h2>The Process</h2>
                          <p>The process begins with a student organization that needs additional funding for an event and turns to SGA for financial assistance. SGA should serve as the organization’s last resort after all other funding options have been exhausted. Next, the organization will contact an undergraduate Representative and a graduate Senator of SGA and ask those members to author their bill. A complete list of senators and representatives can be found at <a href="http://jacketpages.gatech.edu/sga_people">http://jacketpages.gatech.edu/sga_people</a>. A bill form (further explained in “How to Submit an SGA Bill”) requesting general information about the organization or student will be completed and a bill will be drafted to include the organization’s idea for an event and an itemized list of requested items.<br/> If the bill is submitted and reviewed by the authors by 8am on Monday, the bill will appear in New Business on the agenda at the SGA meeting that following Tuesday. The Joint Finance Committee (JFC) will review the bill at its weekly meeting that Thursday; a representative from the organization will be invited to the meeting to speak on behalf of the organization. The Joint Finance Committee will suggest changes based on SGA funding policies (a copy of JFC Policy can be found in the back of this binder). The next Tuesday, the bill will move into Old Business where it will be discussed and voted on. After both legislative bodies discuss the bill and the enactment ratio is reached, the funds will be allocated to the organization. Please see the policy of the Student Organization Finance Office (in the back of this binder) for information on reimbursements and purchases.</p>
                          <p style="font-style:italic; font-weight:bold;">Be sure to begin working on bills for events and activities at least four (4) weeks before the event!
                          </p>
                          <h2>Step by Step Process Checklist:</h2>
                          <ul style="padding-left:40px;">
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

              <div id="middle_full">
                  <div id="page_title">Add User</div>
                  <form method="post" id="AddUserForm" onsubmit="return submitForm()" accept-charset="utf-8">
                      <div className="inputs">
                          <label for="firstname">First Name</label><input type="text" id="firstname" name="firstname" maxlength="60"  required="required" />
                      </div>
                      <div className="inputs">
                          <label for="lastname">Last Name</label><input type="text" id="lastname" name="lastname" maxlength="60"  required="required" />
                      </div>
                      <div className="inputs">
                          <label for="gtusername">GT Username</label>
                          <input type="text" id="gtusername" name="gtusername" maxlength="60" required="required" />
                      </div>
                      <div className="inputs">
                          <label for="email">Email</label>
                          <input type="text" id="email" name="email" maxlength="60" required="required" />
                      </div>
                      <div className="inputs">
                          <label for="major">Major</label>
                          <select id="major" name="major">
                              <option value="Algorithms">Algorithms, Combinatorics, and Optimization</option>
                              <option value="Analytics">Analytics</option>
                              <option value="Applied Languages and Intercultural Studies">Applied Languages and Intercultural Studies</option>
                              <option value="Applied Physics">Applied Physics</option>
                              <option value="Applied Physiology">Applied Physiology</option>
                              <option value="Applied Systems Engineering">Applied Systems Engineering</option>
                              <option value="Bioengineering">Bioengineering</option>
                              <option value="Bioinformatics">Bioinformatics</option>
                              <option value="Biomedical Innovation and Development">Biomedical Innovation and Development</option>
                              <option value="Building Construction">Building Construction</option>
                              <option value="Building Construction and Facility Managment">Building Construction and Facility Managment</option>
                              <option value="Business Administration">Business Administration</option>
                              <option value="Business Administration - Global Business">Business Administration - Global Business</option>
                              <option value="Business Administration - Management of Technology">Business Administration - Management of Technology</option>
                              <option value="Chemical and Biomolecular Engineering">Chemical and Biomolecular Engineering</option>
                              <option value="Chemical Engineering">Chemical Engineering</option>
                              <option value="City and Regional Planning">City and Regional Planning</option>
                              <option value="City and Regional Planning & Architecture">City and Regional Planning & Architecture</option>
                              <option value="City and Regional Planning & Civil Engineering">City and Regional Planning & Civil Engineering</option>
                              <option value="City and Regional Planning & Public Policy">City and Regional Planning & Public Policy</option>
                              <option value="City and Regional Planning & Law">City and Regional Planning & Law</option>
                              <option value="Civil Engineering">Civil Engineering</option>
                              <option value="Computational Media">Computational Media</option>
                              <option value="Computational Science and Engineering">Computational Science and Engineering</option>
                              <option value="Computer Engineering">Computer Engineering</option>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Cybersecurity">Cybersecurity</option>
                              <option value="Digital Media">Digital Media</option>
                              <option value="Economics and International Affairs">Economics and International Affairs</option>
                              <option value="Electrical Engineering">Electrical Engineering</option>
                              <option value="Electrical and Computer Engineering">Electrical and Computer Engineering</option>
                              <option value="Engineering Science and Mechanics">Engineering Science and Mechanics</option>
                              <option value="Environmental Engineering">Environmental Engineering</option>
                              <option value="Geographic Information Science and Technology">Geographic Information Science and Technology</option>
                              <option value="Global Economics and Modern Languages">Global Economics and Modern Languages</option>
                              <option value="Health Systems">Health Systems</option>
                              <option value="History, Technology, and Society">History, Technology, and Society</option>
                              <option value="History and Sociology of Technology and Science">History and Sociology of Technology and Science</option>
                              <option value="Human-Computer Interaction">Human-Computer Interaction</option>
                              <option value="Human-Centered Computing">Human-Centered Computing</option>
                              <option value="Industrial Engineering">Industrial Engineering</option>
                              <option value="International Affairs and Modern Language">International Affairs and Modern Language</option>
                              <option value="International Affairs, Science, and Technology">International Affairs, Science, and Technology</option>
                              <option value="International Logistics">International Logistics</option>
                              <option value="Literature, Media, and Communication">Literature, Media, and Communication</option>
                              <option value="Machine Learning">Machine Learning</option>
                              <option value="Management">Management</option>
                              <option value="Mechanical Engineering">Mechanical Engineering</option>
                              <option value="Medical Physics">Medical Physics</option>
                              <option value="Manufacturing Leadership">Manufacturing Leadership</option>
                              <option value="Nuclear Engineering">Nuclear Engineering</option>
                              <option value="Neuroscience">Neuroscience</option>
                              <option value="Ocean Science and Engineering">Ocean Science and Engineering</option>
                              <option value="Operations Research">Operations Research</option>
                              <option value="Occupational Safety and Health">Occupational Safety and Health</option>
                              <option value="Public Policy Joint Degree with Georgia State University">Public Policy Joint Degree with Georgia State University</option>
                              <option value="Quantitative Biosciences">Quantitative Biosciences</option>
                              <option value="Quantitative and Computational Finance">Quantitative and Computational Finance</option>
                              <option value="Real Estate Development">Real Estate Development</option>
                              <option value="Statistics">Statistics</option>
                              <option value="Supply Chain Engineering">Supply Chain Engineering</option>
                              <option value="Sustainable Electrical Energy">Sustainable Electrical Energy</option>
                              <option value="Urban Design">Urban Design</option>
                          </select>
                      </div>
                      <div className="inputs">
                          <label for="year">Year</label>
                          <select id="year" name="year">
                              <option value="Freshman">Freshman</option>
                              <option value="Sophomore">Sophomore</option>
                              <option value="Junior">Junior</option>
                              <option value="Senior">Senior</option>
                          </select>
                      </div>
                      <div className="submit">
                          <input type="submit" value="Add New User" />
                      </div>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default UsersAdd;
