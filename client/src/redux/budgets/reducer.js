import types from './types';

const initialState = {
  isFetching: false,
  error: null,
  budgets: {},
  lineItems: {},
};

const budgets = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LINE_ITEMS_REQUEST:
    case types.FETCH_BUDGETS_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.FETCH_LINE_ITEMS_FAILURE:
    case types.FETCH_BUDGETS_FAILURE: return Object.assign({}, state, {
      isFething: false,
      error: action.error,
    });
    case types.FETCH_BUDGETS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      budgets: action.payload,
    });
    case types.FETCH_LINE_ITEMS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      lineItems: action.payload,
    });
    default: return state;
  }
};

export default budgets;
