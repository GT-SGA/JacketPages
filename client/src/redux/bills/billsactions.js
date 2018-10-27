import types from './types';

export const fetchBills = () => {
  /* TODO: Add fetch request here to get bills */
  app.fetch('/bills_all')
  .then(res => ({
    type: types.FETCH_BILLS_SUCCESS,
    payload: res,
  }))
  .catch(error => ({
    type: types.FETCH_BILLS_FAILURE,
    error,
  }));
}
