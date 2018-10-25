import types from '../types';

const initialState = {
  bills: [],
  error: null,
};

export const billsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BILLS_SUCCESS:
      return Object.assign(state, {
        bills: action.payload,
      });
    case types.FETCH_BILLS_FAILURE:
      return Object.assign(state, {
        error: action.error,
      });
    default: return state;
  }
};
