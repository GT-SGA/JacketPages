import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/organizations/actions';

class JPAddOrganization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tier: '',
      website: '',
    };

    this.addOrganization = this.addOrganization.bind(this);
  }

  addOrganization() {
    const {
      name,
      tier,
      website,
    } = this.state;

    this.props.addOrganization({
      name,
      tier,
      website,
    });
  }

  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div className="links left-nav" id="sidebar">
            <ul>
              <li><a href="/addOrganization">Add Organization</a></li>
            </ul>
          </div>
          <div id="middle">
            <div id="page_title">Add Organization</div>
            <div className="form">
              <div className="input text required">
                <div className="label">Name</div>
                <input
                  maxLength="60"
                  type="text"
                  id="OrganizationName"
                  required="required"
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="input text required">
                <div className="label">Tier</div>
                <select
                  maxLength="60"
                  type="text"
                  id="OrganizationTier"
                  required="required"
                  onChange={e => this.setState({ tier: e.target.value })}
                >
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3" selected="selected">III</option>
                </select>
              </div>
              <div className="input text">
                <div className="label">Orgsync Website (e.g. https://orgsync.com/130898/chapter)</div>
                <input
                  maxLength="100"
                  type="text"
                  id="OrganizationWebsite"
                  onChange={e => this.setState({ website: e.target.value })}
                />
              </div>
              <div className="submit">
                <button type="submit" className="submitButton" onClick={this.addOrganization} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JPAddOrganization.propTypes = {
  addOrganization: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addOrganization: info => dispatch(actions.addOrganization(info)),
});

export default connect(null, mapDispatchToProps)(JPAddOrganization);
