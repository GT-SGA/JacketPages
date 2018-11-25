import { combineReducers } from 'redux';

import bills from './bills/reducer';
import studentgovernment from './studentgovernment/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({
  bills,
  studentgovernment,
  auth,
});

export default rootReducer;
