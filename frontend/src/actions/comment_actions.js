import * as APIUtil from "../util/comments_util";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


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

const deleteComment = commentId => {
  return {
    type: DELETE_COMMENT,
    commentId
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

export const removeComment = commentId => dispatch => {
  return APIUtil.deleteComment(commentId)
  .then( comment => dispatch(deleteComment(commentId)))
}
