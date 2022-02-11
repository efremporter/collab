import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import beats from './beats_reducer';
import users from './users_reducer';

const RootReducer = combineReducers({
  session,
  users,
  beats,
  errors
});

export default RootReducer;