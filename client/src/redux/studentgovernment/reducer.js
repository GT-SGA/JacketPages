import types from './types';

const initialState = {
  bills: [],
  error: null,
  isFetching: false,
};

const studentgovernment = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AGENDA_BILLS_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.FETCH_AGENDA_BILLS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      bills: action.payload,
    });
    case types.FETCH_AGENDA_BILLS_FAILURE: return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
    });
    default: return state;
  }
};

export default studentgovernment;
