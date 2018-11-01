import types from '../types';

const initialState = {
  users: [],
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.payload,
        isFetching: false,
      });
    case types.FETCH_USERS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false,
      });
    default: return state;
  }
};

export default users;
