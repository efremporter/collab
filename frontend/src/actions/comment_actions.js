import * as APIUtil from "../util/comments_util";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const fetchComments = beatId => dispatch => {
  return APIUtil.fetchComments(beatId)
    .then( comments => dispatch(receiveComments(comments.data)))
}

export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment)
    .then( comment => dispatch(receiveComment(comment.data)))
}