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
    // let comments;
    // if (this.props.comments) {
    //   comments = this.props.comments.map((comment, idx) => {
    //     return <li><CommentsIndexItem beat={this.props.beat} key={idx} comment={comment}/></li>
    //   })
    // } else {
    //   comments = null;
    // }

    let comments;
    comments = this.props.comments.map((comment, idx) => {
      if (comment.beat === this.props.beat._id) {
        return <li><CommentsIndexItem beat={this.props.beat} key={idx} comment={comment}/></li>
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