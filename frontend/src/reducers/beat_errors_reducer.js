import { RECEIVE_BEAT_ERRORS, REMOVE_BEAT_ERRORS } from "../actions/beat_actions";

const BeatErrorsReducer = (state=[], action) => {

  Object.freeze(state);

  switch(action.type) {
    
    case RECEIVE_BEAT_ERRORS: 
      return action.errors

    case REMOVE_BEAT_ERRORS:
      return [];

    default: 
      return state;
  }

}

export default BeatErrorsReducer;