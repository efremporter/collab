import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment } from "../../actions/comment_actions";
import CommentsIndex from "./comments_index";

const mSTP = state => {
  return {
    comments: Object.values(state.comments),
    currentUserId: state.session.user.id
  }
}

const mDTP = dispatch => {
  return {
    fetchComments: beatId => dispatch(fetchComments(beatId)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  }
}

export default connect(mSTP, mDTP)(CommentsIndex)