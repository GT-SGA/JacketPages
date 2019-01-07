import types from './types';

import api from '../../common/api';

const fetchSGAPeopleRequest = () => ({
  type: types.FETCH_SGA_PEOPLE_REQUEST,
  isFetching: true,
});

const fetchSGAPeopleSuccess = res => ({
  type: types.FETCH_SGA_PEOPLE_SUCCESS,
  isFetching: false,
  payload: res.data,
});

const fetchSGAPeopleFailure = error => ({
  type: types.FETCH_SGA_PEOPLE_FAILURE,
  error,
});

const fetchSGAPeople = () => (
  (dispatch) => {
    dispatch(fetchSGAPeopleRequest());
    return api.get('api/sgaPeople')
      .then(res => dispatch(fetchSGAPeopleSuccess(res)))
      .catch(error => dispatch(fetchSGAPeopleFailure(error)));
  }
);

const fetchAgendaBillsRequest = () => ({
  type: types.FETCH_AGENDA_BILLS_REQUEST,
});

const fetchAgendaBillsSuccess = data => ({
  type: types.FETCH_AGENDA_BILLS_SUCCESS,
  payload: data,
});

const fetchAgendaBills = () => (
  (dispatch) => {
    dispatch(fetchAgendaBillsRequest());
    api.get('/bills/bills_all')
      .then((res) => {
        const agendaBills = res.data.filter(bill => bill.status === 4);
        dispatch(fetchAgendaBillsSuccess(agendaBills));
      })
      .catch(error => dispatch({
        type: types.FETCH_AGENDA_BILLS_FAILURE,
        error,
      }));
  }
);

const startBillVotingRequest = () => ({
  type: types.START_BILL_VOTING_REQUEST,
});

const startBillVoting = id => (
  (dispatch) => {
    dispatch(startBillVotingRequest());
    api.post('/voting/startVoting', { id })
      .then(() => dispatch({
        type: types.START_BILL_VOTING_SUCCESS,
      }))
      .catch(error => dispatch({
        type: types.START_BILL_VOTING_FAILURE,
        error,
      }));
  }
);

const stopBillVotingRequest = () => ({
  type: types.STOP_BILL_VOTING_REQUEST,
});

const getResultsRequest = () => ({
  type: types.GET_RESULTS_REQUEST,
});

const getResultsSuccess = res => ({
  type: types.GET_RESULTS_SUCCESS,
  payload: res.data,
});

const getResults = () => (
  (dispatch) => {
    dispatch(getResultsRequest());
    api.get('/voting/getResults')
      .then(res => dispatch(getResultsSuccess(res)))
      .catch(error => dispatch({
        type: types.GET_RESULTS_FAILURE,
        error,
      }));
  }
);

const stopBillVoting = () => (
  (dispatch) => {
    // dispatch(getResults());
    dispatch(stopBillVotingRequest());
    api.post('/voting/stopVoting')
      .then(res => dispatch({
        type: types.STOP_BILL_VOTING_SUCCESS,
        payload: res.data,
      }))
      .catch(error => dispatch({
        type: types.STOP_BILL_VOTING_FAILURE,
        error,
      }));
  }
);

const voteRequest = () => ({
  type: types.VOTE_REQUEST,
});

const vote = (billId, repVote) => (
  (dispatch) => {
    dispatch(voteRequest());
    api.post('/voting/vote', {
      bill: billId,
      vote: repVote,
    }).then(() => dispatch({
      type: types.VOTE_SUCCESS,
    })).catch(error => dispatch({
      type: types.VOTE_FAILURE,
      error,
    }));
  }
);

const getCurrentBillRequest = () => ({
  type: types.GET_CURRENT_BILL_REQUEST,
});

const getCurrentBill = () => (
  (dispatch) => {
    dispatch(getCurrentBillRequest());
    api.get('/voting/currentBill')
      .then(res => dispatch({
        type: types.GET_CURRENT_BILL_SUCCESS,
        payload: res.data,
      }))
      .catch(error => dispatch({
        type: types.GET_CURRENT_BILL_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchSGAPeople,
  fetchAgendaBills,
  startBillVoting,
  stopBillVoting,
  vote,
  getCurrentBill,
  getResults,
};

export default actions;
