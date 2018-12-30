import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/bills/actions';

import Alphabet from '../../common/alphabet';
import BillsTable from './components/billstable';

class JPBills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      alphabetValue: '',
      fromStatus: 1,
      toStatus: 1,
      category: 'All',
      showFilters: false,
    };
    this.filterBills = this.filterBills.bind(this);
    this.toggleShowFilters = this.toggleShowFilters.bind(this);
    this.onChangeAlphabet = this.onChangeAlphabet.bind(this);
  }

  onChangeAlphabet(value) {
    this.setState({ alphabetValue: value });
  }

  toggleShowFilters() {
    if (this.state.showFilters) {
      this.setState({ showFilters: false });
    } else {
      this.setState({ showFilters: true });
    }
  }

  filterBills() {
    const { bills } = this.props;

    return Object.values(bills).filter((bill) => {
      const title = bill.title.toLowerCase();
      const search = this.state.search.toLowerCase();

      return title.includes(search) && title.startsWith(this.state.alphabetValue.toLowerCase());
    });
  }

  render() {
    return (
      <div>
        <div className="links left-nav" id="sidebar">
          <ul>
            <li><a href="/create_bill">Create New Bill</a></li>
          </ul>
        </div>
        <div id="middle">
          <div id="page_title">All Bills</div>
          <div id="alphabet">
            <div id="leftHalf">
              <div className="form">
                <div className="input text">
                  <label htmlFor="search" style={{ display: 'inline' }}>Search</label>
                  <input
                    id="search"
                    width="80%"
                    type="text"
                    onChange={e => this.setState({ search: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div id="rightHalf">
              <Alphabet onChangeSelect={this.onChangeAlphabet} />
            </div>
          </div>
          <div
            id="accordion"
            className="ui-accordion ui-widget ui-helper-reset"
            role="tablist"
          >
            <button type="button" onClick={this.toggleShowFilters}>
              <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
              Filters
            </button>
            <div
              className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
              style={this.state.showFilters ? { maxHeight: 'wrap-content' } : { display: 'none' }}
              id="ui-accordion-accordion-panel-0"
            >
              <div style={{ float: 'left', width: '45%' }}>
                <ul>
                  <div className="input select">
                    <label htmlFor="BillFrom">From Status</label>
                    <select
                      id="BillFrom"
                      onChange={e => this.setState({ fromStatus: e.target.value })}
                      value={this.state.fromStatus}
                    >
                      <option value="1" selected="selected">Created</option>
                      <option value="2">Awaiting Author</option>
                      <option value="3">Authored</option>
                      <option value="4">Agenda</option>
                      <option value="5">Conference</option>
                      <option value="6">Passed</option>
                      <option value="7">Failed</option>
                      <option value="8">Tabled</option>
                    </select>
                  </div>
                  <div className="input select">
                    <label htmlFor="BillTo">To Status</label>
                    <select
                      id="BillTo"
                      onChange={e => this.setState({ toStatus: e.target.value })}
                      value={this.state.toStatus}
                    >
                      <option value="1">Created</option>
                      <option value="2">Awaiting Author</option>
                      <option value="3">Authored</option>
                      <option value="4">Agenda</option>
                      <option value="5">Conference</option>
                      <option value="6">Passed</option>
                      <option value="7" selected="selected">Failed</option>
                      <option value="8">Tabled</option>
                    </select>
                  </div>
                </ul>
              </div>
              <div style={{ float: 'right', width: '45%' }}>
                <div className="input select required">
                  <label htmlFor="BillCategory">Category</label>
                  <select
                    id="BillCategory"
                    onChange={e => this.setState({ category: e.target.value })}
                    value={this.state.category}
                  >
                    <option value="All" selected="selected">All</option>
                    <option value="Joint">Joint</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
                <br />
                <div className="submit" style={{ display: 'inline-block' }}>
                  <button type="submit" onClick="return statusSearch()">Submit</button>
                </div>
                <div className="submit" style={{ display: 'inline-block' }}>
                  <input name="submit" value="Clear" type="submit" />
                </div>
                <div style={{ float: 'left' }}>
                  <label htmlFor="BillFromDate">From</label>
                  <input type="date" id="BillFromDate" />
                  <label htmlFor="BillToDate">To</label>
                  <input type="date" id="BillToDate" />
                  <input type="submit" value="Search By Date" onClick="return dateSearch()" />
                </div>
              </div>
              <br />
            </div>
          </div>
          <div id="forupdate">
            <BillsTable
              bills={this.filterBills()}
            />
          </div>
        </div>
      </div>
    );
  }
}

/* TODO: Change this to the correct prop type for an array */
JPBills.propTypes = {
  bills: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  bills: state.bills.bills,
});

const mapDispatchToProps = dispatch => ({
  fetchBills: dispatch(actions.fetchBills()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JPBills);
