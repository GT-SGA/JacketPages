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
      bills: this.props.bills.bills,
    };
    // this.filterBills = this.filterBills.bind(this);
  }

  getDerivedStateFromProps(nextProps) {
    this.setState({ bills: nextProps.bills.bills });
  }

  /* TODO: search bills in frontend */
  keywordSearch() {
  //   updatebilldata(`http://localhost:8081/bills_keyword?keyword=${document.getElementById('search').value}`);
  //   return false;
  };

  /* TODO: filter bills in frontend */
  statusSearch() {
  //   let billCat = document.getElementById('BillCategory').value;
  //   if (billCat === "All") {
  //     updatebilldata(`http://localhost:8081/bills_filtered?from=${document.getElementById('BillFrom').value}&to=${document.getElementById('BillTo').value}`);
  //     return false;
  //   } else {
  //     updatebilldata(`http://localhost:8081/bills_filteredwithcategory?from=${document.getElementById('BillFrom').value}&to=${document.getElementById('BillTo').value}&category=${billCat}`);
  //     return false;
  //   }
  };

  /* TODO: search date in frontend */
  dateSearch() {
  //   updatebilldata(`http://localhost:8081/bills_filtereddate?from=${document.getElementById('BillFromDate').value}&to=${document.getElementById('BillToDate').value}`);
  //   return false;
  };

  render() {
    return (
      <div>
        <div className="links left-nav" id="sidebar">
          <ul>
            <li><a href="http://jacketpages.gatech.edu/bills/add">Create New Bill</a></li>
          </ul>
        </div>
        <div id="middle">
          <div id="page_title">All Bills</div>
          <div id="alphabet">
            <div id="leftHalf">
              {/* TODO: Replace this with a JS function */}
              <form id="BillMyBillsForm" action="/bills" method="post" onSubmit="return keywordSearch()" acceptCharset="utf-8">
                <div className="input text">
                  <label for="search" style={{display: 'inline'}}>Search</label>
                  <input name="data_Bill_keyword" id="search" width="80%" type="text" />
                </div>
              </form>
            </div>
            <div id="rightHalf">
              <Alphabet />
            </div>
          </div>
          <div id="accordion" className="ui-accordion ui-widget ui-helper-reset" role="tablist">
            <a href="#" className="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-accordion-icons" role="tab" id="ui-accordion-accordion-header-0" aria-controls="ui-accordion-accordion-panel-0" aria-selected="false" aria-expanded="false" tabIndex="0">
              <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e" />
              Filters
            </a>
            <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style={{ display: 'none' }} id="ui-accordion-accordion-panel-0" aria-labelledby="ui-accordion-accordion-header-0" role="tabpanel" aria-hidden="true">
              <div style={{ float: 'left', width: '45%' }}>
                <ul>
                  <div className="input select">
                    <label for="BillFrom">From Status</label>
                    <select name="data_Bill_from" id="BillFrom">
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
                    <label for="BillTo">To Status</label>
                    <select name="data_Bill_to" id="BillTo">
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
                    <label for="BillCategory">Category</label>
                    <select name="data_Bill_category" id="BillCategory">
                      <option value="All" selected="selected">All</option>
                      <option value="Joint">Joint</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                  <br />
                  <div className="submit" style={{ display: 'inline-block' }}>
                    <input value="Submit" type="submit" onClick="return statusSearch()" />
                  </div>
                  <div className="submit" style={{ display: 'inline-block' }}>
                    <input name="submit" value="Clear" type="submit" />
                  </div>
                  <div style={{ float: 'left' }}>
                    <label for="BillFromDate">From</label>
                    <input type="date" id="BillFromDate" />
                    <label for="BillToDate">To</label>
                    <input type="date" id="BillToDate" />
                    <input type="submit" value="Search By Date" onClick="return dateSearch()" />
                  </div>
                </div>
              <br />
            </div>
          </div>
          {/* TODO: change this to use state so that filtering in the frontend can be done */}
          <BillsTable
            bills={this.props.bills.bills}
          />
          <script>
            {/* $(function() {
              $("#accordion").accordion({
                collapsible : true,
                heightStyle: "content",
                active : false		});
            }); */}
          </script>
          <div className="paging">
            <span className="disabled">&lt;&lt; previous</span>    |
            |
            <span className="disabled">next &gt;&gt;</span>
            <br />
            <br />
            Page
            <span id="currpg" />
            of
            <span id="totalpgno" />
            , showing
            <span id="numrec" />
            records out of
            <span id="numrectotal" />
            total, starting on record 0, ending on 0
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
  bills: state.bills,
});

const mapDispatchToProps = dispatch => ({
  fetchBills: dispatch(actions.fetchBills()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JPBills);
