import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import actions from '../../redux/organizations/actions';
import billsActions from '../../redux/bills/actions';

import Alphabet from '../../common/alphabet';
import OrgTable from './components/orgTable';

class JPOrganizations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      alphabetValue: '',
    };

    this.filterOrganizations = this.filterOrganizations.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onChangeSelect(value) {
    this.setState({ alphabetValue: value });
  }

  filterOrganizations() {
    const { searchValue, alphabetValue } = this.state;
    return this.props.organizations.filter(org => (
      (org.name.toLowerCase().includes(searchValue.toLowerCase())
      || org.website.toLowerCase().includes(searchValue.toLowerCase()))
      && (org.name.toLowerCase().startsWith(alphabetValue.toLowerCase()))
    ));
  }

  render() {
    return (
      <div>
        <div className="links left-nav" id="sidebar">
          <ul>
            <li><Link to="/addOrganization">Add Organization</Link></li>
          </ul>
        </div>
        <div id="middle">
          <div id="page_title">Organizations</div>
          <div id="alphabet">
            <div id="leftHalf">
              <div className="form">
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_method" value="POST" />
                </div>
                <div className="input text">
                  <label htmlFor="search" style={{ display: 'inline' }}>Search</label>
                  <input
                    id="search"
                    style={{ display: 'inline' }}
                    type="text"
                    onChange={e => this.setState({ searchValue: e.target.value })}
                  />
                </div>
              </div>
              <div id="div_choices" className="autocomplete" />
            </div>
            <div id="rightHalf">
              <Alphabet onChangeSelect={a => this.onChangeSelect(a)} />
            </div>
          </div>
          <div id="forupdate">
            <OrgTable organizations={this.filterOrganizations()} bills={this.props.bills} />
          </div>
        </div>
      </div>
    );
  }
}

JPOrganizations.propTypes = {
  organizations: PropTypes.arrayOf(PropTypes.shape).isRequired,
  bills: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = state => ({
  organizations: state.organizations.organizations,
  bills: state.bills.bills,
});

const mapDispatchToProps = dispatch => ({
  fetchOrganizations: dispatch(actions.fetchOrganizations()),
  fetchBills: dispatch(billsActions.fetchBills()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JPOrganizations);
