import api from '../../common/api';
import types from '../types';

const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = bills => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsers = () => (
  (dispatch) => {
    dispatch(fetchUsersRequest());
    return api.get('users/users')
      .then(res => dispatch(fetchUsersSuccess(res.data)))
      .catch(error => ({
        type: types.FETCH_USERS_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchUsers,
};

export default actions;
