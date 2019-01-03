import types from './types';

import api from '../../common/api';

const fetchOrganizationsRequest = () => ({
  type: types.FETCH_ORGANIZATIONS_REQUEST,
});

const fetchOrganizations = () => (
  (dispatch) => {
    dispatch(fetchOrganizationsRequest());
    return api.get('/api/organizations')
      .then((res) => {
        const orgs = {};
        res.data.forEach((org) => {
          orgs[org.id] = org;
        });
        dispatch({
          type: types.FETCH_ORGANIZATIONS_SUCCESS,
          payload: orgs,
        });
      })
      .catch(error => dispatch({
        type: types.FETCH_ORGANIZATIONS_FAILURE,
        error,
      }));
  }
);

const addOrganizationRequest = () => ({
  type: types.ADD_ORGANIZATION_REQUEST,
});

const addOrganization = info => (
  (dispatch) => {
    dispatch(addOrganizationRequest());
    return api.post('/api/organizations', info)
      .then(() => dispatch({
        type: types.ADD_ORGANIZATION_SUCCESS,
      }))
      .catch(error => dispatch({
        type: types.ADD_ORGANIZATION_FAILURE,
        error,
      }));
  }
);

const editOrganizationRequest = () => ({
  type: types.EDIT_ORGANIZATION_REQUEST,
});

const editOrganization = (id, info) => (
  (dispatch) => {
    dispatch(editOrganizationRequest());
    return api.patch(`/api/organizations/${id}`, info)
      .then(() => dispatch({
        type: types.EDIT_ORGANIZATION_SUCCESS,
      }))
      .catch(error => dispatch({
        type: types.EDIT_ORGANIZATION_FAILURE,
        error,
      }));
  }
);

const actions = {
  fetchOrganizations,
  addOrganization,
  editOrganization,
};

export default actions;
