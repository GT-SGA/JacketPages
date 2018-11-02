import React, { Component } from 'react';

class UsersView extends Component {
  render() {
    return (
      <div id="content">
          <div className="clearfix">
              <div className="links left-nav" id="sidebar">
                  <ul>
                      <li><a href="" id="edituserside">Edit User</a></li>
                      <li><a href="" id="deleteuserside" onclick="return deleteUser()">Delete User</a></li>
                  </ul>
              </div>
              <div id="middle">
                  <div id="page_title"></div>

                  <table className="listing" id="halftable">
                  </table>
                  <script>
                      $(function() {
                          $("#accordion").accordion({
                              collapsible: true,
                              heightStyle: "content",
                              active: false
                          });
                      });
                  </script>
              </div>
          </div>
      </div>
    );
  }
}

export default UsersView;
