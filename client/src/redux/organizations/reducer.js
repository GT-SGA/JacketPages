import types from './types';

const initialState = {
  isFetching: false,
  organizations: [],
  error: null,
};

const organizations = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORGANIZATIONS_REQUEST: return Object.assign({}, state, {
      isFetching: true,
      error: null,
    });
    case types.FETCH_ORGANIZATIONS_FAILURE: return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
    });
    case types.FETCH_ORGANIZATIONS_SUCCESS: return Object.assign({}, state, {
      isFetching: false,
      organizations: action.payload,
    });
    default: return state;
  }
};

export default organizations;
