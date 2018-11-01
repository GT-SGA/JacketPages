import types from '../types';

export const fetchUsers = () => {
  /* TODO: Add fetch request here to get bills */
  //app.fetch('/bills_all')
  .then(res => ({
    type: types.FETCH_USERS_SUCCESS,
    payload: res,
  }))
  .catch(error => ({
    type: types.FETCH_USERS_FAILURE,
    error,
  }));
}
