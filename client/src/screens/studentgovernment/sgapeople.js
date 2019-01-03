import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/studentgovernment/actions';
import userActions from '../../redux/users/actions';

import PeopleTable from './components/peopletable';
import Alphabet from '../../common/alphabet';
import DepartmentSelect from '../../common/departmentselect';

class SGAPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      alphabetValue: '',
      houseValue: '',
      departmentValue: '',
      statusValue: '',
      hideFilters: true,
    };

    this.onChangeAlphabet = this.onChangeAlphabet.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  onChangeAlphabet(value) {
    this.setState({ alphabetValue: value });
  }

  onChangeDepartment(value) {
    this.setState({ departmentValue: value });
  }

  toggleFilters() {
    if (this.state.hideFilters) {
      this.setState({ hideFilters: false });
    } else {
      this.setState({ hideFilters: true });
    }
  }

  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div className="links left-nav" id="sidebar">
            <ul>
              <li><a href="./sgapeoplesearch.html">Add SGA Member</a></li>
            </ul>
          </div>
          <div id="middle">
            <div id="page_title">SGA Records</div>
            <div id="alphabet">
              <div id="leftHalf">
                <div className="form">
                  <div className="input text">
                    <label htmlFor="search" style={{ display: 'inline' }}>Search</label>
                    <input
                      id="search"
                      width="80%"
                      type="text"
                      onChange={e => this.setState({ searchValue: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div id="rightHalf">
                <Alphabet onChangeSelect={a => this.onChangeAlphabet(a)} />
              </div>
            </div>
            <div id="accordion" className="ui-accordion ui-widget ui-helper-reset" role="tablist">
              <button
                type="button"
                className="ui-accordion-header"
                onClick={this.toggleFilters}
              >
                Filters
              </button>
              <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="ui-accordion-accordion-panel-0" style={this.state.hideFilters ? { display: 'none' } : { maxHeight: 'wrap-content' }}>
                <div style={{ float: 'left', width: '45%' }}>
                  <ul>
                    <div className="input select">
                      <label htmlFor="SgaPersonHouse">House</label>
                      <select
                        id="SgaPersonHouse"
                        onChange={e => this.setState({ houseValue: e.target.value })}
                      >
                        <option value="" selected="selected">All</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                      </select>
                    </div>
                    <div className="input select">
                      <label htmlFor="SgaPersonDepartment">Department</label>
                      <DepartmentSelect onChange={e => this.onChangeDepartment(e.target.value)} />
                    </div>
                  </ul>
                </div>
                <div style={{ float: 'right', width: '45%' }}>
                  <div className="input select">
                    <label htmlFor="SgaPersonStatus">Status</label>
                    <select
                      id="SgaPersonStatus"
                      onChange={e => this.setState({ statusValue: e.target.value })}
                    >
                      <option value="" selected="selected">All</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <br />
                  <div className="submit" style={{ display: 'inline-block' }}>
                    <button
                      type="submit"
                      onClick={() => {
                        this.setState({
                          houseValue: '',
                          departmentValue: '',
                          statusValue: '',
                        });
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <div style={{ clear: 'both' }} />
              </div>
            </div>
            <div id="forupdate">
              <PeopleTable
                searchValue={this.state.searchValue}
                alphabetValue={this.state.alphabetValue}
                houseValue={this.state.houseValue}
                departmentValue={this.state.departmentValue}
                statusValue={this.state.statusValue}
                people={this.props.sgaPeople}
                users={this.props.users}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SGAPeople.propTypes = {
  sgaPeople: PropTypes.arrayOf(PropTypes.shape).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapStateToProps = state => ({
  sgaPeople: state.studentgovernment.sga_people,
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  fetchSGAPeople: dispatch(actions.fetchSGAPeople()),
  fetchUsers: dispatch(userActions.fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SGAPeople);
