import types from './types';

const initialState = {
  user: undefined,
  error: null,
  isFetching: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST_TYPE:
    case types.INFO_REQUEST_TYPE:
    case types.LOGOUT_REQUEST_TYPE: return Object.assign({}, state, {
      isFetching: true,
    });
    case types.INFO_SUCCESS_TYPE: return Object.assign({}, state, {
      isFetching: false,
      user: action.payload,
    });
    case types.LOGIN_SUCCESS_TYPE: return Object.assign({}, state, {
      isFetching: false,
    });
    case types.LOGOUT_SUCCESS_TYPE: return Object.assign({}, state, {
      user: undefined,
      isFetching: false,
    });
    case types.INFO_FAILURE_TYPE:
    case types.LOGIN_FAILURE_TYPE:
    case types.LOGOUT_FAILURE_TYPE: return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
    });
    default: return state;
  }
};

export default auth;
