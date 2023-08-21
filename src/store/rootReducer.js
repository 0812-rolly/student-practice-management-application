import { combineReducers } from 'redux';
import userReducer from './user/reducers/reducer';
import practicesReducer from './practices/reducers/reducer';
import locationsReducer from './locations/reducers/reducer';
import requestReducer from './formRequest/reducers/reducer';
import practiceReducer from './practice/reducers/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  practices: practicesReducer,
  locations: locationsReducer,
  request: requestReducer,
  practice: practiceReducer,
});

export default rootReducer;
