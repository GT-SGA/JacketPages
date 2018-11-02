import React, { Component } from 'react';

class UsersEdit extends Component {
  render() {
    return (
      <div id="content">
          <div className="clearfix">
              <div id="middle_full">
                  <div id="page_title">Edit User</div>
                  <form method="post" id="EditUserForm" onsubmit = "return editUserForm()" accept-charset="utf-8">
                      <div className="inputs">
                          <label for="firstname">First Name</label><input type="text" id="firstname" name="firstname" maxlength="60"  required="required" />
                      </div>
                      <div className="inputs">
                          <label for="lastname">Last Name</label><input type="text" id="lastname" name="lastname" maxlength="60"  required="required" />
                      </div>

                      <div className="inputs">
                          <label for="level">Level</label>
                          <select id="level" name="level">
                              <option value="admin">Administrator</option>
                              <option value="sofo">Leadership and Civic Engagement</option>
                              <option value="sga_exec">SGA Executive</option>
                              <option value="sga_user">Sga User</option>
                              <option value="gt_member">General GT User</option>
                          </select>
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
                          <input type="submit" value="Submit Changes" />
                      </div>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default UsersEdit;
