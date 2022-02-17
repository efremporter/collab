import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment } from "../../actions/comment_actions";
import CommentsIndex from "./comments_index";
import { fetchUser } from "../../actions/user_actions";

const mSTP = state => {
  return {
    comments: Object.values(state.comments),
    currentUserId: state.session.user.id,
    users: state.users
  }
}
const mDTP = dispatch => {
  return {
    fetchComments: beatId => dispatch(fetchComments(beatId)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchAuthor: authorId => dispatch(fetchUser(authorId))
  }
}

export default connect(mSTP, mDTP)(CommentsIndex)