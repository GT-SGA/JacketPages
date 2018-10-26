import React from 'react';
import VotingUHRRepView from './studentgovernment/votinguhrrepview';

import JPBillVotingAdminView from './jpbillvotingadminview';

class JPBillVoting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { present: true };
  }

  render() {
    if (!this.state.present) {
      return (
        <div>
          You must be marked present at the meeting in order to vote.
        </div>
      );
    }
    return <JPBillVotingAdminView />;
  }
}

export default JPBillVoting;
