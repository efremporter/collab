import * as APIUtil from '../util/user_util';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user.data)))
}