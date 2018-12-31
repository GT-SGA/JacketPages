import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/bills/actions';
import orgActions from '../../redux/organizations/actions';
import sgActions from '../../redux/studentgovernment/actions';

import OrganizationsSelect from '../../common/organizationsSelect';
import RepSelect from '../../common/repSelect';

class JPCreateBill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      fundraising: '',
      type: 'Finance Request',
      category: 'Joint',
      organization: '',
      dues: '',
      ugMembers: '',
      gradMembers: '',
      lineItems: [{
        number: 1,
        name: '',
        cost: 0,
        quantity: '',
        totalCost: 0,
        requested: 0,
        account: 'Prior Year',
      }],
      undrAuth: '',
      gradAuth: '',
    };

    this.filterReps = this.filterReps.bind(this);
    this.onChangeLineItem = this.onChangeLineItem.bind(this);
    this.submitBill = this.submitBill.bind(this);
  }

  onChangeLineItem(item, field, value) {
    const { lineItems } = this.state;
    lineItems[item.number - 1][field] = value;
    if (field === 'cost' || field === 'quantity') {
      lineItems[item.number - 1].totalCost = lineItems[item.number - 1].cost
        * lineItems[item.number - 1].quantity;
      lineItems[item.number - 1].requested = lineItems[item.number - 1].totalCost;
    }
    this.setState({ lineItems });
  }

  filterReps(house) {
    return Object.values(this.props.sgaPeople).filter((p) => {
      if (house === 'Undergraduate') {
        return p.house === house && p.department.includes('Representative');
      }
      return p.house === house && !p.department.includes('President');
    });
  }

  submitBill() {
    const {
      title,
      description,
      category,
      fundraising,
      type,
      dues,
      organization,
      ugMembers,
      gradMembers,
      lineItems,
      undrAuth,
      gradAuth,
    } = this.state;

    this.props.createBill({
      undr_auth_id: undrAuth,
      grad_auth_id: gradAuth,
    }, {
      title,
      description,
      fundraising,
      type,
      category,
      org_id: organization,
      dues,
      ugMembers,
      gMembers: gradMembers,
      line_items: lineItems,
    });
  }

  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div id="middle_full">
            <div id="page_title">Create New Bill</div>
            <div className="form">
              {/* <div style="display:none;"><input name="_method" value="POST" type="hidden" />
            </div> */}
              <div className="input text required">
                <label htmlFor="BillTitle">Title</label>
                <input
                  maxLength="60"
                  id="title"
                  required="required"
                  type="text"
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="input textarea required">
                <label htmlFor="description">Description</label>
                <textarea
                  cols="30"
                  rows="6"
                  id="description"
                  required="required"
                  onChange={e => this.setState({ description: e.target.value })}
                />
              </div>
              <div className="input textarea">
                <label htmlFor="fundraising">
                  Fundraising - Please describe related fundraising efforts
                </label>
                <textarea
                  cols="30"
                  rows="6"
                  id="fundraising"
                  onChange={e => this.setState({ fundraising: e.target.value })}
                />
              </div>
              <div className="input select required">
                <label htmlFor="BillType">Type</label>
                <select
                  id="type"
                  onChange={e => this.setState({ type: e.target.value })}
                  value={this.state.type}
                >
                  {/* hide line items for resolution */}
                  <option value="Finance Request">Finance Request</option>
                  <option value="Resolution">Resolution</option>
                </select>
              </div>
              <div className="input select required">
                <label htmlFor="categoryChoice">Category</label>
                <select
                  id="category"
                  onChange={e => this.setState({ category: e.target.value })}
                  value={this.state.category}
                >
                  {/* hide authors for grad or undergrad */}
                  <option value="Joint">Joint</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Undergraduate">Undergraduate</option>
                </select>
              </div>
              <div className="input select required">
                <label htmlFor="organization">Organization</label>
                <OrganizationsSelect
                  organizations={this.props.organizations}
                  onChange={e => this.setState({ organization: e })}
                />
              </div>
              <div className="input text required">
                <label htmlFor="BillDues">Dues - Please include how often dues are paid (per semester, per year, etc.)</label>
                <input
                  maxLength="50"
                  id="dues"
                  required="required"
                  type="text"
                  onChange={e => this.setState({ dues: e.target.value })}
                />
              </div>
              <div className="input text required">
                <label htmlFor="BillUgMembers">Number of Undergraduate Members</label>
                <input
                  maxLength="50"
                  id="BillUgMembers"
                  required="required"
                  type="text"
                  onChange={e => this.setState({ ugMembers: e.target.value })}
                />
              </div>
              <div className="input text required">
                <label htmlFor="BillGMembers">Number of Graduate Members</label>
                <input
                  maxLength="50"
                  id="BillGMembers"
                  required="required"
                  type="text"
                  onChange={e => this.setState({ gradMembers: e.target.value })}
                />
              </div>
              <div
                className="input underAuthor_id required"
                style={this.state.category === 'Joint' || this.state.category === 'Undergraduate' ? { maxHeight: 'wrap-content' } : { display: 'none' }}
              >
                <label htmlFor="AuthorsUndrAuthId">Undergraduate Author</label>
                <RepSelect
                  reps={this.filterReps('Undergraduate')}
                  onChange={e => this.setState({ undrAuth: e })}
                />
              </div>
              <div
                className="input gradAuthor_id required"
                style={this.state.category === 'Joint' || this.state.category === 'Graduate' ? { maxHeight: 'wrap-content' } : { display: 'none' }}
              >
                <label htmlFor="AuthorsGradAuthId">Graduate Author</label>
                <RepSelect
                  reps={this.filterReps('Graduate')}
                  onChange={e => this.setState({ gradAuth: e })}
                />
              </div>
              <div className="multi_enter_line_items">
                <h1>Add Line Items</h1>
                <table className="listing" id="LineItemsTable">
                  <tbody>
                    <tr>
                      <th>#</th>
                      <th width="400px">Name</th>
                      <th>Cost (Each)</th>
                      <th>Qty</th>
                      <th>Total Cost</th>
                      <th>Requested</th>
                      <th>Account</th>
                      <th />
                      <th />
                      <th />
                      <th />
                    </tr>
                    {this.state.lineItems.map(item => (
                      <tr>
                        <td>
                          <label
                            htmlFor={`${item.number}LineItemNumber`}
                            value={item.number}
                            className="LineItemNumber"
                            id={`LineNumber${item.number}`}
                          >
                            {item.number}
                          </label>
                        </td>
                        <td>
                          <input
                            className="LineItemName"
                            id={`LineItemName${item.number}`}
                            type="text"
                            onChange={e => this.onChangeLineItem(item, 'name', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            id={`LineItemCost${item.number}`}
                            className="LineItemCost"
                            type="text"
                            onChange={e => this.onChangeLineItem(item, 'cost', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            id={`LineItemQuantity${item.number}`}
                            className="LineItemQuantity"
                            type="text"
                            onChange={e => this.onChangeLineItem(item, 'quantity', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            id={`LineItemTotalCost${item.number}`}
                            className="LineItemTotalCost"
                            readOnly="readonly"
                            type="text"
                            value={parseFloat(this.state.lineItems[item.number - 1].totalCost)
                              .toFixed(2)}
                          />
                        </td>
                        <td>
                          <input
                            id={`LineItemRequested${item.number}`}
                            className="LineItemRequested"
                            type="text"
                            onChange={e => this.onChangeLineItem(item, 'requested', e.target.value)}
                            value={parseFloat(this.state.lineItems[item.number - 1].requested)
                              .toFixed(2)}
                          />
                        </td>
                        <td>
                          <div className="input select">
                            <select name="data_0_LineItem_account" id="LineItemAccount0" onChange="updateTCAndRqstd(0)" style={{ width: 125 }}>
                              <option value="PY" title="For non-capital expenses" selected="selected">Prior Year</option>
                              <option value="CO" title="For items lasting three or more years">Capital Outlay</option>
                              <option value="ULR" title="Reserved for Undergraduate SGA">Undergraduate Legislative Reserve</option>
                              <option value="GLR" title="Reserved for Graduate SGA">Graduate Legislative Reserve</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <button type="button" onClick="moveUp(0)">
                            <img src="jpcreatebill_files/up.gif" alt="Move Up" />
                          </button>
                        </td>
                        <td>
                          <button type="button" onClick="moveDown(0)">
                            <img src="jpcreatebill_files/down.gif" alt="Move Down" />
                          </button>
                        </td>
                        <td>
                          <button type="button" onClick="addRow(0)">
                            <img src="jpcreatebill_files/plus_sign.gif" alt="Add" />
                          </button>
                        </td>
                        <td>
                          <button type="button" onClick="deleteRow(0)">
                            <img src="jpcreatebill_files/minus_sign.png" alt="Delete" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="submit">
                <button
                  type="submit"
                  onClick={this.submitBill}
                >
                  Save and continue
                </button>
              </div>
              <div id="notification">
                If applicable, please include at least one line item. Should you intend on
                submitting many line items, you may want to continue adding line items
                using the link on the next page and saving your updates periodically since
                your login session may time out.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JPCreateBill.propTypes = {
  createBill: PropTypes.func.isRequired,
  organizations: PropTypes.shape.isRequired,
  sgaPeople: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  organizations: state.organizations.organizations,
  sgaPeople: state.studentgovernment.sga_people,
});

const mapDispatchToProps = dispatch => ({
  createBill: info => dispatch(actions.createBill(info)),
  fetchOrganizations: dispatch(orgActions.fetchOrganizations()),
  fetchSGAPeople: dispatch(sgActions.fetchSGAPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JPCreateBill);
