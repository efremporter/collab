import { RECEIVE_BEATS, RECEIVE_BEAT, REMOVE_BEAT} from "../actions/beat_actions";

const BeatsReducer = (state={}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch(action.type) {

    case RECEIVE_BEATS:
      let hash = {}
      action.beats.forEach(beat => {
        hash[beat._id] = beat;
      })
      return hash;

    case RECEIVE_BEAT:
      nextState[action.beat._id] = action.beat;
      return nextState;

    case REMOVE_BEAT:
      delete nextState[action.beatId]
      return nextState;

    default:
      return state;
  }
}

export default BeatsReducer