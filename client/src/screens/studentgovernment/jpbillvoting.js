import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/studentgovernment/actions';

import JPBillVotingAdminView from './jpbillvotingadminview';
import JPBillVotingUHRRepView from './jpbillvotinguhrrepview';

const BillAgenda = (props) => {
  const { bills } = props;
  return (
    <ul className="menu-content">
      {bills.map(bill => <li>{bill.title}</li>)}
    </ul>
  );
};

BillAgenda.propTypes = {
  bills: PropTypes.array.isRequired,
};

class JPBillVoting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bills: this.props.studentgovernment.bills,
      currentBill: 0,
      present: true,
      admin: true,
    };

    this.renderContent = this.renderContent.bind(this);
  }

  getDerivedStateFromProps(nextProps) {
    this.setState({ bills: nextProps.studentgovernment.bills });
  }

  renderBillRow(bill) {
    return (
      <li><a>{bill.name}</a></li>
    );
  }

  renderContent() {
    if (this.state.admin) {
      return <JPBillVotingAdminView />;
    }
    if (!this.state.present) {
      return (
        <div>
          You must be marked present at the meeting in order to vote.
        </div>
      );
    }
    return <JPBillVotingUHRRepView />;
  }

  render() {
    const { bills } = this.props.studentgovernment;
    console.log(bills);

    return (
      <div className="container">
        <div className="nav-side-menu">
          <div style={{ backgroundColor: '#eeb211' }}>
            <div className="brand">Agenda</div>
            <div className="menu-list">
              <ul className="menu-content">
                <BillAgenda bills={bills} />
              </ul>
            </div>
          </div>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  studentgovernment: state.studentgovernment,
});

const mapDispatchToProps = dispatch => ({
  fetchAgendaBills: dispatch(actions.fetchAgendaBills()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JPBillVoting);
