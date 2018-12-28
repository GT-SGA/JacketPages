import React, { Component } from 'react';

import DepartmentSelect from '../../common/departmentselect';

import UserTable from './components/usertable';
import Alphabet from '../../common/alphabet';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      department: '',
      users: '',
    };

    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
  }

  onChangeSelect(department) {
    this.setState({ department });
  }

  render() {
    return (
      <div id="content">
          <div className="clearfix">
            <div className="links left-nav" id="sidebar">
              <ul>
                <li><a href="/addSGAMember">Add SGA Member</a></li>
                <li><a href="/addUser">Add Users</a></li>
              </ul>
            </div>
            <div id="middle">
              <div id="page_title">Users</div>

              <div id="alphabet">
                <div id="leftHalf">
                  <form action="/sga_people" id="SgaPersonIndexForm" method="post" accept-charset="utf-8">
                    <div style={{ display: "none" }}><input type="hidden" name="_method" value="POST" /></div>
                    <div className="input text"><label for="search" style={{display: "inline"}}>Search</label><input name="data[SgaPerson][keyword]" id="search" width="80%" type="text" /></div>
                  </form>
                </div>
                <div id="rightHalf">
                    <Alphabet onChangeSelect={a => this.onChangeAlphabet(a)}/>
                </div>
              </div>

                  <div id="accordion" className="ui-accordion ui-widget ui-helper-reset" role="tablist">
                      <a href="#" className="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-accordion-icons" role="tab" id="ui-accordion-accordion-header-0" aria-controls="ui-accordion-accordion-panel-0" aria-selected="false" aria-expanded="false" tabindex="0"><span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>Filters</a>
                      <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="ui-accordion-accordion-panel-0" aria-labelledby="ui-accordion-accordion-header-0" role="tabpanel" aria-hidden="true" style={{display: "none"}}>
                        <div style={{float: "left", width: "45%" }}>
                          <ul>
                            <div className="input select">
                              <label for="SgaPersonHouse">House</label>
                                <select name="data[SgaPerson][house]" id="SgaPersonHouse">
                                  <option value="all" selected="selected">All</option>
                                  <option value="undergraduate">Undergraduate</option>
                                  <option value="graduate">Graduate</option>
                                </select>
                            </div>
                          </ul>
                        </div>
                        <div style={{float: "right", width: "45%" }}>
                          <div className="input select">
                          <label for="SgaPersonStatus">Status</label>
                            <select name="data[SgaPerson][status]" id="SgaPersonStatus">
                              <option value="all" selected="selected">All</option>
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          </div>
                          <br />
                            <div className="submit" style={{display:"inline-block"}}><input type="submit" value="Submit" /></div>
                            <div className="submit" style={{display:"inline-block"}}><input name="submit" type="submit" value="Clear" /></div>
                        </div>
                          <div style={{clear:"both"}}></div>
                      </div>
                  </div>

                <div id="forupdate">
                  <UserTable users={this.props.users.users} />
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Users;

