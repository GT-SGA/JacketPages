import React, { Component } from 'react';

class JPViewBill extends Component {
  constructor(props) {
    this.closeHelp = this.closeHelp.bind(this);

    this.state = {
      gradAuthor: '',
      gradAuthorSigned: false,
      ugAuthor: '',
      ugAuthorSigned: false,
      submitter: '',
      organization: '',
    }
  }

  openComments() {
    $("#comments").attr("style", "");
    $("#comments_text").update(text);
  }

  closeComments() {
    $("#comments").attr("style", "display:none;");
  }

  closeHelp() {

  }

  delClick() {

  }

  render() {
    return (
      <div id="content">
        <div className="clearfix">
          <div className="ui-overlay" id="help" style={{ display: "none"}}>
            <div className="ui-widget-overlay"></div>
            <div className="ui-corner-all" id="overlay" style={{width: "100%", height: 600, position: "absolute", overflowY: "scroll", marginTop: 10}}>
              <button onClick={this.closeHelp} style={{float: "right"}} type="submit">X</button>
              <div className="helppage" style={{marginLeft: 10, marginRight: 10}}>
                <h1>Submitting SGA Bills</h1>
                <Introduction />
                <Process />
                <p style={{fontStyle: "italic", fontWeight: "bold"}}>Be sure to begin working on bills for events and activities at least four (4) weeks before the event!</p>
                <h2>Step by Step Process Checklist:</h2>
                <ul style={{paddingLeft: 40}}>
                  <li>Before contacting a potential author, draft your bill with itemized
                      costs according to the Joint Finance Committee policy, available at <a href="http://sga.gatech.edu/JFC">http://sga.gatech.edu/JFC</a>.
                  </li>
                  <li>Find authors, both an undergraduate and a graduate. A complete list of representatives and senators can be found at <a href="http://jacketpages.gatech.edu/sga_people">http://jacketpages.gatech.edu/sga_people</a>. Be sure to include your bill and extra information when making contact.</li>
                  <li>Bills must be submitted and reviewed by both authors online by 8am
                      on Monday in order for them to be placed in New Business on Tuesday.
                  </li>
                  <li>After appearing in New Business, the bill submitted or a
                      representative from the organization will need to attend a meeting with
                      the Joint Finance Committee (an invitation will be sent to the bill
                      submitter)
                  </li>
                  <li>After the meeting with the JFC has been attended and the JFC has
                      made their recommendations, the bill will move to Old Business and be
                      voted on the following week. Note: this is one week after that bill was
                      in New Business.
                  </li>
                  <li>You should attend the meeting when your bill appears on the agenda
                      in Old Business. This includes the Graduate Student Senate meeting at
                      11am on Tuesdays and the Undergraduate House of Representatives meetings
                      at 7pm on Tuesdays, both in the Student Services Building (Flag
                      Building), room 117. You will be asked to present the bill to the body
                      or answer questions from senators/representatives.
                  </li>
                  <li>If your bill passes, please see the policy of the Student
                      Organization Finance Office about reimbursements and purchases. It if
                      fails, you will have the opportunity to revise and resubmit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                <a href="http://jacketpages.gatech.edu/bills/delete/2775" style={{color:'red'}} onclick="return delClick(2);">Delete Bill</a>
              </li>
            </ul>
          </div>
          <div id="middle">
            <div id="page_title">Bill</div>
            <div id="notification">Once you have completed editing your bill,
                please use the Submit button or Submit sidebar link to release the bill
                to the authors. No further changes can be made after submitting.
            </div>
            <br>
            <table className="list">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>New</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td style="text-align:justify">New</td>
                </tr>
                <tr>
                  <td>Fundraising</td>
                  <td style="text-align:justify"></td>
                </tr>
                <tr>
                  <td>Dues</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Undergraduate Members</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Graduate Members</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Created Date</td>
                  <td>2018-07-10</td>
                </tr>
              </tbody>
            </table>
            <h1>Status</h1>
            <table className="list">
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>Finance Request</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>Joint</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>Created</td>
                </tr>
              </tbody>
            </table>
            <h1>Authors</h1>
            <table className="list">
              <tbody>
                <tr>
                  <td>Graduate Author</td>
                  <td>
                    <a href="mailto:abalwani6@gatech.edu">{this.state.gradAuthor} </a>
                    {!this.state.gradAuthorSigned && " - Not Signed"}
                    {this.state.gradAuthorSigned && " - Signed"}
                  </td>
                </tr>
                <tr>
                  <td>Undergraduate Author</td>
                  <td>
                    <a href="mailto:abigailburke@gatech.edu">{this.state.ugAuthor}</a>
                    {!this.state.ugAuthroSigned && " - Not Signed"}
                    {this.state.ugAuthorSigned && " - Signed"}
                  </td>
                </tr>
                <tr>
                  <td>Submitter</td>
                  <td><a href="mailto:akikkeri3@gatech.edu">{this.state.submitter}</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>
                    <a href="http://jacketpages.gatech.edu/organizations/view/44886">{this.state.organization}</a>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <script>
                $(function()
                {
                  $("#tabs").tabs();
                  $("#tabs").tabs("option", "active", 0);
                });
            </script>
            <br>
            <div id="tabs" className="ui-tabs ui-widget ui-widget-content ui-corner-all">
              <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                <li className="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="tabs-1" aria-labelledby="ui-id-1" aria-selected="true">
                  <a href="#tabs-1" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-1">Submitted</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-2" aria-labelledby="ui-id-2" aria-selected="false">
                  <a href="#tabs-2" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-2">JFC</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-3" aria-labelledby="ui-id-3" aria-selected="false">
                  <a href="#tabs-3" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-3">Graduate</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-4" aria-labelledby="ui-id-4" aria-selected="false">
                  <a href="#tabs-4" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-4">Undergraduate</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-5" aria-labelledby="ui-id-5" aria-selected="false">
                  <a href="#tabs-5" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-5">Conference</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-6" aria-labelledby="ui-id-6" aria-selected="false">
                  <a href="#tabs-6" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-6">All</a>
                </li>
                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-7" aria-labelledby="ui-id-7" aria-selected="false">
                  <a href="#tabs-7" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-7">Final</a>
                </li>
              </ul>
              <div id="tabs-1" aria-labelledby="ui-id-1" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-expanded="true" aria-hidden="false">There are no line items for this state.<br/></div>
              <div id="tabs-2" aria-labelledby="ui-id-2" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;" aria-expanded="false" aria-hidden="true">There are no line items for this state.<br/></div>
              <div id="tabs-3" aria-labelledby="ui-id-3" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;" aria-expanded="false" aria-hidden="true">There are no line items for this state.<br/></div>
              <div id="tabs-4" aria-labelledby="ui-id-4" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;" aria-expanded="false" aria-hidden="true">There are no line items for this state.<br/></div>
              <div id="tabs-5" aria-labelledby="ui-id-5" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;" aria-expanded="false" aria-hidden="true">There are no line items for this state.<br/></div>
              <div id="tabs-6" aria-labelledby="ui-id-6" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;" aria-expanded="false" aria-hidden="true">There are no line items for this state.<br/></div>
              <div id="tabs-7" aria-labelledby="ui-id-7" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;" aria-expanded="false" aria-hidden="true">There are no line items for this state.<br/></div>
            </div>
            <div className="ui-overlay" id="comments" style="display:none;">
              <div className="ui-widget-overlay"></div>
              <div className="ui-corner-all" id="overlay" style="width: 25%; height: 10%; position: absolute; top: 0;">
                <button onclick={this.closeComments} style={{float: "right"}} type="submit">X</button>
                <div id="comments_text"></div>
              </div>
            </div>
            <br/>
            <form action="/bills/submit/2775" id="BillViewForm" method="post" accept-charset="utf-8">
              <div style={{display: "none"}}><input name="_method" value="POST" type="hidden"/></div>
              <div className="submit"><input value="Submit Bill" type="submit"/></div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  const Introduction = () => (
    <div>
      <h2>Introduction</h2>
      <p>
        The following will help you to prepare and to learn the process that
        is required to obtain funding from, or pass a resolution with, the
        Student Government Association (SGA) at Georgia Tech.
        <br />
        The Student Government’s legislative structure consists of a body of
        undergraduate students (Undergraduate House of Representatives or UHR)
        and of a body of graduate students (Graduate Student Senate or GSS). The
        passing of a “joint” bill requires consideration of a bill in each body
        and is subject to passing by an “enactment ratio.” Mostly all financial
        requests by student organizations will be classified as a joint bill.
        The enactment ratio is a mathematical calculation to determine whether a
        bill passes both bodies of SGA. It ensures that undergraduate and
        graduates are represented proportionally since undergraduates represent
        more of the student body and contribute more money to SGA from the
        Student Activity Fee.
        <br />
        The money that SGA allocates to organizations comes from the “Student
        Activity Fee” line that shows up on the tuition and fee assessment paid
        by each student every semester. This money is then budgeted to many
        different organizations with the Student Center and the Campus
        Recreation Center receiving approximately 70% of that budget. At the end
        of the year, the money that has not been spent is placed into several
        accounts that can then be allocated to different groups for special
        one-time items.
        Student Government has a set of policies and priorities that it follows
        with regards to funding requests.
        <br />
        Please keep in mind that SGA has a set amount of money that it can spend
        in one year. SGA attempts to wisely spend that set of money on the
        organizations with most demonstrated need and on those bills that will
        benefit the majority of campus. Not every request will end in success.
      </p>
    </div>
  );

  const Process = () => (
    <h2>The Process</h2>
    <p>
      The process begins with a student organization that needs additional
      funding for an event and turns to SGA for financial assistance. SGA
      should serve as the organization’s last resort after all other funding
      options have been exhausted. Next, the organization will contact an
      undergraduate Representative and a graduate Senator of SGA and ask those
      members to author their bill. A complete list of senators and
      representatives can be found at <a href="http://jacketpages.gatech.edu/sga_people">http://jacketpages.gatech.edu/sga_people</a>.
      A bill form (further explained in “How to Submit an SGA Bill”)
      requesting general information about the organization or student will be
      completed and a bill will be drafted to include the organization’s idea
      for an event and an itemized list of requested items.<br/>
      If the bill is submitted and reviewed by the authors by 8am on Monday,
      the bill will appear in New Business on the agenda at the SGA meeting
      that following Tuesday. The Joint Finance Committee (JFC) will review
      the bill at its weekly meeting that Thursday; a representative from the
      organization will be invited to the meeting to speak on behalf of the
      organization. The Joint Finance Committee will suggest changes based on
      SGA funding policies (a copy of JFC Policy can be found in the back of
      this binder). The next Tuesday, the bill will move into Old Business
      where it will be discussed and voted on. After both legislative bodies
      discuss the bill and the enactment ratio is reached, the funds will be
      allocated to the organization. Please see the policy of the Student
      Organization Finance Office (in the back of this binder) for information
      on reimbursements and purchases.
    </p>
  );
}
