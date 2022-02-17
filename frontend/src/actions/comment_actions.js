import * as APIUtil from "../util/comments_util";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';



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

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}

const removeErrors = () => {
  return {
    type: REMOVE_COMMENT_ERRORS,
  }
}

export const fetchComments = beatId => dispatch => {
  return APIUtil.fetchComments(beatId)
    .then( comments => dispatch(receiveComments(comments.data)))
}

export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment)
    .then( comment => dispatch(receiveComment(comment.data)))
    .then(() => dispatch(removeErrors()))
    .catch(err => {
      dispatch(receiveErrors(err.response.data))
    })
}

export const deleteComment = commentId => dispatch => {
  return APIUtil.deleteComment(commentId)
  .then( () => dispatch(removeComment(commentId)))
}
