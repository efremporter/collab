import { RECEIVE_ERRORS } from "../actions/beat_actions";

const BeatErrorsReducer = (state=[], action) => {

  Object.freeze(state);

  switch(action.type) {
    
    case RECEIVE_ERRORS: 
      return action.errors

    default: 
      return state;
  }

}

export default BeatErrorsReducer;