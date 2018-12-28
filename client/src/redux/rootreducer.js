import { combineReducers } from 'redux';

import bills from './bills/reducer';
import studentgovernment from './studentgovernment/reducer';
import auth from './auth/reducer';
import users from './users/reducer';

const rootReducer = combineReducers({
  bills,
  studentgovernment,
  auth,
  users,
});

export default rootReducer;
