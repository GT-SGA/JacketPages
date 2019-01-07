import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JPViewBill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gradAuthorSigned: false,
      ugAuthorSigned: false,
    };
  }

  render() {
    const { bill } = this.props.location.state;

    return (
      <div id="content">
        <div className="clearfix">
          <div className="links left-nav" id="sidebar">
            <ul>
              <li>
                <a href="http://jacketpages.gatech.edu/bills/general_info/2775">Update Details</a>
              </li>
              <li>
                <a href="http://jacketpages.gatech.edu/line_items/index/2775/Submitted">Update Line Items</a>
              </li>
              <li>
                <a href="http://jacketpages.gatech.edu/bills/submit/2775">Submit Bill</a>
              </li>
              <li>
                <a href="http://jacketpages.gatech.edu/bills/delete/2775" style={{ color: 'red' }} onClick="return delClick(2);">Delete Bill</a>
              </li>
            </ul>
          </div>
          <div id="middle">
            <div id="page_title">Bill</div>
            <div id="notification">
              Once you have completed editing your bill, please use the Submit button or Submit
              sidebar link to release the bill to the authors. No further changes can be made after
              submitting.
            </div>
            <br />
            <table className="list">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>{bill.title}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td style={{ textAlign: 'justify' }}>{bill.description}</td>
                </tr>
                <tr>
                  <td>Fundraising</td>
                  <td style={{ textAlign: 'justify' }}>{bill.fundraising}</td>
                </tr>
                <tr>
                  <td>Dues</td>
                  <td>{bill.dues}</td>
                </tr>
                <tr>
                  <td>Undergraduate Members</td>
                  <td>{bill.ugMembers}</td>
                </tr>
                <tr>
                  <td>Graduate Members</td>
                  <td>{bill.gMembers}</td>
                </tr>
                <tr>
                  <td>Created Date</td>
                  <td>{bill.submit_date}</td>
                </tr>
              </tbody>
            </table>
            <h1>Status</h1>
            <table className="list">
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{bill.type}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{bill.category}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>
                    {bill.status === 1 && 'Created'}
                    {bill.status === 2 && 'Awaiting Author'}
                    {bill.status === 3 && 'Authored'}
                    {bill.status === 4 && 'Agenda'}
                    {bill.status === 5 && 'Conference'}
                    {bill.status === 6 && 'Passed'}
                    {bill.status === 7 && 'Failed'}
                    {bill.status === 8 && 'Tabled'}
                  </td>
                </tr>
              </tbody>
            </table>
            <h1>Authors</h1>
            <table className="list">
              <tbody>
                <tr>
                  <td>Graduate Author</td>
                  <td>
                    <a href={`mailto:${bill.authors.gradAuthor.email}`}>
                      {`${bill.authors.gradAuthor.first_name} ${bill.authors.gradAuthor.last_name}`}
                    </a>
                    {!this.state.gradAuthorSigned && ' - Not Signed'}
                    {this.state.gradAuthorSigned && ' - Signed'}
                  </td>
                </tr>
                <tr>
                  <td>Undergraduate Author</td>
                  <td>
                    <a href={`mailto:${bill.authors.ugAuthor.email}`}>
                      {`${bill.authors.ugAuthor.first_name} ${bill.authors.ugAuthor.last_name}`}
                    </a>
                    {!this.state.ugAuthroSigned && ' - Not Signed'}
                    {this.state.ugAuthorSigned && ' - Signed'}
                  </td>
                </tr>
                <tr>
                  <td>Submitter</td>
                  <td>
                    <a href={`mailto:${bill.submitter.email}`}>
                      {`${bill.submitter.first_name} ${bill.submitter.last_name}`}
                    </a>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>
                    <a href="http://jacketpages.gatech.edu/organizations/view/44886">
                      {bill.organization}
                    </a>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
            <br />
            <div id="tabs" className="ui-tabs ui-widget ui-widget-content ui-corner-all">
              <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                <li className="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabIndex="0" aria-controls="tabs-1" aria-labelledby="ui-id-1" aria-selected="true">
                  <a href="#tabs-1" className="ui-tabs-anchor" tabIndex="-1" id="ui-id-1">Submitted</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabIndex="-1" aria-controls="tabs-2" aria-labelledby="ui-id-2" aria-selected="false">
                  <a href="#tabs-2" className="ui-tabs-anchor" tabIndex="-1" id="ui-id-2">JFC</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabIndex="-1" aria-controls="tabs-3" aria-labelledby="ui-id-3" aria-selected="false">
                  <a href="#tabs-3" className="ui-tabs-anchor" tabIndex="-1" id="ui-id-3">Graduate</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabIndex="-1" aria-controls="tabs-4" aria-labelledby="ui-id-4" aria-selected="false">
                  <a href="#tabs-4" className="ui-tabs-anchor" tabIndex="-1" id="ui-id-4">Undergraduate</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabIndex="-1" aria-controls="tabs-5" aria-labelledby="ui-id-5" aria-selected="false">
                  <a href="#tabs-5" className="ui-tabs-anchor" tabIndex="-1" id="ui-id-5">Conference</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabIndex="-1" aria-controls="tabs-6" aria-labelledby="ui-id-6" aria-selected="false">
                  <a href="#tabs-6" className="ui-tabs-anchor" tabIndex="-1" id="ui-id-6">All</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabIndex="-1" aria-controls="tabs-7" aria-labelledby="ui-id-7" aria-selected="false">
                  <a href="#tabs-7" className="ui-tabs-anchor" tabIndex="-1" id="ui-id-7">Final</a>
                </li>
              </ul>
              <div id="tabs-1" aria-labelledby="ui-id-1" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-expanded="true" aria-hidden="false">
                There are no line items for this state.
                <br />
              </div>
            </div>
            <div className="ui-overlay" id="comments" style={{ display: 'none' }}>
              <div className="ui-widget-overlay" />
              <div
                className="ui-corner-all"
                id="overlay"
                style={{
                  width: '25%',
                  height: '10%',
                  position: 'absolute',
                  top: '0',
                }}
              >
                <button onClick={this.closeComments} style={{ float: 'right' }} type="submit">X</button>
                <div id="comments_text" />
              </div>
            </div>
            <br />
            <form action="/bills/submit/2775" id="BillViewForm" method="post" acceptCharset="utf-8">
              <div style={{ display: 'none' }}><input name="_method" value="POST" type="hidden" /></div>
              <div className="submit"><input value="Submit Bill" type="submit" /></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

JPViewBill.propTypes = {
  location: {
    state: {
      bill: PropTypes.shape.isRequired,
    }.isRequired,
  }.isRequired,
};

export default JPViewBill;
