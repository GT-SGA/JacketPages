import { combineReducers } from 'redux';

import bills from './bills/billsreducer';
import users from './users/usersreducer';

const rootReducer = combineReducers({
  bills,
  users,
});

export default rootReducer;
