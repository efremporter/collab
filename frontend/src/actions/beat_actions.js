import * as APIUtil from '../util/beats_util'
export const RECEIVE_BEATS = 'RECEIVE_BEATS';
export const RECEIVE_BEAT = 'RECEIVE_BEAT';
export const REMOVE_BEAT = 'REMOVE_BEAT';

const receiveBeats = beats => {
  return {
    type: RECEIVE_BEATS,
    beats: beats.data
  }
}

const receiveBeat = beat => {
  return {
    type: RECEIVE_BEAT,
    beat: beat.data
  }
}

const removeBeat = beatId => {
  return {
    type: REMOVE_BEAT,
    beatId
  }
}

export const fetchBeats = userId => dispatch => {
  APIUtil.fetchBeats(userId)
  .then(beats => dispatch(receiveBeats(beats)))
}

export const fetchBeat = beatId => dispatch => {
  APIUtil.fetchBeat(beatId)
  .then(beat => dispatch(receiveBeat(beat)))
}

export const fetchAllBeats = () => dispatch => {
  APIUtil.fetchAllBeats()
  .then(beats => dispatch(receiveBeats(beats)))
}

export const createBeat = beat => dispatch => {
  APIUtil.createBeat(beat)
  .then(beat => dispatch(receiveBeat(beat)))
}

export const deleteBeat = beatId => dispatch => {
  APIUtil.deleteBeat(beatId)
  .then( () => dispatch(removeBeat(beatId)))
}