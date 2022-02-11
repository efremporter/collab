import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from "../actions/comment_actions"

const CommentsReducer = (state={}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch(action.type) {

    case RECEIVE_COMMENTS:
      action.comments.forEach(comment => {
        nextState[comment._id] = comment;
      })
      return nextState;

    case RECEIVE_COMMENT:
      nextState[action.comment._id] = action.comment;
      return nextState;

    default:
      return state;
  }
}

export default CommentsReducer