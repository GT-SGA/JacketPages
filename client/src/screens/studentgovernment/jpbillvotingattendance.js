import React, { Component } from 'react'
import PropTypes from 'prop-types';

const getReps = person => (
  <div>
    <input type="checkbox" />{person.name}Name
  </div>
);

class JPBillVotingAttendance extends Component {
  render() {
    const { people } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>Attendance</h2>
          </div>
        </div>

        <div>
          <div>
            {people.map(p => getReps(p))}
          </div>
        </div>
      </div>
    );
  }
}

JPBillVotingAttendance.propTypes = {
  reps: PropTypes.array.isRequired,
};

export default JPBillVotingAttendance;
