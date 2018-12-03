import types from './types';

const initialState = {
  bills: [],
  error: null,
  isFetching: false,
  sga_people: [],
  users: {},
};

const studentgovernment = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CURRENT_BILL_REQUEST:
    case types.GET_RESULTS_REQUEST:
    case types.VOTE_REQUEST:
    case types.START_BILL_VOTING_REQUEST:
    case types.STOP_BILL_VOTING_REQUEST:
    case types.FETCH_SGA_PEOPLE_REQUEST:
    case types.FETCH_USERS_REQUEST:
    case types.FETCH_AGENDA_BILLS_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.FETCH_AGENDA_BILLS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      bills: action.payload,
    });
    case types.GET_CURRENT_BILL_FAILURE:
    case types.GET_RESULTS_FAILURE:
    case types.VOTE_FAILURE:
    case types.START_BILL_VOTING_FAILURE:
    case types.STOP_BILL_VOTING_FAILURE:
    case types.FETCH_SGA_PEOPLE_FAILURE:
    case types.FETCH_USERS_FAILURE:
    case types.FETCH_AGENDA_BILLS_FAILURE: return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
    });
    case types.FETCH_SGA_PEOPLE_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      sga_people: action.payload,
    });
    case types.FETCH_USERS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      users: action.payload,
    });
    case types.GET_RESULTS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      results: action.payload,
    });
    case types.GET_CURRENT_BILL_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      currentBill: action.payload,
    });
    case types.VOTE_SUCCESS:
    case types.START_BILL_VOTING_SUCCESS:
    case types.STOP_BILL_VOTING_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
    });
    default: return state;
  }
};

export default studentgovernment;
