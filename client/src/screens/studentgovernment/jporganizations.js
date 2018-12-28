import React, { Component } from 'react';

import Alphabet from '../../common/alphabet';

class JPOrganizations extends Component {
  render() {
    return (
      <div>
        <div className="links left-nav" id="sidebar">
          <ul>
            <li><a href="jpaddorganization.html">Add Organization</a></li>
          </ul>
        </div>
        <div id="middle">
          <div id="page_title">Organizations</div>   
          <div id="alphabet">
            <div id="leftHalf">
              <form action="/organizations" id="OrganizationIndexForm" method="post" accept-charset="utf-8">
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_method" value="POST" />
                </div>
                <div className="input text">
                  <label for="search" style={{ display: 'inline' }}>Search</label>
                  <input
                    name="data[Organization][keyword]"
                    id="search"
                    style={{ display: 'inline' }}
                    type="text"
                  />
                </div>
              </form>
              <div id="div_choices" className="autocomplete" />
            </div>
            <div id="rightHalf">
              <Alphabet onChangeSelect={a => this.onChangeSelect(a)} />
            </div>
          </div>
          <div id="forupdate">
            <table className="listing" id="organizationtable">
              <tr className="links">
                <th>
                  <a href="/organizations/index/sort:NAME/direction:asc" id="link-1097749812">Name</a>
                </th>
                <th>Link</th>
                <th />
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default JPOrganizations;
