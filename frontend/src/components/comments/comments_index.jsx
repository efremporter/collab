import React from 'react';
import PostCommentForm from './post_comment_form';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.beat._id);
  }

  render() {
    let comments;
    comments = this.props.comments.map((comment, key) => {
      if (comment.beat === this.props.beat._id) {
        return <li><CommentsIndexItem deleteComment={this.props.deleteComment} currentUserId={this.props.currentUserId} beat={this.props.beat} key={key} comment={comment}/></li>
      } else {
        return null;
      }
    })
    return (
      <div>
        <br></br>
        Comments
        <ul>
          {comments}
        </ul>
        <PostCommentForm id={this.props.id} beat={this.props.beat} createComment={this.props.createComment}/>
      </div>
    )
  }
}

export default CommentsIndex