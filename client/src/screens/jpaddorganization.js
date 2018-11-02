import React, { Component } from 'react';

class JPAddOrganization extends Component {
  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div className="links left-nav" id="sidebar">
            <ul>
              <li><a href="http://jacketpages.gatech.edu/bills/add">Add Organization</a></li>
            </ul>
          </div>

          <div id="middle">
            <div id="page_title">Add Organization</div>

            <form action="/organizations/add" onsubmit="return validateForm()" id="OrganizationAddForm" method="post" accept-charset="utf-8">

              <div className="input text required"><label for="OrganizationName">Name</label><input name="data[Organization][name]" maxlength="60" type="text" id="OrganizationName" required="required" /></div>

              <div className="input text required"><label for="OrganizationTier">Tier</label><select name="data[Organization][tier]" maxlength="60" type="text" id="OrganizationTier" required="required">
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3" selected="selected">III</option>
                </select>
              </div>

              <div className="input text"><label for="OrganizationWebsite">Orgsync Website (e.g. https://orgsync.com/130898/chapter)</label><input name="data[Organization][website]" maxlength="100" type="text" id="OrganizationWebsite" /></div>

              <div className="submit"><input type="submit" value="Create" /></div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default JPAddOrganization;
