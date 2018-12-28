import types from './types';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
    case types.EDIT_USER_REQUEST:
    case types.ADD_USER_REQUEST: return Object.assign(state, {}, {
      isFetching: true,
      error: null,
    });
    case types.FETCH_USERS_FAILURE:
    case types.EDIT_USER_FAILURE:
    case types.ADD_USER_FAILURE: return Object.assign(state, {}, {
      isFetching: false,
      error: action.error,
    });
    case types.FETCH_USERS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      users: action.payload,
    });
    case types.EDIT_USER_SUCCESS:
    case types.ADD_USER_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      error: null,
    });
    default: return state;
  }
};

export default users;
