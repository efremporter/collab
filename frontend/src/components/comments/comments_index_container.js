import { connect } from "react-redux";
import { fetchComments, createComment } from "../../actions/comment_actions";
import CommentsIndex from "./comments_index";

const mSTP = state => {
  return {
    comments: Object.values(state.comments),
  }
}

const mDTP = dispatch => {
  return {
    fetchComments: beatId => dispatch(fetchComments(beatId)),
    createComment: comment => dispatch(createComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentsIndex)