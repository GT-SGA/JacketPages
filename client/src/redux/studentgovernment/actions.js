import types from './types';

import api from '../../common/api';

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

const actions = {
  fetchAgendaBills,
};

export default actions;
