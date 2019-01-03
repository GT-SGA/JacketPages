import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/users/actions';

class UsersAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      gtusername: '',
      email: '',
    };

    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    const {
      firstName,
      lastName,
      gtusername,
      email,
    } = this.state;

    this.props.addUser({
      firstName,
      lastName,
      gtusername,
      email,
    });
  }

  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div id="middle_full">
            <div id="page_title">Add User</div>
            <div className="form">
              <div className="inputs">
                <div className="label">First Name</div>
                <input type="text" id="firstname" name="firstname" maxLength="60" required="required" />
              </div>
              <div className="inputs">
                <div className="label">Last Name</div>
                <input type="text" id="lastname" name="lastname" maxLength="60" required="required" />
              </div>
              <div className="inputs">
                <div className="lable">GT Username</div>
                <input type="text" id="gtusername" name="gtusername" maxLength="60" required="required" />
              </div>
              <div className="inputs">
                <div className="label">Email</div>
                <input type="text" id="email" name="email" maxLength="60" required="required" />
              </div>
              <div className="submit">
                <button type="submit">Add New User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UsersAdd.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addUser: info => dispatch(actions.addUser(info)),
});

export default connect(null, mapDispatchToProps)(UsersAdd);
