import { RECEIVE_BEATS, RECEIVE_BEAT } from "../actions/beat_actions";

const BeatsReducer = (state={}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch(action.type) {

    case RECEIVE_BEATS:
      return action.beats

    case RECEIVE_BEAT:
      nextState[action.beat.id] = action.beat;
      return nextState;

    default:
      return state;
  }
}

export default BeatsReducer