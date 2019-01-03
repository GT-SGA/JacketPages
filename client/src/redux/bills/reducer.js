import types from './types';

const initialState = {
  bills: {},
  bill_authors: {},
  error: null,
};

const bills = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BILL_AUTHORS_REQUEST:
    case types.FETCH_BILLS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.FETCH_BILLS_SUCCESS:
      return Object.assign({}, state, {
        bills: action.payload,
        isFetching: false,
      });
    case types.FETCH_BILL_AUTHORS_SUCCESS:
      return Object.assign({}, state, {
        bill_authors: action.payload,
        isFetching: false,
      });
    case types.FETCH_BILL_AUTHORS_FAILURE:
    case types.FETCH_BILLS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false,
      });
    default: return state;
  }
};

export default bills;
