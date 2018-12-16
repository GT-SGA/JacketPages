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
      .then(res => (
        api.get(`http://localhost/users/api/user/${res.uid}`)
          .then(r => (
            dispatch(infoSuccess(r.data[0]))
          ))
      ))
      .catch(error => ({
        type: types.INFO_FAILURE_TYPE,
        error,
      }));
  }
);

const adminInfo = () => (
  (dispatch) => {
    dispatch(infoRequest());
    api.get('/auth/adminLogin')
      .then(res => (
        dispatch(infoSuccess(res.data[0]))
      ))
      .catch(error => ({
        type: types.INFO_FAILURE_TYPE,
        error,
      }));
  }
);

const userInfo = () => (
  (dispatch) => {
    dispatch(infoRequest());
    api.get('/auth/userLogin')
      .then(res => (
        dispatch(infoSuccess(res.data[0]))
      ))
      .catch(error => ({
        type: types.INFO_FAILURE_TYPE,
        error,
      }));
  }
);

const repInfo = () => (
  (dispatch) => {
    dispatch(infoRequest());
    api.get('/auth/repLogin')
      .then(res => (
        dispatch(infoSuccess(res.data[0]))
      ))
      .catch(error => ({
        type: types.INFO_FAILURE_TYPE,
        error,
      }));
  }
);

const actions = {
  info,
  adminInfo,
  repInfo,
  userInfo,
};

export default actions;
