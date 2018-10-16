import { combineReducers } from 'redux';

import bills from './bills/billsreducer';

const rootReducer = combineReducers({
  bills,
});

export default rootReducer;
