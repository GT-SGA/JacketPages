import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/studentgovernment/actions';

import JPBillVotingAdminView from './jpbillvotingadminview';
import JPBillVotingUHRRepView from './jpbillvotinguhrrepview';
import JPBillVotingAttendance from './jpbillvotingattendance';

const BillAgenda = (props) => {
  const { bills } = props;
  return (
    <ul className="menu-content">
      {bills.map(bill => <li onClick={() => props.setCurrentBill(bill.id)}>{bill.title}</li>)}
    </ul>
  );
};

BillAgenda.propTypes = {
  bills: PropTypes.array.isRequired
};

class JPBillVoting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBill: null,
      present: true,
    };

    this.renderContent = this.renderContent.bind(this);
    this.startVoting = this.startVoting.bind(this);
    this.stopVoting = this.stopVoting.bind(this);
    this.setCurrentBill = this.setCurrentBill.bind(this);
    this.getCurrentBill = this.getCurrentBill.bind(this);
    this.vote = this.vote.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentBill();
  }

  getCurrentBill() {
    const { bills, currentBill } = this.props.studentgovernment;
    console.log('currentBill', currentBill);
    let returnBill = {};
    bills.forEach((bill) => {
      if (String(bill.id) === currentBill) {
        console.log('found bill');
        returnBill = bill;
      }
    });
    return returnBill;
  }

  setCurrentBill(billId) {
    this.setState({ currentBill: billId });
  }

  startVoting() {
    this.props.startBillVoting(this.state.currentBill);
  }

  stopVoting() {
    this.setState({ currentBill: null });
    this.props.stopBillVoting();
  }

  vote(vote) {
    this.props.vote(this.state.currentBill, vote);
  }

  renderContent() {
    if (this.props.auth.user && this.props.auth.user.level === 'admin') {
      return (
        <div>
          <JPBillVotingAdminView
            startBillVoting={this.startVoting}
            stopBillVoting={this.stopVoting}
          />
          <JPBillVotingAttendance people={this.props.studentgovernment.sga_people} />
        </div>
      );
    }
    if (!this.state.present) {
      return (
        <div>
          You must be marked present at the meeting in order to vote.
        </div>
      );
    }
    return <JPBillVotingUHRRepView currentBill={this.getCurrentBill()} vote={(vote) => this.vote(vote)} />;
  }

  render() {
    const { bills } = this.props.studentgovernment;

    return (
      <div className="container">
        <div className="nav-side-menu">
          <div style={{ backgroundColor: '#eeb211' }}>
            <div className="brand">Agenda</div>
            <div className="menu-list">
              <ul className="menu-content">
                <BillAgenda
                  bills={bills}
                  setCurrentBill={this.setCurrentBill}
                />
              </ul>
            </div>
          </div>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

JPBillVoting.propTypes = {
  startBillVoting: PropTypes.func.isRequired,
  stopBillVoting: PropTypes.func.isRequired,
  getCurrentBill: PropTypes.func.isRequired,
  vote: PropTypes.func.isRequired,
  studentgovernment: PropTypes.shape.isRequired,
  auth: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  studentgovernment: state.studentgovernment,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  fetchAgendaBills: dispatch(actions.fetchAgendaBills()),
  fetchSGAPeople: dispatch(actions.fetchSGAPeople()),
  startBillVoting: bill => dispatch(actions.startBillVoting(bill)),
  stopBillVoting: () => dispatch(actions.stopBillVoting()),
  getCurrentBill: () => dispatch(actions.getCurrentBill()),
  vote: (bill, vote) => dispatch(actions.vote(bill, vote)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JPBillVoting);
