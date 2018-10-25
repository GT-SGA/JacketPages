import api from '../../common/api';
import types from '../types';

const fetchBillsRequest = () => ({
  type: types.FETCH_BILLS_REQUEST,
});

const fetchBillsSuccess = bills => ({
  type: types.FETCH_BILLS_SUCCESS,
  payload: bills,
});

const fetchBills = () => (
  (dispatch) => {
    dispatch(fetchBillsRequest());
    return api.get('bills/bills_all')
      .then(res => dispatch(fetchBillsSuccess(res.data)))
      .catch(error => ({
        type: types.FETCH_BILLS_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchBills,
};

export default actions;
