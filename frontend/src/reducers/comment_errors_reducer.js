import { RECEIVE_COMMENT_ERRORS, REMOVE_COMMENT_ERRORS } from "../actions/comment_actions";

const CommentErrorsReducer = (state=[], action) => {

  Object.freeze(state);

  switch(action.type) {
    
    case RECEIVE_COMMENT_ERRORS: 
      return action.errors

    case REMOVE_COMMENT_ERRORS:
      return [];

    default: 
      return state;
  }

}

export default CommentErrorsReducer;