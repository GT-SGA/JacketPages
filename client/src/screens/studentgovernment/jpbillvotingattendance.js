import React, { Component } from 'react'
import PropTypes from 'prop-types';

const getReps = (person, users, togglePresent) => {
  const user = users[person.user_id];
  return user && (
    <div>
      <input
        type="checkbox"
        value={`${user.first_name}_${user.last_name}`}
        onChange={(e) => {
          togglePresent(e.target.value);
        }}
      />
      {`${user.first_name} ${user.last_name}`}
    </div>
  );
};

class JPBillVotingAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
    };

    this.togglePresent = this.togglePresent.bind(this);
    this.submitAttendance = this.submitAttendance.bind(this);
  }

  togglePresent(user) {
    const { ids } = this.state;
    if (ids.includes(user)) {
      ids.remove(user);
      this.setState({ ids });
    } else {
      ids.push(user);
      this.setState({ ids });
    }
  }

  submitAttendance() {
    console.log(this.state.ids);
    this.props.markPresent(this.state.ids);
  }

  render() {
    const { people, users } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>Attendance</h2>
          </div>
        </div>

        <div>
          <div>
            {people.map(p => getReps(p, users, this.togglePresent))}
          </div>
        </div>

        <button onClick={this.submitAttendance}>Submit Attendance</button>
      </div>
    );
  }
}

JPBillVotingAttendance.propTypes = {
  people: PropTypes.array.isRequired,
  users: PropTypes.shape.isRequired,
  markPresent: PropTypes.func.isRequired,
};

export default JPBillVotingAttendance;
