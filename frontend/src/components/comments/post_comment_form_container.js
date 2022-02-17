import { connect } from "react-redux";
import PostCommentForm from "./post_comment_form";

const mSTP = state => {
  return {
    errors: Object.values(state.errors.comments)
  }
}

export default connect(mSTP, null)(PostCommentForm)