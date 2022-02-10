import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BeatErrorsReducer from './beat_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  beats: BeatErrorsReducer
});