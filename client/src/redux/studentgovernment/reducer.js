import types from './types';

const initialState = {
  error: null,
  sga_people: [],
  users: [],
};

const studentGovernment = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SGA_PEOPLE_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.FETCH_SGA_PEOPLE_SUCCESS: return Object.assign({}, state, {
      sga_people: action.payload,
      isFetching: false,
    });
    case types.FETCH_SGA_PEOPLE_FAILURE: return Object.assign({}, state, {
      error: action.error,
      isFetching: false,
    });
    default: return state;
  }
};

export default studentGovernment;
