import React from 'react';
import { Link } from 'react-router-dom';
import * as commentcss from './comment.css'

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("here")
    this.props.fetchAuthor(this.props.comment.author)
    this.getHandle = this.getHandle.bind(this)
  }

  parseDate() {
    let dateStr = `${this.props.comment.date}`
    let dateArr = dateStr.split('T')
    let dateFirst = dateArr[0]
    let dateSecond = dateArr[1]
    let dateFirstSplit = dateFirst.split('-')
    let dateSecondSplit = dateSecond.split(':')
    let year = dateFirstSplit.slice(0, 1)
    let month = dateFirstSplit.slice(1, 2)
    let day = dateFirstSplit.slice(2, 3)
    let hour = dateSecondSplit.slice(0, 1)
    let minute = dateSecondSplit.slice(1, 2)
    let AMPM = ""
    if (parseInt(`${hour}`) < 12) {
      AMPM = "AM"
    } else {
      let PMHour = parseInt(`${hour}` - 12)
      hour = `${PMHour}`
      AMPM = "PM"
    }
    return `${hour}:${minute} ${AMPM}  ${month}/${day}/${year[0].slice(2)}`
  } 

  delete() {
    this.props.deleteComment(this.props.comment._id)
  }

  getHandle() {
    if (!this.props.users || !this.props.users[this.props.comment.author]) return null;
    return this.props.users[this.props.comment.author].handle
  }

  render() {
    let button = null
    if (this.props.currentUserId === this.props.comment.author || this.props.beat.user === this.props.currentUserId) {
      button = <button className="profile-delete-but" onClick={this.delete.bind(this)}>Delete</button>
    }
    if (this.props.comment.beat === this.props.beat._id) {
      return (
        <div className="profile-index-beat">
          <div className="profile-index-beat-title">
          <Link to={`/profile/${this.props.comment.author}`}style={{ textDecoration: 'none' }}><h1 className="profile-comment-link">{this.getHandle()}</h1></Link>: {this.props.comment.title}
            {button}
          </div> 
          <div className="profile-index-beat-date">
            {this.parseDate()}
          </div>
          <audio controls>
            <source src={`/api/comments/stream/${this.props.comment.file}`}/>
          </audio>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default CommentsIndexItem