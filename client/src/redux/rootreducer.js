import { combineReducers } from 'redux';

import bills from './bills/reducer';
import studentGovernment from './studentgovernment/reducer';

const rootReducer = combineReducers({
  bills,
  studentGovernment,
});

export default rootReducer;
