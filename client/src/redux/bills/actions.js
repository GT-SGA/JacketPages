import api from '../../common/api';
import types from './types';

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
    return api.get('/api/bills')
      .then((res) => {
        const bills = {};
        res.data.forEach((bill) => {
          bills[bill.id] = bill;
        });
        return dispatch(fetchBillsSuccess(bills));
      })
      .catch(error => ({
        type: types.FETCH_BILLS_FAILURE,
        error,
      }));
  }
);

const fetchBillAuthorsRequest = () => ({
  type: types.FETCH_BILL_AUTHORS_REQUEST,
});

const fetchBillAuthors = () => (
  (dispatch) => {
    dispatch(fetchBillAuthorsRequest());
    return api.get('/api/bills/authors')
      .then((res) => {
        const authors = {};
        res.data.forEach((author) => {
          authors[author.id] = author;
        });
        return dispatch({
          type: types.FETCH_BILL_AUTHORS_SUCCESS,
          payload: authors,
        });
      })
      .catch(error => dispatch({
        type: types.FETCH_BILL_AUTHORS_FAILURE,
        error,
      }));
  }
);

const createBillRequest = () => ({
  type: types.CREATE_BILLS_REQUEST,
});

const createBillSuccess = bills => ({
  type: types.CREATE_BILLS_SUCCESS,
  payload: bills,
});

const createBill = (authorInfo, billInfo) => (
  (dispatch) => {
    dispatch(createBillRequest());
    return api.post('/api/bills/', {
      authors: authorInfo,
      bill: billInfo,
    })
      .then(res => dispatch(createBillSuccess(res.data)))
      .catch(error => ({
        type: types.CREATE_BILLS_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchBills,
  fetchBillAuthors,
  createBill,
};

export default actions;
