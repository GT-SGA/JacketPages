import types from './types';
import api from '../../common/api';

const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = users => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsers = () => (
  (dispatch) => {
    dispatch(fetchUsersRequest());
    return api.get('/api/users')
      .then((res) => {
        const users = {};
        res.data.forEach((user) => {
          users[user.id] = user;
        });
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => dispatch({
        type: types.FETCH_USERS_FAILURE,
        error,
      }));
  }
);

const addUserRequest = () => ({
  type: types.ADD_USER_REQUEST,
});

const addUser = info => (
  (dispatch) => {
    dispatch(addUserRequest());
    return api.post('/api/users', info)
      .then(() => dispatch({
        type: types.ADD_USER_SUCCESS,
      }))
      .catch(error => dispatch({
        type: types.ADD_USER_FAILURE,
        error,
      }));
  }
);

const editUserRequest = () => ({
  type: types.EDIT_USER_REQUEST,
});

const editUser = info => (
  (dispatch) => {
    dispatch(editUserRequest());
    return api.patch(`/api/users/${info.userID}`, info.userInfo)
      .then(() => dispatch({
        type: types.EDIT_USER_SUCCESS,
      }))
      .catch(error => dispatch({
        type: types.EDIT_USER_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchUsers,
  addUser,
  editUser,
};

export default actions;
