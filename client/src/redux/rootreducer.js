import { combineReducers } from 'redux';

import bills from './bills/reducer';
import studentgovernment from './studentgovernment/reducer';

const rootReducer = combineReducers({
  bills,
  studentgovernment,
});

export default rootReducer;
