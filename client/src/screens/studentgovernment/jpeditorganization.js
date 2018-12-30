import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/organizations/actions';

class JPEditOrganization extends Component {
  constructor(props) {
    super(props);

    const { organization } = props.location.state;

    this.state = {
      name: organization.name,
      status: organization.status,
      tier: organization.tier,
      website: organization.website,
    };

    this.onSubmitChanges = this.onSubmitChanges.bind(this);
  }

  onSubmitChanges() {
    const {
      name,
      status,
      tier,
      website,
    } = this.state;
    const { organization } = this.props.location.state;

    this.props.editOrganization(organization.id, {
      name,
      status,
      tier,
      website,
    });
  }

  render() {
    return (
      <div id="middle_full">
        <div id="page_title">Edit Organization</div>
        <div className="form">
          <div className="input text">
            <label htmlFor="name">Name</label>
            <input
              maxLength="200"
              type="text"
              value={this.state.name}
              id="name"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="input select">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={this.state.status}
              onChange={e => this.setState({ status: e.target.value })}
            >
              <option value="Active">Active/Good Standing</option>
              <option value="Inactive">Inactive</option>
              <option value="Under Review">Under Review</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="input select">
            <label htmlFor="tier">Tier</label>
            <select
              id="tier"
              onChange={e => this.setState({ tier: e.target.value })}
              value={this.state.tier}
            >
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
            </select>
          </div>
          <div className="input text">
            <label htmlFor="website">Orgsync Website (e.g. https://orgsync.com/130898/chapter)</label>
            <input
              maxLength="100"
              type="text"
              value={this.state.website}
              id="website"
              onChange={e => this.setState({ website: e.target.value })}
            />
          </div>
          <div className="submit">
            <button type="submit" onClick={this.onSubmitChanges}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

JPEditOrganization.propTypes = {
  location: PropTypes.shape.isRequired,
  editOrganization: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  editOrganization: info => dispatch(actions.editOrganization(info)),
});

export default connect(null, mapDispatchToProps)(JPEditOrganization);
