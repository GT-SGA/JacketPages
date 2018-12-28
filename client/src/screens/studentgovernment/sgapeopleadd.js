import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DepartmentSelect from '../../common/departmentselect';

class SGAPeopleAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      house: '',
      department: '',
    };

    this.addMember = this.addMember.bind(this);
  }

  onChangeDepartment(department) {
    this.setState({ department });
  }

  addMember() {
    const {
      firstName,
      lastName,
      house,
      department,
    } = this.state;

    this.props.addSGAMember({
      firstName,
      lastName,
      house,
      department,
    });
  }

  render() {
    return (
      <div id="middle_full">
        <div id="page_title">Add SGA Member</div>
        <div className="form" id="AddSGAMemberForm">
          <div className-inputs>Fill in the corresponding information</div>
          <div className="inputs">
            <div className="label">First Name</div>
            <input
              type="text"
              name="firstName"
              maxLength="60"
              required="required"
              onChange={e => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div className="inputs">
            <div className="label">Last Name</div>
            <input
              type="text"
              name="lastname"
              maxLength="60"
              required="required"
              onChange={e => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className="inputs">
            <div className="label">House</div>
            <select
              id="SgaPersonHouse"
              name="house"
              onChange={e => this.setState({ house: e.target.value })}
            >
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
          <div className="inputs">
            <div className="label">Department</div>
            <DepartmentSelect onChange={e => this.onChangeDepartment(e)} />
          </div>
          <div className="submit">
            <button type="submit" onClick={this.addMember}>Add New Member</button>
          </div>
        </div>
      </div>
    );
  }
}

SGAPeopleAdd.propTypes = {
  addSGAMember: PropTypes.func.isRequired,
};

export default SGAPeopleAdd;
