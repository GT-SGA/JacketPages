import api from '../../common/api';
import types from './types';

const infoRequest = () => ({
  type: types.INFO_REQUEST_TYPE,
});

const infoSuccess = user => ({
  type: types.INFO_SUCCESS_TYPE,
  payload: user,
});

const info = () => (
  (dispatch) => {
    dispatch(infoRequest());
    api.get('http://jacketpages.sga.gatech.edu/auth/info')
      .then(res => dispatch(infoSuccess(res)))
      .catch(error => ({
        type: types.INFO_FAILURE_TYPE,
        error,
      }));
  }
);

const actions = {
  info,
};

export default actions;
