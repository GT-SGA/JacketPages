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

const createBillsRequest = () => ({
  type: types.CREATE_BILLS_REQUEST,
});

const createBillsSuccess = bills => ({
  type: types.CREATE_BILLS_SUCCESS,
  payload: bills,
});

const createBills = () => (
  (dispatch) => {
    dispatch(createBillsRequest());
    // return api.get('bills/bills_all')
    //   .then(res => dispatch(createBillsSuccess(res.data)))
    //   .catch(error => ({
    //     type: types.CREATE_BILLS_FAILURE,
    //     error,
    //   }));
  }
);

const actions = {
  fetchBills,
};

export default actions;
