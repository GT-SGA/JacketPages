import types from './types';

import api from '../../common/api';

const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
  isFetching: true,
});

const fetchUsersSuccess = res => ({
  type: types.FETCH_USERS_SUCCESS,
  isFetching: false,
  payload: res.data,
});

const fetchUsersFailure = error => ({
  type: types.FETCH_USERS_FAILURE,
  isFetching: false,
  error,
});

const fetchUsers = () => (
  (dispatch) => {
    dispatch(fetchUsersRequest());
    return api.get('/users/api/users')
      .then(res => dispatch(fetchUsersSuccess(res)))
      .catch(error => dispatch(fetchUsersFailure(error)));
  }
);

const fetchSGAPeopleRequest = () => ({
  type: types.FETCH_SGA_PEOPLE_REQUEST,
  isFetching: true,
});

const fetchSGAPeopleSuccess = res => ({
  type: types.FETCH_SGA_PEOPLE_SUCCESS,
  isFetching: false,
  payload: res.data,
});

const fetchSGAPeopleFailure = error => ({
  type: types.FETCH_SGA_PEOPLE_FAILURE,
  error,
});

const fetchSGAPeople = () => (
  (dispatch) => {
    dispatch(fetchSGAPeopleRequest());
    dispatch(fetchUsers());
    return api.get('/users/api/people')
      .then(res => dispatch(fetchSGAPeopleSuccess(res)))
      .catch(error => dispatch(fetchSGAPeopleFailure(error)));
  }
);

const fetchAgendaBillsRequest = () => ({
  type: types.FETCH_AGENDA_BILLS_REQUEST,
});

const fetchAgendaBillsSuccess = data => ({
  type: types.FETCH_AGENDA_BILLS_SUCCESS,
  payload: data,
});

const fetchAgendaBills = () => (
  (dispatch) => {
    dispatch(fetchAgendaBillsRequest());
    api.get('/bills/bills_all')
      .then((res) => {
        const agendaBills = res.data.filter(bill => bill.status === 4);
        dispatch(fetchAgendaBillsSuccess(agendaBills));
      })
      .catch(error => ({
        type: types.FETCH_AGENDA_BILLS_FAILURE,
        error,
      }));
  }
);

const markPresentRequest = () => ({
  type: types.MARK_PRESENT_REQUEST,
});

const markPresentSuccess = () => ({
  type: types.MARK_PRESENT_SUCCESS,
});

const markPresent = ids => (
  (dispatch) => {
    dispatch(markPresentRequest());
    api.post('/users/api/mark_present', { ids })
      .then(() => dispatch(markPresentSuccess()))
      .catch(error => ({
        type: types.MARK_PRESENT_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchSGAPeople,
  fetchUsers,
  fetchAgendaBills,
  markPresent,
};

export default actions;
