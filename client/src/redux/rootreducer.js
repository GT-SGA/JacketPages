import { combineReducers } from 'redux';

import bills from './bills/reducer';
import studentgovernment from './studentgovernment/reducer';
import auth from './auth/reducer';
import users from './users/reducer';
import organizations from './organizations/reducer';
import budgets from './budgets/reducer';

const rootReducer = combineReducers({
  bills,
  studentgovernment,
  auth,
  users,
  organizations,
  budgets,
});

export default rootReducer;
