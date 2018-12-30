import types from './types';
import api from '../../common/api';

const fetchBudgetsRequest = () => ({
  type: types.FETCH_BUDGETS_REQUEST,
});

const fetchBudgets = () => (
  (dispatch) => {
    dispatch(fetchBudgetsRequest());
    return api.get('/api/budgets')
      .then((res) => {
        const budgets = {};
        res.data.forEach((budget) => {
          budgets[budget.id] = budget;
        });
        dispatch({
          type: types.FETCH_BUDGETS_SUCCESS,
          payload: budgets,
        });
      })
      .catch(error => dispatch({
        type: types.FETCH_BUDGETS_FAILURE,
        error,
      }));
  }
);

const fetchLineItemsRequest = () => ({
  type: types.FETCH_LINE_ITEMS_REQUEST,
});

const fetchLineItems = () => (
  (dispatch) => {
    dispatch(fetchLineItemsRequest());
    return api.get('/api/budgets/lineItems')
      .then((res) => {
        const items = {};
        res.data.forEach((item) => {
          items[item.id] = item;
        });
        return dispatch({
          type: types.FETCH_LINE_ITEMS_SUCCESS,
          payload: items,
        });
      })
      .catch(error => dispatch({
        type: types.FETCH_LINE_ITEMS_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchBudgets,
  fetchLineItems,
};

export default actions;
