import * as APIUtil from '../util/beats_util'
export const RECEIVE_BEATS = 'RECEIVE_BEATS';
export const RECEIVE_BEAT = 'RECEIVE_BEAT';
export const REMOVE_BEAT = 'REMOVE_BEAT';
export const RECEIVE_BEAT_ERRORS = 'RECEIVE_BEAT_ERRORS';
export const REMOVE_BEAT_ERRORS = 'REMOVE_BEAT_ERRORS'

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

const receiveErrors = errors => {
  return {
    type: RECEIVE_BEAT_ERRORS,
    errors
  }
}

const removeErrors = () => {
  return {
    type: REMOVE_BEAT_ERRORS,
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
  .then(() => dispatch(removeErrors()))
  .catch(err => {
    dispatch(receiveErrors(err.response.data))
  })
}

export const deleteBeat = beatId => dispatch => {
  APIUtil.deleteBeat(beatId)
  .then( () => dispatch(removeBeat(beatId)))
}