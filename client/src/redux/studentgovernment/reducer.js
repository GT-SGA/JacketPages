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
    case types.FETCH_SGA_PEOPLE_REQUEST:
    case types.FETCH_USERS_REQUEST:
    case types.FETCH_AGENDA_BILLS_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.FETCH_AGENDA_BILLS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      bills: action.payload,
    });
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
    default: return state;
  }
};

export default studentgovernment;
