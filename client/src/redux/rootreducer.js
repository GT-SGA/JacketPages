import { combineReducers } from 'redux';

import bills from './bills/billsreducer';
import studentgovernment from './studentgovernment/reducer';

const rootReducer = combineReducers({
  bills,
  studentgovernment,
});

export default rootReducer;
